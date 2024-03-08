const Feedback = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const percent = (good / total) * 100;
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {percent}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
