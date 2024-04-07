"use client"
import React, { useState } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

const ContactSection: React.FC = () => {
  // Initialize Firebase with your project configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC_lvRG-xlQzbfTHCoFNp5Y4dVjkuPnGxw",
    authDomain: "portfolio-81827.firebaseapp.com",
    databaseURL: "https://portfolio-81827-default-rtdb.firebaseio.com/",
    projectId: "portfolio-81827",
    storageBucket: "portfolio-81827.appspot.com",
    messagingSenderId: "665793245504",
    appId: "1:665793245504:web:9b1d9a89c19459db40caa5"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp); // Reference to the Realtime Database

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Save form data to Firebase Realtime Database
      await push(ref(database, 'formSubmissions'), {
        name,
        email,
        message
      });

      // Clear form fields after submission
      setName('');
      setEmail('');
      setMessage('');
      
      // Set submission message
      setSubmissionMessage('Your information has been submitted successfully.');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error here
    }
  };

  return (
    <section id="contact" > 
      <div className="container mx-auto px-4 mt-10 pt-20">
        <h1 className="text-4xl font-bold mb-10 text-center">Contact Me</h1>
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
          <div className="w-full md:w-1/2">
            <div className="mb-4 pt-8 font-bold">
              <p className="flex items-center mb-2"><FaEnvelope className="mr-2" />dasuninagodavithana@gmail.com</p>
              <p className="flex items-center"><FaPhone className="mr-2" />0763921136</p>
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
            <a href="/MyCV.pdf" download className="bg-teal-600 hover:bg-teal-800 text-white py-2 px-4 rounded inline-block">Download CV</a>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Send me a message</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="bg-blue-100 text-black py-2 px-4 rounded w-full mb-2" />
              <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-blue-100 text-black py-2 px-4 rounded w-full mb-2" />
              <textarea rows={4} placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} className="bg-blue-100 text-black py-2 px-4 rounded w-full mb-2"></textarea>
              <button type="submit" className="bg-teal-600 hover:bg-teal-800 text-white py-2 px-4 rounded inline-block">Submit</button>
            </form>
            {submissionMessage && <p className="text-green-600 mt-2">{submissionMessage}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
