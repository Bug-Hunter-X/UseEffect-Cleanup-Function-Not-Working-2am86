```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      // Cleanup function
      console.log('Component unmounted');
      setIsMounted(false);
    };
  }, []);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  // This handles the edge case of unmounting before the state update
  useEffect(()=>{
    return ()=>{
      setIsMounted(false);
    }
  },[isMounted]);

  return (
    <div>
      {isMounted && (
        <>
          <p>Count: {count}</p>
          <button onClick={handleClick}>Increment</button>
        </>
      )}
    </div>
  );
}

export default MyComponent;
```