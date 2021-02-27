import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Btn from '../../../components/UI/btn/Btn';
import { addIncBill } from '../../../store/actions/billsActions';
import { addToTrimester } from '../../../store/reducers/modelsReducer';
import ExpOpt from './selectOptions/expenseSelectOptions';
import IncOpt from './selectOptions/incomeSelectoptions';

const Bill = ({ type }) => {
  const uid = useSelector((state) => state.firebase.auth.uid);
  const dispatch = useDispatch();
  const [bill, setBill] = useState({
    uuid: uid,
    id: uuidv4(),
    billType: type,
    fecha: '',
    tipo: '',
    NIF: '',
    razonSocial: '',
    direccion: '',
    concepto: '',
    base: null,
    IRPF: null,
    IVA: null,
    retIRPF: null,
    retIVA: null,
    totalBill: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submited', bill);
    dispatch(addIncBill(bill));
    dispatch(addToTrimester(bill));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // console.log(name, value);

    if (name === 'IVA' || name === 'IRPF') {
      setBill({ ...bill, [name]: +value });
    } else if (name === 'totalBill') {
      if (bill.IVA !== null && bill.IRPF === null) {
        setBill({
          ...bill,
          totalBill: +value,
          base: (+value / (1 + bill.IVA / 100)).toFixed(2),
        });
      } else if (bill.IVA === null && bill.IRPF !== null) {
        setBill({
          ...bill,
          totalBill: +value,
          base: (+value / (1 + bill.IRPF / 100)).toFixed(2),
        });
      } else if (bill.IVA !== null && bill.IRPF !== null) {
        // base = total - (total * (IVA% - IRPF%))
        setBill({
          ...bill,
          totalBill: +value,
          base: (+value / (1 + (bill.IVA - bill.IRPF) / 100)).toFixed(2),
        });
      }
    } else {
      setBill({ ...bill, [name]: value });
    }
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
          value={bill.fecha}
          onChange={handleChange}
          required
        />
        <label htmlFor='tipo'>Tipo:</label>
        <select
          name='tipo'
          id='tipo'
          defaultValue='---'
          value={bill.tipo}
          onChange={handleChange}
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
          value={bill.NIF}
          onChange={handleChange}
        />
      </div>
      <div className='row'>
        <label htmlFor='razonSocial' className='razon-social'>
          Razón Social
        </label>
        <input
          type='text'
          id='razon-social'
          name='razonSocial'
          onChange={handleChange}
          className='razon-social'
        />
        <label htmlFor='direccion'>Dirección</label>
        <input
          type='text'
          id='direccion'
          name='direccion'
          onChange={handleChange}
          className='address'
        />
      </div>{' '}
      <div className='row'>
        <label htmlFor='concepto'>Concepto</label>
        <input
          type='text'
          className='concept'
          id='concept'
          name='concepto'
          onChange={handleChange}
        />
      </div>
      <div className='row'>
        <label htmlFor='IVA'>%IVA:</label>
        <select defaultValue='---' id='IVA' name='IVA' onChange={handleChange}>
          <option value='---' disabled='disabled'>
            ---
          </option>
          <option value={21}>21%</option>
          <option value={10}>10%</option>
          <option value={4}>4%</option>
        </select>
        <label htmlFor='IRPF'>%IRPF:</label>
        <select
          defaultValue='---'
          id='IRPF'
          name='IRPF'
          onChange={handleChange}
        >
          <option value='---' disabled='disabled'>
            ---
          </option>
          <option value={19}>19%</option>
          <option value={15}>15%</option>
          <option value={7}>7%</option>
          <option value={2}>2%</option>
        </select>
        <label htmlFor='BI'>Base Imponible:</label>
        <span className='BI'>{bill.base}</span>
        <label htmlFor='totalBill'>Total:</label>
        <input
          type='number'
          id='totalBill'
          className='total'
          name='totalBill'
          value={bill.totalBill}
          onChange={handleChange}
        />
      </div>
      <div className='row'>
        <small className='retencion'>Retención IVA:</small>
        <span className='retencion'></span>
        <small className='retencion'>Retención IRPF:</small>
        <span className='retencion'></span>
      </div>
      <div className='row'>
        <Btn btnType='submit' text='Guardar' />
      </div>
    </form>
  );
};

export default Bill;
