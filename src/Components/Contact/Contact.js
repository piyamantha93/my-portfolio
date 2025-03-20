import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaMapMarkerAlt,FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ybsyg49", // Replace with your EmailJS service ID
        "template_si9p0lm", // Replace with your EmailJS template ID
        form.current,
        "Bse4j3V4Cu6BOsmq9" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMessage("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-200 min-h-screen p-12 gap-20">
    <div className="w-full md:w-1/3 text-lg space-y-6">
      <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="flex items-center gap-1 mb-4"><FaEnvelope /> piyamanthasandaruwan000@gmail.com</p>
        <p className="flex items-center gap-1 mb-4"><FaPhone /> +94783026525</p>
        <p className="flex items-center gap-1 mb-4"><FaWhatsapp /> +94783026525</p>
        <p className="flex items-center gap-1 mb-4">
  <FaMapMarkerAlt />
  <a
    href="https://maps.app.goo.gl/k72Au4MCz1s2TpLX8"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:underline"
  >
    Wijeramaya, Nugegoda, Srilanka
  </a>
</p>
      </div>
      
      <form ref={form} onSubmit={sendEmail} className="w-full md:w-1/3 p-6 rounded-lg shadow-md">
        <label className="block mb-2 text-sm font-medium">Name</label>
        <input type="text" name="user_name" required className="w-full p-2 border rounded-lg mb-4" />

        <label className="block mb-2 text-sm font-medium">Email</label>
        <input type="email" name="user_email" required className="w-full p-2 border rounded-lg mb-4" />

        <label className="block mb-2 text-sm font-medium">Message</label>
        <textarea name="message" required className="w-full p-2 border rounded-lg mb-4" rows="3"></textarea>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Send</button>
        {message && <p className="text-center text-green-500 mt-4">{message}</p>}
 </form>
    </div>
    
  );
};

export default Contact;
