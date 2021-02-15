import React, { useEffect, useState } from 'react';
import Bill from './bill/Bill';
import './Bills.scss';

const Bills = () => {
  const [billType, setBillType] = useState('income');

  return (
    <div className='bill view'>
      <div className='bill__type'>
        <label htmlFor='type'>
          <h2>Tipo:</h2>
        </label>
        <select
          name='type'
          id='type'
          onChange={(e) => setBillType(e.target.value)}
        >
          <option value='income' className='income'>
            Ingreso
          </option>
          <option value='expense' className='expense'>
            Gasto
          </option>
        </select>
      </div>
      <Bill type={billType} />
    </div>
  );
};

export default Bills;
