import React, { useState } from 'react';
import ChildA from './ChildA';

const GetName = () => {
  const [name, setName] = useState('');
  const [verified, setVerified] = useState('');

  const handleNameSubmit = (data) => {
    setName(data);
  };

  const handleVerification = (isChecked) => {
    setVerified(isChecked ? 'Verified by Component A' : 'Something went wrong');
  };

  return (
    <div>
      <ChildA name={name} onNameSubmit={handleNameSubmit} onVerification={handleVerification} />
      {verified && <p>Verification: {verified}</p>}
    </div>
  );
};

export default GetName;
