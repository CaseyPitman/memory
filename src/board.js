// This Module renders the game board

import React from 'react';
import Card from './cards'

let Board = (props) => {

   //If game in progress = false
   // board style is hidden;
   let boardStyle = {};
   if (!props.gameInProgress){
      boardStyle = {
         display: 'none'
      }
   }

   //Get cards
   let renderCards = (card) => {

      return (
         <Card
         key = {card.id} 
         />
      )
   }


   let cards = props.board.map(renderCards)

   console.log('cards', cards);

   
   return (
      <div className = 'board' style = {boardStyle}>
         {cards}


         {/* <div className='card face-down'>
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
         </div> */}
      </div>
   )
}

export default Board;