const Feedback = ({ good, neutral, bad, total, percent }) => {
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
