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


  
];

export default projects;

export const getFeaturedProjects = () => projects.filter((p) => p.featured);