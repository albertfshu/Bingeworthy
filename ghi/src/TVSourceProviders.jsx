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
            <div id="providers" className="my-8">
                <p className="text-xl">Providers</p>
                <div>US providers</div>
                <div>Streaming On</div>
                {data.results.US.flatrate.map((provider) => (
                    <img
                        src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                        width="40"
                        alt={provider.provider_name}
                        key={provider.provider_name}
                        title={provider.provider_name}
                        className="inline"
                    ></img>
                ))}

                <div className="text-sm">data from JustWatch</div>
            </div >
        );
    }
    else {
        return (
            <div id="providers" className="my-8">
                <p className="text-xl">Providers</p>
                <div>US providers</div>
                <p> Unavailable </p>
                <div className="text-sm">data from JustWatch</div>
            </div>
        )
    }
};

export default TVSourceProviders;
