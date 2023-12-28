const styleform = {
  backgraoundColor: "yellow",
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const styleInput = {
  width: "25vw",
  height: "5vh",
  marginLeft: "10px",
  border: "0px",
  borderRadius: "3px 0 0 3px",
};
const styleButton = {
  width: "3vw",
  height: "5.5vh",
  border: "0px",
  backgroundColor: "rgba(255,255,255,0.5)",
  borderRadius: "0 3px 3px 0",
};
const Search = () => {
  return (
    <div>
      <form className="App" id="Form" style={styleform}>
        <label htmlFor="search" style={{ fontSize: "2rem" }}>
          Search:
        </label>
        <input style={styleInput} id="search" />
        <button style={styleButton}>
          <img
            alt=""
            src="https://sandpack-bundler.vercel.app/img/arrow-right.svg"
          />
        </button>
      </form>
    </div>
  );
};

export default Search;
