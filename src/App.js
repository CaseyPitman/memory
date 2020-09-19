import React, {Component} from 'react';

import styles from './styles.css';

// Data
import deck from  './data'

// Components
import Title from './title';
import Board from './board';
import Button from './button';



// const init = () => {
// //Fisher-Yates algorithm to shuffle the cards and start the game
//   for (let i = deck.length - 1; i > 0; i--){
//     const j = Math.floor(Math.random() * i);
//     const temp = deck[i];
//     deck[i] = deck[j];
//     deck[j] = temp;
//   }
// }




class App extends Component {
  constructor(props){
    super()

    this.state = {
      gameInProgress: false,
      board: deck,
      buttonType: 'Start', //Or quit or Play again
      cardsUpTurn: 0,
      currentUpturnCards: []
      
    }
  }

  //Click the button to start, end, or replay the game.
  clickButton = (type) => {

    if (type !== 'Quit'){
      //Player is starting the game or playing another game after finishing.
      let sortedDeck = deck;
      //Fisher-Yates algorithm to shuffle the cards and start the game
      for (let i = sortedDeck.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i);
        const temp = sortedDeck[i];
        sortedDeck[i] = sortedDeck[j];
        sortedDeck[j] = temp;
      }
      
      this.setState({
        gameInProgress: true,
        board: sortedDeck,
        buttonType: 'Quit'
      })
   
    }
       //Player wants to quit playing
       else {
        this.setState({
          gameInProgress: false,
          buttonType: 'Start'
        })
      }
  }

  //Check to see if two cards match
  checkMatch = (cards) =>{
    console.log(cards)
    return cards[0] === cards[1] ? true : false;
  }


  clickCard = (id) => {

    let turnedCards = this.state.currentUpturnCards;
    let currentCard;
    let turnCardUp = (card) => {
      if (card.id !== id){
        return card;
      } else {
        currentCard = card;
        return {
          ...card, 
          status: 'up'
        }
      }
    }
      
      let flippedCard = this.state.board.map(turnCardUp);
      
      turnedCards.push(currentCard.name);
      
      this.setState({
        board: flippedCard,
        currentUpturnCards: turnedCards
      })

      let matchName = (card) =>{
        

      }

      //There are currently two cards facing up
      if (this.state.currentUpturnCards.length === 2){
        // console.log('there are two cards turned up')
        //Compare the two cards
        let check = this.checkMatch(turnedCards);
        //No match
        if (check){
          console.log('match');
        } else {
          console.log('no match');
        }
        // let twoCards = this.state.board.map(matchName);
        // console.log(twoCards);
        

        // setTimeout( 
        //   this.setState({

        //   }), 2000
        // );

      }

        //compare them
          //if they match we have a match. Change them to have an indication of match - yellow border?
            //make them unclickable
            //if no match 
              //set time out
              //change them both back to down  - match name function?

      //else if length is 1 then just continue
      else{
        // console.log('only one card is turned')
      }


      // 
      



    }

  

  
  render(){
    // console.log(this.state.board);
    return (
      <div className="App">
        <Title />

        <Board
          gameInProgress = {this.state.gameInProgress}
          board = {this.state.board}
          clickCard = {this.clickCard}
        />

        <Button 
          buttonType = {this.state.buttonType}
          clickButton = {this.clickButton}
        />

      </div>
    );
  }
}

export default App;
