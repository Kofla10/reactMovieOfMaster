import { useEffect, useState } from 'react'

import { useFetch } from '../helpers/useFetch';

export const getDataMovie = (title) => {

  const [dataMovie, setDataMovie] = useState();

  const getPost = async () => {
  const data = await useFetch(title);
    setDataMovie(data);
  }

  useEffect(() => {
    getPost();
  }, [title])

  return dataMovie;
}