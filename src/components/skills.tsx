import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Braces, Code2, Database, FileCode2, Layers, LayoutGrid, Palette, Server, Smartphone } from "lucide-react"
import { useState } from "react"

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  const skills = [
    { name: "HTML/CSS", level: 40, icon: <FileCode2 className="h-5 w-5" /> },
    { name: "JavaScript", level: 65, icon: <Braces className="h-5 w-5" /> },
    { name: "TypeScript", level: 60, icon: <Code2 className="h-5 w-5" /> },
    { name: "React", level: 65, icon: <Layers className="h-5 w-5" /> },
    { name: "Bootsrap CSS", level: 50, icon: <Server className="h-5 w-5" /> },
    { name: "Tailwind CSS", level: 40, icon: <Palette className="h-5 w-5" /> },
    { name: "Node.js", level: 50, icon: <Server className="h-5 w-5" /> },
    { name: "SQL/NoSQL", level: 65, icon: <Database className="h-5 w-5" /> },
    { name: "C#", level: 68, icon: <LayoutGrid className="h-5 w-5" /> },
    { name: "PHP", level: 60, icon: <Smartphone className="h-5 w-5" /> },
  ]

  const categories = [
    { name: "Frontend", color: "bg-[#891fb2] text-primary-foreground" },
    { name: "Backend", color: "bg-[#f61e42] text-secondary-foreground" },
    { name: "Design", color: "bg-[#5cb8cd] text-accent-foreground" },
    { name: "Mobile", color: "bg-[#dc3c11] text-destructive-foreground" },
    { name: "DevOps", color: "bg-[#891fb2] text-muted-foreground" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#c61e65] px-3 py-1 text-sm text-secondary-foreground">
              My Skills
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animated-gradient-text">
              Technical Expertise
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A showcase of my technical skills and proficiency in various technologies.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Badge className={`${category.color} text-sm py-1 px-3`}>{category.name}</Badge>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mx-auto max-w-4xl mt-12 grid gap-6 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group"
              variants={item}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="rounded-lg border bg-card/80 backdrop-blur-sm p-4 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/50"
                animate={{
                  boxShadow: hoveredSkill === index ? "0 0 15px rgba(147, 51, 234, 0.5)" : "0 0 0 rgba(0, 0, 0, 0)",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="rounded-full bg-primary/10 p-1.5 text-primary"
                      animate={{
                        rotate: hoveredSkill === index ? 360 : 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="font-medium">{skill.name}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                <Progress
  value={skill.level}
  className="h-2 w-full bg-secondary/20 border border-red-500"  // Debug border
  indicatorClassName="border border-blue-500 bg-gradient-to-r from-primary to-secondary"  // Debug border
/>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
