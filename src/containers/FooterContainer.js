import React, { Component } from 'react';
import Footer from '../components/Footer';

class  FooterContainer extends Component {

  render () {
    return (
      <div>
        <Footer name={this.props.name}/>
      </div>
    )
  }
}
export default FooterContainer
