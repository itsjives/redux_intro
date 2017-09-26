import React, { Component } from 'react';
class Header extends Component {

  render () {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">{this.props.name}</a>
          </div>
        </nav>
      </div>
    )
  }
}
export default Header;
