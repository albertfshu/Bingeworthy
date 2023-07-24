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
    console.log(searchCriteria);



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
            <div className="text-2xl font-bold text-gray-200 my-3 ml-5">
                {(searchCriteria)
                    ? <p>{searchCriteria[0]} - TV List - Page {pageCounter}</p>
                    : <p className="bold-font text-white text-center">Top 20 Popular TV Shows</p>
                }
            </div>
            <div className="grid grid-cols-[1fr,8fr,1fr] ">
                <div><button className={"text-white hover:text-white/25 text-8xl my-auto w-full h-full"} onClick={handlePageDown}>◄</button></div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                    {
                        filteredMovies().map((tv) => (
                            <TVCard
                                key={tv.id}
                                title={tv.original_name}
                                media_id={tv.id}
                            />
                        ))}
                </div>
                <div><button className={"text-white hover:text-white/25 text-8xl self-center w-full h-full"} onClick={handlePageUp}>►</button></div>
            </div>
        </div>
    )
}
export default TVList;
