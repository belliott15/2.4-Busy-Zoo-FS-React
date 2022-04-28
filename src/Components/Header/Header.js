import React from 'react';
import './Header.css';

export default function Header({ text }) {
  return (
    <div className='header'>
      {text}
      <img className='header-logo' src='./BusyZooLogo.png' />
    </div>
  );
}
