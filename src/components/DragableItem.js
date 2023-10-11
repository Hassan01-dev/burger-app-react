import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

function DragableItem({ item, index }) {
  return (
    <Draggable key={item.key} draggableId={`${item.key}`} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {item.value}
        </div>
      )}
    </Draggable>
  )
}

export default DragableItem