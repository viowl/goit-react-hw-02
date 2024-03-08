const Options = ({ onGood, onNeutral, onBad }) => {
  return (
    <div>
      <ul>
        <li>
          <button onClick={onGood}>Good</button>
        </li>
        <li>
          <button onClick={onNeutral}>Neutral</button>
        </li>
        <li>
          <button onClick={onBad}>Bad</button>
        </li>
        <li>
          <button>Reset</button>
        </li>
      </ul>
    </div>
  );
};

export default Options;
