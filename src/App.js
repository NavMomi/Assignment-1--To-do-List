import React, { Component } from 'react'
import ListItem from './components/listItem/ListItem'
import AddItem from './components/addItem/AddItem'
import './App.css'
class App extends Component {
  state = {
    items : [
      {id: 1, action: "first Task"},
      {id: 2, action: "second Task"},
      {id: 3, action: "third Task"},
    ]
  }

  itemDelete = (id) => {
    let items = this.state.items
    let i = items.findIndex( (item) => item.id === id)
    items.splice(i, 1)
    this.setState({
      items: items
    })
  }
  addItem = (item) => {
    let items = this.state.items
    items.push(item)
    this.setState({
      items: items
    })
  }

  render() {
    return (
      <div>
        <h1 className='title'>To Do List</h1>
        <AddItem addItem={this.addItem}/>
        <ListItem task={this.state.items} itemDelete={this.itemDelete}/>
      </div>
    )
  }
}

export default App;