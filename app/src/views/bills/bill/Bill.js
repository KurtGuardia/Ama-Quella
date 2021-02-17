import React, { useState } from 'react';
import {} from 'uuid';
import Btn from '../../../components/UI/btn/Btn';
import ExpOpt from './selectOptions/expenseSelectOptions';
import IncOpt from './selectOptions/incomeSelectoptions';

const Bill = ({ type }) => {
  const [bill, setBill] = useState({
    fecha: '',
    tipo: '',
    NIF: '',
    razonSocial: '',
    direccion: '',
    concepto: '',
    total: null,
    base: null,
    IRPF: null,
    IVA: null,
    retIRPF: null,
    retIVA: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submited', bill);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setBill({ ...bill, [name]: value });
  };

  return (
    <form className={`bill__form ${type}`} onSubmit={handleSubmit}>
      <div className='row'>
        <label htmlFor='fecha'>Fecha:</label>
        <input
          type='date'
          placeholder='../../..'
          name='fecha'
          id='fecha'
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor='expense-type'>Tipo:</label>
        <select
          name='expense-type'
          id='expense-type'
          defaultValue='---'
          onChange={(e) => handleChange(e)}
        >
          {type === 'Ingreso' ? <IncOpt /> : <ExpOpt />}
        </select>{' '}
        {type === 'Ingreso' && (
          <input
            type='text'
            placeholder='Especificar otro ingreso'
            className='hidden'
          />
        )}
        <label htmlFor='NIF'>NIF:</label>
        <input
          type='text'
          id='NIF'
          name='NIF'
          className='NIF'
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className='row'>
        <label htmlFor='razon-social' className='razon-social'>
          Razón Social
        </label>
        <input
          type='text'
          id='razon-social'
          name='razon-social'
          onChange={(e) => handleChange(e)}
          className='razon-social'
        />
        <label htmlFor='address'>Dirección</label>
        <input
          type='text'
          id='address'
          name='address'
          onChange={(e) => handleChange(e)}
          className='address'
        />
      </div>{' '}
      <div className='row'>
        <label htmlFor='concepto'>Concepto</label>
        <input type='text' className='concept' id='concepto' name='concepto' />
      </div>
      <div className='row'>
        <label htmlFor='IVA'>%IVA:</label>
        <select
          defaultValue='---'
          id='IVA'
          name='IVA'
          onChange={(e) => handleChange(e)}
        >
          <option value='---' disabled='disabled'>
            ---
          </option>
          <option value='21'>21%</option>
          <option value='10'>10%</option>
          <option value='74'>4%</option>
        </select>
        <label htmlFor='IRPF'>%IRPF:</label>
        <select
          defaultValue='---'
          id='IRPF'
          name='IRPF'
          onChange={(e) => handleChange(e)}
        >
          <option value='---' disabled='disabled'>
            ---
          </option>
          <option value='19'>19%</option>
          <option value='15'>15%</option>
          <option value='7'>7%</option>
          <option value='2'>2%</option>
        </select>
        <label htmlFor='BI'>Base Imponible:</label>
        <span className='BI'></span>
        <label htmlFor='Total'>Total:</label>
        <input
          type='number'
          id='Total'
          className='Total'
          name='Total'
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className='row'>
        <small className='retencion'>Retención IVA:</small>
        <span className='retencion'></span>
        <small className='retencion'>Retención IRPF:</small>
        <span className='retencion'></span>
      </div>
      <div className='row'>
        <Btn type='submit' text={'Guardar'} />
      </div>
    </form>
  );
};

export default Bill;
