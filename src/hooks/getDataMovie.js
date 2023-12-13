import { useEffect, useState } from 'react'

import { useFetch } from '../helpers/useFetch';

export const getDataMovie = ({dataForm}) => {
  const { titleMovie } = dataForm;

  const [dataMovie, setDataMovie] = useState();

  const getPost = async () => {
    const data = await useFetch(titleMovie);
    setDataMovie(data.Search);
  }

  useEffect(() => {
    getPost();
  }, [titleMovie])

  return dataMovie;
  
}