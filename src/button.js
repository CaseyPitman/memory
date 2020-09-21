// This module renders the start/reset button

import React, {Component} from 'react';


class Button extends Component {

   //Click handler for the button
   clickHandler = (props) => {
      this.props.clickButton(this.props.buttonType);
   }

   //Button text and context changes based on the stage of gameplay.

   render(){
      return (
         <div className = 'button-div' >
            <button className = 'button' onClick = {this.clickHandler}>{this.props.buttonType} </button>
         </div>
      )
   }
}

export default Button;