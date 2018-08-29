import React from 'react'

export default function Cat (props) {
  return (
    <div>
      <h1 className="title">{props.cat.name} goes here!</h1>
    </div>
  )
}
