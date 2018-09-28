import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const API= "http://ctp-zip-api.herokuapp.com/";


class App extends Component {
  constructor(props){
    super(props);
  this.state={value: '',showTable: false, }

    this.info = this.info.bind(this);
  }


  info(e){
    this.setState({value: e.target.value },()=> {
      //fetch API
      //if(event.target.value =>5){
      fetch(API).
      then((data)=> {
          console.log(data)
          this.tables();
      })
    
      
    });

  }

  tables(){
    return(<div>
      <table>
        <tr>
          <th>this is the name of state</th>
        </tr>
        <tr>
          <td>State:</td>
          <td></td>
        </tr>
        <tr>
          <td>Location:</td>
          <td></td>
        </tr>
        <tr>
          <td>Population:</td>
          <td></td>
        </tr>
        <tr>
          <td>Total Wages:</td>
          <td></td>
        </tr>
      </table>
    </div>);
  }

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">City Search</h1>
        </header>
      <form>
        <label>
          Zip Code:
          <input type="text" value={this.state.value} onChange={this.info}></input>
        </label>
      </form>
      {this.state.showTable ? this.tables(): null};
      </div>
    );
  }
}

export default App;
