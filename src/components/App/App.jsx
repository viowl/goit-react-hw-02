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
    return savedRating !== null ? JSON.parse(savedRating) : 0;
  };

  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClicks = (key) => {
    setClicks({ ...clicks, [key]: clicks[key] + 1 });
  };

  return (
    <div>
      <Description />
      <Options
        onGood={() => handleClicks("good")}
        onNeutral={() => handleClicks("neutral")}
        onBad={() => handleClicks("bad")}
      />
      <Feedback good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} />
    </div>
  );
};

export default App;
