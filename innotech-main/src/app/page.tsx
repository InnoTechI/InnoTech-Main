export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative bg-white pt-6 pb-20 lg:pb-24">
        <div className="container mx-auto px-4">
          <div
            className="relative rounded-3xl overflow-hidden bg-gray-100"
            style={{
              backgroundImage: "url('/images/1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay to reduce background intensity */}
            <div className="absolute inset-0 bg-white/20"></div>

            {/* Foreground content layer for text and buttons */}
            <div className="relative z-10">
              <div className="px-4 sm:px-8 lg:px-10 pt-10 lg:pt-14">
                <h1 className="font-extrabold leading-[0.9] text-[#0a1b33] drop-shadow-sm"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 6.5rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Empowering Tech<br />
                  Intelligence
                </h1>
              </div>

              {/* CTA Buttons - bottom right */}
              <div className="pointer-events-none relative">
                <div className="pointer-events-auto absolute right-4 bottom-4 sm:right-6 sm:bottom-6 lg:right-8 lg:bottom-8 flex items-center gap-4">
                  <a href="#services" className="group inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-5 py-3 text-sm font-semibold text-gray-800 shadow-md ring-1 ring-black/10 hover:bg-white">
                    Get Started
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 text-white">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H7" />
                      </svg>
                    </span>
                  </a>
                  <a href="#about" className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-5 py-3 text-sm font-medium text-gray-900 shadow-md ring-1 ring-black/10 hover:bg-white">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Aspect spacer to control hero height */}
            <div className="pt-[42%] sm:pt-[38%] lg:pt-[36%]"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Inno-Tech is dedicated to providing an ultimate tech platform that seamlessly integrates the latest advancement in technology and innovation. We specialize in Cybersecurity, AI/ML and data science.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Our mission is to offer expert-led lectures, hand-on workshops, and internships to empower individuals in the tech world.
            </p>
          </div>

          {/* About Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Technology Card */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow" style={{background:"rgba(17, 27, 58, 1)"}}>
              <div className="h-48 bg-gray-900/10 flex items-center justify-center">
                <img src="/images/2.png" alt="Technology" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Technology</h3>
                <p className="text-gray-200">Cutting-edge solutions for modern business</p>
              </div>
            </div>

            {/* Data Science Card */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow" style={{background:"rgba(17, 27, 58, 1)"}}>
              <div className="h-48 bg-gray-900/10 flex items-center justify-center">
                <img src="/images/3.png" alt="Data Science" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Data Science</h3>
                <p className="text-gray-200">Data-driven insights and analytics solutions</p>
              </div>
            </div>

            {/* AI/ML Card */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow" style={{background:"rgba(17, 27, 58, 1)"}}>
              <div className="h-48 bg-gray-900/10 flex items-center justify-center">
                <img src="/images/4.png" alt="AI / ML" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">AI / ML</h3>
                <p className="text-gray-200">Cutting-edge artificial intelligence and machine learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Hands-on, industry-aligned programs and services to accelerate your growth.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Cybersecurity Bootcamps", desc: "Real-world labs and threat modeling" },
              { title: "AI/ML Programs", desc: "From fundamentals to advanced deep learning" },
              { title: "Data Science Tracks", desc: "End-to-end analytics and MLOps" },
              { title: "Workshops & Seminars", desc: "Weekend intensives led by experts" },
              { title: "Career Mentorship", desc: "Resume, interviews, and project reviews" },
              { title: "Corporate Training", desc: "Upskill teams with custom curricula" },
            ].map((card) => (
              <div key={card.title} className="group rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow" style={{background:"rgba(17, 27, 58, 1)"}}>
                <div className="w-12 h-12 rounded-lg bg-white/10 text-blue-200 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="text-gray-200 mt-2">{card.desc}</p>
                <a href="#contact" className="inline-flex items-center text-blue-200 mt-4 hover:underline">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* For Students */}
            <div className="rounded-2xl border border-gray-200 p-8 bg-gradient-to-br from-blue-50 to-white">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">For Students</h3>
              <p className="text-gray-600 mb-6">Kickstart your tech career with structured learning paths, mentorship, and real-world projects.</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Foundations to advanced tracks</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Capstone projects and internships</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Career guidance and placement support</li>
              </ul>
              <button className="mt-6 inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Explore Student Paths</button>
            </div>

            {/* For IT Professionals */}
            <div className="rounded-2xl border border-gray-200 p-8 bg-gradient-to-br from-slate-50 to-white">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">For IT Professionals</h3>
              <p className="text-gray-600 mb-6">Advance your career with specialized upskilling, certifications, and leadership programs.</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Specialized certifications</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Architect and leadership tracks</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Hands-on labs with expert mentors</li>
              </ul>
              <button className="mt-6 inline-flex items-center border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">Explore Pro Tracks</button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We are committed to democratizing access to high-quality tech education and building future-ready talent.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Excellence", desc: "Delivering industry-grade, practical learning" },
              { title: "Innovation", desc: "Embracing cutting-edge tools and methods" },
              { title: "Integrity", desc: "Building trust through transparency" },
              { title: "Impact", desc: "Creating measurable career outcomes" },
            ].map((value) => (
              <div key={value.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="w-10 h-10 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                <p className="text-gray-600 mt-2">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Contact Us</h2>
              <p className="text-gray-600">Have questions? Send us a message and we’ll get back to you.</p>
            </div>

            <form className="grid gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea className="w-full rounded-lg border border-gray-300 px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help?" />
              </div>

              <button type="submit" className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Inno-Tech. All rights reserved.</p>
            <div className="flex gap-4 text-sm text-gray-600">
              <a href="#about" className="hover:underline">About</a>
              <a href="#services" className="hover:underline">Services</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
