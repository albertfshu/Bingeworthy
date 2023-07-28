import { useSignupMutation, useCreateDetailsMutation } from "./store/accountSlice";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useGetAccountQuery } from "./store/accountSlice";
import AlertError from './AlertError';

const SignUp = () => {
    const navigate = useNavigate()
    const [signup] = useSignupMutation();
    const [createDetails] = useCreateDetailsMutation();
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState('')
    const [full_name, setfull_Name] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirmation) {
            setErrorMessage('Password does not match confirmation')
            return;
        }
        let promiseholder = signup({ username, full_name, password });
        createDetails({ username, body: { "bio": "", "date": Date.now(), "profile_image": "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg" } })
        promiseholder.then(result => {
            if (result.error) {
                setErrorMessage(result.error.data.detail)
            }
            else {
                navigate('/')
            }
        })
    };

    return (
        <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center relative">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="w-100 z-10 pb-4 max-w-sm">
                    <img src="https://i.imgur.com/u34lKkt.png" className="h-65 w-full mx-auto relative" alt="Bingeworthy Logo" />
                    <h1 className="text-white text-3xl regular-font mb-4 text-center mt-4">Create Account </h1>
                </div>
                <div className="bg-cyan-700 px-6 py-8 rounded shadow-md text-black w-full">
                    <form onSubmit={handleSubmit}>
                        {errorMessage && <AlertError>{errorMessage}</AlertError>}
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            placeholder="name"
                            value={full_name}
                            onChange={(e) => setfull_Name(e.target.value)} />
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

                        <button type="submit" className="w-full text-center py-3 rounded bg-black text-white hover:bg-gray-700 border">
                            Create Account
                        </button>
                    </form>
                    <p className="mt-4 text-center text-white text-sm">
                        Already have an account?{" "}
                        <Link to="/login" className="underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
