import { FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo1 from "../assets/Amrelilogo.png"; 
import logo2 from "../assets/Dharilogo.png";

function Footer() {
  return (
    <footer className="bg-white;shadow-md; py-2 mt-1">
      <div className="container mx-auto px-6 flex flex-col items-center">
        
        {/* Top Navigation */}
        <div className="flex justify-center space-x-8 mb-6 text-sm font-medium">
           <Link to="/" className="text-[#00AEEF] hover:text-black font-medium">Home</Link>
            <Link to="/about" className="text-[#00AEEF] hover:text-black font-medium">About</Link>
            <Link to="/services" className="text-[#00AEEF] hover:text-black font-medium">Services</Link>
            <Link to="/contact" className="text-[#00AEEF] hover:text-black font-medium">Contact</Link>
        </div>

        {/* Middle Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Logo + Icons */}
          <div className="flex flex-col items-center space-y-3 mb-6 md:mb-0">
            <img src={logo1} alt="Logo Left" className="h-12 w-auto" />
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/marshaltools_amreli/" target="_blank" rel="noreferrer" className="hover:text-[#00AEEF]">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.facebook.com/MarshalToolsAmreli/" target="_blank" rel="noreferrer" className="hover:text-[#00AEEF]">
                <FaFacebook size={20} />
              </a>
              <a href="https://maps.app.goo.gl/MD3aCemBs5Kv1RdY9" target="_blank" rel="noreferrer" className="hover:text-[#00AEEF]">
                <FaMapMarkerAlt size={20} />
              </a>
            </div>
          </div>

          {/* Center Copyright */}
          <p className="text-sm text-center mb-6 md:mb-0">
            &copy; {new Date().getFullYear()} Marshal Tools. All Rights Reserved.
          </p>

          {/* Right Logo + Icons */}
          <div className="flex flex-col items-center space-y-3">
            <img src={logo2} alt="Logo Right" className="h-12 w-auto" />
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/marshal_tools_dhari/" target="_blank" rel="noreferrer" className="hover:text-[#00AEEF]">
                <FaInstagram size={20} />
              </a>
              <a href="https://maps.app.goo.gl/ZSSR4ggUKc7mX5zz7  " target="_blank" rel="noreferrer" className="hover:text-[#00AEEF]">
                <FaMapMarkerAlt size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
