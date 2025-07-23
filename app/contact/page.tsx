'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { toast } from 'sonner';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  privacy: boolean;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        privacy: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Message sent successfully! I\'ll get back to you soon.');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: '',
                    message: '',
                    privacy: false,
                });
            } else {
                toast.error(data.error || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-32 px-8 pb-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 relative z-10">
                    <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Ready to start your next project? We'd love to hear from you. 
                        Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 relative z-10">
                    {/* Contact Info Cards */}
                    <div className="space-y-8">
                        <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="p-3 bg-cyan-400/10 rounded-full">
                                    <Mail className="h-6 w-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Email Us</h3>
                                    <p className="text-sm text-foreground/70">Send us an email anytime</p>
                                </div>
                            </div>
                            <p className="text-foreground/80">desmondathisbest@gmail.com</p>
                            <p className="text-foreground/80">support@yourcompany.com</p>
                        </div>

                        <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="p-3 bg-cyan-400/10 rounded-full">
                                    <Phone className="h-6 w-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Call Us</h3>
                                    <p className="text-sm text-foreground/70">Mon-Fri from 8am to 5pm</p>
                                </div>
                            </div>
                            <p className="text-foreground/80">+1 (555) 123-4567</p>
                            <p className="text-foreground/80">+1 (555) 123-4568</p>
                        </div>

                        <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="p-3 bg-cyan-400/10 rounded-full">
                                    <MapPin className="h-6 w-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Visit Us</h3>
                                    <p className="text-sm text-foreground/70">Come say hello at our office</p>
                                </div>
                            </div>
                            <p className="text-foreground/80">
                                123 Tech Street<br />
                                Innovation City, IC 12345<br />
                                United States
                            </p>
                        </div>

                        <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="p-3 bg-cyan-400/10 rounded-full">
                                    <Clock className="h-6 w-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Business Hours</h3>
                                    <p className="text-sm text-foreground/70">When we're available</p>
                                </div>
                            </div>
                            <div className="space-y-1 text-sm text-foreground/80">
                                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                                <p>Saturday: 9:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-8">
                            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-accent/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200"
                                            placeholder="John"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-accent/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200"
                                            placeholder="Doe"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-accent/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200"
                                        placeholder="john.doe@example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-accent/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200"
                                        placeholder="How can we help you?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-accent/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200 resize-none"
                                        placeholder="Tell us more about your project..."
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        name="privacy"
                                        checked={formData.privacy}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-cyan-400 focus:ring-cyan-400/50 border-border/50 rounded"
                                        required
                                    />
                                    <label htmlFor="privacy" className="text-sm text-foreground/70">
                                        I agree to the <a href="#" className="text-cyan-400 hover:underline">Privacy Policy</a> and <a href="#" className="text-cyan-400 hover:underline">Terms of Service</a>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full md:w-auto flex items-center justify-center space-x-2 px-8 py-3 bg-cyan-400 hover:bg-cyan-500 disabled:bg-cyan-400/50 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200 font-medium"
                                >
                                    <Send className="h-4 w-4" />
                                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-20 relative z-10">
                    <h2 className="text-3xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6">
                            <h3 className="font-semibold mb-3 text-cyan-400">How quickly can you start my project?</h3>
                            <p className="text-foreground/70 text-sm">
                                We typically begin new projects within 1-2 weeks of signing the contract, 
                                depending on our current workload and project complexity.
                            </p>
                        </div>
                        <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6">
                            <h3 className="font-semibold mb-3 text-cyan-400">What technologies do you work with?</h3>
                            <p className="text-foreground/70 text-sm">
                                We specialize in modern web technologies including React, Next.js, Node.js, 
                                TypeScript, and various cloud platforms like AWS and Vercel.
                            </p>
                        </div>
                        <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6">
                            <h3 className="font-semibold mb-3 text-cyan-400">Do you provide ongoing support?</h3>
                            <p className="text-foreground/70 text-sm">
                                Yes! We offer various support packages including maintenance, updates, 
                                and technical support to keep your application running smoothly.
                            </p>
                        </div>
                        <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6">
                            <h3 className="font-semibold mb-3 text-cyan-400">What is your pricing structure?</h3>
                            <p className="text-foreground/70 text-sm">
                                Our pricing varies based on project scope and complexity. We offer both 
                                fixed-price contracts and hourly rates. Contact us for a detailed quote.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}