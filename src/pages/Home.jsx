import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress,
  SiMongodb, SiTailwindcss, SiGit, SiDocker, SiLaravel,
} from "react-icons/si";
import { HiOutlineLightBulb, HiOutlineCodeBracketSquare, HiOutlineRocketLaunch, HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const STATS = [
  { label: "Projects Completed", value: "10+" },
  { label: "Live Production Apps", value: "5+" },
  { label: "Client Satisfaction", value: "100%" },
  { label: "Years Experience", value: "2+" },
  { label: "Remote Work Ready", value: "Global" },
];

const PROJECTS = [
  {
    name: "Zenith Spa",
    tag: "FULL STACK",
    description: "Luxury mobile spa booking platform with crypto and Zelle payments.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    name: "Otrace",
    tag: "FULL STACK",
    description: "B2B pharmaceutical marketplace connecting African suppliers and pharmacies.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    name: "Oru Aka",
    tag: "FULL STACK",
    description: "Marketplace connecting skilled Nigerian tradespeople with clients who need them.",
    stack: ["MERN", "Socket.io", "Tailwind CSS", "JWT"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

const PROCESS = [
  {
    icon: HiOutlineLightBulb,
    title: "Discover",
    description: "Understand the real problem, the users, and what success actually looks like.",
  },
  {
    icon: HiOutlineCodeBracketSquare,
    title: "Build",
    description: "Clean, production-grade code shipped feature by feature, not all at once.",
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    title: "Refine",
    description: "Test, fix, and polish until it feels solid under real-world conditions.",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "Ship",
    description: "Deploy, monitor, and support — the work isn't done until it's live and stable.",
  },
];

const TECH_STACK = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Laravel", icon: SiLaravel },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
];

function Home() {
  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-violet-400/5 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-lg text-violet-400 font-medium mb-2">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.05]">
                Toby Ishiwu
              </h1>
              <p className="mt-3 text-2xl md:text-3xl font-bold text-violet-400">
                Full Stack Software Engineer
              </p>
              <p className="mt-6 text-lg text-gray-400 max-w-xl">
                I build modern, scalable and user-focused web applications
                that solve real-world problems and deliver exceptional
                digital experiences.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  to="/projects"
                  variant="primary"
                  className="text-base px-7 py-3.5 bg-gradient-to-r from-violet-600 to-violet-400 shadow-lg shadow-violet-600/40 hover:shadow-xl hover:shadow-violet-600/60 hover:-translate-y-0.5 hover:scale-[1.03]"
                >
                  View My Work
                </Button>
                <Button to="/contact" variant="secondary" className="text-base px-7 py-3.5">
                  Hire Me
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a href="https://github.com/Tobyishiwu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/tobias-ishiwu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200">
                  <FaXTwitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-violet-600/20 blur-3xl" />
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
                <img src="/images/photo.jpg" alt="Toby Ishiwu" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-10 grid grid-cols-2 md:grid-cols-5 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-10 md:p-14 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2">
              <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">
                About Me
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
                Building real products for real markets
              </h2>
              <p className="text-gray-400 max-w-2xl">
                I'm a full stack engineer based in Nigeria, working across
                MERN and Laravel to build production-ready platforms —
                spa booking, healthcare, tradesperson marketplaces, and
                fintech — with a strong focus on how people actually use
                the web where I'm from.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Button to="/about" variant="secondary" className="text-base px-7 py-3.5 w-fit">
                More About Me →
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-2">
                Featured Projects
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Building solutions that make an impact
              </h2>
            </div>
            <NavLink
              to="/projects"
              className="hidden md:inline-block text-sm font-semibold text-white border border-white/10 rounded-full px-5 py-2.5 hover:bg-white/5 transition-colors duration-200"
            >
              View All Projects →
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <div className="h-44 bg-gradient-to-br from-violet-600/20 to-violet-400/5 border-b border-white/5 flex items-center justify-center">
                  <span className="text-2xl font-black text-white/20 group-hover:text-white/40 transition-colors duration-300">
                    {project.name}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-2">
                    {project.tag}
                  </p>
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  <p className="mt-2 text-sm text-gray-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-xs font-medium text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3">
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 text-center text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full px-4 py-2.5 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
  >
    Live Demo →
  </a>

  <a
    href={project.repoUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${project.name} GitHub repository`}
    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
  >
    <FaGithub className="w-4 h-4" />
  </a>
</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="mb-10">
            <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-2">
              Process
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              How I work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-violet-600/10 flex items-center justify-center mb-5">
                  <step.icon className="w-6 h-6 text-violet-400" />
                </div>
                <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-1">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="mb-10">
            <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-2">
              Tech Stack
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Technologies I work with
            </h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="rounded-2xl border border-white/10 bg-white/[0.02] py-6 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
              >
                <tech.icon className="w-8 h-8 text-violet-400" />
                <span className="text-sm font-medium text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-32">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-white/[0.02] to-transparent px-10 py-16 text-center">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[100px]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight max-w-2xl mx-auto">
              Have a project in mind? Let's build something great.
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Whether it's a booking platform, a marketplace, or a fintech
              app — I'm ready to help you ship it.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                to="/contact"
                variant="primary"
                className="text-base px-8 py-4 bg-gradient-to-r from-violet-600 to-violet-400 shadow-lg shadow-violet-600/40 hover:shadow-xl hover:shadow-violet-600/60 hover:-translate-y-0.5 hover:scale-[1.03]"
              >
                Start a Project
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;


