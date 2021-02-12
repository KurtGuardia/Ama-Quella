import React from 'react';
import './User.scss';
import { UserIcon } from '../../assets/images';

const User = () => {
  return (
    <div className='user view'>
      <div className='user__data'>
        <div className='user__data--text'>
          <h2>Tus datos</h2>
          <ul>
            <li>Nombre: Kurt Guardia</li>
            <li>Razón Social: Phi - Desarrollo</li>
            <li>Epígrafe: 666.6</li>
            <li>Atividad: Ser cool</li>
            <li>Email: kurtguardia@gmail.com</li>
          </ul>
        </div>
        <div className='user__data--icon'>
          <UserIcon />
        </div>
      </div>
      <div className='user__folders'>
        <div className='user__folders--input'>
          <label>Año:</label>
          <select>
            <option>2021</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default User;
