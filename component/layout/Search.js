import React, { useEffect, useState } from "react";

/**
 * https://stackoverflow.com/questions/65558652/how-do-i-fetch-search-results-from-multiple-api-using-reactjs
 */

function Search() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const urls = [
      "https://arshi365.lamptechs.com/api/admin/products",
      "https://arshi365.lamptechs.com/api/admin/todaysDeal",
    ];

    Promise.all(
      urls.map((url) =>
        fetch(url)
          .then((response) => response.json())
          .then((data) => setResults(data))
          .catch((error) => console.log("There was a problem!", error))
      ),
      []
    );
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value.toLowerCase());
  };

  return (
    <div className="search" htmlFor="search-input">
      <input
        type="text"
        name="query"
        value={input}
        id="search"
        placeholder="Search"
        onChange={handleChange}
      />
      {console.log("results", results)}
    </div>
  );
}
export default Search;
