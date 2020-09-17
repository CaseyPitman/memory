//This module renders the cards for the memory game

import React from 'react';




let Card = (props) => {

   //Click handler flips card
   //If card is already flipped then it can't be clicked
   //In Css make it so hover only works on face-down class.
   let clickHandler = () => {
      console.log(`card has been clicked`);
   }

   //Determine how to display card
   //(Face up, face down, or matched)

   



  



      return(
         <div className = 'card face-down' onClick = {clickHandler} >
            <img className = 'card-img' src = {require('./img/card-back.jpg')} alt = 'alt-text'></img>
         </div>
      )
   
}

export default Card;