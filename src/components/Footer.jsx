import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Container from "./ui/Container";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Tobyishiwu", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/tobias-ishiwu", icon: FaLinkedin },
  { label: "Email", href: "mailto:tobyishiwu@gmail.com", icon: HiOutlineMail },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#030712]">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <p className="text-3xl font-black tracking-tight text-white">
              Toby<span className="text-violet-500">.</span>
            </p>
            <p className="mt-3 text-sm text-gray-400 max-w-xs">
              Full stack software engineer building production-ready web applications and digital products.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-white uppercase tracking-wider">Navigate</p>
            {NAV_LINKS.map((link) => (
              <NavLink key={link.path} to={link.path} end={link.path === "/"} className="text-sm text-gray-400 hover:text-white transition-colors duration-200 w-fit">
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-white uppercase tracking-wider">Connect</p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-6">
          <p className="text-center text-sm text-gray-500">© {year} Toby Ishiwu. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
