import React, { useState, useEffect, useRef } from 'react';

function Hooktest() {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    document.body.style.background = 'red';
    document.title = 1;
    console.log('oooo');
    return () => {
      console.log('oottoo');
    };
  }, []);
  function click(e) {
    e.preventDefault();
    inputRef.current.focus();
  }
  return (
    <div>
      <form>
        <h1> Hello Usehook </h1>
        <p>{text}</p>
        <input
          type="text"
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
        />
        <button>submit</button>
        <br />
        <br />
        <input type="text" />
        <button onClick={click}>submit</button>
      </form>
    </div>
  );
}

export default Hooktest;
