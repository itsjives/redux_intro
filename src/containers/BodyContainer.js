import React, { Component } from 'react';
import Body from '../components/Body';

class BodyContainer extends Component {

  render () {
    return (
      <div>
        <Body
          name={this.props.name}
          changeName={this.props.changeName}/>
      </div>
    )
  }
}
export default BodyContainer;
