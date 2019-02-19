import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import Cockpit from '../components/Cockpit/Cockpit';

import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {
  constructor(props) {
    super(props);
      console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: '1', name : 'Max', age: 23 },
      { id: '2', name : 'Manu', age: 25 },
      { id: '3', name : 'Stephanie', age: 26 },
    ],
    showPersons: false,
    showCocpit: true,
    changeCounter: 0
  };

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[App.js] getDerivedStateFromProps', props)
  //   return state;
  // }

  componentWillMount() {
    console.log('[App.js] componentWillMount');

  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

    this.setState((prevState, props) => {
      return {
        persons: persons, 
        changeCounter: prevState.changeCounter + 1
      };
    })
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
    console.log('[App.js] render')

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler} 
          changed={this.nameChangeHandler} />
    }
  
    return (
      // <div className="App wrapp">
      <Aux>
        <Header />
        <Body />
        <button onClick={() => {this.setState({showCocpit: false})}}>Remove Cockpit</button>
        {this.state.showCocpit ? (
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length} 
          clicked={this.togglePersonsHandler} />) : null}
        <div className="wrapp__mid">
          {persons}
        </div>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);