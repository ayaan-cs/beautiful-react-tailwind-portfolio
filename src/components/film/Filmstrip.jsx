import { useMotionPref } from "@/context/MotionContext";

export const Filmstrip = () => {
  const { reduced } = useMotionPref();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.14]" aria-hidden="true">
      <div
        className="absolute left-1/2 top-0 h-[200%] w-[min(92px,18vw)] -translate-x-1/2"
        style={{
          background:
            "repeating-linear-gradient(to bottom, #1a1410 0 46px, transparent 46px 52px), linear-gradient(#2a221c, #2a221c)",
          transform: reduced ? "translateX(-50%)" : undefined,
          animation: reduced ? "none" : "strip-drift 28s linear infinite",
        }}
      >
        <div
          className="absolute inset-y-0 left-0 w-3"
          style={{
            background:
              "repeating-linear-gradient(to bottom, transparent 0 10px, #ede6da 10px 16px, transparent 16px 28px)",
            opacity: 0.35,
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-3"
          style={{
            background:
              "repeating-linear-gradient(to bottom, transparent 0 10px, #ede6da 10px 16px, transparent 16px 28px)",
            opacity: 0.35,
          }}
        />
      </div>
      <style>{`
        @keyframes strip-drift {
          from { transform: translate(-50%, 0); }
          to { transform: translate(-50%, -50%); }
        }
      `}</style>
    </div>
  );
};
