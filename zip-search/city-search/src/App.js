import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//outline when the user enters a valid zipcode
function City(props){
  return (<div className="fluid-container">
    <h1>{props.City}</h1>
    <p>State: {props.State}</p>
    <p>Location: {props.Location}</p>
    <p>Population (estimated): {props.EstimatedPopulation}</p>
    <p>Total Wages: {props.TotalWages}</p>
    <p>Longitude: {props.Longitude}</p>
    <p>Latitude: {props.Latitude}</p>
  </div>);
}

//creates the template that allows the user to enter an input
function ZipSearchField(props){
  return (<div>
    <form>
      <label>Zip Code: </label>
      <input type="text" maxLength="6" className="form-control" onChange={props.changeHandler}/>
    </form>
  </div>);

}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }
  // pass a value to the API
  ZipCodeChanged(event){
    //if input less than 5 doesnt process value
    if(event.target.value.length !==5){
      this.setState({data: []});
      return;
    }
    let url ="http://ctp-zip-api.herokuapp.com/zip/" + event.target.value;

    fetch(url).
    then((response) =>{
      console.log(response.status);
      
      //200 means ok internet protocol
      if(response.status === 200){
        //converting to json data to easly manipulate it
        return response.json();
      }else{
        throw "Not Found";
      }
    })
    .then((jsonData) => {
      console.log(jsonData);
      this.setState({data: jsonData});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {

    let cities= [];

    for(let i=0; i< this.state.data.length; i++){
      let item = this.state.data[i];
  
    cities.push(<City key={i} City={item.City} EstimatedPopulation={item.EstimatedPopulation}
      TotalWages={item.TotalWages} Location={item.Location} State={item.State} Longitude={item.Long}
      Latitude={item.Lat}/>);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">City Search</h1>
        </header>
        <ZipSearchField changeHandler={(e) => this.ZipCodeChanged(e)}/>
        <div>
          {cities}
        </div>
      </div>
    );
  }
}

export default App;
