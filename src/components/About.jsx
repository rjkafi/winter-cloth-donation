import React from "react";
import { motion } from "motion/react"

const About = () => {
  return (
    <section className="about-section py-20 bg-blue-100">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Image Grid Section */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full lg:w-1/2">
          <motion.img
            src="https://i.ibb.co.com/F0PSn61/th-3.jpg"
            alt=""
            animate={{ x: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="rounded-t-3xl rounded-bl-3xl shadow-md border-b-4 
            border-r-4 border-teal-400 w-full h-full"
          />
          <motion.img
            src="https://i.ibb.co.com/CMsbGs2/th.jpg"
            alt=""
            animate={{ y: [0, 70, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="rounded-t-3xl rounded-br-3xl shadow-md border-b-4 
            border-l-4 border-red-400 w-full h-full"
          />
          <motion.img
            src="https://i.ibb.co.com/J7W4zHR/th-1.jpg"
            alt=""
            animate={{ y: [20, 70, 20] }}
            transition={{ duration:15, repeat: Infinity }}
            className="rounded-t-3xl rounded-br-3xl shadow-md border-b-4 
             border-l-4 border-purple-400 w-full h-full"
          />
          <motion.img
            src="https://i.ibb.co.com/S6WmQVf/th-2.jpg"
            alt=""
            animate={{ x: [10, -150, 10] }} 
            transition={{ duration: 12, repeat: Infinity }} 
            className="rounded-t-3xl rounded-bl-3xl shadow-md border-b-4 
             border-r-4 border-blue-400 w-full h-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">About Our Mission</h2>
          <p className="text-lg">
            The Winter Donation platform aims to connect donors with those in need across Bangladesh. Every year, many people suffer due to the lack of warm clothing during winter. Our mission is to provide warmth and support to the vulnerable communities, especially in rural and low-income areas.
          </p>
          <p className="text-lg mt-4">
            By donating your winter clothes, you can make a big difference in someone's life. Together, let's bring warmth to those who need it most!
          </p>
          <button className="bg-blue-500 btn mt-4 text-white px-6 py-2 rounded-lg hover:bg-blue-600 ">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;




