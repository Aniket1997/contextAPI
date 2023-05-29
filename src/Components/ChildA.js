import React from 'react';
import ChildB from './ChildB';

const ChildA = ({ name, onNameSubmit, onVerification }) => {
  const handleSubmit = () => {
    onNameSubmit(name);
  };

  return (
    <div>
      
      <ChildB name={name} onNameSubmit={handleSubmit} onVerification={onVerification} />
    </div>
  );
};

export default ChildA;
