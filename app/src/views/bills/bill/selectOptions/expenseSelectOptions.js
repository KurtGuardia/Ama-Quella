import React from 'react';

const expenseSelectOptions = () => {
  return (
    <>
      <option value='---' disabled='disabled'>
        ---
      </option>
      <option value='seguridad'>Seguridad Social</option>
      <option value='suministros'>Suministros</option>
      <option value='serviciosPro'>Servicios Profesionales</option>
      <option value='arrendamientos'>Arrendamientos</option>
      <option value='compras'>Compras</option>
      <option value='reparaciones'>Reparaciones</option>
      <option value='insumos'>Insumos</option>
      <option value='carburantes'>Carburantes</option>
      <option value='seguros'>Seguroos</option>
    </>
  );
};

export default expenseSelectOptions;
