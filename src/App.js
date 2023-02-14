import Header from "./components/Header";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const title = "React Counter Activity - Day 3";

  return (
    <div>
      {/* Pass the setCount function as a prop to Header */}
      <Header title={title} setCount={setCount} count={count} />
      <Routes>
        <Route index="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
