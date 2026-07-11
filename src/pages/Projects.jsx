import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Container from "../components/ui/Container";

const PROJECTS = [
  {
    name: "Zenith Spa",
    tag: "FULL STACK",
    description: "A luxury mobile spa booking platform with a five-step booking flow, dynamic admin-managed services and therapists, and crypto and Zelle payment options.",
    stack: ["React", "Node.js", "MongoDB", "Cloudinary", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    name: "Otrace",
    tag: "FULL STACK",
    description: "A B2B pharmaceutical marketplace connecting African suppliers and pharmacies, featuring real-time search, URL-synced filters, and a distinctive perforated pharmacy label brand identity.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    name: "Oru Aka",
    tag: "FULL STACK",
    description: "A marketplace connecting skilled Nigerian tradespeople with clients across Enugu, Lagos, and Abuja. Includes phone OTP verification, real-time chat, tiered worker verification, and an admin panel.",
    stack: ["MERN", "Socket.io", "Termii", "Cloudinary", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    name: "Kenebi Health",
    tag: "FULL STACK",
    description: "A doctor-patient booking and teleconsultation platform for Enugu State, with a full booking system and live video consultations.",
    stack: ["Laravel", "React", "MySQL", "Agora.io"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    name: "PayFlow",
    tag: "FULL STACK",
    description: "A Nigerian fintech banking app with a fully mobile-first experience: dashboard, transfers, transactions, beneficiaries, notifications, and settings.",
    stack: ["Laravel", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-all duration-300"
    >
      <div className="h-56 bg-gradient-to-br from-violet-600/20 to-violet-400/5 border-b border-white/5 flex items-center justify-center">
        <span className="text-3xl font-black text-white/20 group-hover:text-white/40 transition-colors duration-300">
          {project.name}
        </span>
      </div>
      <div className="p-8">
        <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-2">
          {project.tag}
        </p>
        <h3 className="text-2xl font-bold text-white">{project.name}</h3>
        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-7 flex items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full px-4 py-2.5 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            Live Demo
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.name + " GitHub repository"}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <FaGithub className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-4">
              Projects
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Things I have built and shipped
            </h1>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl">
              A selection of production platforms I have built end to end,
              solving real problems for real users.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="pb-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Projects;