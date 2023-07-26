import {
    useGetPopularTVQuery,
    useSearchTVQuery,
} from "./store/apiSlice";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import TVCard from "./TVCard";

const TVList = () => {
    const searchCriteria = useSelector((state) => state.search?.value);
    const { data, isLoading } = useGetPopularTVQuery();
    const { data: search, isLoading: isSearchLoading } = useSearchTVQuery(searchCriteria);

    console.log(data)
    console.log(search)

    const [pageCounter, setPageCounter] = useState(1);
    const showsPerPage = 20;
    const totalTVShows = searchCriteria ? (search?.total_results || 0) : (data?.total_results || 0);
    const totalPages = Math.ceil(totalTVShows / showsPerPage);

    const handlePageUp = () => {
        setPageCounter((prevPage) => (prevPage % totalPages) + 1);
    };

    const handlePageDown = () => {
        setPageCounter((prevPage) => {
            if (prevPage === 1) {
                return totalPages;
            } else {
                return prevPage - 1;
            }
        });
    };

    const filteredTVShows = () => {
        if (searchCriteria != '') {
            if (search == undefined) {
                return data.results;
            }
            return search.results;
        } else {
            return data.results;
        }
    };
    console.log(data?.results)
    if (isLoading || isSearchLoading) return <div>Loading...</div>;

    const loopedTVShows = [...filteredTVShows(), ...filteredTVShows(), ...filteredTVShows()];

    return (
        <div className="tv-list mt-10 mb-10 bg-cyan-800 w-full h-full rounded-lg relative">
            <div className="tv-card-wrapper max-w-8xl mx-auto overflow-hidden">
                <div className="text-2xl text-white my-3 ml-5 text-center" style={{ fontFamily: "Impact" }}>TOP 20 POPULAR TV SHOWS</div>
                <div
                    className="tv-card-slide-container flex transition-transform ease-in-out w-auto"
                    style={{
                        transform: `translateX(-${(pageCounter - 1) * (100 / (showsPerPage * 8))}%)`,
                    }}
                >
                    {loopedTVShows.map((tv) => (
                        <div key={tv.id} className="tv-card w-1/10 px-2">
                            <TVCard
                                title={tv.original_name}
                                media_id={tv.id}
                                poster={tv.poster_path}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button
                className={`navigation-arrow arrow-left left-0 top-7 transform -translate-y-1/2 absolute text-white ${pageCounter === 1 ? "hidden" : ""}`}
                onClick={handlePageDown}
                style={{
                    width: "30px", // Adjust the width as needed
                    height: "30px", // Adjust the height as needed
                    backgroundImage: "url('https://i.imgur.com/Og4W6uT.png')",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                }}
            >
            </button>
            <button
                className="navigation-arrow arrow-right right-0 top-7 transform -translate-y-1/2 absolute text-white"
                onClick={handlePageUp}
                style={{
                    width: "30px", // Adjust the width as needed
                    height: "30px", // Adjust the height as needed
                    backgroundImage: "url('https://i.imgur.com/lDzZt5K.png')",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                }}
            >
            </button>
            {/* Additional div for the border-like bottom */}
            <div
                className="absolute w-full bottom-0 left-0 bg-cyan-800"
                style={{ height: "8px" }} // Adjust the height as needed
            ></div>
        </div>
    );
};

export default TVList;
