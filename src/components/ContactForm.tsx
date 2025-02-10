'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Show success message (in a real app, you'd want to handle this more gracefully)
    alert('Thank you for your message. We will get back to you soon!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-sage-dark mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-sage-dark mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-sage-dark mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-sage-dark mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-sage text-white px-6 py-3 rounded-md font-medium hover:bg-sage-dark transition-colors shadow-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
} 