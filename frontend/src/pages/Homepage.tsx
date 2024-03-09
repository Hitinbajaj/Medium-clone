import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-medium mb-8">Medium Blog</h1>
      <div className="flex">
        <div className="text-slate-500">
          <Link className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" to={"/signin"}>
            Sign up
          </Link>
        </div>
        <div className="text-slate-500">
          <Link className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" to={"/signup"}>
            Sign in
          </Link>
        </div>
      </div>
      <p className="text-small py-4 mb-8">By Hitin Bajaj</p>
    </div>
  );
};
