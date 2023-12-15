import React, {useState} from 'react'

export const Form = ({onSubmit, inputChange, nameMovie}) => {

    return (
      <form onSubmit={ onSubmit }>
            <input type        = 'text'
                  placeholder = 'Search for Movie'
                  value       = {nameMovie}
                  name        = 'title'
                  onChange    = {inputChange}
            />
          </form>
    );
}
