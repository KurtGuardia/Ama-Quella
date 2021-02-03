import './Btn.scss';

const Btn = ({ text, clicked, prevIcon, nextIcon }) => {
  return (
    <button className="btn" onClick={clicked}>
      <span>{prevIcon}</span> {text} <span>{nextIcon}</span>
    </button>
  );
};

export default Btn;
