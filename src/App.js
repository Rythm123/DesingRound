import logo from './logo.svg';
import './App.css';
import Body from './Components/Body';
import AppContext from './utils/AppContext';
import { useState } from 'react';

function App() {
  const [searchText,setSearchText]=useState('');
  return (
    <AppContext.Provider value={{searchText,setSearchText}}>
      <Body />
    </AppContext.Provider>
  );
}

export default App;
