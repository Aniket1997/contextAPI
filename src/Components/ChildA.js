import React from 'react';
import ChildB from './ChildB';

<<<<<<< Updated upstream
const ChildA = ({ name }) => {
  return <ChildB name={name} />;
=======
const ChildA = ({ name, onVerification }) => {
   
  
  return (
    <div>
    
       <ChildB name={name} onVerification={onVerification} />
    </div>
  );
>>>>>>> Stashed changes
};

export default ChildA;
