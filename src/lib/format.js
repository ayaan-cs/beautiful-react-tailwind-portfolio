export const stateLabel = (state) => {
  if (state === "live") return "Live repo";
  if (state === "professional") return "Professional";
  return "In development";
};

export const stateClass = (state) => {
  if (state === "live") return "state-live";
  if (state === "professional") return "state-professional";
  return "state-in-development";
};
