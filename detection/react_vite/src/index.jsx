import { useState } from "react";
import { createRoot } from "react-dom/client";
function App() {
  const [count, setCount] = useState(0);
  return <div onClick={() => setCount(count + 1)}>JS Recon Detection Lab - React (Vite), count: {count}</div>
}
createRoot(document.getElementById("root")).render(<App />);
