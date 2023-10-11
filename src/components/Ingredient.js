import React, { useState } from 'react'

function Ingredient({position, type, onDelete}) {
  const [isHover, setIsHover] = useState(false)

  return (
    <div draggable className={`ingredients ${type}`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      { isHover && <button className="remove-ingredient-icon" onClick={() => onDelete(position)}>x</button> }
    </div>
  )
}

export default Ingredient
