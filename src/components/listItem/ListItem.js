import React, { Component } from 'react'
import './ListItem.css'

class ListItem extends Component {
  render() {
    let task = this.props.task
    let tasks = task.map( (item) => {
        return ( 
            <div key={item.id} className='container'>
                <span className='secondItem'>{item.action}</span>
                <span onClick={() => this.props.itemDelete(item.id)} className='close'>&times;</span>
            </div>
        )
    })
    return (
      <div>{tasks}</div>
    )
  }
}

export default ListItem;