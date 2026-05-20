import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-mauve-700 text-white px-4">
      
      {/* Big 404 Text */}
      <h1 className="text-8xl font-extrabold text-mauve-400 drop-shadow-lg">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Oops! Page not found
      </h2>

      <p className="text-gray-400 mt-2 text-center max-w-md">
        The page you are looking for might have been removed,
        had its name changed, or is temporarily unavailable.
      </p>

      {/* Button */}
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-mauve-400 text-white font-semibold rounded-xl hover:bg-mauve-300 transition duration-300">
          Go Back Home
        </button>
      </Link>

      {/* Optional illustration */}
      <div className="mt-10">
        <img
          src="https://illustrations.popsy.co/amber/crashed-error.svg"
          alt="404 illustration"
          className="w-72 opacity-80"
        />
      </div>

    </div>
  );
};

export default NotFoundPage;