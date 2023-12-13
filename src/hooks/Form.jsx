import React from 'react'
import { useForm } from './useForm';

export const Form = (dataForm) => {

  const { handleInputChange, handleOnSubmit,form, titleMovie } = useForm( dataForm );

  return (
    <form onSubmit={ handleOnSubmit }>
          <input type        = 'text'
                 placeholder = 'Search for Movie'
                 value       = {titleMovie}
                 name        = 'titleMovie'
                 onChange    = {handleInputChange}
          />
        </form>
  );
}
