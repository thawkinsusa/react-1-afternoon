import React, { Component } from 'react';

export default class Palindrome extends Component {

  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: '',
      backwardSpelling: ''
    };
  }


  isReversable(userInput) {
    let forwards = userInput;
    let backwards = userInput;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');
    console.log(backwards)
    this.setState({backwardSpelling: backwards})
   
    if ( forwards === backwards ) {
      this.setState({ palindrome: 'Yes' });
    } else {
      this.setState({ palindrome: 'No' });
    }
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }
  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Is it spelled the same Forwards to Backwards? </h4>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.isReversable(this.state.userInput) }> Check </button>
        <span className="resultsBox"> Compare: {JSON.stringify(this.state.userInput)}vs{ JSON.stringify(this.state.backwardSpelling) }<br></br> Is this the same: { this.state.palindrome } </span>
      </div>
    )
  }
}