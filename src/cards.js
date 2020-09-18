//This module renders the cards for the memory game

import React from 'react';
import deck from './data'



let Card = (props) => {

   //Card is clicked.
   let clickHandler = (event) => {
     
      let id = props.id;
      props.clickCard(id);

   }

   //Determine how to display card
   //(Face up, face down, or matched)
   let className = 'card';
   let image;
   let altText;
   //Default - card face down
   if (props.status === 'down'){
      className += ' face-down';
      image = props.image
      altText = props.name;
   }


      return(
         <div className = {className} onClick = {clickHandler}>
            <img className = 'card-img' src = {require(`./img/card-back.jpg`)} alt = 'alt-text'></img>
         </div>
      )
   
}

export default Card;