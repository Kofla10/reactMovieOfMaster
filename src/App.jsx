import React, { useState } from 'react';

import './App.css';
import { Form } from './hooks/Form';
import { GetImage } from './hooks/GetImage';
import { getDataMovie } from './hooks/getDataMovie';

import {useForm} from './hooks/useForm'

const dataForm = {
  titleMovie: ''
}

const App = () => {

  const [chaneData, setChaneData] = useState(dataForm)
  const { titleMovie } = dataForm;

  const dataMovie = getDataMovie(dataForm.titleMovie);

  const { form, handleOnSubmit, handleInputChange } = useForm(dataForm);

  return (
    <div className='app'>
      <h1> MoviLand </h1>
      <div className='search'>
          <Form
            onSubmit    = {handleOnSubmit}
            inputChange = { handleInputChange }
            title       = {dataForm.titleMovie}
          />
      </div>
      <div>
        {/* {
          dataMovie.map((data) => {
            <GetImage key={data.imdbId} />
          })
        } */}
      </div>
      <hr />
    </div>
  )
}

export default App;