import React, { createContext, useContext } from 'react';

const UserContext = createContext();

function Componet_1(props) {
  return (
    <UserContext.Provider value={props.name}>
      <div>
        <h1>Compo 1 user context {props.name} </h1>
        <Componet_2 />
      </div>
    </UserContext.Provider>
  );
}

function Componet_2() {
  return (
    <div>
      <h1>Compo 2 user context </h1>
      <Componet_3 />
    </div>
  );
}

function Componet_3() {
  const name = useContext(UserContext);
  return <h1>Compo 3 user context {name}</h1>;
}

export default Componet_1;
