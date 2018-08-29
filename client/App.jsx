import React from 'react'

import Cats from './Cats'
import AddCat from './AddCat'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: [
        {name: 'Engie'},
        {name: 'Harrison'},
        {name: 'Kelly'}
      ]
    }
    this.addCat = this.addCat.bind(this)
  }
  addCat(cat) {
    const cats = this.state.cats
    cats.push(cat)
    this.setState({cats})
  }
  render() {
    const {cats} = this.state
    return (
      <div className='app-container section'>
        <h1>Hello World</h1>
        <Cats cats={cats} />
        <AddCat addCat={this.addCat} />
      </div>
    )
  }
}

export default App
