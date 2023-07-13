import { useLoginMutation } from "./store/accountSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import AlertError from "./AlertError";

const Login = () => {
    const navigate = useNavigate()
    const [login, loginResult] = useLoginMutation()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    useEffect(() => {
        if (loginResult.error) {
            if (loginResult.error.status == 401) {
                setErrorMessage(loginResult.error.data.detail);
            }
        }
        if (loginResult.isSuccess) navigate('/');
    }, [loginResult]);

    const handleSubmit = (e) => {
        e.preventDefault()
        login({username, password});
    }
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h1>Login</h1>
                {errorMessage && <AlertError>{errorMessage}</AlertError>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Login__username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Login__username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Login__password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="Login__password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
