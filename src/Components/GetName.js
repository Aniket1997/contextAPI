import React,{useState} from 'react'
import ChildA from './ChildA';

const GetName = () => {
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    

    return (
        <>
            <input type="text" value={name} onChange={handleNameChange} />
        
            <ChildA name={name}/>
        </>
    )
}

export default GetName