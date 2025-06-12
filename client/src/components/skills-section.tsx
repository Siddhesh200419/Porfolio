import { motion } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  Palette, 
  BarChart3, 
  Zap, 
  Wand2,
  Cloud,
  ShoppingCart,
  Users,
  GraduationCap,
  Database,
  GitBranch,
  Paintbrush,
  Flame
} from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "things I create",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
      skills: [
        { name: "React Applications", icon: Code, color: "text-blue-500" },
        { name: "Responsive Websites", icon: Smartphone, color: "text-purple-500" },
        { name: "UI/UX Interfaces", icon: Palette, color: "text-pink-500" },
        { name: "Interactive Components", icon: Zap, color: "text-green-500" },
        { name: "Data Visualizations", icon: BarChart3, color: "text-orange-500" },
        { name: "CSS Animations", icon: Wand2, color: "text-indigo-500" }
      ]
    },
    {
      title: "for products in",
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
      skills: [
        { name: "SaaS", icon: Cloud, color: "text-blue-500" },
        { name: "E-commerce", icon: ShoppingCart, color: "text-green-500" },
        { name: "Analytics", icon: BarChart3, color: "text-orange-500" },
        { name: "Social Platforms", icon: Users, color: "text-purple-500" },
        { name: "EdTech", icon: GraduationCap, color: "text-red-500" },
        { name: "and more", icon: null, color: "text-gray-400", isItalic: true }
      ]
    },
    {
      title: "using tools like",
      bgColor: "bg-blue-100",
      textColor: "text-blue-800",
      skills: [
        { name: "React & Next.js", icon: Code, color: "text-blue-500" },
        { name: "Node.js", icon: Code, color: "text-green-500" },
        { name: "MongoDB", icon: Database, color: "text-orange-500" },
        { name: "Git & GitHub", icon: GitBranch, color: "text-red-500" },
        { name: "Tailwind CSS", icon: Paintbrush, color: "text-purple-500" },
        { name: "Firebase", icon: Flame, color: "text-yellow-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <span className="text-lg text-gray-600 italic">when I'm not out with my loved ones...</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            You'll catch me doing<br />
            a combo of these:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`${category.bgColor} ${category.textColor} px-4 py-2 rounded-full text-sm font-medium w-fit mb-6`}>
                {category.title}
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    {skill.icon ? (
                      <skill.icon className={`${skill.color} text-xl w-5 h-5`} />
                    ) : (
                      <div className="w-5 h-5" />
                    )}
                    <span className={`text-gray-800 font-medium ${skill.isItalic ? 'italic text-gray-400' : ''}`}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
