import React, { useState } from 'react';

import './App.css';
import { Form } from './hooks/Form';
import { GetImage } from './hooks/GetImage';
// import { getDataMovie } from './hooks/getDataMovie';

import {useForm} from './hooks/useForm'
import { getDataMovie } from './hooks/getDataMovie';

const dataForm = {
  "Title" : 'batman',
  "Year"  : 0,
  "imdbID": "",
  "Type"  : '',
  "Poster": ''
}

const App = () => {

  const {movie, nameMovie, handleOnSubmit, handleInputChange } = useForm();
  

  const dataMovie = getDataMovie(movie);
  console.log(dataMovie);



  return (
    <div className='app'>
      <h1> MoviLand </h1>
      <div className='search'>
          <Form
            onSubmit    = {handleOnSubmit}
            inputChange = { handleInputChange }
            nameMovie = { nameMovie }
          />
      </div>
      <div>
         {
          // dataForm.forEach(data => {
          //   console.log(data)
          // })
        }
      </div>
      <hr />
    </div>
  )
}

export default App;