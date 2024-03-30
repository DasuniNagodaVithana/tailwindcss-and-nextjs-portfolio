import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" > 
      <div className="container mx-auto px-4 mt-10 pt-20">
        <h1 className="text-4xl font-bold mb-10 text-center">Contact Me</h1>
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
          <div className="w-full md:w-1/2">
            <div className="mb-4 pt-8 font-bold  " >
              <p className="flex items-center mb-2"><FaEnvelope className="mr-2" />dasuninagodavithana@gmail.com</p> {/* Added FaEnvelope icon */}
              <p className="flex items-center"><FaPhone className="mr-2" />0763921136</p> {/* Added FaPhone icon */}
            </div>
            <div className="flex mb-4">
              <a href="https://www.facebook.com/dasuni.nagodavithana?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="mr-2">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/dasuni_nagodavithana_/" target="_blank" rel="noopener noreferrer" className="mr-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/dasuni-nagodavithana-442936230" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <a href="/MyCV.pdf" download className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded inline-block">Download CV</a>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Send me a message</h2>
            <div className="mb-4">
              <input type="text" placeholder="Your Name" className="bg-gray-800 text-white py-2 px-4 rounded w-full mb-2" />
              <input type="email" placeholder="Your Email" className="bg-gray-800 text-white py-2 px-4 rounded w-full mb-2" />
              <textarea rows={4} placeholder="Your Message" className="bg-gray-800 text-white py-2 px-4 rounded w-full mb-2"></textarea>
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded inline-block">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
