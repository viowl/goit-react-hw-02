import { useState } from "react";

import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";

const App = () => {
  const defaultRating = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const getInitialRating = () => {
    const savedRating = window.localStorage.getItem("rating");
    return savedRating !== null ? JSON.parse(savedRating) : defaultRating;
  };

  const [clicks, setClicks] = useState(getInitialRating());

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div>
      <Description />
      <Options />
      <Feedback />
    </div>
  );
};

export default App;
