/* eslint-disable react/prop-types */
export function LogoWell({ src, alt }) {
  return (
    <div className="logo-well">
      {src ? (
        <img src={src} alt={alt || ""} />
      ) : (
        <span className="logo-well__mark">{alt}</span>
      )}
    </div>
  );
}
