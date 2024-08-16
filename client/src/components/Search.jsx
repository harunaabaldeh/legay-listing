import { useState } from "react";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const data = {
      keyword: keyword,
      location: location,
      company: company,
    };
    console.log(data);
  };

  return (
    <>
      <div className="search">
        <h2>Find your dream job</h2>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="keywords"
            placeholder="Keywords"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            onChange={(e) => setCompany(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default Search;
