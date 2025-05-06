
import './App.css'
import Counter from './Counter'
import FruitList from './FruitList'
import SignupForm from './SignupForm'


function App() {
  const fruits = ['Apple','Banana', 'Cherry', 'Date', 'Elderberry']

 

  return (
    <>
      <Counter />
      <FruitList fruits={ fruits} />
      <SignupForm />
    </>
  )
}

export default App
