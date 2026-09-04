/* eslint-disable react/prop-types */
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

const SRC = "/audio/timbu.mp3";
const COVER = "/audio/timbu-cover.jpg";
const THRESH = 0.42;
const VOLUME = 0.3;
const DEG_PER_MS = 0.045;

function pointerAngle(el, clientX, clientY) {
  const r = el.getBoundingClientRect();
  return Math.atan2(clientY - (r.top + r.height / 2), clientX - (r.left + r.width / 2));
}

function unwrap(delta) {
  let d = delta;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return d;
}

export const Disc = forwardRef(function Disc({ reduced, onDragChange, onCue }, ref) {
  const [playing, setPlaying] = useState(false);
  const [angle, setAngle] = useState(0);
  const [dragging, setDragging] = useState(false);
  const rootRef = useRef(null);
  const audioRef = useRef(null);
  const dragRef = useRef(null);
  const angleRef = useRef(0);
  const playingRef = useRef(false);
  const draggingRef = useRef(false);

  playingRef.current = playing;
  draggingRef.current = dragging;

  useImperativeHandle(ref, () => ({
    play: () => setPlaying(true),
    stop: () => setPlaying(false),
    toggle: () => setPlaying((on) => !on),
  }));

  useEffect(() => {
    const audio = new Audio(SRC);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = VOLUME;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;
    if (playing) {
      const play = audio.play();
      if (play && typeof play.catch === "function") {
        play.catch(() => setPlaying(false));
      }
    } else {
      audio.pause();
    }
    return undefined;
  }, [playing]);

  useEffect(() => {
    if (!playing || reduced || dragging) return undefined;
    let last = performance.now();
    let raf = 0;
    const tick = (now) => {
      const dt = now - last;
      last = now;
      angleRef.current = (angleRef.current + dt * DEG_PER_MS) % 360;
      setAngle(angleRef.current);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, reduced, dragging]);

  useEffect(() => {
    const move = (e) => {
      const drag = dragRef.current;
      const el = rootRef.current;
      if (!drag || !el) return;
      const next = pointerAngle(el, e.clientX, e.clientY);
      const delta = unwrap(next - drag.last);
      drag.last = next;
      drag.acc += delta;
      angleRef.current = (angleRef.current + (delta * 180) / Math.PI) % 360;
      setAngle(angleRef.current);
      if (drag.acc > THRESH && !playingRef.current) {
        setPlaying(true);
        onCue?.(true);
      } else if (drag.acc < -THRESH && playingRef.current) {
        setPlaying(false);
        onCue?.(false);
      }
    };
    const up = () => {
      if (!dragRef.current) return;
      dragRef.current = null;
      draggingRef.current = false;
      setDragging(false);
      onDragChange?.(false);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [onCue, onDragChange]);

  const onPointerDown = (e) => {
    const el = rootRef.current;
    if (!el) return;
    e.preventDefault();
    dragRef.current = { last: pointerAngle(el, e.clientX, e.clientY), acc: 0 };
    draggingRef.current = true;
    setDragging(true);
    onDragChange?.(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* capture is optional */
    }
  };

  return (
    <div className={playing ? "hero-disc is-on" : "hero-disc"}>
      <button
        ref={rootRef}
        type="button"
        className={dragging ? "disc is-dragging" : "disc"}
        style={{ transform: `rotate(${angle}deg)` }}
        aria-label="Timbu. Turn clockwise to play, counterclockwise to stop."
        aria-pressed={playing}
        onPointerDown={onPointerDown}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setPlaying((on) => !on);
          }
        }}
      >
        <span className="disc__platter">
          <img src={COVER} alt="" draggable="false" />
          <i className="disc__groove disc__groove--a" />
          <i className="disc__groove disc__groove--b" />
          <i className="disc__hole" />
        </span>
      </button>
      <span className="hero-disc__cap">
        Side A · {playing ? "playing" : "clockwise to play"}
      </span>
    </div>
  );
});
