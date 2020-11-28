import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css'; 

class App extends Component {

  state = {
    counters: [
        { _id: 1, value: 0},
        { _id: 2, value: 0},
        { _id: 3, value: 0},
        { _id: 4, value: 0}
    ]
};

handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
}

handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0
        return c;
    });
    this.setState({counters: counters });
}

handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c._id !== counterID);
    this.setState({counters: counters });
}

  render() {
    return ( 
    <React.Fragment>
      <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className="container">
        <Counters 
        onIncrement={this.handleIncrement} 
        onReset={this.handleReset} 
        onDelete={this.handleDelete} 
        counters={this.state.counters}/>
      </main>
    </React.Fragment>
    );
  }
} 

export default App;
