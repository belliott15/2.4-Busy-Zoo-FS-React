import React from 'react';
import './OpenOrClosed.css';

export default function OpenOrClosed({ isOpen }) {
  return (
    <div className='sign'>
      {isOpen ? <h1 className='sign neon'>Come in!<br></br>We are Open</h1> : <h1 className='sign neon'>Sorry <br></br>We Are Closed</h1> }
    </div>
  );
}
