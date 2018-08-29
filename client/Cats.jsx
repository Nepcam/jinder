import React from 'react'

import Cat from './Cat'

export default function Cats (props) {
  const cats = props.cats
  return (
    <div>
      {cats.map((cat, i) => <Cat cat={cat} />)}
    </div>
  )
}
