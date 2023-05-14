import { useLoaderData } from 'react-router-dom'
import './App.css'
import FoodCard from './component/FoodCard'

function App() {

  const foods = useLoaderData()

  return (
    <>
      <h1 className='text-5xl font-bold'>Foood store data in {foods.length} </h1>

      <div className='grid md:grid-cols-2 gap-4 w-4/6 mx-auto'>
        {
          foods.map(food=><FoodCard
          key={food._id}
          food={food}
          ></FoodCard>)
        }
      </div>
    </>
  )
}

export default App
