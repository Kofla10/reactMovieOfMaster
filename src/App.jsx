import './App.css';
import { Form } from './hooks/Form';
import { GetImage } from './hooks/GetImage';
import { getDataMovie } from './hooks/getDataMovie';

const dataForm = {
  titleMovie: 'batman'
}

const App = () => {
  
  const dataMovie = getDataMovie({dataForm});
  console.log(dataMovie)
  
  return (
    <div className='app'>
      <h1> MoviLand </h1>
      <div className='search'>
          <Form   { ...dataForm }/>
      </div>
      <div>
        {
         dataMovie && dataMovie.length > 0
         ? dataMovie.map((data) => {
             <GetImage key={data.imdbId} />
            
           })
         : console.log('when you charge the data, fist charge is null')
        }
      </div>
      <hr />
    </div>
  )
}

export default App;