import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function City(props){
  return (<div></div>);
}

//creates the template that allows the user to enter an input
function ZipSearchField(props){
  return (<div>
    <form>
      <label>Zip Code: </label>
      <input type="text" className="form-control" onChange={props.changeHandler}/>
    </form>
  </div>);

}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      city: ""
    }
  }
  // pass a value to the API
  ZipCodeChanged(event){
    //if input less than 5 doesnt process value
    if(event.target.value.length !==5){
      return;
    }
    let url ="http://ctp-zip-api.herokuapp.com/zip/" + event.target.value;

    fetch(url).
    then((response) =>{
      console.log(response.status);
      
      if(response.status == 200){
        return response.json();
      }else{
        throw "Not Found";
      }
    })
    .then((jsonData) => {
      console.log(jsonData);
      this.setState({})
    })
    .catch((error) => {
      //create a console log
     //clear previous data this.setState
    })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">City Search</h1>
        </header>
        <ZipSearchField changeHandler={(e) => this.ZipCodeChanged(e)}/>
        <div>
          <City />
          <City />
        </div>
      </div>
    );
  }
}

export default App;
