import React, {useEffect, useRef, useState} from 'react';

import './search-container.styles.scss';

const SearchContainer = ({setTerm}) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setTerm(inputValue);
    setInputValue('');
  };

  return (
    <section>
      <form action="search" className="search__form" onSubmit={handleOnSubmit}>
        <label htmlFor="search">Search Movies</label>
        <input
          type="text"
          name="search"
          value={inputValue}
          onChange={handleOnChange}
          ref={inputRef}
        />
        <button className="kave-btn">
          <span className="kave-lin"></span> Search
        </button>
      </form>
    </section>
  );
};

export default SearchContainer;
