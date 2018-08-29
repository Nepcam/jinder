import React from 'react'

import Cat from './Cat'

export default function Cats (props) {
  const cats = props.cats
  return (
    <div>
      <h1 className="title">Cats go here!</h1>
      {cats.map((cat, i) => <Cat cat={cat} />)}
    </div>
  )
}
