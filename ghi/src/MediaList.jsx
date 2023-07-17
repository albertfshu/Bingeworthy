import { useSelector } from "react-redux";
import {
  useGetPopularMoviesQuery,
  useGetPopularTVQuery,
} from "./app/apiSlice";

const MediaList = () => {
  const searchCriteria = useSelector((state) => state.search.value);
  const { popMovData, isPopMovLoading } = useGetPopularMoviesQuery();
  const { popTVData, isPopTVLoading} = useGetPopularTVQuery();
  const { data, isLoading } = useGetPopularMoviesQuery();

  const filteredMedia = () => {
    if (searchCriteria) {
        // CHECK DATA STRUCTURE FROM DATA for the filter includes
      return data.filter((searchTearm) => searchTerm.name.includes(searchCriteria));
    } else {
      return data;
    }
  };
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="mt-3">
      <h1>
        Media List{" "}
        <small className="text-body-secondary">{searchCriteria}</small>
      </h1>
      <div className="row mt-3">
        {filteredMedia().map((p) => (
        //   <PokemonCard key={p.name} name={p.name} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
