import React, { useEffect, useState } from 'react';
import './Step.scss';

const Step = ({ step, darkProp, counter }) => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (step === darkProp) {
      setDark(!dark);
    }

    if (step === 0) {
      setDark(false);
    }
  }, [counter]);

  return (
    <div className={`step ${dark && 'dark'}`}>
      <div className='square'></div>
      <div className='numb'>{step + 1}</div>
    </div>
  );
};

export default Step;
