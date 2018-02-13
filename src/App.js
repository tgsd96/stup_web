import React, { Component } from 'react';
import './App.css';

// import components
import EventForm from './components/eventForm';
class App extends Component {
  render() {
    return (
      <div className="App">
          <EventForm />
        </div>
    );
  }
}

export default App;
