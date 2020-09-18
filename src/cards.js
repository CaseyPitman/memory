//This module renders the cards for the memory game

import React from 'react';




let Card = (props) => {

   //Card is clicked.
   let clickHandler = (event) => {
     
      let id = props.id;
      props.clickCard(id);

   }

   //Determine how to display card
   //(Face up, face down, or matched)

   //Default - card face down
   


      return(
         <div className = 'card face-down' onClick = {clickHandler}>
            <img className = 'card-img' src = {require('./img/card-back.jpg')} alt = 'alt-text'></img>
         </div>
      )
   
}

export default Card;