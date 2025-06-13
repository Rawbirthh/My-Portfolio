"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { Link } from "react-router-dom"
import { useState, useMemo } from "react"


export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")


  //trick to not get bug
  const handleFilterClick = () => {
    setActiveFilter("")
  }

  const projects = useMemo(() => [
    {
      title: "PNA Infohub: Connecting Region VII Nurses",
      description:
        "A membership and voting system built to support Region VII nurses. Features include member registration, authentication, role-based access, and secure online voting.",
      image: "https://scontent.fceb3-1.fna.fbcdn.net/v/t1.15752-9/506661764_1242682544104651_6020578531168662624_n.png?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEisYpLFNNGnMjGRB_C4oLN_QStYmN38_T9BK1iY3fz9FiNWD2xO9W78-8-UYfFsA1oRk8LmKdXR0eIBg8jT0hF&_nc_ohc=ApIMw9hvMbsQ7kNvwFKumdd&_nc_oc=AdmwCWRU_l7NrJhD7nb0fE_3iLaxEXgBCd3fY8bI-is0HkBDGnlu2hC00shpV1Qvn3E&_nc_zt=23&_nc_ht=scontent.fceb3-1.fna&oh=03_Q7cD2gFZqePxxqyYQ6PxBc9QLNHIxaa5XmIu5qsNjK6clBpxPQ&oe=68738D91",
      tags: ["Laravel", "MySQL", "PHP", "Authentication"],
      category: "Web Application",
      github: "#",
      demo: "No demo because it is not deployed",
    },
    {
      title: "Simple E-Commerce App",
      description:
        "A simple-featured e-commerce platform built with the MERN stack. Includes product browsing, shopping cart, user authentication, and real-time order updates using Socket.io.",
      image: "https://scontent.fceb3-1.fna.fbcdn.net/v/t1.15752-9/494828293_721718923872888_2888695496328998181_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEM_nWI8xbiDjKKoq70h2N1PHKZXsyEP6w8cplezIQ_rPv5CuxM19IkhomykDO592qOXV7WeeDpw_M-fR-yL8X5&_nc_ohc=KdMCedQbeYAQ7kNvwF8YN34&_nc_oc=Adm_3PDYVmXEbJwL50IxCh0l0lYNLVAAstMMR73m8onDZM28bu8szpa4PPGU5CmyT5A&_nc_zt=23&_nc_ht=scontent.fceb3-1.fna&oh=03_Q7cD2gHmGnoa_BU5_yS5R1FaHiF4vYnMjXJlkklGI3H6vVHH5w&oe=687379CC",
      tags: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
      category: "Full Stack",
      github: "#",
      demo: "https://mern-typescript-app.vercel.app/",
    },    
    {
      title: "Simple Social Media App",
      description:
        "A social media app where users can post, like, comment, follow others, and edit their profiles. It also supports real-time chat.",
      image: "https://scontent.fceb3-1.fna.fbcdn.net/v/t1.15752-9/494362433_1411629503317639_4405800129142194589_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGiV4m1MD7o5vSw2u0IL-ApMkMoJlUDmIkyQygmVQOYiaKcQFrNHVTNlJucomBbbtM-6mV-QOw_TXdGeacQBUAU&_nc_ohc=cAfp96acbn4Q7kNvwGO2_fy&_nc_oc=AdmwVLuaa4_Emb8teglKUHMTsTpDhO_fvGT0uE6sJ6lutMsr2yGxoQtQN39YCRi4KFo&_nc_zt=23&_nc_ht=scontent.fceb3-1.fna&oh=03_Q7cD2gHIw0wriqEdny3sMoVjqCCygtoeqCZvg1QYNHfo8tHqww&oe=6873A066",
      tags: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "Tailwind CSS"],
      category: "Full Stack",
      github: "#",
      demo: "https://social-media-repo.vercel.app/",
    },
    
    {
      title: "My Portfolio",
      description: "A responsive portfolio website showcasing projects and skills with a modern design.",
      image: "https://scontent.fceb3-1.fna.fbcdn.net/v/t1.15752-9/495271400_1426142288727770_24809410619547683_n.png?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGYeEjA5FyljWCPggcpDlRJOV9ruH_E4NM5X2u4f8Tg0wOR1kA2G25WwWQ0KXPriJJtJ0mh9gU0h44Ts89ev8SY&_nc_ohc=3YvPacy65xAQ7kNvwFzOX6d&_nc_oc=AdldWVpscZRQ0_HJmK2iymcPrDFLo1cSEeWZW1CJkUlamWQ7cif7C3j__CmZG37F0-0&_nc_zt=23&_nc_ht=scontent.fceb3-1.fna&oh=03_Q7cD2gEaloJ43MhHB4BwH-9_LQHfkt0KngPNAn30WMfJd_jvRg&oe=68738C9D",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      category: "Frontend",
      github: "#",
      demo: "https://social-media-repo.vercel.app/",
    },
  ], [])

  // const filters = ["All", "Frontend", "Full Stack", "Web App"]  
  const filteredProjects = useMemo(() => {
    console.log("Filtering with:", activeFilter)
    const result = activeFilter === "All" 
      ? projects 
      : projects.filter((project) => project.category.toLowerCase() === activeFilter.toLowerCase())
    console.log("Filtered result:", result)
    return result
  }, [activeFilter, projects])
  

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 px-3 py-1 text-sm text-primary-foreground">My Work</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animated-gradient-text">
              Featured Projects
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of projects that showcase my skills and experience in web development.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mt-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* {filters.map((filter) => (
            <motion.div key={filter} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? "bg-primary text-primary-foreground" : ""}
              >
                {filter}
              </Button>
            </motion.div>
          ))} */}
        </motion.div>

        <motion.div
          className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 h-full flex flex-col bg-card/80 backdrop-blur-sm">
                  <motion.div className="overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-secondary/20 text-secondary hover:bg-secondary/30"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={project.github}>
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button size="sm" asChild>
                        <Link to={project.demo}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-muted-foreground">No projects found for this filter.</p>
            </div>
          )}
        </motion.div>

        {/* //trick to not get bug */}
                <Button
          onClick={handleFilterClick}
          variant="outline"
          size="lg"
          className="group"
          style={{ display: 'none' }}
        >
          View All Projects
          <motion.span
            className="ml-2"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
          </motion.span>
        </Button>
        
        {/* <div className="mt-12 text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg" className="group">
              View All Projects
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Button>
          </motion.div>
        </div> */}
      </div>
    </section>
  )
}