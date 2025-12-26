import React from "react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-125 h-125 bg-blue-600 rounded-full blur-[180px] opacity-40" />
        <div className="absolute bottom-[-20%] right-[-10%] w-125 h-125 bg-purple-600 rounded-full blur-[180px] opacity-40" />
      </div>

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />

      {/* CONTENT */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

        <p className="tracking-widest text-sm text-gray-400 uppercase">
          Digital Presence • Web Architect • Developer
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight">
          I build
          <span className="block bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            immersive web experiences
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-gray-400 text-lg">
          This is not just a website.  
          It is my digital identity — crafted with precision, performance,
          and obsession for clean design.
        </p>

        {/* CTA */}
        <div className="mt-12 flex gap-6">
          <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
            Enter
          </button>

          <button className="px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition">
            Explore
          </button>
        </div>

      </section>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm animate-pulse">
        ↓ Scroll
      </div>

    </main>
  );
}
