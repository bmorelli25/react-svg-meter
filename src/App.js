import React, { Component } from 'react';
import './App.css';
import Meter from './Meter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r1: .7,
      r2: .3
    };
  }
  componentDidMount() {
    this.animatedMeter = setInterval(
      () => this.animate(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.animatedMeter);
  }
  animate(){
    this.setState({
      r1: Math.random(),
      r2: Math.random()
    })
  }
  render() {
    return (
      <div className="App">
        <div className="header">meters for days</div>
        <div className="group">
          <div className="title">rounded</div>
          <div className="meter"><Meter percent={.3}/></div>
          <div className="meter"><Meter percent={.8}/></div>
        </div>
        <div className="group">
          <div className="title">square</div>
          <div className="meter"><Meter percent={.2} rounded={false}/></div>
          <div className="meter"><Meter percent={.6} rounded={false}/></div>
        </div>
        <div className="group">
          <div className="title">animated</div>
          <div className="meter"><Meter percent={this.state.r1} animate={true} rounded={false}/></div>
          <div className="meter"><Meter percent={this.state.r2} animate={true}/></div>
        </div>
        <div className="group">
          <div className="title">colorful</div>
          <div className="meter"><Meter percent={.4} color={'#F44336'} rounded={false}/></div>
          <div className="meter"><Meter percent={.9} color={'#FFEB3B'}/></div>
        </div>
        <div className="group">
          <div className="title">bigger</div>
          <div className="meter"><Meter percent={.4} width={250} height={17} rounded={false}/></div>
          <div className="meter"><Meter percent={.9} width={250} height={17} /></div>
        </div>
      </div>
    );
  }
}

export default App;
