import React, { Component } from 'react'
import { spawn } from 'child_process';

export default class EvenAndOdd extends Component {
   constructor(){
       super();
       this.state = {
           evens: [],
           odds: [],
           InputVal: ''
       }
   }
   handleChange(val) {
    this.setState({ InputVal: val });
  }
  evenOrOdd(InputVal){
      let arr = InputVal.split(',');
      let evens = [];
      let odds = [];

      for(let i = 0; i <arr.length; i++){
          if(arr[i] % 2 === 0){
              evens.push(arr[i]);
          } else {
              odds.push(arr[i]);
          }
      }
      this.setState({evens: evens, odds:odds})
  }

render() {
    return(
      <div className='puzzleBox evenAndOddPB'>
          <h4>Evens and Odds</h4>
      <input className ='inputLine' onChange ={ (e) => this.handleChange(e.target.value)}></input>
      <button className ='confirmationButton' onClick={ () => {this.evenOrOdd(this.state.InputVal)}}> Split </button>
      <span className = "resultBox">Evens:{JSON.stringify(this.state.evens)}</span>
      <span className = 'resultBox'>Odds:{JSON.stringify(this.state.odds)}</span>
      </div>
    )
}
}