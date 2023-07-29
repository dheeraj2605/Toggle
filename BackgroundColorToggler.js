import React, { useState } from 'react';

const BackgroundColorToggler = () => {
  const [isBackgroundDark, setBackgroundDark] = useState(false);

  const toggleBackgroundColor = () => {
    setBackgroundDark((prevState) => !prevState);
  };

  const bgColor = isBackgroundDark ? 'black' : 'white';
  const textColor = isBackgroundDark ? 'white' : 'black';

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
      }}
    >
      <button onClick={toggleBackgroundColor}>Toggle Background</button>
    </div>
  );
};

export default BackgroundColorToggler;
