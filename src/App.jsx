import './App.css';
import { Form } from './hooks/Form';
import { getDataMovie } from './hooks/getDataMovie';


const dataForm = {
  titleMovie: 'batman'
}

const App = () => {
  

  const dataMovie = getDataMovie({dataForm});
  

  return (
    <div className='app'>
      <h1> MoviLand </h1>
      <div className='search'>
          <Form   { ...dataForm }/>
      </div>
      <div>
        {/* {
          dataMovie.map((data) =>{
            console.log(data)
          })
        } */}
      </div>
      <hr />
    </div>
  )
}

export default App;