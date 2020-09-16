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
        />

      </div>
    );
  }
}

export default App;
