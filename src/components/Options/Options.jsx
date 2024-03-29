import css from "./Options.module.css";

const Options = ({ onGood, onNeutral, onBad, onReset, isAnyFeedback }) => {
  return (
    <div>
      <ul className={css.list}>
        <li>
          <button onClick={onGood}>Good</button>
        </li>
        <li>
          <button onClick={onNeutral}>Neutral</button>
        </li>
        <li>
          <button onClick={onBad}>Bad</button>
        </li>
        {isAnyFeedback && (
          <li>
            <button onClick={onReset}>Reset</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Options;
