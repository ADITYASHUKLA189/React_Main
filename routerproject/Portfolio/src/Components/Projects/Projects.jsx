import React from "react";

export default function Projects() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-bold text-center tracking-widest">
        PROJECTS
      </h1>

      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[1, 2, 3].map((p) => (
          <div
            key={p}
            className="border border-gray-700 rounded-xl p-6 hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold">Project {p}</h2>
            <p className="mt-3 text-gray-400">
              A short description of what this project does and what tech was
              used.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="text-sm border px-4 py-2 rounded">
                GitHub
              </button>
              <button className="text-sm bg-white text-black px-4 py-2 rounded">
                Live
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
