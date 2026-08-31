/**
 * Ambient background: layered aurora blobs + a slowly drifting dot grid.
 * Purely decorative and fixed behind all content. All motion is CSS-driven
 * and disabled under prefers-reduced-motion (see styles.css).
 */
export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-aurora bg-aurora-1" />
      <div className="bg-aurora bg-aurora-2" />
      <div className="bg-aurora bg-aurora-3" />
      <div className="bg-noise" />
    </div>
  )
}
