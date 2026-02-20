import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "919696771353"; // Replace with your number
  const message = "Hello Moti Mahal Restaurant, I want to order food";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.whatsapp}
    >
      <FaWhatsapp size={30} />
    </a>
  );
}

const styles = {
  whatsapp: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    color: "white",
    padding: "15px",
    borderRadius: "50%",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    zIndex: 1000,
    textAlign: "center",
  },
};

export default WhatsAppButton;