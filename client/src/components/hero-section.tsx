import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Floating decorative elements */}
        <motion.div
          className="absolute -top-10 -left-10 floating-animation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-yellow-200 text-gray-800 px-3 py-2 rounded-lg shadow-lg transform -rotate-12">
            <span className="text-sm font-medium">React.js</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-20 -right-10 floating-animation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="bg-green-200 text-gray-800 px-3 py-2 rounded-lg shadow-lg transform rotate-12">
            <span className="text-sm font-medium">Next.js</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-12 left-1/4 floating-animation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="bg-purple-200 text-gray-800 px-3 py-2 rounded-lg shadow-lg transform -rotate-6">
            <span className="text-sm font-medium">Node.js</span>
          </div>
        </motion.div>

        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-lg text-gray-600 dark:text-gray-300 mb-4 block">
            👋 Hey, I'm Siddhesh Gite, passionate about creating...
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold leading-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-gray-900 dark:text-white ">
            building amazing
          </span>
          <br />
          <span className="text-gray-900 dark:text-white">
            web experiences that
          </span>
          <br />
          <span className="gradient-text">users love</span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Web Developer | React Enthusiast | SaaS Builder
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 px-8 py-4 text-base"
          >
            <span className="font-medium">View Projects</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 px-8 py-4 text-base"
          >
            <Download className="mr-2 h-4 w-4" />
            <a href="client\assets\resume_sid.pdf" download>
              <span className="font-medium">Download Resume</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
