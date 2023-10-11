import {useReducer} from 'react'
import Ingredient from '../components/Ingredient'

const initialIngredientList = []
const reducer = (state, action) => {  
  switch(action.type) {
    case 'addIngredient':
      return [{'value': <Ingredient position={action.key} type={action.ingredientType} onDelete={action.removeAction} />, 'key': action.key, type: action.ingredientType}, ...state]
    case 'removeIngredient':
      return state.filter(element => element.key !== +action.key)
    case 'removeAllIngredients':
      return initialIngredientList
    case 'dragAndDrop':
      const { droppedItem } = action
      // Ignore drop outside droppable container
      if (!droppedItem.destination) return state;
      var updatedList = [...state];
      // Remove dragged item
      const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
      // Add dropped item
      updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
      // Update State
      return updatedList
    default:
      return state  
  }
}

const useIngredient = () => useReducer(reducer, initialIngredientList)

export default useIngredient