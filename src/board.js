// This Module renders the game board

import React from 'react';
import Card from './cards'

let Board = () => {

   
   return (
      <div className = 'board'>
         <div className='card face-down'>
            <img className = 'card-img' src = {require('./img/card-back.jpg')}></img>
         </div>
         <div className='card face-down'>
            <img className = 'card-img' src = {require('./img/card-back.jpg')}></img>
         </div>
         <div className='card face-down'>
            <img className = 'card-img' src = {require('./img/card-back.jpg')}></img>
         </div>
         <div className='card match'>
            <img className = 'card-img' src = {require('./img/key.jpg')}></img>
         </div>
         <div className='card face-down'>
            <img className = 'card-img' src = {require('./img/card-back.jpg')}></img>
         </div>
         <div className='card face-down'>
            <img className = 'card-img' src = {require('./img/card-back.jpg')}></img>
         </div>
         <div className='card face-up'>
            <img className = 'card-img' src = {require('./img/moon.jpg')}></img>
         </div>
         <div className='card match'>
            <img className = 'card-img' src = {require('./img/key.jpg')}></img>
         </div>
         <div className='card  face-down'>
            <img className = 'card-img' src = {require('./img/card-back.jpg')}></img>
         </div>
         <div className='card face-down'>
            <img className = 'card-img' src = {require('./img/card-back.jpg')}></img>
         </div>
         <div className='card face-down'>
            <img className = 'card-img' src = {require('./img/card-back.jpg')}></img>
         </div>
         <div className='card face-down'>
            <img className = 'card-img' src = {require('./img/card-back.jpg')}></img>
         </div>
      </div>
   )
}

export default Board;