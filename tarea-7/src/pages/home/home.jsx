import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  const handleClick = () => {
    props.setUser([]);
  };

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://pluspng.com/img-png/rick-and-morty-png-rick-and-morty-logo-and-image-png-1041.png"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    to={"/personajes"}
                    className="block rounded-md px-3 py-2 text-base font-medium  text-gray-300 hover:bg-gray-700 hover:text-white"
                    aria-current="page"
                  >
                    Personajes
                  </Link>
                  <Link
                    href="#"
                    to={"/episodios"}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Episodios
                  </Link>
                  <Link
                    onClick={handleClick}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Log out
                  </Link>
                  <p className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    Nombre usario:{props.user}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="#"
              to={"/personajes"}
              className="block rounded-md px-3 py-2 text-base font-medium  text-gray-300 hover:bg-gray-700 hover:text-white"
              aria-current="page"
            >
              Personajes
            </Link>
            <Link
              href="#"
              to={"/episodios"}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Episodios
            </Link>
            <Link
              onClick={handleClick}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Log out
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
