import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "PDF Merger SaaS",
      description: "A full-stack SaaS application for merging PDF files with user authentication, payment integration, and file management.",
      techStack: ["React", "Node.js", "Stripe", "Firebase"],
      gradient: "from-blue-500 to-purple-600",
      icon: "📄",
      githubUrl: "https://github.com/Siddhesh200419",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "A responsive admin dashboard with real-time data visualization, user management, and advanced filtering capabilities.",
      techStack: ["React", "Chart.js", "Tailwind", "Express"],
      gradient: "from-green-500 to-teal-600",
      icon: "📊",
      githubUrl: "https://github.com/Siddhesh200419",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Full-featured online store with product catalog, shopping cart, payment processing, and order management system.",
      techStack: ["Next.js", "MongoDB", "Stripe", "Redis"],
      gradient: "from-orange-500 to-red-600",
      icon: "🛍️",
      githubUrl: "https://github.com/Siddhesh200419",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Here are some of the projects I've built recently</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center`}>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 w-full max-w-sm">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white/30 h-2 rounded w-3/4"></div>
                    <div className="bg-white/30 h-2 rounded w-1/2"></div>
                    <div className="bg-white/30 h-2 rounded w-2/3"></div>
                  </div>
                  <div className="text-center mt-4 text-2xl">{project.icon}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gray-900 text-white hover:bg-gray-800"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
