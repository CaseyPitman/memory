// This module renders the start/reset button


import React, {Component} from 'react';


class Button extends Component {

   //Click handler 
   clickHandler = (props) => {
      this.props.clickButton(this.props.buttonType);
   }


   render(){

      return (
         <div className = 'button-div' >
            <button className = 'button' onClick = {this.clickHandler}>{this.props.buttonType} </button>
         </div>
      )
   }
}

export default Button;