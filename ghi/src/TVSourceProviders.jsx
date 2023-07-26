import { useParams, Link } from "react-router-dom";
import { useGetTVProvidersQuery } from "./store/apiSlice";

const TVSourceProviders = () => {
    const { tv_id } = useParams();
    const { data, isLoading } = useGetTVProvidersQuery(tv_id); //if providerData named data instead it works, how fix.

    if (isLoading) return <div> Loading... </div>;
    else {
        console.log(data);
    }

    if (data.results.US) {
        return (
            <div id="providers" className="border rounded bg-cyan-700 pl-1 my-3">
                <p className="text-xl font-bold text-gray-200 mr-2 text-center ml-1">Providers</p>
                <div className="text-gray-200 text-center text-xs mr-2 italic border-b ml-1">US providers</div>
                <div className="text-gray-200 font-bold text-lg ml-1">Watch</div>
                {(data.results.US.flatrate == undefined)
                    ? <p>Flatrate Unavailable</p>
                    : data.results.US.flatrate.map((provider) => (
                        <img
                            src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                            width="40"
                            alt={provider.provider_name}
                            key={provider.provider_name}
                            title={provider.provider_name}
                            className="inline rounded mx-1 my-1"
                        ></img>
                    ))}
                <br></br>
                <div className="text-gray-200 font-bold text-lg ml-1">Ads</div>
                {(data.results.US.ads == undefined)
                    ? <p>Ads Unavailable</p>
                    : data.results.US.ads.map((provider) => (
                        <img
                            src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                            width="40"
                            alt={provider.provider_name}
                            key={provider.provider_name}
                            title={provider.provider_name}
                            className="inline rounded mx-1 my-1"
                        ></img>
                    )
                    )}
                <br></br>
                <div className="text-gray-200 font-bold text-lg ml-1">Buy</div>
                {(data.results.US.buy == undefined)
                    ? <p>Buy Unavailable</p>
                    : data.results.US.buy.map((provider) => (
                        <img
                            src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                            width="40"
                            alt={provider.provider_name}
                            key={provider.provider_name}
                            title={provider.provider_name}
                            className="inline rounded mx-1 my-1"
                        ></img>
                    ))}
                <div className="text-xs my-3">data from JustWatch</div>
            </div >
        );
    }
    else {
        return (
            <div id="providers" className="my-3 border bg-cyan-700 rounded my-1 pl-1">
                <p className="text-xl font-bold text-gray-200 mr-2 text-center ml-1">Providers</p>
                <div className="text-gray-200 text-center text-xs mr-2 italic border-b ml-1">US providers</div>
                <p className="text-black italic"> Unavailable </p>
                <div className="text-sm">data from JustWatch</div>
            </div >
        )
    }
};

export default TVSourceProviders;
