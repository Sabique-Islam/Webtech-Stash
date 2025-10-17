import { useState, useContext, createContext } from 'react';

const MyContext = createContext();

const Context = () => {
    const [value, setValue] = useState("Hello, World!");
  return (
    <MyContext.Provider value={value}>
      <Child />
      <button onClick={() => setValue("Hello, Universe!")}>Change Value</button>
    </MyContext.Provider>
  );
}

const Child = () => {
  const value = useContext(MyContext);
  return <h1>{value}</h1>;
}

export default Context
