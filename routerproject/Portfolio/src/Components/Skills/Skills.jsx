import React from "react";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Node.js",
    "MongoDB",
    "Git",
  ];

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-20">
      <h1 className="text-4xl font-bold text-center">SKILLS</h1>

      <div className="mt-16 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white shadow-lg rounded-xl py-8 text-center text-lg font-semibold hover:scale-110 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
