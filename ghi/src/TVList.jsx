import {
    useGetPopularTVQuery,
    useSearchTVQuery,
} from "./store/apiSlice";
import { useSelector } from "react-redux"
import TVCard from "./TVCard";

const TVList = () => {
    const searchCriteria = useSelector((state) => state.search?.value);
    const { data, isLoading } = useGetPopularTVQuery();
    const { data: search, isSearchLoading } = useSearchTVQuery(searchCriteria);
    console.log(search);

    const searchCriteriaToLowercase = searchCriteria.toLowerCase();

    const filteredMovies = () => {
        if (searchCriteria && search) {
            // return data.results.filter((movie) =>
            //   movie.original_title.toLowerCase().includes(searchCriteriaToLowercase)
            // )
            return search.results;
        } else {
            return data.results;
        }
    };

    if (isLoading) return <div>Loading...</div>;
    return (
        <div className="mt-3">
            <h1>
                TV List
                <small className="text-body-secondary">
                    {searchCriteria}
                </small>
            </h1>
            <div className="grid grid-cols-4 gap-8">
                {filteredMovies().map((movie) => (
                    <TVCard
                        key={movie.id}
                        title={movie.name}
                        movie_id={movie.id}
                    />
                ))}
            </div>
        </div>
    )
}
export default TVList;
