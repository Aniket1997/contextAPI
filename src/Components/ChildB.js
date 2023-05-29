import React from 'react';
import ChildC from './ChildC';

const ChildB = ({ name, onVerification }) => {
  return <ChildC name={name} onVerification={onVerification} />;
};

export default ChildB;
