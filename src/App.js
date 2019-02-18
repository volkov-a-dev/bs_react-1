import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import Header from './components/header/Header';
import Body from './components/body/Body';

class App extends Component {

  state = {
    persons: [
      { id: '1', name : 'Max', age: 23 },
      { id: '2', name : 'Manu', age: 25 },
      { id: '3', name : 'Stephanie', age: 26 },
    ],
    showPersons: false,
  };

  resetChangeHandler = () => {
    this.setState({
      persons: [
        { id: '1', name : 'Max', age: 23 },
        { id: '2', name : 'Manu', age: 25 },
        { id: '3', name : 'Stephanie', age: 26 },
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); 
    this.setState({persons: persons})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'ingerit',
      border: '10px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={event => this.nameChangeHandler(event, person.id)}
              />
          })}
      
      </div> 
      );

      style.backgroundColor = 'red';
    }

 
    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red') // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold') // classes = ['red', 'bold']
    }

    return (
      <div className="App wrapp">
        <Header />
        <Body />
        <button 
          className={classes.join(' ')}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        <button 
          style={style}
          onClick={this.resetChangeHandler}>Reset</button>
        <div className="wrapp__mid">
          {persons}
        </div>
      </div>
    );
  }
}

export default App;