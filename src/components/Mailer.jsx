import { useRef, useState } from "react";
import Section from "./Section";
import emailjs from "@emailjs/browser";

const Mailer = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_677abv5", // Replace with your actual EmailJS service ID
        "template_fb1kdh1", // Replace with your EmailJS template ID
        form.current,
        "metHR7c9aDXAc04up" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Section id="contact">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md mb-8 transition-colors duration-300"
      >
        <h2 className="text-xl text-center text-gray-900 dark:text-white mb-3">Contact Me</h2>

        {success && (
          <p className="text-green-500 text-center">
            Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-500 text-center">
            Failed to send the message. Please try again.
          </p>
        )}

        <div className="mb-3">
          <label className="block text-gray-800 dark:text-white text-sm mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md text-sm focus:outline-none focus:ring focus:ring-indigo-500 transition-colors duration-300"
          />
        </div>

        <div className="mb-3">
          <label className="block text-gray-800 dark:text-white text-sm mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="from_email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md text-sm focus:outline-none focus:ring focus:ring-indigo-500 transition-colors duration-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-800 dark:text-white text-sm mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md text-sm focus:outline-none focus:ring focus:ring-indigo-500 transition-colors duration-300"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-500 text-white py-2 px-3 text-sm rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-500"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </Section>
  );
};

export default Mailer;
