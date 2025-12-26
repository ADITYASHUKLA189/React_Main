import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className=" mx-auto px-6 py-10">

        {/* TOP SECTION */}
        <div className="md:flex md:justify-between md:items-start">

          {/* BRAND */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-3">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Logo"
              />
              <span className="text-2xl font-semibold text-gray-900 dark:text-white">
                Aditya Shukla
              </span>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-sm">
              Building modern web experiences with React, Tailwind and clean UI.
            </p>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Resources
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-600">Docs</a></li>
                <li><a href="#" className="hover:text-blue-600">Tutorials</a></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Follow
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-600">GitHub</a></li>
                <li><a href="#" className="hover:text-blue-600">LinkedIn</a></li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Aditya Shukla. All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-blue-600">GitHub</a>
            <a href="#" className="hover:text-blue-600">Twitter</a>
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
