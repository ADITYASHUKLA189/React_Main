import React from "react";

export default function Services() {
  return (
    <section className="min-h-screen bg-linear-to-br from-blue-600 to-purple-700 flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center">Contact Me</h1>

        <form className="mt-8 space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border p-3 rounded"
          />

          <button className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
