import React from 'react';
import './User.scss';
import { UserIcon } from '../../assets/images';
import Folder from './folder/Folder';

const User = () => {
  const folderName = ['1T 2021', '2T 2021']; //This Will Come From FireBase

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
      <div className='user__bottom'>
        <div className='user__bottom--input'>
          <label>Año:</label>
          <select>
            <option>2021</option>
          </select>
        </div>
        <div className='user__bottom--folders'>
          <Folder title={folderName[0]} />
          <Folder title={folderName[1]} />
        </div>
      </div>
    </div>
  );
};

export default User;
