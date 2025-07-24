'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, X, Sparkles } from "lucide-react";
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  privacy: boolean;
}

const SuccessModal = ({ isOpen, onClose, userName }: { isOpen: boolean; onClose: () => void; userName: string }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm select-none"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            className="relative bg-background border border-cyan-400/20 rounded-2xl p-8 max-w-md w-full shadow-2xl select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center select-none">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
                className="mx-auto w-16 h-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center mb-6"
              >
                <CheckCircle className="h-8 w-8 text-white" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold mb-3 text-foreground"
              >
                Thank You for Your Support! 🙏
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-foreground/70 mb-6"
              >
                Thank you, <span className="font-semibold text-cyan-400">{userName}</span>! 
                We've received your message and will get back to you within 24 hours to discuss how you can help transform rural healthcare in Nigeria.
              </motion.p>

              <div className="relative mb-6 pointer-events-none">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -top-2 left-1/4"
                >
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                </motion.div>
                <motion.div
                  animate={{ 
                    rotate: -360,
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -top-1 right-1/4"
                >
                  <Sparkles className="h-3 w-3 text-green-400" />
                </motion.div>
              </div>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={onClose}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-white rounded-lg font-medium hover:from-cyan-500 hover:to-cyan-600 transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2"
              >
                Got it, thanks!
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

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
    const [showSuccessModal, setShowSuccessModal] = useState(false);

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
                setShowSuccessModal(true);
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
        <>
            <div className="pt-32 px-8 pb-20 select-none">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 relative z-10">
                        <h1 className="text-4xl font-bold mb-6 cursor-default bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                            Partner With Our Mission
                        </h1>
                        <p className="text-lg text-foreground/70 max-w-2xl mx-auto cursor-default">
                            Join us in transforming rural healthcare in Nigeria. Whether you're interested in 
                            volunteering, donating, or partnering with us, we'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12 relative z-10">
                        <div className="space-y-8">
                            <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 cursor-default select-none">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="p-3 bg-cyan-400/10 rounded-full">
                                        <Mail className="h-6 w-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Email Us</h3>
                                        <p className="text-sm text-foreground/70">Send us an email anytime</p>
                                    </div>
                                </div>
                                <p className="text-foreground/80 select-text cursor-text">info@drobecharityfoundation.org</p>
                                <p className="text-foreground/80 select-text cursor-text">partnerships@drobecharityfoundation.org</p>
                            </div>

                            <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 cursor-default select-none">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="p-3 bg-cyan-400/10 rounded-full">
                                        <Phone className="h-6 w-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Call Us</h3>
                                        <p className="text-sm text-foreground/70">Mon-Fri from 8am to 6pm (WAT)</p>
                                    </div>
                                </div>
                                <p className="text-foreground/80 select-text cursor-text">+234 (0) 813 456 7890</p>
                                <p className="text-foreground/80 select-text cursor-text">+234 (0) 802 123 4567</p>
                            </div>

                            <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 cursor-default select-none">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="p-3 bg-cyan-400/10 rounded-full">
                                        <MapPin className="h-6 w-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Visit Us</h3>
                                        <p className="text-sm text-foreground/70">Our headquarters and training center</p>
                                    </div>
                                </div>
                                <address className="text-foreground/80 not-italic select-text cursor-text">
                                    Dr. Obe Charity Foundation<br />
                                    15 Healthcare Drive<br />
                                    Victoria Island, Lagos<br />
                                    Nigeria
                                </address>
                            </div>

                            <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 cursor-default select-none">
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

                        <div className="lg:col-span-2">
                            <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-8 cursor-default">
                                <h2 className="text-2xl font-semibold mb-6">Partner With Our Mission</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium mb-2 cursor-default select-none">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-accent/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200 cursor-text"
                                                placeholder="John"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium mb-2 cursor-default select-none">
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-accent/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200 cursor-text"
                                                placeholder="Doe"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2 cursor-default select-none">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-accent/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200 cursor-text"
                                            placeholder="john.doe@example.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium mb-2 cursor-default select-none">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-accent/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200 cursor-text"
                                            placeholder="Partnership opportunity, volunteer inquiry, donation, etc."
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2 cursor-default select-none">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-accent/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200 resize-none cursor-text"
                                            placeholder="Tell us how you'd like to support our mission or get involved..."
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
                                            className="h-4 w-4 text-cyan-400 focus:ring-cyan-400/50 border-border/50 rounded cursor-pointer"
                                            required
                                        />
                                        <label htmlFor="privacy" className="text-sm text-foreground/70 cursor-pointer select-none">
                                            I agree to the <a href="#" className="text-cyan-400 hover:underline cursor-pointer">Privacy Policy</a> and <a href="#" className="text-cyan-400 hover:underline cursor-pointer">Terms of Service</a>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full md:w-auto flex items-center justify-center space-x-2 px-8 py-3 bg-cyan-400 hover:bg-cyan-500 disabled:bg-cyan-400/50 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2"
                                    >
                                        <Send className="h-4 w-4" />
                                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 relative z-10">
                        <h2 className="text-3xl font-semibold mb-12 text-center cursor-default">Frequently Asked Questions</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 cursor-default select-none">
                                <h3 className="font-semibold mb-3 text-cyan-400">How can I volunteer with your organization?</h3>
                                <p className="text-foreground/70 text-sm select-text cursor-text">
                                    We welcome volunteers from various backgrounds including medical professionals, 
                                    educators, and community mobilizers. Contact us to learn about current volunteer opportunities.
                                </p>
                            </div>
                            <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 cursor-default select-none">
                                <h3 className="font-semibold mb-3 text-cyan-400">What areas of Nigeria do you serve?</h3>
                                <p className="text-foreground/70 text-sm select-text cursor-text">
                                    We focus on underserved rural communities across Nigeria, with mobile medical units 
                                    and emergency response teams reaching the most remote areas where healthcare access is limited.
                                </p>
                            </div>
                            <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 cursor-default select-none">
                                <h3 className="font-semibold mb-3 text-cyan-400">How are donations used?</h3>
                                <p className="text-foreground/70 text-sm select-text cursor-text">
                                    Donations support our mobile clinics, medical supplies, staff training, emergency response equipment, 
                                    and community health education programs. We provide transparent financial reporting to all donors.
                                </p>
                            </div>
                            <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 cursor-default select-none">
                                <h3 className="font-semibold mb-3 text-cyan-400">Can corporations partner with you?</h3>
                                <p className="text-foreground/70 text-sm select-text cursor-text">
                                    Yes! We actively seek corporate partnerships for CSR initiatives, employee volunteering programs, 
                                    and technical support. Contact us to discuss partnership opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SuccessModal 
                isOpen={showSuccessModal} 
                onClose={() => setShowSuccessModal(false)} 
                userName={formData.firstName}
            />
        </>
    )
}