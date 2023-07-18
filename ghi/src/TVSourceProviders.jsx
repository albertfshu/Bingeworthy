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
            <div id="providers">
                <p className="text-xl">Providers</p>
                <div>US providers</div>
                <div>Streaming On</div>
                {data.results.US.flatrate.map((provider) => (
                    <img
                        src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                        width="20"
                        alt={provider.provider_name}
                        key={provider.provider_name}
                        className="inline"
                    ></img>
                ))}
                {/* {(data.results.US.buy.map == true)
                    ? <p>None</p>
                    : data.results.US.buy.map((provider) => (
                        <img
                            src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                            width="20"
                            alt={provider.provider_name}
                            key={provider.provider_name}
                            className="inline"
                        ></img>
                    ))}
                <div>Rent</div>
                {(data.results.US.rent.map == true)
                    ? <p>None</p>
                    : data.results.US.rent.map((provider) => (
                        <img
                            src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                            width="20"
                            alt={provider.provider_name}
                            key={provider.provider_name}
                            className="inline"
                        ></img>
                    ))
                } */}
                <div className="text-sm">data from JustWatch</div>
            </div >
        );
    }
    else {
        return (
            <div id="providers">
                <p className="text-xl">Providers</p>
                <div>US providers</div>
                <p> Unavailable </p>
            </div>
        )
    }
};

export default TVSourceProviders;
