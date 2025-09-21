import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai"; 
import logo1 from "../assets/Amrelilogo.png"; 
import logo2 from "../assets/Dharilogo.png";

function Navbar() {
  return (
    <nav className="bg-white  shadow-md">
      <div className="container mx-auto flex justify-between items-center px-2 py-1">
        
        {/* Left Logo */}
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <img src={logo1} alt="Logo" className="h-20 w-25" />
        </Link>

        {/* Middle Section (Search + Links) */}
        <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-center mx-6">
          {/* Search Bar */}
          <div className="flex w-full md:w-1/2 mb-3 md:mb-0">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-l-lg text-black focus:outline-none"
            />
            <button className="bg-[#00AEEF] -400 text-black px-4 py-2 rounded-r-lg hover:bg-yellow-500 flex items-center justify-center">
              <AiOutlineSearch size={20} /> 
            </button>
          </div>

          {/* Links */}
          <div className="flex justify-center space-x-6 mt-2 md:mt-0 md:ml-6">
            <Link to="/" className="text-[#00AEEF] hover:text-black font-medium">Home</Link>
            <Link to="/about" className="text-[#00AEEF] hover:text-black font-medium">About</Link>
            <Link to="/services" className="text-[#00AEEF] hover:text-black font-medium">Services</Link>
            <Link to="/contact" className="text-[#00AEEF] hover:text-black font-medium">Contact</Link>
           </div>
        </div>

        {/* Right Logo */}
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <img src={logo2} alt="Logo" className="h-20 w-25" />
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden bg-white text-blue-600 px-3 py-1 rounded ml-2">
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
