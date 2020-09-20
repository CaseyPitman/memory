//This module renders the cards for the memory game

import React from 'react';
import deck from './data'



let Card = (props) => {

   //Card is clicked.
   let clickHandler = (event) => {
      if (props.status === 'match' || props.status === 'up'){
         return;
      }
      let id = props.id;
      props.clickCard(id);

   }

   //Determine how to display card
   //(Face up, face down, or matched)
   let className = 'card';
   let image = 'card-back.jpg'
   let altText = 'Bock of card'
   //Default - card face down
   if (props.status === 'down'){
      className += ' face-down';
   } else if (props.status === 'up'){
      className += ' up';
      image = props.image;
      altText = props.name;
   } else if (props.status === 'match'){
      className += ' match';
      image = props.image;
      altText = props.name;
   }

      return(
         <div className = {className} onClick = {clickHandler}>
            <img className = 'card-img' src = {require(`./img/${image}`)} alt = {altText}></img>
         </div>
      )
   
}

export default Card;