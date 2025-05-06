import React from 'react'

const FruitList = ({fruits}) => {

const fruitList = fruits.map((fruit)=> <li> {fruit} </li>) 
  return (
   <ul className='list_tems'>
    {fruits.length === 0 ? 'No fruits availbale': fruitList}
   </ul>
  )
}

export default FruitList