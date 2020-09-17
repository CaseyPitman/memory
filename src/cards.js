//This module renders the cards for the memory game

import React, {Component} from 'react';




class Card extends Component {

   //Click handler flips card
   //If card is already flipped then it can't be clicked
   //In Css make it so hover only works on face-down class.
   clickHandler = () => {
      console.log('card has been clicked');
   }

   


   render(){
      return(
         <div className='card face-down' onClick = {this.clickHandler}>
            <img className = 'card-img' src = {require('./img/card-back.jpg')} alt = 'alt-text'></img>
         </div>
      )
   }
}

export default Card;