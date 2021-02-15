import React, { useEffect, useState } from 'react';
import Btn from '../../components/UI/btn/Btn';
import './Bill.scss';

const Bill = () => {
  const [billType, setBillType] = useState('income');

  const dummyFn = () => {
    console.log();
  };

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
      <form
        className={`bill__form expense ${
          billType === 'expense' ? '' : 'hidden'
        }`}
      >
        <div className='row'>
          <label>Fecha:</label>
          <input
            type='date'
            placeholder='../../..'
            onChange={dummyFn}
            required
          />
          <label htmlFor='expense-type'>Tipo:</label>
          <select
            name='expense-type'
            id='expense-type'
            value='---'
            onChange={dummyFn}
          >
            <option disabled='disabled'>---</option>
            <option>Seguridad Social</option>
            <option>Suministros</option>
            <option>Servicios Profesionales</option>
            <option>Arrendamientos</option>
            <option>Compras</option>
            <option>Reparaciones</option>
            <option>Insumos</option>
            <option>Carburantes</option>
            <option>Seguroos</option>
          </select>{' '}
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
      <form
        className={`bill__form income ${
          billType === 'income' ? '' : 'hidden'
        } `}
      >
        <div className='row'>
          <label>Fecha:</label>
          <input
            type='date'
            placeholder='../../..'
            onChange={dummyFn}
            required
          />
          <label htmlFor='income-type'>Tipo:</label>
          <select
            name='income-type'
            id='income-type'
            value='---'
            onChange={dummyFn}
          >
            <option disabled='disabled'>---</option>
            <option>Venta</option>
            <option>Servicios Profesionales</option>
            <option>Arrendamientos</option>
            <option>Clases</option>
            <option>Otro</option>
          </select>
          <input
            type='text'
            placeholder='Especificar otro ingreso'
            className='hidden'
          />{' '}
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
        </div>
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
    </div>
  );
};

export default Bill;
