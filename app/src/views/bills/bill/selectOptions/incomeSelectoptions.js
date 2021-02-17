import React from 'react';

const incomeSelectOptions = () => {
  return (
    <>
      <option value='---' disabled='disabled'>
        ---
      </option>
      <option value='venta'>Venta</option>
      <option value='serviciosPro'>Servicios Profesionales</option>
      <option value='arrendamiento'>Arrendamientos</option>
      <option value='clases'>Clases</option>
      <option value='otro'>Otro</option>
    </>
  );
};

export default incomeSelectOptions;
