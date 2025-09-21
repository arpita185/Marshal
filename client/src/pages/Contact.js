import { useState, useEffect } from "react"; 
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [inquiries, setInquiries] = useState([]);

  // Fetch all inquiries
  const fetchInquiries = async () => {
    try {
      const res = await axios.get("/api/inquiry");
      setInquiries(res.data);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/inquiry", form);
      setStatus("✅ " + res.data.msg);
      setForm({ name: "", email: "", message: "" });
      fetchInquiries();
    } catch (error) {
      setStatus("❌ Something went wrong!");
    }
  };

  return (
    <div className="min-h-content bg-gray-100 flex flex-col items-center py-10">
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl">
        {/* Left Side - Get in Touch */}
<div className="bg-white shadow-lg rounded-xl p-8 w-full md:w-1/2">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
   <h6 className="text-xl  text-gray-800 mb-4">Amreli</h6>
  

  <div className="space-y-4">
    {/* Email */}
    <p className="flex items-center gap-2">
      <FaEnvelope className="text-black-600 w-5 h-5" />
      <a
        href="mailto:marshalvsk@gmail.com"
        className="text-blue-600 hover:underline"
      >
        marshalvsk@gmail.com
      </a>
    </p>

    {/* Phone */}
    <p className="flex items-center gap-2">
      <FaPhone className="text-black-600 w-5 h-5" />
      <a href="tel:+9879867589" className="text-blue-600 hover:underline">
        +91 98798 67589
      </a>
    </p>

    {/* Location */}
    <p className="flex items-center gap-2">
      <FaMapMarkerAlt className="text-black-600 w-5 h-5" />
      <a
        href="https://maps.app.goo.gl/MD3aCemBs5Kv1RdY9"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        4, Jay Sardar Complex, Opp. HDFC Bank, Manekpara, Amreli - 365601
      </a>
    </p>

     <h6 className="text-xl  text-gray-800 mb-4">Dhari</h6>
     {/* Email */}
    <p className="flex items-center gap-2">
      <FaEnvelope className="text-black-600 w-5 h-5" />
      <a
        href="mailto:marshalvsk@gmail.com"
        className="text-blue-600 hover:underline"
      >
        marshalvsk@gmail.com
      </a>
    </p>

    {/* Phone */}
    <p className="flex items-center gap-2">
      <FaPhone className="text-black-600 w-5 h-5" />
      <a href="tel:+9429706772" className="text-blue-600 hover:underline">
        +91 94297 06772
      </a>
    </p>

    {/* Location */}
    <p className="flex items-center gap-2">
      <FaMapMarkerAlt className="text-black-600 w-5 h-5" />
      <a
        href="https://maps.app.goo.gl/ZSSR4ggUKc7mX5zz7 "
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
       Amreli road,near dena bank,D.C complax,Dhari - 365640
      </a>
    </p>
  </div>
  </div>

        {/* Right Side - Contact Us Form */}
        <div className="bg-white shadow-lg rounded-xl p-8 w-full md:w-1/2">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Contact Us
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 h-28"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {status && <p className="mt-4 text-center text-sm">{status}</p>}
        </div>
      </div>
 </div>
  );
}
export default Contact;

{/* Inquiries List
      <div className="mt-10 w-full max-w-2xl bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          All Inquiries
        </h2>
        {inquiries.length === 0 ? (
          <p className="text-gray-500">No inquiries yet.</p>
        ) : (
          <ul className="space-y-3">
            {inquiries.map((inq, index) => (
              <li
                key={index}
                className="p-4 border rounded-lg shadow-sm bg-gray-50"
              >
                <p className="font-semibold">{inq.name}</p>
                <p className="text-sm text-gray-600">{inq.email}</p>
                <p className="mt-1">{inq.message}</p>
                <p className="text-xs text-gray-400 mt-2">
                  {new Date(inq.date).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div> */}
