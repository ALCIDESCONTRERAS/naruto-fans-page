import { Link } from "react-router";
import { useNaruto } from "../../hooks/useNaruto";
import {
  Aperture,
  House,
  LogIn,
  Map,
  ShieldUser,
  SquareUser,
  Star,
  UserPen,
  UserPlus,
  Users,
  X,
} from "lucide-react";

export default function Sidebar() {
  const { state, dispatch } = useNaruto();
  return (
    <>
      {state.sidebar && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={() => dispatch({ type: "show_sidebar", payload: false })}
          />
          <div
            id="drawer-navigation"
            className={`fixed top-0 left-0 z-40 w-full md:w-64 h-screen p-4 overflow-y-auto transition-transform
          bg-[url(https://imgs.search.brave.com/Mb3wTRkiq87SmLXitHXdv3pITVbYzqEQRD4qwAzssDU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci8yMjAv/NzA4L0hELXdhbGxw/YXBlci1wYWluLXBh/aW4tcmlubmVnYW4t/dGh1bWJuYWlsLmpw/Zw)]
          ${state.sidebar ? "translate-x-0" : "-translate-x-full"}`}
          >
            <h5
              id="drawer-navigation-label"
              className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400 font-text"
            >
              Menu
            </h5>
            <button
              type="button"
              onClick={() => dispatch({ type: "show_sidebar", payload: false })}
              className="text-gray-400  rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center hover:bg-gray-600 hover:text-white"
            >
              <X />
            </button>
            <div
              className="py-4 overflow-y-auto"
              onClick={() => dispatch({ type: "show_sidebar", payload: false })}
            >
              <ul className="space-y-2 font-medium font-title">
                <li>
                  <Link
                    to="/"
                    className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
                  >
                    <House className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" />
                    <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/admin/profile"}
                    className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
                  >
                    <UserPen className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Profile
                    </span>
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <Users className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Characters
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <Users className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Akatsukis
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <Map className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Villages
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <Aperture className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Tailed Beasts
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <UserPlus className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" />
                    <span className="flex-1 ms-3 whitespace-nowrap">Teams</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <Star className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Kekkei Genkai
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <ShieldUser className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" />
                    <span className="flex-1 ms-3 whitespace-nowrap">Clans</span>
                  </a>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <LogIn className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Sign In
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <SquareUser className="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Sign Up
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
