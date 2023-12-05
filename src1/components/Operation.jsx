import { useState } from 'react'

export const Operation = () => {

    const [num, setNum] = useState(1);

    const handleSum = () =>{
        setNum( num + 1);
    }

    const handleSubtract = () => {
        if( num <= 0) {
            alert('The number cannot be negative');
            return;
        }

        setNum(num - 1);
    }

    const handleChandeValue = (num) => {
        setNum(num)
    }


    return {
        num,
        handleChandeValue,
        handleSum,
        handleSubtract
    }
}
