import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen
                    bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-gray-300 text-lg mb-6">Oops! Page not found.</p>
      <Link to="/" className="bg-indigo-500 text-white px-6 py-2 rounded-xl shadow-md
                              hover:bg-indigo-600 transition-colors duration-300">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
