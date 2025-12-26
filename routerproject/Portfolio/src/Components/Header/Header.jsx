import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-800">
        {/* CONTAINER */}
        <div className="items-center px-4 lg:px-6 py-3">

          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-4">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Logo"
              />
              <span className="text-xl font-semibold dark:text-white">
                Aditya Shukla
              </span>
            </Link>

            {/* HAMBURGER (MOBILE ONLY) */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-gray-700 dark:text-white focus:outline-none"
            >
              ☰
            </button>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-10">
              <ul className="flex gap-8 font-medium">
                {[
                  { name: "Home", path: "/" },
                  { name: "Projects", path: "/projects" },
                  { name: "Skills", path: "/skills" },
                  { name: "Services", path: "/services" },
                  { name: "Contact", path: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600 dark:text-gray-300"
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <Link
                  to="/login"
                  className="text-gray-700 dark:text-white"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="lg:hidden mt-4">
              <ul className="flex flex-col gap-4 font-medium">
                {[
                  { name: "Home", path: "/" },
                  { name: "Projects", path: "/projects" },
                  { name: "Skills", path: "/skills" },
                  { name: "Services", path: "/services" },
                  { name: "Contact", path: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <NavLink
                      onClick={() => setOpen(false)}
                      to={item.path}
                      className="block text-gray-700 dark:text-gray-300"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 mt-4">
                <Link to="/login" className="text-gray-700 dark:text-white">
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
                >
                  Get started
                </Link>
              </div>
            </div>
          )}

        </div>
      </nav>
    </header>
  );
}
