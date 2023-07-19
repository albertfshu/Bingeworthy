import {
    useGetPopularTVQuery,
    useSearchTVQuery,
} from "./store/apiSlice";
import { useSelector } from "react-redux"
import { useState } from "react";
import TVCard from "./TVCard";

const TVList = () => {
    const searchCriteria = useSelector((state) => state.search?.value);
    const { data, isLoading } = useGetPopularTVQuery();
    let [pageCounter, setPageCounter] = useState(1);
    let page = "&page=" + pageCounter;
    let fullSearch = searchCriteria + page;
    const { data: search, isSearchLoading } = useSearchTVQuery(fullSearch);
    console.log(search);

    const searchCriteriaToLowercase = searchCriteria.toLowerCase();


    const handlePageUp = () => {
        if (pageCounter < search.total_pages)
            setPageCounter(pageCounter + 1);
        console.log(pageCounter)
    }

    const handlePageDown = () => {
        if (pageCounter > 1)
            setPageCounter(pageCounter - 1);
    }
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

    if (isLoading || isSearchLoading) return <div>Loading...</div>;
    return (
        <div className="mt-3">
            <p className="text-2xl font-bold text-gray-200">
                {searchCriteria} - TV List - Page {pageCounter}
            </p>
            <div className="grid grid-cols-[1fr,8fr,1fr] ">
                <div className="text-white"><button onClick={handlePageDown}>leftArrow</button></div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {
                        filteredMovies().map((tv) => (
                            <TVCard
                                key={tv.id}
                                title={tv.original_name}
                                tv_id={tv.id}
                            />
                        ))}
                </div>
                <div className="text-white"><button onClick={handlePageUp}>rightarrow</button></div>
            </div>
        </div>
    )
}
export default TVList;
