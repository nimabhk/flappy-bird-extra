/**
 * The playable game lives entirely inside index.html as a single
 * self-contained build (inline CSS + JS, no external requests).
 * This component is a safe fallback so the standard Vite/React entry
 * stays valid if anything ever mounts it.
 */
export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#16090f",
        color: "#ffeeda",
        fontFamily: "Trebuchet MS, Verdana, sans-serif",
        textAlign: "center",
        padding: 24,
      }}
    >
      <div>
        <h1
          style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            fontSize: "clamp(30px, 7vw, 52px)",
            color: "#ffc857",
            letterSpacing: "0.02em",
            margin: 0,
          }}
        >
          EMBERWING
        </h1>
        <p style={{ opacity: 0.75, marginTop: 8 }}>
          The game is served from the self-contained <code>index.html</code>.
        </p>
      </div>
    </div>
  );
}
