import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import FooterContainer from './containers/FooterContainer';
import BodyContainer from './containers/BodyContainer';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HeaderContainer name={this.props.data.name}/>
        <BodyContainer changeName={this.props.changeName}
          name={this.props.data.name}/>
        <FooterContainer name={this.props.data.name}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data : state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => dispatch ({
      type: "CHANGE_NAME",
      name
    })
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(App)
