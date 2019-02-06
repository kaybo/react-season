import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  // constructor(props){
  //   super(props);//since we are overwriting the react component
  //               //constructor, we also include super function
  //   this.state = {lat: null, errorMessage: ''};//only time to do direct assignment to this.state
  // }

  state = {lat: null, errorMessage: ''};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //to update object, we call setState method
        //WARNING: NEVER DO DIRECT ASSIGNMENT TO OBJECT EG. this.state.lat = ....
        this.setState({lat: position.coords.latitude});
      },
      (err) => {
        this.setState({errorMessage: err.message});
      }
    );
  }

  // React says we have to define render
  render(){
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat = {this.state.lat}/>
    }
    return <div>Loading</div>;
  }

};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
