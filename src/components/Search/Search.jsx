import React, {useState} from 'react';

import {IoSearchOutline} from 'react-icons/io5';

const Search = () => {
  const [inputFocus, setInputFocus] = useState(false);

  const handleInputOnFocus = () => {
    setInputFocus(true);
    console.log(inputFocus);
  };

  const handleInputOnBlur = () => {
    setInputFocus(false);
    console.log(inputFocus);
  };

  return (
    <form className={`flex `}>
      <input
        type="text"
        name="search"
        id="search"
        className={`rounded-l-sm border border-blue h-8 xl:w-[250px] focus:outline-none shadow-[0px_0px_1px_#764abc] ease-in-out duration-200 ${
          inputFocus ? 'shadow-[0px_0px_1px_#000000] border-0' : ''
        }`}
        placeholder="Search stonks..."
        onFocus={handleInputOnFocus}
        onBlur={handleInputOnBlur}
      />
      <button
        type="submit"
        className={`bg-blue px-4 rounded-r-sm ${
          inputFocus ? 'shadow-[0px_0px_1px_#764abc]' : ''
        }`}
      >
        <IoSearchOutline className="text-white" size="20px" />
      </button>
    </form>
  );
};

export default Search;
