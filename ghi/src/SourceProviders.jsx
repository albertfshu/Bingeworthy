import { useParams } from "react-router-dom";
import { useGetMovieProvidersQuery } from "./store/apiSlice";

const SourceProviders = () => {
  const { movie_id } = useParams();
  const { data, isLoading } = useGetMovieProvidersQuery(movie_id);
  if (isLoading) return <div> Loading... </div>;

  if (data.results.US) {
    return (
      <div id="providers" className="border rounded bg-cyan-700 pl-1 my-3">
        <p className="text-xl font-bold text-gray-200 mr-2 text-center ml-1">Providers</p>
        <div className="text-gray-200 text-center text-xs mr-2 italic border-b ml-1">US providers</div>
        <div className="text-gray-200 font-bold text-xl ml-1">Buy</div>
        {(data.results.US.buy === undefined)
          ? <p className="text-red-900 ml-1 italic">Unavailable</p>
          : data.results.US.buy.map((provider) => (
            <img
              src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
              width="40"
              alt={provider.provider_name}
              key={provider.provider_name}
              title={provider.provider_name}
              className="rounded mx-1 my-1 inline"
            ></img>
          ))}
        <div className="text-gray-200 font-bold text-xl ml-1 mt-2">Rent</div>
        {(data.results.US.rent === undefined)
          ? <p className="text-red-900 ml-1 italic">Unavailable</p>
          : data.results.US.rent.map((provider) => (
            <img
              src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
              width="40"
              alt={provider.provider_name}
              key={provider.provider_name}
              title={provider.provider_name}
              className="rounded mx-1 my-1 inline"
            ></img>
          ))
        }
        <div className="text-xs my-3">data from JustWatch</div>
      </div >
    );
  }
  else {
    return (
      <div id="providers" className="my-4 border rounded my-1 pl-1">
        <p className="text-xl font-bold text-gray-200 mr-2 text-center  ml-1">Providers</p>
        <div className="text-gray-200 text-center text-xs mr-2 italic border-b ml-1">US providers</div>
        <p className="text-black italic"> Unavailable </p>
        <div className="text-sm">data from JustWatch</div>
      </div>
    )
  }
};

export default SourceProviders;
