export const projects = [
  {
    name: "Zenith Spa",
    tag: "FULL STACK",
    image: "/images/projects/zenithspa.jpg",
    shortDescription: "Luxury mobile spa booking platform with crypto and Zelle payments.",
    description: "A luxury mobile spa booking platform with a five-step booking flow, dynamic admin-managed services and therapists, and crypto and Zelle payment options.",
    stack: ["React", "Node.js", "MongoDB", "Cloudinary", "Tailwind CSS"],
    liveUrl: "https://zenithspa.online",
    repoUrl: "https://github.com/Tobyishiwu/zenith-spa",
    featured: true,
  },

 {
    name: "MoveIt",
    tag: "FULL STACK",
    image: "/images/projects/moveit.jpg",
    shortDescription: "On-demand delivery platform for fast, reliable, and affordable citywide deliveries.",
    description:     "MoveIt is a full-stack logistics and delivery platform that enables users to book and track deliveries in real time. The platform features a modern user experience, secure authentication, responsive design, delivery tracking, and a scalable backend built for efficient package management and rider operations.",

    stack: ["React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "JWT"],
    liveUrl: "https://moveit-zeta-sandy.vercel.app",
    repoUrl: "https://github.com/Tobyishiwu/moveit",
    featured: true,
  },
  
];

export default projects;

export const getFeaturedProjects = () => projects.filter((p) => p.featured);