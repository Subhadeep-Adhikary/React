import React from "react";
import { Link } from "react-router-dom";


function Footer(){
    return(
        <>
        <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=80&q=80" className="mr-3 h-12 rounded-full" alt="Open source logo" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">Home</Link>
                </li>
                <li className="mb-4">
                  <Link to="/about" className="hover:underline">About</Link>
                </li>
                <li className="mb-4">
                  <Link to="/contact" className="hover:underline">Contact</Link>
                </li>
                <li className="mb-4">
                  <Link to="/github" className="hover:underline">GitHub</Link>
                </li>
                <li className="mb-4">
                  <Link to="/user" className="hover:underline">User</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </>
    )
}

export default Footer