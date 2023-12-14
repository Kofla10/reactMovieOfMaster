import {useState} from 'react'

export const useForm = (initialForm) => {

    const [ form, setForm ] = useState(initialForm);

    const handleInputChange = ({target}) => {
        const {name, value} = target;

        setForm({
                ...form,
                [ name ]: value
        });
        console.log(form)
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
    };

    return {
        ...form,
        form,
        handleInputChange,
        handleOnSubmit
    };
}
