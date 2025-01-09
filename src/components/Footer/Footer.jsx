import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Categories Section */}
        <div className="md:pl-28">
          <h3 className="text-lg font-bold mb-4">CATEGORIES</h3>
          <ul className="space-y-2">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Festival Collection</li>
          </ul>
        </div>

        {/* Company Info Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">COMPANY INFO</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>E-Shopping</li>
            <li>Customer Service</li>
            <Link to={"/contact"}>
              <li>Contact Us</li>
            </Link>
            <li>Store Locator</li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">GET IN TOUCH</h3>
          <address className="not-italic space-y-2">
            <p>ABACA POLYMERS</p>
            <p>11/544-D, Mamyal Mathil, Kozhikodenkunnu,</p>
            <p>Olavanna PO, Kozhikode, Kerala- 673019</p>
            <p>abacafootwear@gmail.com </p>
          </address>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="container mx-auto mt-8 text-center">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto mt-8 text-center text-sm border-t border-gray-400 pt-4">
        <p>Copyright © 2024 Abaca. All Rights Reserved | Powered by Exmedia</p>
        <p>
          <Link to={"/privacy"}  className="hover:underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to={"/terms"}  className="hover:underline">
            Terms & Conditions
          </Link>{" "}
          |{" "}
          <Link to={"/refund"} className="hover:underline">
            Refund Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
