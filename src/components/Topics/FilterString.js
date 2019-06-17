import React, { Component } from 'react'

export default class FilterString extends Component {
    constructor() {
      super();
  
      this.state = {
        names: ['Tyler', 'Mattias', 'Spencer', 'John', 'Lukeskywalker', 'Batman', 'Joker', 'Maddox'],
        userInput: '',
        filteredNames: []
      };
    }
  
    handleChange(val) {
      this.setState({ userInput: val });
    }
  
    filterBabyNames(userInput) {
      let names = this.state.names;
      let filteredNames = [];
  
      for ( let i = 0; i < names.length; i++ ) {
        if ( names[i].includes(userInput) ) {
          filteredNames.push(names[i]);
        }
      }
  
      this.setState({ filteredNames: filteredNames });
    }
  
    render() {
      return (
        <div className="puzzleBox filterStringPB">
          <h4> Filter Baby Names </h4>
          <span className="puzzleText"> Baby Names: { JSON.stringify(this.state.names) } </span>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
          <button className="confirmationButton" onClick={ () => this.filterBabyNames(this.state.userInput) }> Filter </button>
          <span className="resultsBox filterStringRB"> Filter Baby Names: { JSON.stringify(this.state.filteredNames) } </span>
        </div>
      )
    }
  }