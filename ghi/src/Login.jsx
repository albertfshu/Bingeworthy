import { useLoginMutation } from "./store/accountSlice";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import AlertError from "./AlertError";

const Login = () => {
    const navigate = useNavigate();
    const [login, loginResult] = useLoginMutation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        if (loginResult.error) {
            if (loginResult.error.status === 401) {
                setErrorMessage(loginResult.error.data.detail);
            }
        }
        if (loginResult.isSuccess) navigate("/");
    }, [loginResult, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="w-80">
                <img src="https://i.imgur.com/u34lKkt.png" className="h-400 w-200 mr-3" alt="Bingeworthy Logo" />
                <h1 className="cursive-font text-center text-xl text-gray-300">
                    Sit back, Relax, and find your next binge
                </h1>
                {errorMessage && <AlertError>{errorMessage}</AlertError>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="w-full p-2 border border-cyan-700 rounded text-black"
                            id="Login__username"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="w-full p-2 border border-cyan-700 rounded text-black"
                            id="Login__password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full border bg-cyan-700 text-white font-semibold py-2 rounded hover:shadow-md hover:shadow-cyan-300"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-300 text-sm">
                    New to Bingeworthy?{" "}
                    <Link to="/signup" className="underline">
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
