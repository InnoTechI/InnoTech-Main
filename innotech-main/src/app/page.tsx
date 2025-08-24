"use client";

import { useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                  <button 
                    onClick={() => scrollToSection('#services')}
                    className="group inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-5 py-3 text-sm font-semibold text-gray-800 shadow-md ring-1 ring-black/10 hover:bg-white transition-all duration-200 hover:scale-105"
                  >
                    Get Started
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-900 text-white">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H7" />
                      </svg>
                    </span>
                  </button>
                  <button 
                    onClick={() => scrollToSection('#about')}
                    className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-5 py-3 text-sm font-medium text-gray-900 shadow-md ring-1 ring-black/10 hover:bg-white transition-all duration-200 hover:scale-105"
                  >
                    Learn More
                  </button>
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
          <div className="mb-10">
            <h2 className="font-bold text-gray-900"
              style={{
                fontFamily: "Inter, ui-sans-serif, system-ui",
                fontWeight: 700,
                fontSize: "60px",
                lineHeight: "70px",
                letterSpacing: "-0.06em",
              }}
            >
              About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mt-4">
              Inno-Tech is dedicated to providing an ultimate tech platform that seamlessly integrates the latest advancement in technology and innovation. We specialize in Cybersecurity, AI/ML and data science.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mt-4">
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

      {/* Mission & Vision Section (moved first) */}
      <section id="mission" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="font-bold text-gray-900"
              style={{
                fontFamily: "Inter, ui-sans-serif, system-ui",
                fontWeight: 700,
                fontSize: "60px",
                lineHeight: "70px",
                letterSpacing: "-0.06em",
              }}
            >
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 max-w-3xl mt-4">We are committed to democratizing access to high-quality tech education and building future-ready talent.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Excellence */}
            <div className="rounded-xl p-6 shadow-sm" style={{background:"rgba(17, 27, 58, 1)"}}>
              <div className="w-[232px] h-[232px] mx-auto mt-[46px] mb-4 overflow-hidden rounded-lg bg-gray-900/10">
                <img src="/images/5.png" alt="Excellence" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-white text-center">Excellence</h3>
              <p className="text-gray-200 mt-2 text-center">Delivering quality education and training for future professionals</p>
            </div>

            {/* Community */}
            <div className="rounded-xl p-6 shadow-sm" style={{background:"rgba(17, 27, 58, 1)"}}>
              <div className="w-[232px] h-[232px] mx-auto mt-[46px] mb-4 overflow-hidden rounded-lg bg-gray-900/10">
                <img src="/images/6.png" alt="Community" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-white text-center">Community</h3>
              <p className="text-gray-200 mt-2 text-center">Building connections in the tech ecosystem for growth and innovation.</p>
            </div>

            {/* Innovation */}
            <div className="rounded-xl p-6 shadow-sm" style={{background:"rgba(17, 27, 58, 1)"}}>
              <div className="w-[232px] h-[232px] mx-auto mt-[46px] mb-4 overflow-hidden rounded-lg bg-gray-900/10">
                <img src="/images/7.png" alt="Innovation" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-white text-center">Innovation</h3>
              <p className="text-gray-200 mt-2 text-center">Continuously advancing the frontiers of technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section (second) */}
      <section id="offers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="font-bold text-gray-900"
              style={{
                fontFamily: "Inter, ui-sans-serif, system-ui",
                fontWeight: 700,
                fontSize: "60px",
                lineHeight: "70px",
                letterSpacing: "-0.06em",
              }}
            >
              What we Offer
            </h2>
            <p className="text-gray-600 max-w-3xl mt-4">
              Tailored solutions for both aspiring students and experienced IT Professionals.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* For Students */}
            <div className="rounded-2xl p-8 relative" style={{background:"rgba(17, 27, 58, 1)"}}>
              {/* Student Image - Top Right Corner */}
              <div className="absolute -top-4 -right-4 w-24 h-24 lg:w-32 lg:h-32">
                <img src="/images/9.png" alt="Student Resources" className="w-full h-full object-contain" />
              </div>
              
              <h3 className="text-white mb-2"
                style={{
                  fontFamily: "Inter, ui-sans-serif, system-ui",
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: "30px",
                  lineHeight: "45px",
                  letterSpacing: "-0.06em",
                  verticalAlign: "middle",
                }}
              >
                For Students
              </h3>
              <p className="text-gray-200 mb-6"
                style={{
                  fontFamily: "Inter, ui-sans-serif, system-ui",
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: "30px",
                  lineHeight: "45px",
                  letterSpacing: "-0.06em",
                  verticalAlign: "middle",
                }}
              >
                Jumpstart your tech career
              </p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-blue-300 mt-1">✓</span>
                  <div>
                    <span className="font-medium">Access to learning resources</span>
                    <p className="text-sm text-gray-300">Comprehensive materials and documentation</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300 mt-1">✓</span>
                  <div>
                    <span className="font-medium">Connect with experts</span>
                    <p className="text-sm text-gray-300">Mentorship and guidance from industry professionals</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300 mt-1">✓</span>
                  <div>
                    <span className="font-medium">Skill refinement</span>
                    <p className="text-sm text-gray-300">Advanced training and certification programs</p>
                  </div>
                </li>
              </ul>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="mt-6 inline-flex items-center border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 hover:scale-105"
              >
                Explore Student Paths
              </button>
            </div>

            {/* For IT Professionals */}
            <div className="rounded-2xl p-8 relative" style={{background:"rgba(17, 27, 58, 1)"}}>
              {/* IT Professional Image - Top Right Corner */}
              <div className="absolute -top-4 -right-4 w-24 h-24 lg:w-32 lg:h-32">
                <img src="/images/8.png" alt="IT Professional Resources" className="w-full h-full object-contain" />
              </div>
              
              <h3 className="text-white mb-2"
                style={{
                  fontFamily: "Inter, ui-sans-serif, system-ui",
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: "30px",
                  lineHeight: "45px",
                  letterSpacing: "-0.06em",
                  verticalAlign: "middle",
                }}
              >
                For IT Professionals
              </h3>
              <p className="text-gray-200 mb-6"
                style={{
                  fontFamily: "Inter, ui-sans-serif, system-ui",
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: "30px",
                  lineHeight: "45px",
                  letterSpacing: "-0.06em",
                  verticalAlign: "middle",
                }}
              >
                Advance your expertise
              </p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-blue-300 mt-1">✓</span>
                  <div>
                    <span className="font-medium">Hands-on experience</span>
                    <p className="text-sm text-gray-300">Practical workshops and real-world projects</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300 mt-1">✓</span>
                  <div>
                    <span className="font-medium">Stay ahead of trends</span>
                    <p className="text-sm text-gray-300">Latest industry insights and emerging technologies</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300 mt-1">✓</span>
                  <div>
                    <span className="font-medium">Network expansion</span>
                    <p className="text-sm text-gray-300">Connect with like-minded professionals and experts</p>
                  </div>
                </li>
              </ul>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="mt-6 inline-flex items-center border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 hover:scale-105"
              >
                Explore Pro Tracks
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (third) */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx auto px-4">
          <div className="mb-10">
            <h2 className="font-bold text-gray-900"
              style={{
                fontFamily: "Inter, ui-sans-serif, system-ui",
                fontWeight: 700,
                fontSize: "60px",
                lineHeight: "70px",
                letterSpacing: "-0.06em",
              }}
            >
              Our Services
            </h2>
            <p className="text-gray-600 max-w-3xl mt-4">Hands-on, industry-aligned programs and services to accelerate your growth.</p>
            <p className="text-gray-600 max-w-3xl mt-2">Comprehensive tech education and training programs designed to empower your career growth.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cybersecurity */}
            <div className="group rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow" style={{background:"rgba(17, 27, 58, 1)"}}>
              <div className="relative w-[200px] h-[200px] mb-4">
                <img src="/images/10.png" alt="Cybersecurity" className="w-[200px] h-[200px] object-cover" />
              </div>
              <h3 className="text-white"
                style={{
                  fontFamily: "Inter, ui-sans-serif, system-ui",
                  fontWeight: 600,
                  fontSize: "48.16px",
                  lineHeight: "57.79px",
                  letterSpacing: "-0.06em",
                }}
              >
                Cybersecurity
              </h3>
              <p className="text-gray-200 mt-2 whitespace-pre-line">Comprehensive security training covering
