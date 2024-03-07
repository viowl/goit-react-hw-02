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

  return (
    <div>
      <Description />
      <Options />
      <Feedback />
    </div>
  );
};

export default App;
