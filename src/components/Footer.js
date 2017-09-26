import React, { Component } from 'react';
class  Footer extends Component {

  render () {
    return (
        <div>
          <footer className="page-footer">
                <div className="col l6 s12">
                  <h5 className="white-text center">{this.props.name}</h5>
                </div>
          </footer>
        </div>
    )
  }
}
export default Footer ;
