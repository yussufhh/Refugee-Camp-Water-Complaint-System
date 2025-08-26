import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Users, 
  HeartHandshake,
  ArrowRight,
  MapPin,
  Target,
  Globe,
  Compass
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
        duration: 0.6
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

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide refugee communities with a secure, transparent platform for reporting and resolving water-related issues, ensuring every voice is heard and every complaint matters."
    },
    {
      icon: Compass,
      title: "Our Vision",
      description: "A world where all refugee camps have equitable access to clean water through community-driven solutions and transparent accountability systems."
    },
    {
      icon: Globe,
      title: "Our Reach",
      description: "Currently serving multiple refugee camps across East Africa, with plans to expand to other regions facing similar water accessibility challenges."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">
            Who We Are
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-emerald-600 dark:text-emerald-400 font-medium">
            Empowering refugee communities through transparent water complaint systems
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Image/Illustration */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="order-2 lg:order-1"
          >
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
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="order-1 lg:order-2"
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-bold text-blue-900 dark:text-white mb-6">
              About Our Initiative
            </motion.h3>
            
            <motion.div variants={itemVariants} className="space-y-4 text-gray-700 dark:text-gray-300 mb-6">
              <p>
                The Refugee Camp Water Complaint System was born from a critical need observed in camps across East Africa, 
                starting with our pilot program in Dadaab Refugee Camp. In these challenging environments, access to clean 
                water isn't just a convenience—it's a matter of health, dignity, and survival.
              </p>
              <p>
                Traditional complaint mechanisms often failed to provide transparency or accountability, leaving refugees 
                frustrated and without recourse when water systems malfunctioned. Our platform revolutionizes this process 
                by putting power back into the hands of community members while giving aid organizations the tools they 
                need to respond effectively.
              </p>
            </motion.div>

            {/* Callout quote */}
            <motion.div variants={itemVariants} className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-emerald-500 p-6 rounded-r-lg mb-6">
              <p className="text-blue-900 dark:text-blue-100 italic text-lg">
                "Water is the foundation of life in any community. By ensuring refugee voices are heard in water management, 
                we're not just solving practical problems—we're restoring dignity and building trust."
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                What sets us apart is our community-centered approach. We've worked directly with refugees to design a system 
                that addresses their specific concerns about safety, anonymity, and transparency. Every feature has been 
                tested and refined with input from the people who use it daily.
              </p>
              <p>
                Our future vision extends beyond water complaints. We're developing modules for food distribution, healthcare 
                access, and security concerns—creating a comprehensive platform for humanitarian response that puts refugee 
                voices at the center of solution-making.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-blue-900 dark:text-white mb-12">Our Core Principles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-blue-900 dark:text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location Map Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-16"
        >
          <div className="flex items-center mb-6">
            <MapPin className="h-6 w-6 text-emerald-600 mr-2" />
            <h3 className="text-2xl font-bold text-blue-900 dark:text-white">Our Current Operations</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We launched our pilot program in Dadaab Refugee Complex in Kenya, one of the world's largest refugee settlements. 
                This location was chosen for its significant water challenges and our strong partnerships with NGOs operating in the area.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Dadaab's complex water infrastructure serves over 200,000 refugees, making transparent complaint resolution 
                essential for maintaining health and preventing conflicts over water resources.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <span>Located in Garissa County, Kenya</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <span>Serving approximately 200,000 refugees</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                  <span>Partnered with 5 major NGOs in the region</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 flex items-center justify-center">
              <div className="relative w-full h-64 bg-blue-50 dark:bg-blue-900/20 rounded-lg overflow-hidden">
                {/* Simplified map representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="mx-auto bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <MapPin className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <p className="font-semibold text-blue-900 dark:text-white">Dadaab Refugee Camp</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Garissa County, Kenya</p>
                  </div>
                </div>
                
                {/* Map markers */}
                <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-emerald-500 rounded-full"></div>
                <div className="absolute top-2/3 left-1/2 w-3 h-3 bg-emerald-500 rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-emerald-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlight Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-blue-900 dark:text-white mb-12">How We Make a Difference</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlightCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mb-4">
                    <card.icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-blue-900 dark:text-white mb-3">
                    {card.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="bg-gradient-to-r from-blue-900 to-emerald-600 rounded-2xl p-8 text-white shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Join Us in Making a Difference</h3>
              <p className="opacity-90 text-lg">
                Your voice matters. Report water issues or learn how to support our mission.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-3 px-8 rounded-full flex items-center space-x-2 transition-colors duration-300 shadow-lg whitespace-nowrap"
            >
              <span>Submit Your First Complaint</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;