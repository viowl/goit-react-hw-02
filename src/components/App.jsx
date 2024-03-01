import { useState } from "react";
import articles from "../data/articles.json";

console.log(articles);

const App = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  const visibleArticle = articles[selectedIdx];

  console.log(visibleArticle);

  return (
    <div>
      <div>
        <button disabled={selectedIdx === 0} onClick={handlePrev}>
          Prev
        </button>
        <button
          disabled={selectedIdx === articles.length - 1}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <p>
        {selectedIdx + 1}/{articles.length}
      </p>
      <article>
        <h1>{visibleArticle.topic}</h1>
        <p>{visibleArticle.text}</p>
      </article>
    </div>
  );
};

export default App;
