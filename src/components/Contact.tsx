"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    alert("Thank you for your inquiry. We will contact you soon!");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Get in Touch</h2>
        <p className="text-xl text-gray-700 text-center mb-16">
          Have a project or need our services? Contact us today for a consultation.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-3xl text-blue-600 mr-4">📍</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-700">
                      Lubumbashi, Haut-Katanga Province<br />
                      Democratic Republic of Congo
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-3xl text-red-600 mr-4">📞</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-700">+243 979 000 444</p>
                    <p className="text-gray-700">+243 857 000 080</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-3xl text-blue-600 mr-4">✉️</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-700">info@globalservices.com</p>
                    <p className="text-gray-700">globalservicesrdc@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Details */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-4">Company Details</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>ID.NAT:</strong> 6-490-N14709R</p>
                <p><strong>RCCM:</strong> LSHI/RCCM/16-B-4265</p>
                <p><strong>NIF:</strong> A1809847Z</p>
                <p><strong>ARSP:</strong> 6268007350</p>
                <p><strong>Bank Account (USD):</strong> ECOBANK 35200023338</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-900 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 bg-white"
              />
            </div>
            <div>
              <label className="block text-gray-900 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 bg-white"
              />
            </div>
            <div>
              <label className="block text-gray-900 font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 bg-white"
              />
            </div>
            <div>
              <label className="block text-gray-900 font-semibold mb-2">Service Interested In</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 bg-white"
              >
                <option value="">Select a service</option>
                <option value="mining">Mining & Industrial Supplies</option>
                <option value="petroleum">Petroleum & Safety Supplies</option>
                <option value="construction">Construction & Civil Works</option>
                <option value="industrial">Industrial Installation</option>
                <option value="agro">Agropastoral Services</option>
                <option value="advisory">Advisory Services</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-900 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 bg-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
