import './App.css'
import { Operation } from './components/Operation'

function App() {

  const { handleSum, num, handleSubtract} = Operation();
  console.log(num)

  return (
    <>

     <button onClick={handleSubtract} > - </button>
     <br />

     <div className='value'> Value: { num }</div>

     <br />
     <button onClick={ handleSum }> + </button>

    </>
  )
}

export default App
