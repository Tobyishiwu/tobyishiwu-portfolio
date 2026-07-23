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
    description: "MoveIt is a full-stack logistics and delivery platform that enables users to book and track deliveries in real time. The platform features a modern user experience, secure authentication, responsive design, delivery tracking, and a scalable backend built for efficient package management and rider operations.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    liveUrl: "https://moveit-zeta-sandy.vercel.app",
    repoUrl: "https://github.com/Tobyishiwu/moveit",
    featured: true,
  },
  {
    name: "Oru Aka",
    tag: "FULL STACK",
    image: "/images/projects/oru-aka.jpg",
    shortDescription: "A marketplace that connects customers with trusted local skilled professionals.",
    description: "Oru Aka is a full-stack service marketplace that helps users quickly find and hire verified skilled workers such as electricians, plumbers, carpenters, tailors, and other tradespeople. The platform features location-based search, worker profiles, ratings and reviews, secure authentication, and a modern responsive interface built for seamless service discovery.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    liveUrl: "https://oru-aka.vercel.app",
    repoUrl: "https://github.com/Tobyishiwu/oru-aka",
    featured: true,
  },
  {
    name: "Zenith Hotels",
    tag: "FULL STACK",
    image: "/images/projects/zenith-hotels.jpg",
    shortDescription: "Luxury hotel website with live booking widget, gallery, and blog.",
    description: "Zenith Hotels is a full-stack luxury hospitality website featuring a dynamic booking widget, room listings with dynamic routing, an interactive gallery with category filters and lightbox, a blog with full articles, and SEO optimization including structured data and Open Graph tags.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "React Router"],
    liveUrl: "https://zenith-hotels-delta.vercel.app",
    repoUrl: "https://github.com/Tobyishiwu/zenith-hotels",
    featured: true,
  },
];

export default projects;
export const getFeaturedProjects = () => projects.filter((p) => p.featured);
