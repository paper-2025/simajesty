'use client';

import { useState } from 'react';
import { Copy, Check, Heart, DollarSign, CreditCard, Building2 } from "lucide-react";
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface DonationAccount {
  id: string;
  name: string;
  type: string;
  details: {
    label: string;
    value: string;
  }[];
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
}

const DonationsPage = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const donationAccounts: DonationAccount[] = [
    {
      id: 'bank1',
      name: 'Nigerian Naira Account',
      type: 'Local Bank Transfer',
      details: [
        { label: 'Account Name', value: 'Dr. Obe Charity Foundation' },
        { label: 'Account Number', value: '1312584189' },
        { label: 'Bank Name', value: 'Zenith bank Plc' },
        
      ],
      icon: <Building2 className="h-6 w-6" />,
      color: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-500/10 to-emerald-600/10'
    },
    {
      id: 'bank2',
      name: 'USD Account ',
      type: 'Dollar Account',
      details: [
        { label: 'Account Number', value: '9159992005' },
        { label: 'Bank Name', value: 'Bank of America' },
       
      ],
      icon: <DollarSign className="h-6 w-6" />,
      color: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-500/10 to-cyan-600/10'
    },
    {
      id: 'bank3',
      name: 'PayPal',
      type: 'International Transfer',
      details: [
        { label: 'Account', value: '@obecharity' },
        
      ],
      icon: <CreditCard className="h-6 w-6" />,
      color: 'from-purple-500 to-indigo-600',
      bgGradient: 'from-purple-500/10 to-indigo-600/10'
    },
    {
      id: 'bannk 4',
      name: 'Cashapp',
      type: 'Digital Donations',
      details: [
         { label: 'Account', value: '@obecharityfoundation' },
       
      ],
      icon: <div className="text-lg font-bold">₿</div>,
      color: 'from-orange-500 to-amber-600',
      bgGradient: 'from-orange-500/10 to-amber-600/10'
    }
  ];

  const copyToClipboard = async (text: string, fieldId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldId);
      toast.success('Copied to clipboard!');
      
      setTimeout(() => {
        setCopiedField(null);
      }, 2000);
    } catch (err) {
      toast.error('Failed to copy');
    }
  };

  return (
    <div className="pt-32 px-8 pb-20 select-none min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Support Our Mission
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
              Your donation helps us provide life-saving healthcare services to underserved communities in rural Nigeria
            </p>
            <div className="absolute inset-0 -z-10 bg-cyan-400/10 blur-3xl rounded-full scale-150" />
          </motion.div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 mb-8">
            {[
              { icon: <Heart className="h-6 w-6" />, number: "10,000+", label: "Lives Impacted" },
              { icon: <Building2 className="h-6 w-6" />, number: "50+", label: "Villages Served" },
              { icon: <DollarSign className="h-6 w-6" />, number: "95%", label: "Funds to Programs" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-4"
              >
                <div className="text-cyan-400 flex justify-center mb-2">
                  {stat.icon}
                </div>
                <div className="text-xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Donation Accounts */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center text-cyan-400">
            Choose Your Preferred Donation Method
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {donationAccounts.map((account, index) => (
              <motion.div
                key={account.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-gradient-to-br ${account.bgGradient} backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-300`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${account.color} text-white shadow-lg`}>
                      {account.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{account.name}</h3>
                      <p className="text-sm text-foreground/70">{account.type}</p>
                    </div>
                  </div>
                </div>

                {/* Account Details */}
                <div className="space-y-4">
                  {account.details.map((detail, detailIndex) => {
                    const fieldId = `${account.id}-${detailIndex}`;
                    const isCopied = copiedField === fieldId;
                    
                    return (
                      <div key={detailIndex} className="bg-background/50 rounded-lg p-4 border border-border/50">
                        <div className="flex justify-between items-center">
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground/80 mb-1">{detail.label}</p>
                            <p className="text-foreground font-mono text-sm select-text cursor-text break-all">
                              {detail.value}
                            </p>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => copyToClipboard(detail.value, fieldId)}
                            className="ml-3 p-2 rounded-lg bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                          >
                            {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </motion.button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Security Badge */}
                <div className="mt-6 pt-4 border-t border-border/30">
                  <div className="flex items-center justify-center space-x-2 text-xs text-foreground/60">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Secure & Verified Account</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-background/50 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400 text-center">Important Notes</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-foreground/70">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>All donations are tax-deductible in applicable jurisdictions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>All donations go directly to healthcare programs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Monthly impact reports sent to all donors</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>All transactions are secure and encrypted</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Email us at obefoundation4charity@gmail.com after donation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Receipts and confirmations provided for all contributions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationsPage;