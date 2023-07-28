import Nav from './Nav';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gray-800 text-white">
            <Nav />
            <div className="mt-5 mx-auto text-center">
                <p className="text-8xl font-bold ">404</p>
                <p className="text-4xl">Page not found</p>
            </div>
        </div>
    )
}

export default ErrorPage;
