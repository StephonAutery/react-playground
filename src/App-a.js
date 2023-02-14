import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const title = "React Counter Activity - Day 3";

  return (
    <>
      {/* Pass the setCount function as a prop to Header */}
      <Header title={title} setCount={setCount} count={count} />
      <Main />

      <Footer title={title} />
    </>
  );
}

export default App;
