import './Btn.scss';
import { ArrowIcon } from '../../../assets/icons';

const Btn = ({ text, clicked, prevIcon, nextIcon, position }) => {
  return (
    <button className={position ? `btn ${position}` : 'btn'} onClick={clicked}>
      <span>{prevIcon && <ArrowIcon className="rotate" />}</span>
      {text} <span>{nextIcon && <ArrowIcon />}</span>
    </button>
  );
};

export default Btn;
