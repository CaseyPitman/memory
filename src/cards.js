//This module renders the cards for the memory game

import React from 'react';


let Card = () =>{

   return(
      <div className='card face-down'>
         <img className = 'card-img' src = {require('./img/card-back.jpg')} alt = 'alt-text'></img>
      </div>
   )
}

export default Card;