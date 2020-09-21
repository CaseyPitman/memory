// This Module renders the game board

import React from 'react';
import Card from './cards'

let Board = (props) => {

   //If game is not yet in progress, the board is not visible. 

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
            id = {card.id}
            image = {card.img}
            clickCard = {props.clickCard}
            status = {card.status}
            name = {card.name}
            currentUpturnCards = {props.currentUpturnCards}
         />
      )
   }


   //Map board to generate cards
   let cards = props.board.map(renderCards)

   return (
      <div className = 'board' style = {boardStyle}>
         {cards}       
      </div>
   )
}

export default Board;