import React, { Component } from 'react';
class  Footer extends Component {

  render () {
    return (
      <div>
        <footer>{this.props.name}</footer>
      </div>
    )
  }
}
export default Footer ;
