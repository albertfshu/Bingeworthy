import { reset, filter } from "./store/searchSlice";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const Search = () => {
  let { searchParam } = useParams();
  const [year, setYear] = useState('')
  const [region, setRegion] = useState('')
  const [searchCriteria, setSearchCriteria] = useState(searchParam);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", searchCriteria);
    let dispatchStr = searchCriteria;
    if (year !== "") {
      dispatchStr += "&year=" + year
    }
    dispatch(filter(dispatchStr));
  };

  return (
    <>
      <form className="grid grid-cols-[16fr,3fr,minmax(200px,200px)] mx-12" onSubmit={handleSubmit}>
        <div className="col">
          <input
            className="form-control form-control-lg w-full text-4xl"
            type="text"
            placeholder="Search"
            value={searchCriteria}
            onChange={(e) => setSearchCriteria(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            className="form-control form-control-lg w-full text-4xl"
            type="text"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="col">
          <button className="text-white text-xl bg-teal-700 w-1/2 h-full" type="submit">
            Search
          </button>
          <button
            className="text-white text-xl bg-red-700 w-1/2 h-full"
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
