import { useParams } from "react-router-dom";
import {
    useGetMovieDetailsQuery,
} from "./store/apiSlice";
import { useGetAccountQuery } from "./store/accountSlice";
import SourceProviders from "./SourceProviders";
import Reviews from "./Reviews";
import WatchlistButton from "./WatchlistButton"
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
                            {account && <WatchlistButton account_id={account?.account.username} media_id={"mID=" + movie_id} />}
                        </div>
                        <SourceProviders />
                    </div>
                </div>
                <div id="col2" className="ml-10 w-full">
                    <div className="grid grid-cols-[1fr,300px]">
                        <div>
                            <h2 className="text-4xl text-bold ">{data.original_title}</h2>
                            <div className="my-3 border-b mr-5">
                                <h5 className="inline">{ReleaseDate} </h5>
                                <h5 className="inline pl-6">{data.runtime}min</h5>
                            </div>
                        </div>
                        <div>
                            <Rating page_id={"mID=" + movie_id} />
                        </div>
                    </div>
                    <div className="mr-28">{data.overview}</div>
                </div>
            </div>
            <div className="w-auto md:w-4/5 mx-auto">
                <Reviews page_id={"mID=" + movie_id} />
            </div>
        </div>
    );
};

export default MovieDetail;
