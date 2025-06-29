import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Personal photos placeholder */}
            <div className="relative">
              {/* Main photo placeholder */}
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">SG</span>
                  </div>
                  <p className="text-gray-600 font-medium">Professional Photo</p>
                </div>
              </div>
              
              {/* Decorative photo overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white p-2 rounded-xl shadow-lg transform rotate-6">
                <div className="w-24 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-600">💻</span>
                </div>
                <p className="text-xs text-gray-600 text-center mt-1 font-handwriting">My workspace ✨</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                Fueled by a deep curiosity for technology and design, I specialize in crafting responsive, full-stack web applications using React, Node.js, and the modern web stack. My journey started with an eagerness to learn, and has grown into a passion for building intuitive SaaS products that solve real-world problems.              </p>
              <p>
                I enjoy turning ideas into real, usable products — building apps that are fast, functional, and focused on the user experience.
              </p>
              <p className="font-medium text-gray-800 dark:text-gray-200">
                Currently focused on building innovative SaaS solutions and exploring the latest in 
                web development technologies.
              </p>
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
