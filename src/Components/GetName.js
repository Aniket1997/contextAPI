import React, { useState } from 'react';
import ChildA from './ChildA';

const GetName = () => {
  const [name, setName] = useState('');
  const [verified, setVerified] = useState('');
  const [received,setReceivedName] = useState('');
  const handleNameSubmit = (data) => {
    setName(data);
  };

  const handleVerification = (isChecked) => {
    setVerified(isChecked ? 'Verified' : 'Something went wrong');
  };
  const handleSubmit = () => {
    setReceivedName(name);
  };
  const handleInputChange=(e)=>{
    setName(e.target.value)
  }
  return (
    <div>
      <input type="text" value={name} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
      <ChildA name={received} onNameSubmit={handleNameSubmit} onVerification={handleVerification} />
      {verified && <p>Verification: {verified}</p>}
    </div>
  );
};

export default GetName;
