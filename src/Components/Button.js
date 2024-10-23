import React from 'react'

const Button = ({onClick, props}) => {
  return (
    <button onClick={onClick} className="button">{props}</button>
  )
}

export default Button