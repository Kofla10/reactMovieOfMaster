import './App.css';

import { getDataMovie } from './hooks/getDataMovie';
import { useForm } from './hooks/useForm';

const dataForm = {
  titleMovie: ''
}

const App = () => {

  const { form, handleInputChange } = useForm( dataForm )
  const { titleMovie } = form;

  const dataMovie = getDataMovie(titleMovie)

  return (
    <div className='app'>
      <h1> MoviLand </h1>
      <div className='search'>
        <input type        = 'text'
               placeholder = 'Search for Movie'
               value       = {titleMovie}
               name        = 'titleMovie'
               onChange    = {handleInputChange}
        />

      </div>

    </div>
  )
}

export default App;