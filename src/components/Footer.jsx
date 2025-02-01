import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-10 sm:p-20 w-full bg-blue-700 flex flex-col gap-10">

      <div className="flex flex-col sm:flex-row justify-between text-white font-semibold gap-6 text-center sm:text-left">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold">Quick Links</h1>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/">
            <p>About Us</p>
          </Link>
          <Link to="/">
            <p>Our Services</p>
          </Link>
          <Link to="/">
            <p>Blogs</p>
          </Link>
          <Link to="/">
            <p>Contact Us</p>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold">Our Best Services</h1>
          <Link to="/">
            <p>Web Development</p>
          </Link>
          <Link to="/">
            <p>Online Digital</p>
          </Link>
          <Link to="/">
            <p>Software</p>
          </Link>
          <Link to="/">
            <p>Mobile</p>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold">Company</h1>
          <Link to="/">
            <p>Careers</p>
          </Link>
          <Link to="/">
            <p>Testimonials</p>
          </Link>
          <Link to="/">
            <p>Partners</p>
          </Link>
        </div>
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <h1 className="text-lg font-bold">Follow Us</h1>
          <div className="flex gap-4">
            <FaFacebook size={24} />
            <FaInstagram size={24} />
            <FaLinkedin size={24} />
            <FaYoutube size={24} />
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-500" />

      <div className="flex flex-col sm:flex-row justify-between items-center text-white gap-6">
        <img src="/banner.png" className="w-32 sm:w-48" alt="Logo" />
        <h1 className="text-lg font-semibold text-center sm:text-left">
          Contact Information
        </h1>
        <button className="bg-white text-blue-500 py-2 px-6 rounded-lg w-full sm:w-auto transition-all duration-300 font-semibold hover:bg-blue-800 hover:text-white">
          Get Quotes
        </button>
        <img src="/map.png" className="w-32 sm:w-48" alt="Map" />
      </div>

      {/* Contact & Info - Column on mobile, Row on desktop */}
      <div className="flex flex-col sm:flex-row justify-between text-white text-center sm:text-left gap-6">
        <p className="max-w-xs mx-auto sm:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, est
          earum minima rerum maiores qui incidunt quasi ullam sunt expedita?
        </p>
        <div className="max-w-xs">
          <p>9330383733 / 8420848164</p>
          <p>digiconmarketers@gmail.com</p>
          <p>
            Shibani Mahamaya Housing, Street 43, Block AC 64, NewTown Action
            Area I, Kolkata 700163
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;