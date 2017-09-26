import React, { Component } from 'react';
class Body extends Component {

  render () {
    return (
      <div>
        <h1>{this.props.name} </h1>
        <form onSubmit={ e => {
            this.props.changeName(e.target.changeName.value)
            e.target.changeName.value = ""
            e.preventDefault()
          }} >
          <input type='text' name='changeName'/>
          <button type='submit'>Change Name</button>
        </form>
      </div>
    )
  }
}
export default Body;
