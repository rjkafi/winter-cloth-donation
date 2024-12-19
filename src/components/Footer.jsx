

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Contact Information */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Phone: +880123456789</p>
            <p>Email: support@winterdonation.com</p>
            <p>Address: Dhanmondi, Dhaka, Bangladesh</p>
          </div>

          {/* Social  Links */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href=""  ><img className="w-12 h-12"   src="https://img.icons8.com/?size=96&id=uLWV5A9vXIPu&format=png" alt="" /></a>
              <a href=""  ><img  className="w-12 h-12"  src="https://img.icons8.com/?size=96&id=19318&format=png" alt="" /></a>
              <a href=""  ><img className="w-12 h-12"   src="https://img.icons8.com/?size=96&id=5MQ0gPAYYx7a&format=png" alt="" /></a>
              <a href=""  ><img className="w-12 h-12"   src="https://img.icons8.com/?size=160&id=DUEq8l5qTqBE&format=png" alt="" /></a>
              
            </div>
          </div>
        </div>
        <div className="my-8 border"></div>
         {/* Copyright  text */}
         <div className="text-center ">
            <p>© {new Date().getFullYear()} Winter Donation. All Rights Reserved.</p>
            <p>Made with by Abdullah All Kafi</p>
          </div>
      </div>
    </footer>
    );
};

export default Footer;