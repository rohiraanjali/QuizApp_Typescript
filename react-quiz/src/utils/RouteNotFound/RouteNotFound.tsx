import {Link} from "react-router-dom"
const RouteNotFound = () => {
    return (
        <div className="md:text-lg p-24 ">
            <h1 className="font-bold text-8xl">404</h1>
            <p className="text-1xl p-4">Sorry, The page you're looking for cannot be found.</p>
            <Link to="/">
            <button className="ml-4 text-1xl bg-transparent hover:bg-blue-500 text-blue-700 font-medium hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded" >GO HOME </button>
            </Link>

        </div>
    );
};

export default RouteNotFound;