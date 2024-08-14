const Search = () => {
  return (
    <>
      <div className="search">
        <h2>Find your dream job</h2>
        <form action="#" method="get">
          <input type="text" name="keywords" placeholder="Keywords" />
          <input type="text" name="location" placeholder="Location" />
          <input type="text" name="company" placeholder="Company" />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default Search;
