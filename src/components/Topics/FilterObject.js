import React, { Component } from 'react'
export default class FilterObject extends Component {
    constructor() {
    super()
        this.state = {
            pizzas: [
            {                
                type: 'bacon',
                topping: 'cheese',
                secondTopping: 'bacon'
            },
            {                
                type: 'potato',
                topping: 'cheese',
                secondTopping: 'potatos'
            },
            {                
                type: 'no cheese',
                topping: 'none',
            },
            {                
                type: 'peperoni',
                topping: 'cheese',
                thirdTopping: 'peperoni'
            }],

            userInput: "",
            filteredPizza: []
        }
    }
    handleChange(input){
        this.setState({userInput: input});
    }

    FilteredArray(topping){
        let pizzas = this.state.pizzas.slice();
        console.log(pizzas)
        let filteredPizza = [];
        for(let i = 0; i<pizzas.length; i++){
            if(pizzas[i].topping === topping) {
                console.log('hit if')
                filteredPizza.push(pizzas[i])
            }
        }
        this.setState({filteredPizza: filteredPizza})
    }

    render() {
        return (
          <div className="puzzleBox filterObjectPB">
            <h4> Filter Toppings </h4>
            <span className="puzzleText"> Pizzas: { JSON.stringify(this.state.pizzas) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.FilteredArray(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered Pizza: { JSON.stringify(this.state.filteredPizza) } </span>
          </div>
        )
      }
    }