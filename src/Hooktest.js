import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
} from 'react';

function Hooktest(props) {
  const [text, setText] = useState('');
  const inputRef = useRef(null);
  const UserContext = createContext();

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
    <UserContext.Provider value={props.name}>
      <div>
        <form>
          <h1> Hello Usehook </h1>
          <p>
            {text}
            {props.name}
          </p>
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
        <UseContextCompo />
      </div>
    </UserContext.Provider>
  );

  function UseContextCompo() {
    const name = useContext(UserContext);
    return <h1>Hello World {name}</h1>;
  }
}

export default Hooktest;
