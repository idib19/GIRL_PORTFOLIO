import React from 'react';

const TextAnim = () => {
  return (
    <>
      <link rel="stylesheet" href="/styles/text.css" />
      
        <span className="waviy">
          <span style={{ '--i': 1 }}>A</span>
          <span style={{ '--i': 2 }}>R</span>
          <span style={{ '--i': 3 }}>M</span>
          <span style={{ '--i': 4 }}>E</span>
          <span style={{ '--i': 5 }}>L</span>
          <span style={{ '--i': 6 }}>L</span>
          <span style={{ '--i': 7 }}>E</span>
        </span>
     
    </>
  );
};

export default TextAnim;
