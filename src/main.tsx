import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// NOTE: The game itself is fully self-contained in index.html (inline CSS + JS,
// zero external requests) so it survives preview-environment resets and even
// runs when opened directly from disk. This React entry exists only to keep
// the standard Vite pipeline valid.
const rootEl = document.getElementById("root");
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<App />);
}
