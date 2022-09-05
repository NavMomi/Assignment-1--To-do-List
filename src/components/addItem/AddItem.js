import React, { Component } from 'react'
import './AddItem.css'

class AddItem extends Component {
  state = {
    id: '',
    action: ''
  }

  handleChange = (e) => {
    let id = Math.random()
    this.setState({
      id: id,
      action : e.target.value
    })
  }

  handlSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state)
    this.setState({
      id: '',
      action: ''
    })
  }

  render() {
    return (
      <div className='taskContainer'>
        <form onSubmit={this.handlSubmit}>
          <input type="text" placeholder=' Write Your Task' className='inpu' onChange={this.handleChange} value={this.state.action}/>
          <input type='submit' value='Add' className='btn'/>
        </form>
      </div>
    )
  }
}


export default AddItem;