threat detection, penetration testing, and
security protocols.</p>
            </div>

            {/* Certification Training */}
            <div className="group rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow" style={{background:"rgba(17, 27, 58, 1)"}}>
              <div className="relative w-[200px] h-[200px] mb-4">
                <img src="/images/11.png" alt="Certification Training" className="w-[200px] h-[200px] object-cover" />
              </div>
              <h3 className="text-white"
                style={{
                  fontFamily: "Inter, ui-sans-serif, system-ui",
                  fontWeight: 600,
                  fontSize: "48.16px",
                  lineHeight: "57.79px",
                  letterSpacing: "-0.06em",
                }}
              >
                Certification Training
              </h3>
              <p className="text-gray-200 mt-2 whitespace-pre-line">Industry-recognized certification
preparation for major tech platforms and
framework.</p>
            </div>

            {/* Tech Workshops */}
            <div className="group rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow" style={{background:"rgba(17, 27, 58, 1)"}}>
              <div className="relative w-[200px] h-[200px] mb-4">
                <img src="/images/12.png" alt="Tech Workshops" className="w-[200px] h-[200px] object-cover" />
              </div>
              <h3 className="text-white"
                style={{
                  fontFamily: "Inter, ui-sans-serif, system-ui",
                  fontWeight: 600,
                  fontSize: "48.16px",
                  lineHeight: "57.79px",
                  letterSpacing: "-0.06em",
                }}
              >
                Tech Workshops
              </h3>
              <p className="text-gray-200 mt-2 whitespace-pre-line">Interactive workshops led by industry
