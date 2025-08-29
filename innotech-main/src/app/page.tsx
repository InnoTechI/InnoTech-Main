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
        <div className="w-full px-3 sm:px-4 lg:px-6">
          <div
            className="relative overflow-hidden bg-gray-100 rounded-3xl"
            style={{
              backgroundImage: "url('/images/1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100vh",
            }}
          >
            {/* Overlay to reduce background intensity */}
            <div className="absolute inset-0 bg-white/20"></div>

            {/* Foreground content layer for text and buttons */}
            <div className="relative z-10 h-full flex flex-col justify-between">
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
              <div className="pointer-events-none">
                <div className="pointer-events-auto absolute bottom-6 right-6 flex flex-col items-end gap-3">
                  <button 
                    onClick={() => scrollToSection('#services')}
                    className="group inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-6 py-4 text-base font-semibold text-gray-800 shadow-md ring-1 ring-black/10 hover:bg-white transition-all duration-200 hover:scale-105"
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
                    className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-6 py-4 text-base font-medium text-gray-900 shadow-md ring-1 ring-black/10 hover:bg-white transition-all duration-200 hover:scale-105"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
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
          <div className="mb-8">
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
            {/* Removed extra descriptive paragraph per request */}
          </div>

          {/* Compact Vision & Mission copy above the cards */}
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 mb-8">
            <div className="relative rounded-xl bg-white p-6 pt-14">
              <div className="absolute top-4 left-4 w-8 h-8">
                <img src="/images/vision-icon.png" alt="Our Vision Icon" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-gray-900 mb-3"
                style={{
                  fontFamily: "Inter, ui-sans-serif, system-ui",
                  fontWeight: 700,
                  fontSize: "28px",
                  lineHeight: "36px",
                  letterSpacing: "-0.02em",
                }}
              >
                Our Vision
              </h3>
              <p className="text-gray-700"
                style={{
                  fontFamily: "Inter, ui-sans-serif, system-ui",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "26px",
                }}
              >
                Our Mission is to offer expert-led lectures, hand-on workshops, and internships to empower individuals in the tech world.
              </p>
            </div>

            <div className="relative rounded-xl bg-white p-6 pt-14">
              <div className="absolute top-4 left-4 w-8 h-8">
                <img src="/images/mission-icon.png" alt="Our Mission Icon" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-gray-900 mb-3"
                style={{
                  fontFamily: "Inter, ui-sans-serif, system-ui",
                  fontWeight: 700,
                  fontSize: "28px",
                  lineHeight: "36px",
                  letterSpacing: "-0.02em",
                }}
              >
                Our Mission
              </h3>
              <p className="text-gray-700"
                style={{
                  fontFamily: "Inter, ui-sans-serif, system-ui",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "26px",
                }}
              >
                We empower IT Professionals and students with resources, tools, and expertise to remain informed and skilled in the digital age.
              </p>
            </div>
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

      {/* Vision & Mission compact section moved above cards (see Mission section) */}

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

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-4xl">
            <h2 className="font-bold text-gray-900"
              style={{
                fontFamily: "Inter, ui-sans-serif, system-ui",
                fontWeight: 700,
                fontSize: "48px",
                lineHeight: "56px",
                letterSpacing: "-0.04em",
              }}
            >
              What our Learners Say
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Comprehensive tech education and training programs
              designed to empower your career growth
            </p>
          </div>

          <div className="relative">
            <div
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2"
              style={{ scrollbarWidth: "thin" }}
            >
              {/* Card 1 */}
              <div className="snap-start shrink-0 w-[320px] md:w-[360px] rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <p className="text-gray-700 leading-7">
                  "Working with Adorn was a game-changer for our business.
                  Their expertise in web design helped us create a stunning online
                  presence that resonated with our audience."
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-300" />
                  <div>
                    <p className="text-gray-900 font-medium">Lorem Ipsum</p>
                    <p className="text-gray-500 text-sm">XYZ</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="snap-start shrink-0 w-[320px] md:w-[360px] rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <p className="text-gray-700 leading-7">
                  "Working with Adorn was a game-changer for our business.
                  Their expertise in web design helped us create a stunning online
                  presence that resonated with our audience."
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-rose-300" />
                  <div>
                    <p className="text-gray-900 font-medium">Lorem Ipsum</p>
                    <p className="text-gray-500 text-sm">XYZ</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="snap-start shrink-0 w-[320px] md:w-[360px] rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <p className="text-gray-700 leading-7">
                  "Working with Adorn was a game-changer for our business.
                  Their expertise in web design helped us create a stunning online
                  presence that resonated with our audience."
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden">
                    <img src="/images/10.png" alt="avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Lorem Ipsum</p>
                    <p className="text-gray-500 text-sm">XYZ</p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="snap-start shrink-0 w-[320px] md:w-[360px] rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <p className="text-gray-700 leading-7">
                  "Working with Adorn was a game-changer for our business.
                  Their expertise in web design helped us create a stunning online
                  presence that resonated with our audience."
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden">
                    <img src="/images/11.png" alt="avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Lorem Ipsum</p>
                    <p className="text-gray-500 text-sm">XYZ</p>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="snap-start shrink-0 w-[320px] md:w-[360px] rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <p className="text-gray-700 leading-7">"Outstanding mentoring and a clear path to growth."</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-indigo-300" />
                  <div>
                    <p className="text-gray-900 font-medium">Alex Morgan</p>
                    <p className="text-gray-500 text-sm">ABC</p>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="snap-start shrink-0 w-[320px] md:w-[360px] rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <p className="text-gray-700 leading-7">"Great hands-on projects and supportive community."</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-300" />
                  <div>
                    <p className="text-gray-900 font-medium">Jamie Lee</p>
                    <p className="text-gray-500 text-sm">DEF</p>
                  </div>
                </div>
              </div>

              {/* Card 7 */}
              <div className="snap-start shrink-0 w-[320px] md:w-[360px] rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <p className="text-gray-700 leading-7">"Practical, current, and career-focused content."</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-amber-300" />
                  <div>
                    <p className="text-gray-900 font-medium">Taylor Ray</p>
                    <p className="text-gray-500 text-sm">GHI</p>
                  </div>
                </div>
              </div>

              {/* Card 8 */}
              <div className="snap-start shrink-0 w-[320px] md:w-[360px] rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <p className="text-gray-700 leading-7">"Helped me transition into a tech role with confidence."</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-fuchsia-300" />
                  <div>
                    <p className="text-gray-900 font-medium">Riley Chen</p>
                    <p className="text-gray-500 text-sm">JKL</p>
                  </div>
                </div>
              </div>

              {/* Card 9 */}
              <div className="snap-start shrink-0 w-[320px] md:w-[360px] rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <p className="text-gray-700 leading-7">"The mentorship was top-notch and actionable."</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-sky-300" />
                  <div>
                    <p className="text-gray-900 font-medium">Jordan P.</p>
                    <p className="text-gray-500 text-sm">MNO</p>
                  </div>
                </div>
              </div>

              {/* Card 10 */}
              <div className="snap-start shrink-0 w-[320px] md:w-[360px] rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <p className="text-gray-700 leading-7">"Clear curriculum and real-world assignments made all the difference."</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-lime-300" />
                  <div>
                    <p className="text-gray-900 font-medium">Sam K.</p>
                    <p className="text-gray-500 text-sm">PQR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative">
            {/* Decorative Image - Top Right Corner */}
            <div className="absolute top-0 right-0 w-32 h-32 lg:w-40 lg:h-40">
              <img src="/images/contact-image.png" alt="Contact Decoration" className="w-full h-full object-contain" />
            </div>

            {/* Main Content */}
            <div className="pr-40 lg:pr-48">
              {/* Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              
              {/* Introductory Paragraph */}
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Ready to start your tech journey? Contact us today and let's discuss how we can help you achieve your goals.
              </p>

              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Email */}
                <div>
                  <p className="text-sm text-gray-500 mb-1">(email)</p>
                  <p className="text-lg font-bold text-gray-900">Innotech.hello@gmail.com</p>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-sm text-gray-500 mb-1">(Phone)</p>
                  <p className="text-lg font-bold text-gray-900">+911234567898</p>
                </div>

                {/* Website/Blog */}
                <div>
                  <p className="text-sm text-gray-500 mb-1">(Website / blog)</p>
                  <p className="text-lg font-bold text-gray-900">techv004.blogspot.com</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16" style={{background:"rgba(17, 27, 58, 1)"}}>
        <div className="container mx-auto px-4">
          {/* Top Section - Three Columns */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Left Column - Company Information */}
            <div className="space-y-4">
              {/* Logo Only */}
              <div className="mb-4">
                <img src="/images/16.png" alt="INNO-TECH Logo" className="h-16 w-16" />
              </div>
              
              {/* Company Slogan/Description */}
              <div className="text-gray-300 space-y-1 text-sm">
                <p className="text-white">Innovating Tomorrow, Securing Today.</p>
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
          <div className="border-t border-gray-600 pt-8">
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
