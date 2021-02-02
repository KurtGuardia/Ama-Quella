import React, { useEffect, useRef, useState } from 'react';
import './_Tutorial.scss';
import sprite from '../../assets/icons/sprite.svg';

const Tutorial = () => {
  let [counter, setCounter] = useState(1);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);
  const five = useRef(null);
  const twoTop = useRef(null);
  const threeTop = useRef(null);
  const fourTop = useRef(null);
  const fiveTop = useRef(null);
  const nextBtn = useRef(null);
  const prevBtn = useRef(null);

  useEffect(() => {
    console.log('contador: ' + counter);
  }, [counter]);

  const prev = () => {
    if (counter === 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
    }
    if (counter === 2) {
      two.current.classList.add('dark');
      twoTop.current.classList.add('dark');
    } else if (counter === 3) {
      three.current.classList.add('dark');
      threeTop.current.classList.add('dark');
    } else if (counter === 4) {
      four.current.classList.add('dark');
      fourTop.current.classList.add('dark');
    } else if (counter === 5) {
      five.current.classList.add('dark');
      fiveTop.current.classList.add('dark');
    }
  };

  const next = () => {
    if (counter === 5) {
      setCounter(5);
    } else {
      setCounter(counter + 1);
    }
    if (counter === 1) {
      two.current.classList.remove('dark');
      twoTop.current.classList.remove('dark');
    } else if (counter === 2) {
      three.current.classList.remove('dark');
      threeTop.current.classList.remove('dark');
    } else if (counter === 3) {
      four.current.classList.remove('dark');
      fourTop.current.classList.remove('dark');
    } else if (counter === 4) {
      five.current.classList.remove('dark');
      fiveTop.current.classList.remove('dark');
    }
  };

  useEffect(() => {
    if (counter === 1) {
      prevBtn.current.setAttribute('disabled', true);
    } else if (counter >= 2) {
      prevBtn.current.removeAttribute('disabled');
    }
    if (counter === 5) {
      nextBtn.current.setAttribute('disabled', true);
    } else if (counter <= 4) {
      nextBtn.current.removeAttribute('disabled');
    }
  }, [counter]);

  return (
    <div className='tutorial'>
      <div className='tutorial__top'>
        <div className='tutorial__top--number'>
          <div className='square'></div>
          <div className='numb'>1</div>
        </div>
        <div className='tutorial__top--number dark' ref={twoTop}>
          <div className='square'></div>
          <div className='numb'>2</div>
        </div>
        <div className='tutorial__top--number dark' ref={threeTop}>
          <div className='square'></div>
          <div className='numb'>3</div>
        </div>
        <div className='tutorial__top--number dark' ref={fourTop}>
          <div className='square'></div>
          <div className='numb'>4</div>
        </div>
        <div className='tutorial__top--number dark' ref={fiveTop}>
          <div className='square'></div>
          <div className='numb'>5 </div>
        </div>
      </div>
      <div className='tutorial__icons'>
        <div className={`tutorial__icons--icon down`}>
          <svg>
            <use href={sprite + '#user-icon'} />
          </svg>
          <p>Inicia sesión</p>
        </div>
        <div className={`tutorial__icons--icon dark`} ref={two}>
          <svg>
            <use href={sprite + '#declare'} />
          </svg>
          <p>Ingresa a Declarar</p>
        </div>
        <div className={`tutorial__icons--icon down dark`} ref={three}>
          <svg>
            <use href={sprite + '#coins'} />
          </svg>
          <p>Selecciona Ingreso o Gasto</p>
        </div>
        <div className={`tutorial__icons--icon dark`} ref={four}>
          <svg>
            <use href={sprite + '#fill'} />
          </svg>
          <p>Rellena el formulario</p>
        </div>
        <div className={`tutorial__icons--icon down dark`} ref={five}>
          <svg>
            <use href={sprite + '#done'} />
          </svg>
          <p>Pulsa Guardar y continúa con otra factura</p>
        </div>
      </div>
      <div className='tutorial__buttons'>
        <button
          className='tutorial__buttons--button'
          onClick={prev}
          ref={prevBtn}
        >
          <svg>
            <use href={sprite + '#arrow'} />
          </svg>
          <p>Anterior</p>
        </button>
        <button
          className='tutorial__buttons--button'
          onClick={next}
          ref={nextBtn}
        >
          <p>Siguiente</p>
          <svg>
            <use href={sprite + '#arrow'} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Tutorial;
