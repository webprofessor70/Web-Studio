import { Link } from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "+923040535970"; // Replace with your WhatsApp number
  const message = "Hi, I would like to know more about your services."; // Default message

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
    //   rel="noopener noreferrer"
      className="fixed bottom-6 right-6 cursor-pointer bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
     <FaWhatsapp className="text-white" />
    </Link>
  );
};

export default WhatsAppButton;
