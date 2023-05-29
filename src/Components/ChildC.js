import React, { useState } from 'react';

const ChildC = ({ name, onVerification }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    onVerification(checked);
  };

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
