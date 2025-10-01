import React from "react";
import ReactDOM from "react-dom/client";
import { SpinningText } from "./SpinningText";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "fixed", pointerEvents: "none", zIndex: 9999 }} id="spinning-cursor">
        <SpinningText duration={6} radius={4}>
          {"POOKIESTUDIOS"}
        </SpinningText>
      </div>
      {/* ...rest of your app... */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Cursor follow effect
window.addEventListener("mousemove", (e) => {
  const el = document.getElementById("spinning-cursor");
  if (el) {
    el.style.left = e.clientX + "px";
    el.style.top = e.clientY + "px";
    el.style.transform = "translate(-50%, -50%)";
  }
});
