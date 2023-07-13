import { useSignupMutation } from "./store/accountSlice";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import AlertError from './AlertError'

const SignUp = () => {
    const navigate = useNavigate()
    const [signup] = useSignupMutation();
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
        setErrorMessage('Password does not match confirmation')
        return;
    }
    signup({username, name, password});
    navigate('/');
};

    return (
    <div className="bg-black min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign-Up</h1>
            <form onSubmit={handleSubmit}>
                    {errorMessage && <AlertError>{errorMessage}</AlertError>}
                <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="name"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)} />

                <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="password"
                onChange={(e) => {
                    setPassword(e.target.value)
                    setErrorMessage('')
                }}
                />

                <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="confirm password"
                onChange={(e) => {
                    setPasswordConfirmation(e.target.value)
                    setErrorMessage('')
                }}
                />

                <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green text-white hover:bg-green"
                >Create Account</button>
            </form>
            </div>
            </div>
        </div>
    )
}

export default SignUp;
