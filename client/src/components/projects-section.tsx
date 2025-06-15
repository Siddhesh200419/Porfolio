import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import YCImage from "../../assets/startup.png";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Swiggy Clone",
      description:
        "A responsive food ordering website built with React and Redux, using Swiggy's public API to display real-time restaurant and menu data.",
      techStack: ["React", "Redux", "Firebase"],
      gradient: "from-blue-500 to-purple-600",
      icon: "📄",
      githubUrl: "https://github.com/Siddhesh200419/Swiggy.git",
      liveUrl: "https://swiggy-nu-rust.vercel.app/",
    },
    {
      id: 2,
      title: "ZomClone – Food Delivery & Admin System",
      description:
        "A full-stack Zomato Clone built with the MERN stack, featuring food ordering, real-time delivery tracking, and an admin dashboard.",
      techStack: ["MERN Stack", "CSS", "Stripe"],
      gradient: "from-green-500 to-teal-600",
      icon: "📊",
      githubUrl: "https://github.com/Siddhesh200419/Zomato_Clone_Mern.git",
      liveUrl: "https://zomato-clone-mern-frontend.onrender.com/",
    },
    {
      id: 3,
      title: "YC Directory",
      description:
        "A dynamic platform for entrepreneurs to pitch startup ideas, gain community feedback, and get noticed — built using Next.js, TypeScript, and Sanity.",
      techStack: ["Next.js", "Sanity", "TypeScript"],
      image: YCImage,
      githubUrl: "https://github.com/Siddhesh200419/Startup-App.git",
      liveUrl: "https://startup-os3u7wgt7-siddhesh200419s-projects.vercel.app/",
    },
    {
      id: 4,

      title: "BookWorm",
      description:
        "A full-featured mobile app where users can sign up, log in, and manage their personal book collection. Built with React Native and MongoDB, it supports full CRUD operations and allows image uploads for each book.",
      techStack: [
        "React Native",
        "MongoDB",
        "Node.js",
        "Express",
        "Multer",
        "JWT Auth",
        
      ],
      gradient: "from-blue-500 to-purple-600",
      icon: "📄",
      githubUrl: "https://github.com/Siddhesh200419/React-Native-BookWorm.git",
      liveUrl: "#",
    },
    {
      id: 5,
      title: "Airbnb Clone",
      description:
        "A full-stack Airbnb clone with user authentication, property listings, image uploads, bookings, and reviews. Features responsive design and cloud storage integration.",
      techStack: [
        "HTML",
        "Bootstrap",
        "JavaScript",
        "EJS",
        "Node.js",
        "Express",
        "MongoDB",
        "Cloudinary",
      ],
      gradient: "from-pink-500 to-red-500",
      icon: "🏠",
      githubUrl: "https://github.com/Siddhesh200419/Major-Project.git",
      liveUrl: "#", 
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Here are some of the projects I've built recently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className={`h-full bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center`}
                  >
                    <div className="text-center text-3xl">{project.icon}</div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <span>
                  <h3 className="whitespace-nowrap overflow-hidden text-ellipsis text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                </span>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
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
                    className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
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
