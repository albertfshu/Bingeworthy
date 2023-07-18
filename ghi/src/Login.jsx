import { useLoginMutation } from "./store/accountSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    }, [loginResult]);

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username, password });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800">
            <div className="w-80">
                <h1 className="text-white text-3xl font-bold mb-4">Login</h1>
                {errorMessage && <AlertError>{errorMessage}</AlertError>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Login__username" className="text-white">
                            Username
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border border-cyan-700 rounded"
                            id="Login__username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Login__password" className="text-white">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full p-2 border border-cyan-700 rounded"
                            id="Login__password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full border bg-cyan-700 text-white font-semibold py-2 rounded"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
