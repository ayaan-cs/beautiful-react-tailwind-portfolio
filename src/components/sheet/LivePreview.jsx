import { PAW_HAVEN_URL } from "../../data/portfolio";

export function LivePreview() {
  return (
    <div className="live-preview">
      <div className="live-preview__kicker">Dwg. A-01 · live preview</div>
      <div className="live-preview__frame">
        <iframe
          src={PAW_HAVEN_URL}
          title="Paw Haven website, live preview"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="live-preview__note">
        <span>Live embed — pawhavenpetsitting.com</span>
        <a href={PAW_HAVEN_URL} target="_blank" rel="noopener noreferrer">
          Open live ↗
        </a>
      </div>
    </div>
  );
}
