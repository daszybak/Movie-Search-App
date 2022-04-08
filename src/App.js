import React, {useState} from 'react';

import {SearchContainer, MovieContainer} from './components';

import './App.css';

function App() {
  const [term, setTerm] = useState('');

  return (
    <>
      <SearchContainer setTerm={setTerm} />
      <MovieContainer term={term} />
    </>
  );
}

export default App;
