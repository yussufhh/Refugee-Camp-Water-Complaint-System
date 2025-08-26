
import React from 'react'
import { 
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Water Complaint System</h3>
              <p className="text-gray-400">Empowering refugees to report and track water complaints transparently.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Help</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="text-gray-400 not-italic">
                Email: info@watercomplaints.org<br />
                Phone: +1 (234) 567-8900
              </address>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Refugee Camp Water Complaint System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
