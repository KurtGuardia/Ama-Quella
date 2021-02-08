import React, { useEffect, useState } from 'react';
import sprite from '../../../assets/icons/sprite.svg';
import './Icon.scss';

const Icon = ({ index, icon, counter, darkProp, text, totalIcons }) => {
  const [dark, setDark] = useState(true);
  const iconWidth = 100 / totalIcons + '%';

  useEffect(() => {
    if (index === darkProp) setDark((dark) => !dark);

    if (index === 0) {
      setDark(false);
    }
  }, [counter, index, darkProp]);

  return (
    <div
      className={`icon ${!(index % 2 === 0) ? 'down' : ''} ${dark && 'dark'}`}
      style={{ width: iconWidth }}
    >
      <svg>
        <use href={sprite + icon} />
      </svg>
      <p>{text[index]}</p>
    </div>
  );
};

export default Icon;
