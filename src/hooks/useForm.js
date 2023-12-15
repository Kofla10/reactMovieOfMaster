import {useState} from 'react'

export const useForm = () => {

    const [nameMovie, setNameMovie] = useState('');
    const [movie, setMovie] = useState('');

    const handleInputChange = ({target}) => {
        const {value} = target;
        setNameMovie(value)
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        setMovie(nameMovie);
    };

    return {
        movie,
        nameMovie,
        handleInputChange,
        handleOnSubmit
    };
}
