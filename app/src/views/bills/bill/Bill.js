import React from 'react';
import Btn from '../../../components/UI/btn/Btn';
import ExpOpt from './selectOptions/expenseSelectOptions';
import IncOpt from './selectOptions/incomeSelectoptions';

const Bill = ({ type }) => {
  const dummyFn = () => {
    console.log();
  };

  return (
    <form className={`bill__form ${type}`}>
      <div className='row'>
        <label>Fecha:</label>
        <input type='date' placeholder='../../..' onChange={dummyFn} required />
        <label htmlFor='expense-type'>Tipo:</label>
        <select
          name='expense-type'
          id='expense-type'
          value='---'
          onChange={dummyFn}
        >
          {type === 'income' ? <IncOpt /> : <ExpOpt />}
        </select>{' '}
        {type === 'income' && (
          <input
            type='text'
            placeholder='Especificar otro ingreso'
            className='hidden'
          />
        )}
        <label htmlFor='NIF'>NIF:</label>
        <input type='text' id='NIF' className='NIF' />
      </div>
      <div className='row'>
        <label htmlFor='razon-social' className='razon-social'>
          Razón Social
        </label>
        <input type='text' id='razon-social' className='razon-social' />
        <label htmlFor='address'>Dirección</label>
        <input type='text' id='address' className='address' />
      </div>{' '}
      <div className='row'>
        <label htmlFor='concept'>Concepto</label>
        <input type='text' className='concept' id='concept' />
      </div>
      <div className='row'>
        <label htmlFor='IVA'>%IVA:</label>
        <select name='IVA' id='IVA' value='---' onChange={dummyFn}>
          <option disabled='disabled'>---</option>
          <option>21%</option>
          <option>10%</option>
          <option>4%</option>
        </select>
        <label htmlFor='IRPF'>%IRPF:</label>
        <select name='IRPF' id='IRPF' value='---' onChange={dummyFn}>
          <option disabled='disabled'>---</option>
          <option>19%</option>
          <option>15%</option>
          <option>7%</option>
          <option>2%</option>
        </select>
        <label htmlFor='BI'>Base Imponible:</label>
        <span className='BI'></span>
        <label htmlFor='Total'>Total:</label>
        <input type='number' id='Total' className='Total' />
      </div>
      <div className='row'>
        <small className='retencion'>Retención IVA:</small>
        <span className='retencion'></span>
        <small className='retencion'>Retención IRPF:</small>
        <span className='retencion'></span>
      </div>
      <div className='row'>
        <Btn type={'submit'} text={'Guardar'} />
      </div>
    </form>
  );
};

export default Bill;
