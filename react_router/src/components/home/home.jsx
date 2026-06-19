import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <div className="mx-auto w-full max-w-screen-xl">
            {/* Hero Section */}
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 mx-auto sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                    <div className="max-w-xl sm:mt-1 mt-12 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-2xl text-gray-500 mt-2">Lorem Ipsum Dolor</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-90 duration-200"
                            to="/download"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                className="mr-2"
                            >
                                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 9h-4v3h-3l5 5 5-5h-3v-3z" />
                            </svg>
                            &nbsp; Download Now
                        </Link>
                    </div>
                </div>

                {/* Right Side Remote Work Illustration */}
                <div className="absolute inset-y-0 right-0 w-full sm:my-20 sm:pt-1pt-8">
                    <img className="w-96 rounded-xl shadow-lg" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="Remote work illustration" />
                </div>
            </aside>

            {/* Content Section */}
            <div className="grid place-items-center sm:mt-20">
                <img className="sm:w-96 w-48 rounded-xl shadow-lg" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Developer illustration" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
                Lorem Ipsum Yahi Hai Chai Aur Code
            </h1>
        </div>
        </>
    )
}

export default Home