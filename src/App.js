import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attribute

import './App.css';
import Customize from './Customize/Customize.js';
import Cart from './Cart/Cart.js';


// This object will allow us to
// easily convert numbers into US dollar value

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
      <Customize features={this.props.features} selected={this.state.selected} updateFeature={this.updateFeature} /> 
      <Cart selected={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;