import React from 'react';
import './Folder.scss';
import { FolderIcon } from '../../../assets/icons';

const Folder = ({ title }) => {
  return (
    <div className='folder'>
      <FolderIcon />
      <h3>{title}</h3>
    </div>
  );
};

export default Folder;