experts covering cutting-edge
technologies.</p>
            </div>

            {/* AI / ML */}
            <div className="group rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow" style={{background:"rgba(17, 27, 58, 1)"}}>
              <div className="relative w-[200px] h-[200px] mb-4">
                <img src="/images/13.png" alt="AI / ML" className="w-[200px] h-[200px] object-cover" />
              </div>
              <h3 className="text-white"
                style={{
                  fontFamily: "Inter, ui-sans-serif, system-ui",
                  fontWeight: 600,
                  fontSize: "48.16px",
                  lineHeight: "57.79px",
                  letterSpacing: "-0.06em",
                }}
              >
                AI / ML
              </h3>
              <p className="text-gray-200 mt-2 whitespace-pre-line">Advanced AI/ML courses covering neural
networks, deep learning, and practical
applications.</p>
            </div>

            {/* Internship Programs */}
            <div className="group rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow" style={{background:"rgba(17, 27, 58, 1)"}}>
              <div className="relative w-[200px] h-[200px] mb-4">
                <img src="/images/14.png" alt="Internship Programs" className="w-[200px] h-[200px] object-cover" />
              </div>
              <h3 className="text-white"
                style={{
                  fontFamily: "Inter, ui-sans-serif, system-ui",
                  fontWeight: 600,
                  fontSize: "48.16px",
                  lineHeight: "57.79px",
                  letterSpacing: "-0.06em",
                }}
              >
                Internship Programs
              </h3>
              <p className="text-gray-200 mt-2 whitespace-pre-line">Structured internship opportunities
providing real-world experience in tech
companies.</p>
            </div>

            {/* Data Science */}
            <div className="group rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow" style={{background:"rgba(17, 27, 58, 1)"}}>
              <div className="relative w-[200px] h-[200px] mb-4">
                <img src="/images/15.png" alt="Data Science" className="w-[200px] h-[200px] object-cover" />
              </div>
              <h3 className="text-white"
                style={{
                  fontFamily: "Inter, ui-sans-serif, system-ui",
                  fontWeight: 600,
                  fontSize: "48.16px",
                  lineHeight: "57.79px",
                  letterSpacing: "-0.06em",
                }}
              >
                Data Science
              </h3>
              <p className="text-gray-200 mt-2 whitespace-pre-line">Data Analytics visualization training with
real-world datasets and industry tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Contact Us</h2>
              <p className="text-gray-600">Have questions? Send us a message and we'll get back to you.</p>
            </div>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800">Thank you for your message! We'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">Something went wrong. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="John" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="Doe" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="you@example.com" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  placeholder="How can we help?" 
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" />
                    <span className="ml-2">Sending...</span>
                  </>
                ) : (
                  "Send message"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{background:"rgba(17, 27, 58, 1)"}}>
        <div className="container mx-auto px-4">
          {/* Top Section - Three Columns */}
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            {/* Left Column - Company Information */}
            <div className="space-y-4">
              {/* Logo Only */}
              <div className="mb-4">
                <img 
                  src="/images/16.png" 
                  alt="INNO-TECH Logo" 
                  className="h-10 w-10"
                  style={{
                    transform: "rotate(0deg)",
                    opacity: 1,
                    marginTop: "61px",
                    marginLeft: "131px"
                  }}
                />
              </div>
              
              {/* Company Slogan/Description */}
              <div className="text-gray-300 space-y-1 text-sm">
                <p>Innovating Tomorrow, Securing Today.</p>
                <p>Empowering individuals in</p>
                <p>Cybersecurity, AI / ML and Data Science</p>
                <p>through expert-led education</p>
              </div>
              
              {/* Social Media Links */}
              <div className="flex gap-4 pt-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Linkedin</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Github</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Messages</a>
              </div>
            </div>

            {/* Middle Column - Quick Links */}
            <div className="space-y-4 md:ml-auto">
              <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About Us</a>
                <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Services</a>
                <a href="#offers" className="block text-gray-300 hover:text-white transition-colors">What We Offer</a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            {/* Right Column - Our Services */}
            <div className="space-y-4 md:ml-auto">
              <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Cybersecurity</a>
                <a href="#services" className="block text-gray-300 hover:text-white transition-colors">AI / ML</a>
                <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Data Science</a>
                <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Tech Workshops</a>
                <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Internship Programs</a>
              </div>
            </div>
          </div>

          {/* Bottom Section - Separator Line */}
          <div className="border-t border-gray-600 pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Copyright Information */}
              <p className="text-gray-300 text-sm">© 2025 INNO-TECH. All rights reserved.</p>
              
              {/* Legal Links */}
              <div className="flex gap-4 text-sm">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
