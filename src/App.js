import React from 'react';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import UseEffect from './components/UseEffect';
import UseStateArray from './components/UseStateArray';
import ComponentC from './components/ComponentC';
import UseReduce from './components/UseReduce';
import UseReducer2 from './components/UseReducer2';
import DataFetch from './components/DataFetch';
import DataFetchReducer from './components/DataFetchReducer';
import Parent from './components/Parent';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
// import UseStateObject from './components/UseStateObject';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateArray /> */}
      {/* <UseEffect /> */}
      {/* <UserContext.Provider value={'Moulvik'}>
        <ChannelContext.Provider value={'coder'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <UseReduce /> */}
      <UseReducer2 />
      {/* <DataFetch /> */}
      {/* <DataFetchReducer /> */}
      {/* <Parent /> */}
      {/* <FocusInput /> */}
      {/* <ClassTimer /> */}
    </div>
  );
}

export default App;
