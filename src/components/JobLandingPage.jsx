import React from "react";

const JobLandingPage = () => {
  return (
    <div className="font-[Poppins]">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-sm">
        <div className="flex items-center gap-2 text-xl font-bold text-blue-600">
          <div className="w-3 h-3 bg-pink-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div className="w-3 h-3 bg-purple-500 rounded-full" />
          <span>inJob</span>
        </div>
        <ul className="flex gap-6 text-sm font-medium">
          <li className="text-blue-600 border-b-2 border-blue-600">
            How It Works
          </li>
          <li className="hover:text-blue-600">Features</li>
          <li className="hover:text-blue-600">Testimonials</li>
        </ul>
        <div className="text-gray-600 cursor-pointer">🔍</div>
      </nav>

      {/* Hero Section */}
      <section
        className="text-center py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <h1 className="text-4xl font-bold text-white">
          Find Your Dream Job with AI
        </h1>
        <p className="text-white mt-2">
          inJob uses AI to match your resume with the perfect opportunities
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Upload Resume
        </button>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-2xl mb-2">⬆️</p>
            <h3 className="font-semibold text-lg mb-1">Upload Resume</h3>
            <p className="text-gray-600">
              Select and upload your resume. Don’t have one? Fill out a job
              application instead.
            </p>
          </div>
          <div>
            <p className="text-2xl mb-2">🧠</p>
            <h3 className="font-semibold text-lg mb-1">AI Analyzes Skills</h3>
            <p className="text-gray-600">
              Our AI analyzes your resume to identify key skills and
              experiences.
            </p>
          </div>
          <div>
            <p className="text-2xl mb-2">📥</p>
            <h3 className="font-semibold text-lg mb-1">Get Job Matches</h3>
            <p className="text-gray-600">
              Receive job recommendations that align with your profile.
            </p>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="text-center py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-2">Discover Your Career</h2>
        <p className="text-gray-600 mb-10">
          Unlock your dream job with innovative tools to simplify your job
          search.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">
              Personalized Job Matching
            </h3>
            <p className="text-gray-600 mb-4">
              Get tailored job recommendations based on your skills and
              preferences.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded mr-2">
              Try now
            </button>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded">
              Learn more
            </button>
          </div>
          <img src="/keyboard.png" alt="keyboard" className="rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-12 items-center">
          <img src="/keyboard.png" alt="keyboard" className="rounded" />
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">One-Click Apply</h3>
            <p className="text-gray-600 mb-4">
              Streamline your applications with a single tap.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded mr-2">
              Try now
            </button>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">
          Hear from our awesome users!
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Emily R.",
              quote: "inJob helped me land my dream job in just two weeks!",
            },
            {
              name: "Michael T.",
              quote: "The job search experience is unmatched—highly recommend!",
            },
            {
              name: "Sophia L.",
              quote: "Fantastic platform with great opportunities for growth!",
            },
          ].map((user, i) => (
            <div key={i} className="p-4 border rounded shadow-sm">
              <p className="font-bold mb-1">{user.name}</p>
              <p className="text-yellow-400">★★★★★</p>
              <p className="text-gray-600 mt-2">{user.quote}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join Section */}
      <section className="text-center py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Join inJob Today!</h2>
        <input
          type="email"
          placeholder="example@email.com"
          className="px-4 py-2 border rounded w-full max-w-md mb-4"
        />
        <input
          type="password"
          placeholder="********"
          className="px-4 py-2 border rounded w-full max-w-md mb-4"
        />
        <br />
        <button className="px-6 py-2 bg-blue-600 text-white rounded">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-white p-10 text-center border-t">
        <div className="flex justify-center items-center gap-2 text-xl font-bold text-blue-600 mb-6">
          <div className="w-3 h-3 bg-pink-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div className="w-3 h-3 bg-purple-500 rounded-full" />
          <span>inJob</span>
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Input your email"
            className="px-4 py-2 border rounded w-64 mr-2"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Subscribe
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-6 text-sm text-gray-600">
          <div>
            <p className="font-semibold mb-2">Product</p>
            <p>Features</p>
            <p>Pricing</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Resources</p>
            <p>Blog</p>
            <p>User Guides</p>
            <p>Webinars</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Company</p>
            <p>About Us</p>
            <p>Contact</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Plans & Pricing</p>
            <p>Startup</p>
            <p>Organization</p>
          </div>
        </div>

        <p className="text-xs mt-8 text-gray-400">
          © 2024 Brand, Inc. • Privacy • Terms • Sitemap
        </p>
      </footer>
    </div>
  );
};

export default JobLandingPage;
