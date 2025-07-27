'use client';

import { useState } from 'react';
import { CreditCard, DollarSign, Heart, Shield, Users, Stethoscope, CheckCircle, X } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";

interface DonationAmount {
  value: number;
  label: string;
  impact: string;
}

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const DonationsPage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [donorInfo, setDonorInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    anonymous: false,
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const donationAmounts: DonationAmount[] = [
    { value: 25, label: '$25', impact: 'Provides basic medical supplies for 5 patients' },
    { value: 50, label: '$50', impact: 'Funds vaccination for 10 children' },
    { value: 100, label: '$100', impact: 'Sponsors a mobile clinic visit to 1 village' },
    { value: 250, label: '$250', impact: 'Trains 2 community health workers' },
    { value: 500, label: '$500', impact: 'Provides emergency medical equipment' },
    { value: 1000, label: '$1000', impact: 'Funds a complete health outreach program' },
  ];

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: <CreditCard className="h-6 w-6" />,
      description: 'Visa, Mastercard, American Express',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: <div className="text-lg font-bold">P</div>,
      description: 'Pay with your PayPal account',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 'cashapp',
      name: 'Cash App',
      icon: <DollarSign className="h-6 w-6" />,
      description: 'Send via Cash App',
      color: 'from-green-500 to-green-600'
    }
  ];

  const getCurrentAmount = () => {
    return selectedAmount || (customAmount ? parseFloat(customAmount) : 0);
  };

  const handleDonation = () => {
    // Simulate donation process
    setShowSuccessModal(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setSelectedAmount(null);
      setCustomAmount('');
      setSelectedPayment(null);
      setDonorInfo({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        anonymous: false,
      });
    }, 3000);
  };

  const SuccessModal = () => (
    <AnimatePresence>
      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowSuccessModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-background border border-cyan-400/20 rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
                className="mx-auto w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center mb-6"
              >
                <Heart className="h-8 w-8 text-white" />
              </motion.div>

              <h2 className="text-2xl font-bold mb-3 text-foreground">
                Thank You! 💙
              </h2>
              <p className="text-foreground/70 mb-6">
                Your generous donation of <span className="font-bold text-cyan-400">${getCurrentAmount()}</span> will help save lives in rural Nigeria. You'll receive a confirmation email shortly.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-white rounded-lg font-medium hover:from-cyan-500 hover:to-cyan-600 transition-all duration-200"
              >
                Continue
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div className="pt-32 px-8 pb-20 select-none">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Make a Difference Today
              </h1>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
                Your donation directly funds life-saving healthcare services for underserved communities in rural Nigeria
              </p>
              <div className="absolute inset-0 -z-10 bg-cyan-400/10 blur-3xl rounded-full scale-150" />
            </motion.div>
          </div>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Users className="h-8 w-8" />, number: "10,000+", label: "Lives Impacted" },
              { icon: <Stethoscope className="h-8 w-8" />, number: "50+", label: "Villages Served" },
              { icon: <Heart className="h-8 w-8" />, number: "95%", label: "Funds to Programs" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 text-center"
              >
                <div className="text-cyan-400 flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Donation Form */}
            <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Choose Your Donation</h2>
              
              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Select Amount</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                  {donationAmounts.map((amount) => (
                    <motion.button
                      key={amount.value}
                      onClick={() => {
                        setSelectedAmount(amount.value);
                        setCustomAmount('');
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        selectedAmount === amount.value
                          ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                          : 'border-border/50 hover:border-cyan-400/50'
                      }`}
                    >
                      <div className="font-semibold">{amount.label}</div>
                      <div className="text-xs text-foreground/60 mt-1">{amount.impact}</div>
                    </motion.button>
                  ))}
                </div>
                
                {/* Custom Amount */}
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/60">$</span>
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full pl-8 pr-4 py-3 bg-accent/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <motion.button
                      key={method.id}
                      onClick={() => setSelectedPayment(method.id)}
                      whileHover={{ scale: 1.01 }}
                      className={`w-full p-4 rounded-lg border-2 transition-all duration-200 flex items-center space-x-4 ${
                        selectedPayment === method.id
                          ? 'border-cyan-400 bg-cyan-400/10'
                          : 'border-border/50 hover:border-cyan-400/50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${method.color} text-white`}>
                        {method.icon}
                      </div>
                      <div className="text-left flex-1">
                        <div className="font-medium">{method.name}</div>
                        <div className="text-sm text-foreground/60">{method.description}</div>
                      </div>
                      {selectedPayment === method.id && (
                        <CheckCircle className="h-5 w-5 text-cyan-400" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Donor Information */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Donor Information</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={donorInfo.firstName}
                    onChange={(e) => setDonorInfo({...donorInfo, firstName: e.target.value})}
                    className="px-4 py-3 bg-accent/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={donorInfo.lastName}
                    onChange={(e) => setDonorInfo({...donorInfo, lastName: e.target.value})}
                    className="px-4 py-3 bg-accent/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                    className="px-4 py-3 bg-accent/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={donorInfo.phone}
                    onChange={(e) => setDonorInfo({...donorInfo, phone: e.target.value})}
                    className="px-4 py-3 bg-accent/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  />
                </div>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={donorInfo.anonymous}
                    onChange={(e) => setDonorInfo({...donorInfo, anonymous: e.target.checked})}
                    className="h-4 w-4 text-cyan-400 focus:ring-cyan-400/50 border-border/50 rounded"
                  />
                  <span className="text-sm text-foreground/70">Make this donation anonymous</span>
                </label>
              </div>

              {/* Donate Button */}
              <motion.button
                onClick={handleDonation}
                disabled={!getCurrentAmount() || !selectedPayment}
                whileHover={{ scale: getCurrentAmount() && selectedPayment ? 1.02 : 1 }}
                whileTap={{ scale: getCurrentAmount() && selectedPayment ? 0.98 : 1 }}
                className="w-full py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg"
              >
                {getCurrentAmount() ? `Donate $${getCurrentAmount()}` : 'Select Amount'}
              </motion.button>

              {/* Security Notice */}
              <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-foreground/60">
                <Shield className="h-4 w-4" />
                <span>Secure, encrypted payment processing</span>
              </div>
            </div>

            {/* Impact Information */}
            <div className="space-y-6">
              <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Your Impact</h3>
                {getCurrentAmount() > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-4 bg-cyan-400/10 rounded-lg border border-cyan-400/20"
                  >
                    <div className="text-lg font-semibold text-cyan-400 mb-2">
                      ${getCurrentAmount()} Impact
                    </div>
                    <div className="text-foreground/80">
                      {(() => {
                        const amount = getCurrentAmount();
                        if (amount >= 1000) return "Funds a complete health outreach program reaching multiple villages";
                        if (amount >= 500) return "Provides essential emergency medical equipment for mobile clinics";
                        if (amount >= 250) return "Trains 2 community health workers to serve their villages";
                        if (amount >= 100) return "Sponsors a mobile clinic visit to 1 remote village";
                        if (amount >= 50) return "Funds vaccination for 10 children";
                        if (amount >= 25) return "Provides basic medical supplies for 5 patients";
                        return "Every dollar helps save lives in rural Nigeria";
                      })()}
                    </div>
                  </motion.div>
                )}
                
                <div className="space-y-4 text-sm text-foreground/70">
                  <div>• 95% of donations go directly to healthcare programs</div>
                  <div>• Tax-deductible in the United States</div>
                  <div>• Monthly impact reports sent to all donors</div>
                  <div>• Full transparency in fund allocation</div>
                </div>
              </div>

              <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Recent Success</h3>
                <div className="text-sm text-foreground/80 space-y-3">
                  <p>
                    "Thanks to donors like you, we've successfully established 3 new mobile clinic routes, 
                    providing healthcare access to over 2,000 people in remote villages."
                  </p>
                  <p className="font-medium">
                    - Dr. Obe, Foundation Director
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/about"
                  className="text-cyan-400 hover:text-cyan-300 underline text-sm transition-colors"
                >
                  Learn more about our programs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SuccessModal />
    </>
  );
};

export default DonationsPage;