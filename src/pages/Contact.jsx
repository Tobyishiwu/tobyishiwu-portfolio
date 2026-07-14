import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const CONTACT_INFO = [
  {
    icon: HiOutlineMail,
    label: "Email",
    value: "tobyishiwu@gmail.com",
    href: "mailto:tobyishiwu@gmail.com",
  },
  {
    icon: HiOutlineMapPin,
    label: "Location",
    value: "Enugu, Nigeria",
    href: null,
  },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Tobyishiwu", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/tobias-ishiwu", icon: FaLinkedin },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Let's build something together
            </h1>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl">
              Have a project in mind, or just want to talk shop? Send a
              message and I will get back to you as soon as I can.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Form + info */}
      <section className="pb-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-2xl bg-white/[0.03] border border-white/10 px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl bg-white/[0.03] border border-white/10 px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full rounded-2xl bg-white/[0.03] border border-white/10 px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors duration-200 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === "submitting"}
                  className="w-full md:w-auto text-base px-8 py-4 bg-gradient-to-r from-violet-600 to-violet-400 shadow-lg shadow-violet-600/40 hover:shadow-xl hover:shadow-violet-600/60 hover:-translate-y-0.5 hover:scale-[1.03] disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:scale-100"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </Button>

                {status === "sent" && (
                  <p className="text-sm text-green-400">
                    Message sent! I'll get back to you soon.
                  </p>
                )}

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    {errorMessage}
                  </p>
                )}
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                  Contact Info
                </h3>
                <div className="space-y-5">
                  {CONTACT_INFO.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-violet-600/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{item.label}</p>
                        {item.href ? (
                          
                          <a
                            href={item.href}
                            className="text-sm text-white hover:text-violet-400 transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                
                <a
                  href="/cv.pdf"
                  download
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors duration-200"
                >
                  Download CV
                </a>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                  Find Me Online
                </h3>
                <div className="flex items-center gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    
                      <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Contact;
