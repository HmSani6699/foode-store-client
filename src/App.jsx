import { useLoaderData } from 'react-router-dom'
import './App.css'
import FoodCard from './component/FoodCard'
import { useState } from 'react';

function App() {

  const LoaddedFoods = useLoaderData();

  const [foods,setFoods] = useState(LoaddedFoods)

  return (
    <>
      <h1 className='text-5xl font-bold'>Foood store data in {foods.length} </h1>

      <div className='grid md:grid-cols-2 gap-4 w-4/6 mx-auto'>
        {
          foods.map(food=><FoodCard
          key={food._id}
          food={food}
          foods={foods}
          setFoods={setFoods}
          ></FoodCard>)
        }
      </div>
    </>
  )
}

export default App
