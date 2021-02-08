import React, { useState } from 'react';
import './_Tutorial.scss';
import Btn from '../../components/UI/btn/Btn';
import Icon from '../../components/UI/icons/Icon';
import Steps from '../../components/UI/steps/Steps';

const Tutorial = () => {
  let [counter, setCounter] = useState(1);
  const [dark, setDark] = useState(0);
  const icons = ['#user-icon', '#declare', '#coins', '#fill', '#done'];

  const prev = () => {
    if (counter === 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
    }
    if (counter === 1) {
      setDark(1);
    } else if (counter === 2) {
      setDark(1);
    } else if (counter === 3) {
      setDark(2);
    } else if (counter === 4) {
      setDark(3);
    } else if (counter === 5) {
      setDark(4);
    }
    // if (counter === 2) {
    //   two.current.classList.add('dark');
    //   twoTop.current.classList.add('dark');
    // } else if (counter === 3) {
    //   three.current.classList.add('dark');
    //   threeTop.current.classList.add('dark');
    // } else if (counter === 4) {
    //   four.current.classList.add('dark');
    //   fourTop.current.classList.add('dark');
    // } else if (counter === 5) {
    //   five.current.classList.add('dark');
    //   fiveTop.current.classList.add('dark');
    // }
  };

  const next = () => {
    if (counter === 5) {
      setCounter(5);
    } else {
      setCounter(counter + 1);
    }
    if (counter === 1) {
      setDark(1);
    } else if (counter === 2) {
      setDark(2);
    } else if (counter === 3) {
      setDark(3);
    } else if (counter === 4) {
      setDark(4);
    } else if (counter === 5) {
      setDark(5);
    }
  };

  const text = [
    'Iniciar sesión',
    'Ingresar a Declarar',
    'Selecciona Ingreso o Gasto',
    'Rellena el formulario',
    'Pulsa guardar y continúa...',
  ];

  return (
    <div className='tutorial view'>
      <Steps howMany={5} darkProp={dark} counter={counter} />
      <div className='tutorial__icons'>
        {icons.map((icon, index) => (
          <Icon
            key={index}
            index={index}
            icon={icon}
            counter={counter}
            darkProp={dark}
            text={text}
            totalIcons={icons.length}
          />
        ))}
      </div>
      <div className='tutorial__buttons'>
        <Btn
          text='Anterior'
          clicked={prev}
          prevIcon={true}
          position='abs-bottom-left'
          disabled={counter === 1 ? true : false}
        />
        <Btn
          text='Siguiente'
          clicked={next}
          nextIcon={true}
          position='abs-bottom-right'
          disabled={counter === 5 ? true : false}
        />
      </div>
    </div>
  );
};

export default Tutorial;
