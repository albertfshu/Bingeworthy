import { useParams, Link } from "react-router-dom";
import {
    useGetMovieDetailsQuery,
} from "./store/apiSlice";
import { useGetAccountQuery } from "./store/accountSlice";
import SourceProviders from "./SourceProviders";
import Reviews from "./Reviews";
// import WatchlistButton from "./WatchlistButton"
import MovieCard from "./Moviecard";

const MovieDetail = () => {
    const { movie_id } = useParams();
    const { data: account } = useGetAccountQuery();
    const { data, isLoading } = useGetMovieDetailsQuery(movie_id);



    // const FormattedDate = (dateString) => {
    //     const options = { year: "numeric", month: "long", day: "numeric" };
    //     return new Date(dateString).toLocaleDateString(undefined, options);

    // };
    // const ReleaseDate = FormattedDate(data.release_date);

    //   implement watchlist function
    if (isLoading) return <div> Loading... </div>;
    return (
        <div className="w-4/5 sm:w-full p-8 mx-auto">
            <div className="grid grid-cols-[200px,1fr] gap-8 object-center">
                <div id="col1" className="max-w-xs">
                    <div>
                        <div className="w-50">
                            <img
                                width="200"
                                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                            ></img>
                        </div>
                        {/* fix the account_id  */}
                        {/* <WatchlistButton account_id={account_id} media_id={media_id} /> */}
                    </div>
                </div>
                <div id="col2" className="w-full">
                    <h2 className="text-2xl">{data.original_title}</h2>
                    {/* <h5>rating</h5> */}
                    <div className="my-3">
                        <h5 className="inline">{data.release_date} </h5>
                        <h5 className="inline pl-6">{data.runtime}min</h5>
                    </div>
                    <div>{data.overview}</div>
                </div>
            </div>
            <div className="w-4/5 mx-auto">
                <Reviews />
            </div>
        </div>
    );
};

export default MovieDetail;
