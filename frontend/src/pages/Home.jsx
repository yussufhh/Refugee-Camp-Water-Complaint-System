
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  CheckCircle, 
  Shield, 
  Eye, 
  Users, 
  MapPin, 
  HeartHandshake,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const Home = () => {
  const [email, setEmail] = useState('');
  
  // Animation for counter values
  const Counter = ({ end, suffix }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      let start = 0;
      const duration = 2000; // ms
      const incrementTime = 20; // ms
      const steps = duration / incrementTime;
      const incrementValue = end / steps;
      
      const timer = setInterval(() => {
        start += incrementValue;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, incrementTime);
      
      return () => clearInterval(timer);
    }, [end]);
    
    return <span>{count}{suffix}</span>;
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1684&q=80')`
        }}
      >
        <div className="text-center text-white px-4 max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Refugee Camp Water Complaint System
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A digital platform empowering refugees to report and track water complaints transparently.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1">
              Submit Complaint
            </button>
            <button className="bg-transparent hover:bg-white/20 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition duration-300 transform hover:-translate-y-1">
              Track Complaint
            </button>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="text-white h-8 w-8" />
        </motion.div>
      </section>

      {/* Counters Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                <Counter end={200} suffix="+" />
              </div>
              <p className="text-gray-700">Complaints Resolved</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                <Counter end={400} suffix="+" />
              </div>
              <p className="text-gray-700">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                <Counter end={10} suffix="+" />
              </div>
              <p className="text-gray-700">Camps Supported</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                <Counter end={15} suffix="+" />
              </div>
              <p className="text-gray-700">NGOs Engaged</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">Our Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-blue-100"
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <CheckCircle className="text-blue-800 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Submit Complaints Easily</h3>
              <p className="text-gray-600">Safe, simple and anonymous complaint submission process.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-blue-100"
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Eye className="text-blue-800 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Track Complaint Status</h3>
              <p className="text-gray-600">Real-time updates on your complaint resolution progress.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-blue-100"
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="text-blue-800 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Transparent & Secure</h3>
              <p className="text-gray-600">Builds trust through complete transparency and data security.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-blue-100"
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="text-blue-800 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">NGO Dashboard</h3>
              <p className="text-gray-600">Staff can manage and resolve complaints more efficiently.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md border border-blue-200">
                <span className="text-3xl font-bold text-blue-900">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Submit Complaint</h3>
              <p className="text-gray-600">Refugee submits a water-related issue through our simple form.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md border border-blue-200">
                <span className="text-3xl font-bold text-blue-900">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Receive ID</h3>
              <p className="text-gray-600">Complaint receives a unique tracking ID for follow-up.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md border border-blue-200">
                <span className="text-3xl font-bold text-blue-900">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Staff Review</h3>
              <p className="text-gray-600">NGO staff review and update the complaint status.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md border border-blue-200">
                <span className="text-3xl font-bold text-blue-900">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Problem Resolved</h3>
              <p className="text-gray-600">The water issue is resolved with complete transparency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Be part of the solution</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Together, we can solve water challenges in refugee camps and ensure everyone has access to clean water.</p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Stay Updated</h2>
            <p className="text-gray-600 mb-8">Subscribe to our newsletter to receive progress updates and success stories.</p>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    
    </div>
  );
};

export default Home;