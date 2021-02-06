import React, { useEffect, useState } from 'react';
import sprite from '../../../assets/icons/sprite.svg';

const Icon = ({ index, icon, counter, darkProp }) => {
  const [dark, setDark] = useState(true);
  console.log(dark);

  useEffect(() => {
    if (index === darkProp) setDark(!dark);

    if (index === 0) {
      setDark(false);
    }
  }, [counter]);

  return (
    <div
      className={`tutorial__icons--icon ${!(index % 2 === 0) ? 'down' : ''} ${
        dark && 'dark'
      }`}
    >
      <svg>
        <use href={sprite + icon} />
      </svg>
      <p>Inicia sesión</p>
    </div>
  );
};

export default Icon;
