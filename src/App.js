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


    // const init = () => {
    //   //Fisher-Yates algorithm to shuffle the cards and start the game
    //     for (let i = deck.length - 1; i > 0; i--){
    //       const j = Math.floor(Math.random() * i);
    //       const temp = deck[i];
    //       deck[i] = deck[j];
    //       deck[j] = temp;
    //     }
    //   }
    //   init();

    this.state = {
      gameInProgress: false,
      board: deck,
      buttonType: 'Start' //Or quit or Play again
      
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

  
  render(){
    // console.log(this.state.board);
    return (
      <div className="App">
        <Title />

        <Board
          gameInProgress = {this.state.gameInProgress}
          board = {this.state.board}
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
