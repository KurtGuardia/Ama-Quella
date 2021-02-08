import React from 'react';
import Step from './step/Step';
import './Steps.scss';

const Steps = ({ howMany, darkProp, counter }) => {
  let getSteps = () => {
    let steps = [];
    for (let i = 0; i < howMany; i++) {
      let dark = 'dark';
      if (counter === i + 1) {
        dark = '';
      }
      steps.push(
        <>
          <Step step={i} key={i} darkProp={darkProp} counter={counter} />
          <div className={`line ${dark}`} key={i + 1}></div>
        </>
      );
    }
    return steps;
  };

  return <div className='steps'>{getSteps(howMany)}</div>;
};

export default Steps;
