import { reset, filter } from "./store/searchSlice";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetLanguagesQuery } from "./store/apiSlice";

const Search = () => {
  let { searchParam } = useParams();
  const [year, setYear] = useState('')
  const [language, setLanguage] = useState('')
  const [checked, setChecked] = useState(false)
  const [searchCriteria, setSearchCriteria] = useState(searchParam);
  const { data, isLoading } = useGetLanguagesQuery();

  const dispatch = useDispatch();

  const handleChange = () => {
    setChecked(!checked);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", searchCriteria);
    let dispatchStr = searchCriteria;
    if (searchCriteria == undefined) {
      dispatchStr = ""
    }
    else {
      if (year !== "") {
        dispatchStr += "&year=" + year
      }
      if (language !== "") {
        dispatchStr += "&language=" + language
      }
      if (checked == true) {
        dispatchStr += "&include_adult=true"
      }
    }

    console.log(dispatchStr)
    dispatch(filter([searchCriteria, dispatchStr]));
  };


  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-[1fr,minmax(200px,200px)] mx-12 py-6" >
          <div>
            <input
              className="form-control form-control-lg w-full text-4xl text-black"
              type="text"
              placeholder=" Search"
              value={searchCriteria}
              onChange={(e) => setSearchCriteria(e.target.value)}
              required
            />
          </div>
          <div>
            <button className="text-white text-xl bg-teal-700 w-1/2 h-full" type="submit">
              Search
            </button>
            <button
              className="text-white text-xl bg-red-700 w-1/2 h-full"
              type="button"
              onClick={() => {
                dispatch(reset());
                setSearchCriteria("");
                setYear("");
                setLanguage("");
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="grid grid-cols-[1fr,1fr,1fr] mx-12" >
          <div>
            <label htmlFor="year" className="inline text-2xl">Year:</label>
            <input
              id="year"
              className="form-control form-control-lg w-28 text-2xl my-3 ml-8 text-black"
              type="text"
              placeholder=" ex. 1960"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="region" className="inline text-2xl">Language:</label>
            <select
              className="form-control form-control-lg w-28 text-2xl my-3 ml-8 text-black"
              id="region"
              placeholder="Region"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="">Any</option>
              {data.map((language) => (
                <option key={language.iso_639_1} value={language.iso_639_1}>{language.english_name}</option>
              ))}
            </select>
          </div>
          <div><div className="my-3">
            <label htmlFor="adult" className="text-2xl">
              Include Adult?
            </label>
            <input
              id="adult"
              className="h-6 w-6 ml-8"
              type="checkbox"
              checked={checked}
              onChange={handleChange}
            />
          </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
