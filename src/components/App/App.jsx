import { useEffect, useState } from "react";

import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Notification from "../Notification/Notification.jsx";

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

  const updateFeedback = (feedbackType) => {
    setClicks({ ...clicks, [feedbackType]: clicks[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setClicks(defaultRating);
  };

  useEffect(() => {
    window.localStorage.setItem("rating", JSON.stringify(clicks));
  });

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const isAnyFeedback = totalFeedback > 0;
  const percentPosotivFeedback = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );

  return (
    <div>
      <Description />
      <Options
        onGood={() => updateFeedback("good")}
        onNeutral={() => updateFeedback("neutral")}
        onBad={() => updateFeedback("bad")}
        onReset={resetFeedback}
        isAnyFeedback={isAnyFeedback}
      />
      {isAnyFeedback && (
        <Feedback
          good={clicks.good}
          neutral={clicks.neutral}
          bad={clicks.bad}
          total={totalFeedback}
          percent={percentPosotivFeedback}
        />
      )}

      {!isAnyFeedback && <Notification />}
    </div>
  );
};

export default App;
