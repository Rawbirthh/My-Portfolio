
import { motion, useAnimation } from "framer-motion"
import { Code, Github, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const moveX = clientX / window.innerWidth - 0.5
      const moveY = clientY / window.innerHeight - 0.5
      setMousePosition({ x: moveX, y: moveY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    controls.start({
      x: mousePosition.x * 20,
      y: mousePosition.y * 20,
      transition: { type: "spring", damping: 50 },
    })
  }, [mousePosition, controls])

  // Generate particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="particles-container">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 50 + 50}, ${Math.random() * 200 + 50}, 0.3)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animated-gradient-text">
                Web Developer & IT Graduate
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Turning ideas into web applications. Passionate about full-stack development, real-time features, and building
                scalable, user-friendly solutions with modern technologies.
              </p>
              <p className="mt-3 max-w-[600px] text-muted-foreground md:text-xl">
                Actively seeking junior web developer roles where I can grow, contribute, and learn in a collaborative environment.
                Let’s build something impactful together.
              </p>
            </motion.div>
          </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* <Button
                size="lg"
                className="bg-primary text-primary-foreground group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                as={motion.button}
              >
                View Projects
                <motion.span
                  className="ml-2"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Button> */}
              {/* <Button
                size="lg"
                variant="outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                as={motion.button}
              >
                Contact Me
              </Button> */}
            </motion.div>
            <motion.div
              className="flex gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {[
                { icon: <Github className="h-6 w-6" />, label: "GitHub", href: "https://github.com/Rawbirthh" },
                { icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn", href: "https://www.linkedin.com/in/robert-barrios-36a974328/" },
                // { icon: <Twitter className="h-6 w-6" />, label: "Twitter" },
                { icon: <Code className="h-6 w-6" />, label: "Portfolio", href: "" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link to={item.href ?? ''} className="text-muted-foreground hover:text-primary">
                    {item.icon}
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full border-4 border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/20 p-2 floating"
              animate={controls}
              style={{ transformOrigin: "center center" }}
            >
              <img
                src="https://scontent.fceb3-1.fna.fbcdn.net/v/t1.15752-9/496624757_1532456484382025_3188927877892687600_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeH5iF3o3g6yNs7qh4egPeSh20OuxMGD4ATbQ67EwYPgBL10hzG4TC_kk-sAjaFqP5qdbTEnUtzJdM2QpjIO_RBh&_nc_ohc=v4R3eW_cWWgQ7kNvwFgVokT&_nc_oc=Adlb577_1w0uOGYkf1VMTOjNtXULPJy6InJq7Pf3WIbK18G305zgd99ILNC_amQBxD0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fceb3-1.fna&oh=03_Q7cD2gE5Ui_WZLHqgNsPgKrz9faSlzI8T-sYoEN86BlDT57hlw&oe=68739FB8"
                alt="Profile"
                className="rounded-full object-cover"
                width={400}
                height={400}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 opacity-60"
                animate={{
                  background: [
                    "linear-gradient(to bottom right, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
                    "linear-gradient(to bottom right, rgba(236, 72, 153, 0.1), rgba(6, 182, 212, 0.1))",
                    "linear-gradient(to bottom right, rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1))",
                  ],
                }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-primary"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute -top-2 -left-2 h-16 w-16 rounded-full bg-secondary"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
