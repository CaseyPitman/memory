import React from 'react';
import styles from './styles.css'

function App() {



  return (
    <div className="App">
      <h1 className = 'title'> Memory </h1>
      <div className = 'board' ratio = '1x1'>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
      </div>

      <div className = 'button-div'>
        <button className = 'button'>Start Over</button>
      </div>


    </div>
  );
}

export default App;
