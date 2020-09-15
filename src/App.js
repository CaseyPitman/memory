import React, {Component} from 'react';

import styles from './styles.css';

// Data
import deck from  './data'

// Components
import Title from './title';
import Board from './board';
import Button from './button';


let startingBoard = deck;
console.log(deck);

class App extends Component {
  constructor(props){
    super()

    this.state = {
      gameInProgress: false
        
      
    }
  }


  render(){
    return (
      <div className="App">
        <Title />

        <Board/>

        <Button />

      </div>
    );
  }
}

export default App;
