import About from "../components/About";
import Banner from "../components/Banner";

import WorksSection from "../components/WorksSection";
import 'animate.css';


const Home = () => {
    return (
        <>
        <div className="w-11/12 mx-auto space-y-10">
           <Banner></Banner>
           <About></About>
     <section className="py-20 bg-blue-50 px-10">
      <div className=" md:flex gap-6 justify-between">
        <div>
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Join Our Volunteer Program
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Become a part of our mission to bring warmth to those in need. As a
          volunteer, you can help collect, organize, and distribute winter
          clothing to communities across Bangladesh.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Sign Up as a Volunteer
          </button>
        </div>
        </div>
         <div className="w-full animate__animated animate__fadeInRight  animate__delay-3s">
         <div className="bg-white p-6 rounded-lg shadow-md ">
            <img
              src="https://i.ibb.co.com/4jdbNnx/th-4.jpg"
              alt="Volunteer helping"
              className=" object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">Clothing Drives</h3>
            <p className="text-gray-600">
              Help organize clothing drives in your area and bring people
              together for a good cause.
            </p>
          </div>
         </div>
      </div>
    </section>

    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">
          What People Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 
          animate__animated animate__fadeInLeft  animate__delay-2s
          rounded-lg shadow-md ">
            <img
              src="https://i.ibb.co.com/h93fM45/th-5.jpg"
              alt="Donor giving testimonial"
              className="w-28 h-28  border-2 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Sarah Ahmed</h3>
            <p className="text-gray-600 text-sm">Donor</p>
            <p className="text-gray-700 mt-4">
              "This platform made it so easy for me to donate my unused winter
              clothing. Knowing my donation reached the right people gives me
              immense satisfaction."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white 
          animate__animated animate__fadeInDown animate__delay-4s
          p-6 rounded-lg shadow-md">
            <img
              src="https://i.ibb.co.com/fYPJk3N/th-7.jpg"
              alt="Volunteer giving testimonial"
              className="w-28 h-28 border-2 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Lamima Akter</h3>
            <p className="text-gray-600 text-sm">Volunteer</p>
            <p className="text-gray-700 mt-4">
              "Being part of this initiative has been life-changing. It feels
              amazing to see the joy on people’s faces when they receive warm
              clothes."
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white 
          animate__animated animate__fadeInRight animate__delay-6s
          p-6 rounded-lg shadow-md">
            <img
              src="https://i.ibb.co.com/YQDMKHp/th-6.jpg"
              alt="Recipient giving testimonial"
              className="w-28 h-28 border-2 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Mithun Das</h3>
            <p className="text-gray-600 text-sm">Beneficiary</p>
            <p className="text-gray-700 mt-4">
              "Receiving a warm jacket and blanket through this program saved
              my family during the harsh winter. Thank you for making this
              possible."
            </p>
          </div>
        </div>
      </div>
    </section>
           <WorksSection></WorksSection>
        </div>
        </>
    );
};

export default Home;