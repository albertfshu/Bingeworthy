import { useParams, Link } from "react-router-dom";
import {
    useGetMovieDetailsQuery,
} from "./store/apiSlice";
import { useGetAccountQuery } from "./store/accountSlice";
import SourceProviders from "./SourceProviders";
import Reviews from "./Reviews";
import WatchlistButton from "./WatchlistButton"
import MovieCard from "./Moviecard";
import Rating from "./Rating";

const MovieDetail = () => {
    const { movie_id } = useParams();
    const { data: account, isLoading: accountLoading } = useGetAccountQuery();
    const { data, isLoading } = useGetMovieDetailsQuery(movie_id);

    if (isLoading || accountLoading) return <div> Loading... </div>;

    const ReleaseDate = new Date(data.release_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    //   implement watchlist function
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
                        <SourceProviders />
                        {/* fix the account_id  */}
                        <WatchlistButton account_id={account?.account.id} media_id={movie_id} />
                    </div>
                </div>
                <div id="col2">
                    <div className="grid grid-cols-[1fr,200px]">

                        <div>
                            <h2 className="text-2xl">{data.original_title}</h2>
                            {/* <h5>rating</h5> */}
                            <div className="my-3">
                                <h5 className="inline">{ReleaseDate} </h5>
                                <h5 className="inline pl-6">{data.runtime}min</h5>
                            </div>
                        </div>
                        <div>
                            <Rating />
                        </div>
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
