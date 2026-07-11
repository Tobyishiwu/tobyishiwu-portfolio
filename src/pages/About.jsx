import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress,
  SiMongodb, SiTailwindcss, SiLaravel, SiPhp, SiMysql, SiGit, SiDocker,
} from "react-icons/si";
import { HiOutlineGlobeAlt, HiOutlineDevicePhoneMobile, HiOutlineCube } from "react-icons/hi2";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Laravel", icon: SiLaravel },
      { name: "PHP", icon: SiPhp },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
    ],
  },
];

const FOCUS_AREAS = [
  {
    icon: HiOutlineGlobeAlt,
    title: "Real markets",
    description: "I build for how people actually use the web in Nigeria — mobile-first, informal-economy aware, and built around real payment patterns.",
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: "Full stack, solo",
    description: "I own the whole build — frontend, backend, database, deployment — so nothing gets lost between handoffs.",
  },
  {
    icon: HiOutlineCube,
    title: "Production-first",
    description: "I care about what ships and holds up under real usage, not just what looks good in a demo.",
  },
];

function About() {
  return (
    <>
      {/* Intro */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-4">
              About Me
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
              I build software for problems that actually matter to people.
            </h1>
            <p className="mt-6 text-lg text-gray-400 max-w-2xl">
              I'm Toby Ishiwu, a full stack software engineer based in
              Nigeria, with ties to Enugu. I work across the MERN stack and
              Laravel to build production-ready platforms — spa booking
              systems, healthcare apps, tradesperson marketplaces, and
              fintech tools — designed around how people in Nigeria and
              similar markets actually use the internet: mobile-first,
              value-conscious, and often outside the assumptions baked into
              most Western tech products.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Focus areas */}
      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOCUS_AREAS.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-violet-600/10 flex items-center justify-center mb-5">
                  <area.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-lg font-bold text-white">{area.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="pb-24">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-10 md:p-14">
            <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">
              My Story
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">
              From solo builds to real client work
            </h2>
            <div className="space-y-4 text-gray-400 max-w-3xl">
              <p>
                I started out building portfolio projects to sharpen my
                fundamentals — a Kanban app, an EdTech quiz platform, a
                healthcare booking demo, an e-commerce clone — each one
                deployed end to end so I understood exactly what it takes
                to go from idea to something live on the internet.
              </p>
              <p>
                That foundation turned into real client work: a luxury
                mobile spa booking platform, a B2B pharmaceutical
                marketplace for a Rwanda-based pharmacist, a tradesperson
                marketplace connecting workers across Enugu, Lagos, and
                Abuja, and a doctor-patient teleconsultation platform for
                Enugu State. Each project pushed me to solve real
                deployment problems — payment integrations, real-time
                chat, phone verification, video calling — not just
                tutorial-level features.
              </p>
              <p>
                I care about building things that work for the markets
                I understand best, and I bring the same production
                discipline to every project regardless of size.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section className="pb-24">
        <Container>
          <div className="mb-10">
            <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-2">
              Skills
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              What I work with
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILL_GROUPS.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
              >
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                  {group.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-violet-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-white/[0.02] to-transparent px-10 py-16 text-center">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[100px]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight max-w-2xl mx-auto">
              Let's talk about your next build
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Whether it's an MVP or a full production platform, I'm ready
              to help you bring it to life.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                to="/contact"
                variant="primary"
                className="text-base px-8 py-4 bg-gradient-to-r from-violet-600 to-violet-400 shadow-lg shadow-violet-600/40 hover:shadow-xl hover:shadow-violet-600/60 hover:-translate-y-0.5 hover:scale-[1.03]"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default About;
