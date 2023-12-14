import React, {useState} from 'react'


export const Form = ({onSubmit, inputChange, title}) => {

    return (
      <form onSubmit={ onSubmit }>
            <input type        = 'text'
                  placeholder = 'Search for Movie'
                  value       = {title}
                  name        = 'titleMovie'
                  onChange    = {inputChange}
            />
          </form>
    );
}
