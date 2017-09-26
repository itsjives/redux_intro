import React, { Component } from 'react';
import Header from '../components/Header';

class HeaderContainer extends Component {

  render () {
    return (
      <div>
        <Header name={this.props.name}/>
      </div>
    )
  }
}
export default HeaderContainer
