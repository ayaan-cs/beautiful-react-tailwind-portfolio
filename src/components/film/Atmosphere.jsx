import { useMotionPref } from "@/context/MotionContext";

export const GrainOverlay = () => {
  const { reduced } = useMotionPref();
  return <div className={`film-grain ${reduced ? "" : "animate-grain"}`} aria-hidden="true" />;
};

export const LightLeak = () => {
  const { reduced } = useMotionPref();
  return (
    <>
      <div
        className={`light-leak ${reduced ? "" : "animate-leak-a"}`}
        style={{
          top: "-12%",
          right: "-8%",
          width: "48vw",
          height: "48vh",
          background:
            "radial-gradient(ellipse at center, rgba(232,72,44,0.28), rgba(201,161,90,0.1), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className={`light-leak ${reduced ? "" : "animate-leak-b"}`}
        style={{
          bottom: "-18%",
          left: "-10%",
          width: "42vw",
          height: "40vh",
          background:
            "radial-gradient(ellipse at center, rgba(201,161,90,0.2), rgba(232,72,44,0.08), transparent 72%)",
        }}
        aria-hidden="true"
      />
    </>
  );
};
