import { useLoaderData } from 'react-router-dom'
import './App.css'

function App() {

  const foods = useLoaderData()

  return (
    <>
      <h1 className='text-5xl font-bold'>Foood store data in {foods.length} </h1>
    </>
  )
}

export default App
