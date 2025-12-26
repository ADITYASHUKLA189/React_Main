import React from "react";

export default function Card() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-100 selection:text-blue-700 font-sans antialiased">
      
      {/* PREMIUM NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/20 dark:border-slate-800/50 rounded-2xl px-6 py-3 shadow-sm">
          <span className="text-xl font-black tracking-tighter text-blue-600">AS.</span>
          <div className="hidden md:flex gap-10 text-[13px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Work</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <button className="text-xs font-black bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95">
            RESUME
          </button>
        </div>
      </nav>

      {/* HERO: LIGHT MODE OPTIMIZED */}
      <section className="relative w-full px-6 pt-40 pb-24 md:pt-60 md:pb-40 flex flex-col items-center text-center">
        {/* Soft Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-7xl h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100/50 dark:bg-purple-900/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-[11px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-widest">Available for hire</span>
        </div>
        
        <h1 className="text-6xl md:text-[100px] font-black leading-[0.9] tracking-tighter mb-10">
          Crafting <span className="text-blue-600">Digital</span><br />Experiences.
        </h1>
        
        <p className="text-lg md:text-xl max-w-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-12">
          Hi, I'm Aditya. A MERN Stack Developer specializing in building high-end, scalable web applications with clean code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="px-12 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl shadow-xl shadow-slate-900/20 dark:shadow-none hover:-translate-y-1 transition-all">
            View Projects
          </a>
          <a href="#contact" className="px-12 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 transition-all">
            Get In Touch
          </a>
        </div>
      </section>

      {/* LOGO CLOUD / SKILLS STRIP */}
      <div className="w-full bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-100 dark:border-slate-800/50 py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Tech Stack & Tools</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            {["React", "Node.js", "MongoDB", "Express", "Tailwind", "C++", "GitHub"].map((item) => (
              <span key={item} className="text-xl font-extrabold tracking-tighter text-slate-800 dark:text-slate-200">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS: MINIMAL CARDS */}
      <section id="projects" className="w-full px-6 py-32 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-20">
          <h2 className="text-4xl font-black tracking-tighter">Work</h2>
          <div className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {[
            { title: "Immersive 3D Portfolio", category: "UX/UI Design", color: "bg-blue-600" },
            { title: "E-Commerce Platform", category: "Full Stack", color: "bg-emerald-500" },
            { title: "EduArchive", category: "Web App", color: "bg-purple-600" },
            { title: "C-Language Engine", category: "Systems", color: "bg-orange-500" }
          ].map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[16/10] bg-slate-100 dark:bg-slate-900 rounded-[2rem] mb-6 overflow-hidden border border-slate-200/50 dark:border-slate-800/50">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${project.color}`}></div>
                <div className="absolute bottom-8 left-8">
                   <div className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2">{project.category}</div>
                   <h3 className="text-3xl font-black tracking-tight">{project.title}</h3>
                </div>
              </div>
              <p className="text-slate-500 font-medium px-2">High-performance application built with {project.category === "Full Stack" ? "MERN Stack" : "Modern Tech"}.</p>
            </div>
          ))}
        </div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="w-full px-6 py-20 border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black mb-2">Let's talk.</h2>
            <p className="text-slate-500 font-medium">shukla.aditya@example.com</p>
          </div>
          <div className="flex gap-8 text-sm font-bold">
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
            <a href="#" className="hover:text-blue-600">GitHub</a>
            <a href="#" className="hover:text-blue-600">Twitter</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 text-center">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">© {new Date().getFullYear()} Aditya Shukla — Made with Passion</p>
        </div>
      </footer>
    </div>
  );
}