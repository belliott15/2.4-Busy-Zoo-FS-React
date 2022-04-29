import React from 'react';

export default function OpenOrClosed({ isOpen }) {
  return (
    <div className='sign'>
      {isOpen ? <img src='./openSign.png' /> : <img src='./closedSign.png' /> }
    </div>
  );
}
