import React, {useEffect, useRef, useState} from 'react'
import {calculatePrice, ingredientList, createSnapshot} from '../common/BurgerCommonFunctionality'
import useIngredient from '../hooks/useIngredient'
import IngrdientsList from './DragableList'
import '../styles/burger.css'

function Burger() {
  const burger = useRef(null)
  const [keyCount, setKeyCount] = useState(1)
  const [price, setPrice] = useState(1)
  const [ingredients, dispatch] = useIngredient()

  const addIngredient = ingredient => {
    dispatch({type: 'addIngredient', key: keyCount, ingredientType: ingredient, removeAction: handleRemoveIngredient})
    setKeyCount(keyCount + 1)
  }

  const handleRemoveIngredient = (id) => dispatch({type: 'removeIngredient', key: id})
  const handleRemoveAllIngredients = () => {
    if (window.confirm("Are you sure, you want to remove all ingredients") === true){
      dispatch({type: 'removeAllIngredients'})
      setKeyCount(0)
    }
  }

  const handleOrderBurger = () => {
    prepareBurger()
    createSnapshot(burger.current, 'jango_burger')
    dispatch({type: 'removeAllIngredients'})
    setKeyCount(0)
  }

  const prepareBurger = () => {
    console.log('Burger Preparing')
  }

  useEffect(() => setPrice(calculatePrice(ingredients)), [ingredients])

  return (
    <div>
      <h1>Welcome to Online Jango Burger(Burrgeer)</h1>
      <div className='container'>
        <div className='sidebar-menu'>
          <h3>Burger Ingredients</h3>
          <div className='burger-actions'>
            { ingredientList.map((ingredient, index) => <button key={index} className='btn' onClick={() => addIngredient(ingredient)}>Add {ingredient}</button>) }
          </div>
          { ingredients.length > 0 && (
            <>
              <div>
                <h4>To remove all the ingredients</h4>
                <button className='btn' onClick={handleRemoveAllIngredients}>Remove all ingredients</button>
              </div> 
              <div>
                <h4>To Order the burger</h4>
                <button className='btn' onClick={handleOrderBurger}>Order your Burger</button>
              </div>
            </>
            ) 
           
          }
        </div>
        <div className='burger-wrapper'>
          <h3>Price: {price.toFixed(2)}$</h3>
          <div ref={burger} style={{padding: '16px 0px'}}>
            <div className="burger">
              <div><img src='images/top_bread.jpg' alt="top_bread" /></div>
              <IngrdientsList list={ingredients} dispatch={dispatch} /> 
              <div><img src='images/bottom_bread.jpg' alt="bottom_bread" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Burger
