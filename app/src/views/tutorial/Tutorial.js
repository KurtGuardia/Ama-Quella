import React from 'react';
import './_Tutorial.scss';
import sprite from '../../assets/icons/sprite.svg';

const Tutorial = () => {
  return (
    <div className='tutorial'>
      <div className='tutorial__top'>
        <div className='tutorial__top--number one'>
          <div className='square'></div>
          <div className='numb'>1</div>
        </div>
        <div className='tutorial__top--number two '>
          <div className='square'></div>
          <div className='numb'>2</div>
        </div>
        <div className='tutorial__top--number three'>
          <div className='square'></div>
          <div className='numb'>3</div>
        </div>
        <div className='tutorial__top--number four'>
          <div className='square'></div>
          <div className='numb'>4</div>
        </div>
        <div className='tutorial__top--number five'>
          <div className='square'></div>
          <div className='numb'>5 </div>
        </div>
      </div>
      <div className='tutorial__icons'>
        <div className='tutorial__icons--icon one down'>
          <svg>
            <use href={sprite + '#user-icon'} />
          </svg>
        </div>
        <div className='tutorial__icons--icon two'>
          <svg>
            <use href={sprite + '#declare'} />
          </svg>
        </div>
        <div className='tutorial__icons--icon three down'>
          <svg>
            <use href={sprite + '#coins'} />
          </svg>
        </div>
        <div className='tutorial__icons--icon four'>
          <svg>
            <use href={sprite + '#fill'} />
          </svg>
        </div>
        <div className='tutorial__icons--icon five down'>
          <svg>
            <use href={sprite + '#done'} />
          </svg>
        </div>
      </div>
      <div className='tutorial__buttons'>
        <div className='tutorial__buttons--button'>
          <svg>
            <use href={sprite + '#arrow'} />
          </svg>
          <p>Volver</p>
        </div>
        <div className='tutorial__buttons--button'>
          <p>Siguiente</p>{' '}
          <svg>
            <use href={sprite + '#arrow'} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
