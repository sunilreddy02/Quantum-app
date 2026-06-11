import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  const getData = async () => {
    try {
      const res = await fetch(
        "https://quantum-app-backend.onrender.com/hello"
      );

      const data = await res.json();
      setMsg(data.message);
    } catch (error) {
      console.error(error);
      setMsg("Backend connection failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Quantum App</h1>

      <button onClick={getData}>
        Get Backend Data
      </button>

      <h2>{msg}</h2>
    </div>
  );
}

export default App;