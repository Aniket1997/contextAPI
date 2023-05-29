import React, { useState } from 'react';
import ChildB from './ChildB';

const ChildA = ({ name, onNameSubmit, onVerification }) => {
    const [receivedName,setReceivedName] = useState("");
  const handleSubmit = () => {
    console.log(name)
    setReceivedName(name)
    onNameSubmit(name);
    
  };

  const handleInputChange=(e)=>
  {
    onNameSubmit(e.target.value);
  }
  return (
    <div>
      <input type="text" value={name} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
      <ChildB name={receivedName} onVerification={onVerification} />
    </div>
  );
};

export default ChildA;
