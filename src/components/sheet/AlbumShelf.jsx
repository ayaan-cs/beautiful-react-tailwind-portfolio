import { useMemo, useState } from "react";
import {
  ALBUMS,
  ALBUM_SHELF,
  isoWeekKey,
  pickAlbums,
  weeklyAlbums,
} from "../../data/portfolio";

const STORAGE_PREFIX = "sheet-albums:";

function signature(albums) {
  return albums
    .map((album) => album.title)
    .slice()
    .sort()
    .join("|");
}

function loadOverride(weekKey) {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_PREFIX + weekKey);
    if (!raw) return null;
    const titles = JSON.parse(raw);
    if (!Array.isArray(titles) || titles.length !== ALBUM_SHELF) return null;
    const byTitle = new Map(ALBUMS.map((album) => [album.title, album]));
    const picked = titles.map((title) => byTitle.get(title)).filter(Boolean);
    return picked.length === ALBUM_SHELF ? picked : null;
  } catch {
    return null;
  }
}

function saveOverride(weekKey, albums) {
  try {
    window.localStorage.setItem(
      STORAGE_PREFIX + weekKey,
      JSON.stringify(albums.map((album) => album.title))
    );
  } catch {
    /* private mode / quota */
  }
}

function initialShelf(weekKey) {
  return loadOverride(weekKey) || weeklyAlbums(ALBUMS, ALBUM_SHELF);
}

export function AlbumShelf() {
  const weekKey = useMemo(() => isoWeekKey(), []);
  const [albums, setAlbums] = useState(() => initialShelf(weekKey));

  function randomize() {
    const current = signature(albums);
    let next = pickAlbums(ALBUMS, ALBUM_SHELF, `${weekKey}·${Date.now()}·${Math.random()}`);
    if (signature(next) === current && ALBUMS.length > ALBUM_SHELF) {
      next = pickAlbums(ALBUMS, ALBUM_SHELF, `${weekKey}·${Date.now()}·retry`);
    }
    setAlbums(next);
    saveOverride(weekKey, next);
  }

  return (
    <div className="taste-panel">
      <div className="taste-panel__bar">
        <span>Detail — Favorite albums</span>
        <span className="taste-panel__week">{weekKey}</span>
      </div>
      <div className="covers">
        {albums.map((album) => (
          <div key={album.src}>
            <img src={album.src} alt={album.title} />
            <div>{album.title}</div>
            <div className="year">{album.meta}</div>
          </div>
        ))}
      </div>
      <div className="taste-panel__foot taste-panel__albums-foot">
        <span>Rotates weekly · not concrete</span>
        <button type="button" className="album-shuffle" onClick={randomize}>
          Randomize
        </button>
      </div>
    </div>
  );
}
