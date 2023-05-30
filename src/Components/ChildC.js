import React, { useState,useCallback } from 'react';

const ChildC = ({ name, onVerification }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = useCallback((event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    onVerification(checked);
  }, [onVerification]);

  return (
    <div>
      <p>Received Name: {name}</p>
      {name && (
        <div>
          <label>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            Verify Data
          </label>
        </div>
      )}
    </div>
  );
};

export default ChildC;
