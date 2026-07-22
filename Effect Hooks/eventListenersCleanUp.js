import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  // your code here

  const increment = () => setClickCount((prev) => prev + 1);

  useEffect(() => {
    document.addEventListener('mousedown', increment);

    // Cleanup function to remove the event listener when the component unmounts or before the next effect runs.
    return () => {
      document.removeEventListener('mousedown', increment);
    }
  })

  return (
      <h1>Document Clicks: {clickCount}</h1>
  );
}

