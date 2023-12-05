import { useEffect } from 'react';
import './App.css'
import { Operation } from './components/Operation'

function App() {

  const { handleSum, num, handleSubtract, handleChandeValue} = Operation();
  console.log(num)

  useEffect(() => {
    if(num === 15){
      handleChandeValue(100)
    } else if(num > 100){
      alert('this is a test');

    }
  }, [num])


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
