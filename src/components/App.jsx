import { useState } from "react";

const App = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  return (
    <div>
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <p>0/0</p>
      <article>
        <h1>Topic</h1>
        <p>Text</p>
      </article>
    </div>
  );
};

export default App;
