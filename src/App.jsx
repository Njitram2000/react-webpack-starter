import React from 'react';
import ReactDOM from "react-dom";
import {hot} from "react-hot-loader";
import './App.css';
import {Martijn} from './Martijn';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Hello world!</h1>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

/* Mark the App class as hot for hot reloading.
 * Anything loaded within App is also hot so this notation is only needed here unless there are multiple ReactDOM.render locations
 */
hot(module)(App);