import React, { useCallback } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import DragableItem from './DragableItem';

function DragableList({ list, dispatch }) {
  const onDragEnd = useCallback(droppedItem => dispatch({ type: 'dragAndDrop', droppedItem }), [dispatch]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="ingredient-list">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((item, index) => (
              <DragableItem key={item.key} item={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DragableList;
