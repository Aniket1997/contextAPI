import React,{useState} from 'react'
import ChildA from './ChildA';

const GetName = () => {
<<<<<<< Updated upstream
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
=======
  const [name, setName] = useState('');
  const [verified, setVerified] = useState('');
  const [receivedName,setReceivedName] = useState("");
  const handleNameSubmit = (data) => {
    setName(data);
  };

  const handleVerification = (isChecked) => {
    setVerified(isChecked ? 'Verified by Component A' : 'Something went wrong');
  };
  const handleSubmit = () => {
    console.log(name)
   
    setReceivedName(name);
    
  };

  const handleInputChange=(e)=>
  {
    setName(e.target.value);
  }
  return (
    <div>
      <input type="text" value={name} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
       <ChildA name={receivedName} onNameSubmit={handleNameSubmit} onVerification={handleVerification} />
      {verified && <p>Verification: {verified}</p>} 
    </div>
  );
};
>>>>>>> Stashed changes

export default GetName