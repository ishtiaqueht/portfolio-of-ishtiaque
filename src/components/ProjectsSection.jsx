import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "EduPulse",
    description: "A educational platform website to showcase skills, projects, and dashboard",
    image: "https://deluxe-florentine-a72af8.netlify.app/about.jpg",
    tags: ["React", "Tailwind CSS", "Express","Firebase","MongoDB","Jwt","Tanstack"],
    demoUrl: "https://assignment-12-a3a2e.web.app/",
    githubUrl: "https://github.com/ishtiaqueht/assignment-12-client",
  },
  {
    id: 2,
    title: "Athletic Club",
    description:
      "A simple sports-type application with authentication and CRUD operations.",
    image: "https://images.unsplash.com/photo-1753646640999-b6601b51bfae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxhdGhsZXRpYyUyMCUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    tags: ["React","Tailwind CSS","Express","Firebase","MongoDB","Jwt"],
    demoUrl: "https://assignment-11-bf26f.web.app/",
    githubUrl: "https://github.com/ishtiaqueht/assignment-11-client",
  },
  {
    id: 3,
    title: "Tree Hub",
    description:
      "A small gardening website with product gardeners, tips and checkout functionality.",
    image: "/banner-1.jpg",
    tags: ["React", "Node.js","Tailwind CSS","Express","Firebase","MongoDB"],
    demoUrl: "https://assignment-10-2245c.web.app/",
    githubUrl: "https://github.com/ishtiaqueht/assignment-10-client",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
  <div className="container mx-auto max-w-6xl">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">
      Featured <span className="text-gradient bg-primary bg-clip-text text-transparent">Projects</span>
    </h2>

    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
      Here are some of my recent projects. Each project was carefully
      crafted with attention to detail, performance, and user experience.
    </p>

    {/* Project Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, key) => (
        <div
          key={key}
          className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-gradient-to-t from-gray-800 via-gray-900 to-gray-800"
        >
          {/* Image */}
          <div className="h-56 overflow-hidden relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>

            {/* Links */}
            <div className="flex space-x-4">
              <a
                href={project.demoUrl}
                target="_blank"
                className="text-white/80 hover:text-purple-400 transition-colors duration-300"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                className="text-white/80 hover:text-purple-400 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Github Button */}
    <div className="text-center mt-12">
      <a
        href="https://github.com/ishtiaqueht"
        target="_blank"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 animate-bounce"
      >
        Check My Github <ArrowRight size={16} />
      </a>
    </div>
  </div>
</section>

  );
};