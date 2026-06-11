import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  const getData = async () => {
    const res = await fetch("http://localhost:5000/hello");
    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div>
      <h1>Quantum App</h1>

      <button onClick={getData}>
        Get Backend Data
      </button>

      <h2>{msg}</h2>
    </div>
  );
}

export default App;