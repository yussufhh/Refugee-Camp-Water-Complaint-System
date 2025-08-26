import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  ArrowRight,
  ArrowLeft,
  Check,
  AlertCircle,
  Lock
} from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20 py-12 px-4">
      <div className="max-w-md w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-emerald-600 p-6 text-center">
            <motion.h1 
              variants={itemVariants}
              className="text-2xl font-bold text-white"
            >
              {isSubmitted ? 'Check Your Email' : 'Reset Your Password'}
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-blue-100 mt-2"
            >
              {isSubmitted 
                ? 'We sent a password reset link to your email' 
                : 'Enter your email to receive a reset link'
              }
            </motion.p>
          </div>

          {/* Form Content */}
          <div className="p-6">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 ${
                          error ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="your.email@example.com"
                        disabled={isSubmitting}
                      />
                    </div>
                    {error && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-sm text-red-500 flex items-center"
                      >
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {error}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <motion.button
                      type="submit"m.m
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-800 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Reset Link</span>
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </motion.button>
                  </motion.div>

                  <motion.div variants={itemVariants} className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a 
                      href="#" 
                      className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 transition-colors inline-flex items-center"
                    >
                      <ArrowLeft className="h-4 w-4 mr-1" />
                      Back to Login
                    </a>
                  </motion.div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center space-y-5"
                >
                  <div className="flex justify-center">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-4">
                      <Check className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Check Your Inbox
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We've sent a password reset link to <span className="font-medium text-blue-600 dark:text-blue-400">{email}</span>
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      <strong>Didn't receive the email?</strong> Check your spam folder or{' '}
                      <button 
                        type="button" 
                        onClick={() => setIsSubmitted(false)}
                        className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 underline"
                      >
                        try again
                      </button>
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link 
                    to="/login" 
                    className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 transition-colors inline-flex items-center"
                    >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to Login
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Security Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
        >
          <div className="flex items-start">
            <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
            <p className="text-sm text-blue-700 dark:text-white">
              For security reasons, the password reset link will expire in 1 hour. If you need assistance, contact our support team.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ForgotPassword;