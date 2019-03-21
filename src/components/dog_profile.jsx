import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

class DogProfile extends Component {
    render(){
        console.log(this.props);
        return(
            <div>
                {this.props.dog &&
                    <div>
                        <h1>{'El perrito Redux-Saga'}</h1>
                        <img src={this.props.dog} alt={'perrito'}/>
                        <div>
                            <button className='btn-perrito' onClick={this.props.onRequestDog}>Recargar Perrito</button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(()=>{},mapDispatchToProps)(DogProfile);