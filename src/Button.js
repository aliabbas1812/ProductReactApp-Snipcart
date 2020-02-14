import React, { Component } from 'react';

import './product.css';
class Button extends Component {

 
    
    state={
        count:0
    };

    handleClickUp =()=>{
    this.setState((last,{count})=>({
        count:last.count + 1
    }));
    
    
}


  render() {
      return(
          
        
             <button onClick={this.handleClickUp}>👍 {this.state.count}</button>
              
     
      
     
      )} }
export default Button;