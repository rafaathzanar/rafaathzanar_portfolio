import { useRef, useState } from "react";
import Section from "./Section";
import emailjs from "@emailjs/browser";
import { useTheme } from "../context/ThemeContext";

const Mailer = () => {
  const form = useRef();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [focused, setFocused] = useState("");

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
        "service_677abv5",
        "template_fb1kdh1",
        form.current,
        "metHR7c9aDXAc04up"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSuccess(true);
          setFormData({ from_name: "", from_email: "", message: "" });
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
      <div className="max-w-xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Have a project in mind or just want to say hello? Drop me a message and I'll get back to you soon.
          </p>
        </div>

        {/* Card Container */}
        <div className="relative group">
          {/* Animated gradient border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
          
          {/* Form Card */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            className={`relative p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
              theme === "dark"
                ? "bg-gray-900/90 border border-gray-700/50"
                : "bg-white/90 border border-gray-200"
            }`}
          >
            {/* Status Messages */}
            {success && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-green-600 dark:text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-red-600 dark:text-red-400 font-medium">Failed to send. Please try again or email me directly.</p>
              </div>
            )}

            {/* Name Field */}
            <div className="mb-5">
              <label 
                className={`block text-sm font-medium mb-2 transition-colors ${
                  focused === "name" 
                    ? "text-purple-500" 
                    : theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Your Name
              </label>
              <div className={`relative rounded-xl transition-all duration-300 ${
                focused === "name" ? "ring-2 ring-purple-500/50" : ""
              }`}>
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className={`w-5 h-5 transition-colors ${focused === "name" ? "text-purple-500" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  value={formData.from_name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused("")}
                  required
                  placeholder="Elon Musk"
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl border text-sm transition-all duration-300 focus:outline-none ${
                    theme === "dark"
                      ? "bg-gray-800 text-white placeholder-gray-400 border-gray-700"
                      : "bg-gray-50 text-gray-900 placeholder-gray-500 border-gray-300"
                  }`}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-5">
              <label 
                className={`block text-sm font-medium mb-2 transition-colors ${
                  focused === "email" 
                    ? "text-violet-500" 
                    : theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email Address
              </label>
              <div className={`relative rounded-xl transition-all duration-300 ${
                focused === "email" ? "ring-2 ring-violet-500/50" : ""
              }`}>
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className={`w-5 h-5 transition-colors ${focused === "email" ? "text-violet-500" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  value={formData.from_email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  required
                  placeholder="elonmusk@example.com"
                  className={`w-full pl-12 pr-4 py-3.5 rounded-xl border text-sm transition-all duration-300 focus:outline-none ${
                    theme === "dark"
                      ? "bg-gray-800 text-white placeholder-gray-400 border-gray-700"
                      : "bg-gray-50 text-gray-900 placeholder-gray-500 border-gray-300"
                  }`}
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label 
                className={`block text-sm font-medium mb-2 transition-colors ${
                  focused === "message" 
                    ? "text-indigo-500" 
                    : theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Your Message
              </label>
              <div className={`relative rounded-xl transition-all duration-300 ${
                focused === "message" ? "ring-2 ring-indigo-500/50" : ""
              }`}>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused("")}
                  required
                  placeholder="Tell me about your project or just say hi..."
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-all duration-300 focus:outline-none resize-none ${
                    theme === "dark"
                      ? "bg-gray-800 text-white placeholder-gray-400 border-gray-700"
                      : "bg-gray-50 text-gray-900 placeholder-gray-500 border-gray-300"
                  }`}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full relative group/btn overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 transition-transform duration-300 group-hover/btn:scale-105"></div>
              <div className="relative py-4 px-6 flex items-center justify-center gap-2 text-white font-semibold">
                {loading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </div>
            </button>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-full blur-2xl"></div>
          </form>
        </div>

        {/* Alternative Contact */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Or reach me directly at{" "}
            <a 
              href="mailto:raf.zanar@gmail.com" 
              className="text-purple-500 hover:text-violet-600 transition-colors font-medium"
            >
              raf.zanar@gmail.com
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Mailer;
