import React from 'react';
import './OpenOrClosed.css';

export default function OpenOrClosed({ isOpen, setIsOpen }) {
  return (
    <div className='sign'>
      {isOpen ? <button className='OpenCloseButton' onClick={() => setIsOpen(false)}>Close it down</button> : <button className='OpenCloseButton' onClick={() => setIsOpen(true)}>Open up</button> }
      {/* conditional to display welcome text or closed text */}
      {isOpen ? <h1 className='sign neon'>Come in!<br></br>We are Open</h1> : <h1 className='sign-off neon'>Sorry <br></br>We Are Closed</h1> }
      {/* conditional to switch between the open and close button. depending on if it is open or closed */}
     
    </div>
  );
}
