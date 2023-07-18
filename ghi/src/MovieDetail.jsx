import { useParams, Link } from "react-router-dom";
import {
    useGetMovieDetailsQuery,
} from "./store/apiSlice";
import { useGetAccountQuery } from "./store/accountSlice";
import SourceProviders from "./SourceProviders";

const MovieDetail = () => {
    const { movie_id } = useParams();
    const { data: account } = useGetAccountQuery();
    const { data, isLoading } = useGetMovieDetailsQuery(movie_id);

    if (isLoading) return <div> Loading... </div>;

    //   implement watchlist function

    return (
        <div className="max-w-[80%]">
            <div className="grid grid-flow-col auto-cols-min gap-2 object-center">
                <div id="col1" className="max-w-xs">
                    <div>
                        <div className="w-50">
                            <img
                                width="200"
                                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                            ></img>
                        </div>
                        <button>Add to Watchlist</button>
                        <SourceProviders />
                    </div>
                </div>
                <div id="col2" className="max-w-4xl">
                    <h2 className="text-2xl">{data.original_title}</h2>
                    {/* <h5>rating</h5> */}
                    <h5 className="inline">{data.release_date}</h5>
                    <h5 className="inline pl-6">{data.runtime}min</h5>
                    <div>{data.overview}</div>
                </div>
            </div>
            <div>
                <h1 className="mt-8"> Reviews </h1>
                {account && <h3> Add Review</h3>}
            </div>
            <div>
                {/*
            <div className="">
            reviews().map((r) => (
                <ReviewCard key={something} name={something} data={r.data}/>
            ))

        */}
            </div>
        </div>
    );
};

export default MovieDetail;
