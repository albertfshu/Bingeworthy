import { reset, filter } from "./store/searchSlice";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const Search = () => {
  let { searchParam } = useParams();
  const [searchCriteria, setSearchCriteria] = useState(searchParam);
  const dispatch = useDispatch();
  if (searchParam) {
    dispatch(filter(searchCriteria))
    console.log("test")
  }


  // if (searchParam) {
  //   console.log(searchParam)
  //   setSearchCriteria(searchParam)
  //   searchParam = null
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", searchCriteria);
    dispatch(filter(searchCriteria));
  };

  return (
    <>
      <form className="row" onSubmit={handleSubmit}>
        <div className="col">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Search"
            value={searchCriteria}
            onChange={(e) => setSearchCriteria(e.target.value)}
          />
        </div>
        <div className="col">
          <button className="btn btn-lg btn-success" type="submit">
            Search
          </button>
          <button
            className="btn btn-lg btn-link"
            type="button"
            onClick={() => {
              dispatch(reset());
              setSearchCriteria("");
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
