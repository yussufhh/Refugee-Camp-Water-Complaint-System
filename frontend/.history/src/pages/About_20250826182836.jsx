
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Users, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const highlightCards = [
    {
      icon: Shield,
      title: "Safe & Anonymous Reporting",
      description: "Protecting the identity and safety of refugees while ensuring their concerns are heard."
    },
    {
      icon: Eye,
      title: "Real-Time Complaint Tracking",
      description: "Monitor the status of your complaints with transparent, real-time updates."
    },
    {
      icon: Users,
      title: "NGO Dashboard for Faster Solutions",
      description: "Streamlined interface for NGOs to efficiently manage and resolve water issues."
    },
    {
      icon: HeartHandshake,
      title: "Builds Trust & Accountability",
      description: "Creating transparent processes that build trust between refugees and aid organizations."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Image/Illustration */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl p-6 aspect-video flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80" 
                  alt="Community working together to solve water challenges" 
                  className="rounded-xl shadow-lg w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-900 rounded-full opacity-10 dark:opacity-20"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500 rounded-full opacity-10 dark:opacity-20"></div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-4">
              About the Project
            </h2>
            <p className="text-lg text-emerald-600 dark:text-emerald-400 font-medium mb-6">
              Empowering refugees with a voice to solve water challenges.
            </p>

            <div className="space-y-4 text-gray-700 dark:text-gray-300 mb-8">
              <p>
                In refugee camps around the world, access to clean water remains one of the most critical challenges. 
                Existing systems often lack transparency, making it difficult for refugees to report issues and track 
                resolutions effectively.
              </p>
              <p>
                Our platform was created to bridge this gap by providing a secure, user-friendly system that empowers 
                refugees to report water-related complaints while maintaining their safety and anonymity.
              </p>
              <p>
                We believe that by creating transparent processes and giving refugees a direct channel to communicate 
                their needs, we can not only solve water challenges more efficiently but also build trust between 
                refugee communities and aid organizations.
              </p>
              <p>
                Our vision extends beyond water complaints—we aim to expand this model to other essential services 
                including food distribution, healthcare, and security, creating a comprehensive platform for 
                humanitarian response.
              </p>
            </div>

            {/* Highlight Cards */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {highlightCards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-100 dark:border-gray-700"
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                      <card.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 dark:text-white mb-1">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Banner */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-900 to-emerald-600 rounded-xl p-6 text-white"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Ready to make a difference?</h3>
                  <p className="opacity-90">Join us in solving water challenges in refugee camps.</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-3 px-6 rounded-full flex items-center space-x-2 transition-colors duration-300 shadow-lg whitespace-nowrap"
                >
                  <span>Submit Your First Complaint</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;