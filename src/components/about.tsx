

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap, User, Code } from "lucide-react"
import { useState } from "react"

export default function About() {
  const [activeTab, setActiveTab] = useState("personal")

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 px-3 py-1 text-sm text-primary-foreground">About Me</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animated-gradient-text">
              Get to Know Me
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm an Information Technology student passionate about building innovative solutions and learning new
              technologies.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto max-w-4xl mt-12">
          <Tabs defaultValue="personal" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 bg-[#1c2c45]">
              {[
                { value: "personal", icon: <User className="h-4 w-4" />, label: "Personal" },
                { value: "education", icon: <GraduationCap className="h-4 w-4" />, label: "Education" },
                { value: "experience", icon: <Briefcase className="h-4 w-4" />, label: "Experience" },
              ].map((tab) => (
                <motion.div key={tab.value} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <TabsTrigger value={tab.value} className="flex items-center gap-2">
                    {tab.icon}
                    <span className="hidden sm:inline">{tab.label}</span>
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
            <TabsContent value="personal" className="mt-6 space-y-4">
              <motion.div
                variants={tabVariants}
                initial="hidden"
                animate={activeTab === "personal" ? "visible" : "hidden"}
              >
                <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Who I Am</CardTitle>
                    <CardDescription>A bit about myself and my interests</CardDescription>
                  </CardHeader>
                  <CardContent className="text-left">
                    <p className="mb-4">
                      I'm a passionate Information Technology student with a focus on web development and software
                      engineering. I love solving complex problems and creating user-friendly applications that make a
                      difference.
                    </p>
                    <p>
                      When I'm not coding, you can find me exploring new technologies, contributing to open-source
                      projects, or expanding my knowledge through online courses and tech meetups.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="education" className="mt-6 space-y-4">
              <motion.div
                variants={tabVariants}
                initial="hidden"
                animate={activeTab === "education" ? "visible" : "hidden"}
              >
                <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Education Journey</CardTitle>
                    <CardDescription>My academic background</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <motion.div
                        className="flex gap-4 items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          className="bg-primary/20 p-2 rounded-full"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold">Bachelor of Information Technology</h3>
                          <p className="text-sm text-muted-foreground">Asian College of Technology • 2025 - Graduated</p>
                          <p className="mt-1">
                            Specializing in Software Development with a focus on web technologies.
                          </p>
                        </div>
                      </motion.div>
                      {/* <motion.div
                        className="flex gap-4 items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <motion.div
                          className="bg-secondary/20 p-2 rounded-full"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <BookOpen className="h-5 w-5 text-secondary" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold">Web Development Certification</h3>
                          <p className="text-sm text-muted-foreground">Online Platform • 2022</p>
                          <p className="mt-1">
                            Comprehensive training in modern web development frameworks and best practices.
                          </p>
                        </div>
                        
                      </motion.div> */}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="experience" className="mt-6 space-y-4">
              <motion.div
                variants={tabVariants}
                initial="hidden"
                animate={activeTab === "experience" ? "visible" : "hidden"}
              >
                <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Work Experience</CardTitle>
                    <CardDescription>My professional journey</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <motion.div
                        className="flex gap-4 items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          className="bg-primary/20 p-2 rounded-full"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Briefcase className="h-5 w-5 text-primary" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold">Web Development Intern</h3>
                          <p className="text-sm text-muted-foreground">Company Name • Summer 2023</p>
                          <p className="mt-1">
                            Assisted in developing responsive web applications using React and Next.js. Collaborated
                            with senior developers on client projects.
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        className="flex gap-4 items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <motion.div
                          className="bg-secondary/20 p-2 rounded-full"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Code className="h-5 w-5 text-secondary" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold">Freelance Developer</h3>
                          <p className="text-sm text-muted-foreground">Self-employed • 2022 - Present</p>
                          <p className="mt-1">
                            Developed custom websites and applications for small businesses and startups. Focused on
                            creating accessible and performant user experiences.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
