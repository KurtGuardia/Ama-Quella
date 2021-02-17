import React, { useState } from 'react';
import Bill from './bill/Bill';
import './Bills.scss';
import { Steps, Btn } from '../../components/UI';
import { IncomeIcon, ExpenseIcon } from '../../assets/icons';

const Bills = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [billType, setBillType] = useState(null);
  const [dark, setDark] = useState(0);

  const prev = () => {
    setCurrentStep(currentStep - 1);
    if (currentStep === 1) {
      setDark(1);
    } else if (currentStep === 2) {
      setDark(1);
    } else if (currentStep === 3) {
      setDark(2);
    } else if (currentStep === 4) {
      setDark(3);
    } else if (currentStep === 5) {
      setDark(4);
    }
  };

  const next = () => {
    setCurrentStep(currentStep + 1);
    if (currentStep === 1) {
      setDark(1);
    } else if (currentStep === 2) {
      setDark(2);
    } else if (currentStep === 3) {
      setDark(3);
    } else if (currentStep === 4) {
      setDark(4);
    } else if (currentStep === 5) {
      setDark(5);
    }
  };

  return (
    <div className='bill view'>
      <Steps howMany={3} counter={currentStep} darkProp={dark} />
      {currentStep === 1 && (
        <div className='bill__type'>
          <div className='bill__type--types'>
            <h2>Selecciona el tipo de factura</h2>
            <div>
              <div
                className='type income'
                onClick={() => setBillType('Ingreso')}
              >
                <IncomeIcon />
                <span>Ingreso</span>
              </div>
              {billType && <h3>{billType}</h3>}
              <div
                className='type expense'
                onClick={() => setBillType('Gasto')}
              >
                <ExpenseIcon />
                <span>Gasto</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && <Bill type={billType} />}

      <div className='tutorial__buttons'>
        <Btn
          text='Anterior'
          clicked={prev}
          prevIcon={true}
          position='abs-bottom-left'
          disabled={currentStep === 1 ? true : false}
        />
        {currentStep === 1 && (
          <Btn
            text='Siguiente'
            clicked={next}
            nextIcon={true}
            position='abs-bottom-right'
            disabled={billType === null}
          />
        )}
        {currentStep === 2 && (
          <Btn
            text='Siguiente'
            clicked={next}
            nextIcon={true}
            position='abs-bottom-right'
            disabled={true}
          />
        )}
      </div>
    </div>
  );
};

export default Bills;
