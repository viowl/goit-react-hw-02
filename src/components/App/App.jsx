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

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    console.log(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    console.log(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    console.log(bad + 1);
  };

  return (
    <div>
      <Description />
      <Options
        onGood={handleGood}
        onNeutral={handleNeutral}
        onBad={handleBad}
      />
      <Feedback good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
