import React from 'react';
export default function Button({ text, onClick, style }) {
  return (
    <div>
      <button onClick={onClick} style={{ style }}>
        {text}
      </button>
    </div>
  );
}
