import './App.css';

import { getDataMovie } from './hooks/getDataMovie';

const App = () => {

  const dataMovie = getDataMovie('Spiderman')
  console.log(dataMovie)

  return (
    <h1>App</h1>
  )
}

export default App;