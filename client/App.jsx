import React from 'react'

import Cats from './Cats'

const cats = [
  {name: 'Engie'},
  {name: 'Harrison'},
  {name: 'Kelly'}
]

const App = () => (
  <div className='app-container section'>
    <h1>Hello World</h1>
    <Cats cats={cats} />
  </div>
)

export default App
