import React, { Component } from 'react';
import DogProfile from './components/dog_profile.jsx';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  componentWillMount(){
    this.props.onRequestDog();
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <p>
              Creando una Store con Redux
            </p>
          </header>
          <DogProfile dog={this.props.dog}/>
        </div>
    );
  }
}

const mapStateToProps = (state) =>({
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
});

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
