import './Letter.css'
import { useState } from 'react'

const Letter = () => {
  const [index, setIndex] = useState(0);
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const changeLetter = () => {
    const randomIndex = Math.floor(Math.random() * letters.length);
    setIndex(randomIndex);
  }
  return (
    <div className='Letter'>
      <div className='Letter-Top'>
        <p>LETTER</p>
        <button onClick={changeLetter} className='Letter-Top-Btn'>Roll Again</button>
      </div>
      <div className='Letter-Display'>
        <h1 className='Letter-Display-H1'>{letters[index]}</h1>
      </div>
    </div>
  );
}

export default Letter;