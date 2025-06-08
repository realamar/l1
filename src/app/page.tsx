"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 via-white to-white px-6 py-32 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight tracking-tight text-gray-900">
          Accelerate Your Growth with Leaptics
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your strategic digital partner for scaling revenue, building brand authority, and converting leads into loyal customers.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 text-lg rounded-full hover:bg-blue-700 transition font-semibold shadow-lg hover:scale-105"
        >
          Book a Free Strategy Call
        </Link>
      </section>

      {/* Services Section */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "SEO Optimization", desc: "Outrank competitors and dominate search results with powerful SEO strategies." },
              { title: "Paid Advertising", desc: "Targeted PPC campaigns that drive traffic and deliver measurable ROI." },
              { title: "Social Media Marketing", desc: "Cultivate community and credibility with creative, consistent social content." },
              { title: "Conversion Web Design", desc: "Modern, fast websites engineered to convert users into clients." },
              { title: "Email Marketing", desc: "Automated nurturing campaigns to engage and convert your audience." },
              { title: "Content & Branding", desc: "Impactful storytelling and branding that sets you apart in your industry." },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{s.title}</h3>
                <p className="text-base text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10 text-gray-900">Trusted by Modern Brands</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
            {["client1.svg", "client2.svg", "client3.svg"].map((logo, i) => (
              <Image
                key={i}
                src={`/${logo}`}
                alt={`Client Logo ${i + 1}`}
                width={120}
                height={60}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: "Nandan Bajgain",
                text: "Leaptics helped us triple our leads in just 3 months. They understand strategy and execution like no one else.",
              },
              {
                name: "Aswin Karthick",
                text: "From branding to digital campaigns, Leaptics transformed our entire digital presence. Highly recommended!",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-md"
              >
                <p className="text-gray-700 italic mb-4">“{t.text}”</p>
                <p className="text-sm font-semibold text-right text-blue-600">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500 border-t border-gray-100">
        &copy; {new Date().getFullYear()} Leaptics. All rights reserved.
      </footer>
    </main>
  );
}
