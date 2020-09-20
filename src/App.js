import React, {Component} from 'react';

import styles from './styles.css';

// Data
import deck from  './data'

// Components
import Title from './title';
import Board from './board';
import Button from './button';


class App extends Component {
  constructor(props){
    super()

    this.state = {
      gameInProgress: false,
      board: deck,
      buttonType: 'Start', //Or quit or Play again
      cardsUpCounter: 0,
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
        buttonType: 'Quit',
        cardsUpCounter: 0
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
    return cards[0] === cards[1]? true : false;
  }

  checkWin = () => {
    if (this.state.cardsUpCounter === 12){
      console.log('game over')
      this.setState({
        buttonType: 'Play Again'
      })

    }

  }


  clickCard = async (id) => {

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

      //The two cards match
      let posMatch = (card) =>{
        if (!this.state.currentUpturnCards.includes(card.name)){
          return card;
        } else {
          return{
            ...card,
            status: 'match',
          }
        }
      }


      let updatedBoard =[];
      //There are currently two cards facing up
      if (this.state.currentUpturnCards.length === 2){
        // console.log('there are two cards turned up')
        //Compare the two cards

        
        let check = this.checkMatch(turnedCards);

        //Match. Set state to match.
        if (check){
          updatedBoard = this.state.board.map(posMatch);

          await this.setState({
            board: updatedBoard,
            currentUpturnCards:[], 
            cardsUpCounter: this.state.cardsUpCounter + 2
          })
      
          this.checkWin();

        } 
        //No match. Pause and flip cards back over. 
        else {
          console.log('no match');

          //The two cards do not match
          let negMatch = (card) =>{
            if (!this.state.currentUpturnCards.includes(card.name)){
              return card;
            } else {
              return{
                ...card,
                status: 'down',
              }
            }
          }

          //Show both unmatched cards for a moment before flipping back over. 
          setTimeout(() => {
            updatedBoard = this.state.board.map(negMatch);this.setState({
            board: updatedBoard,
            currentUpturnCards:[]
          })
          }, 1500)
        
        }

      }

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
          currentUpturnCards = {this.state.currentUpturnCards}
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
