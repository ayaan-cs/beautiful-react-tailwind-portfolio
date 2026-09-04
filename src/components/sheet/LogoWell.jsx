/* eslint-disable react/prop-types */
export function LogoWell({ src, alt, shape = "wordmark" }) {
  return (
    <div className={`logo-well logo-well--${shape}`}>
      {src ? (
        <img src={src} alt={alt || ""} />
      ) : (
        <span className="logo-well__mark">{alt}</span>
      )}
    </div>
  );
}
