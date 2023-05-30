import React,{useCallback} from 'react';
import ChildB from './ChildB';

const ChildA = ({ name, onNameSubmit, onVerification }) => {
  const handleSubmit = useCallback(() => {
    onNameSubmit(name);
  }, [name, onNameSubmit]);

  return (
    <div>
      
      <ChildB name={name} onNameSubmit={handleSubmit} onVerification={onVerification} />
    </div>
  );
};

export default ChildA;
