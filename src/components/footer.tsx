import { Github, Instagram, Linkedin} from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Footer() {
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com/Rawbirthh" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/robert-barrios-36a974328/" },
    { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "#" },
  ]

  return (
    <footer className="border-t border-border/30 bg-background/80 backdrop-blur-md relative overflow-hidden">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <motion.div
          className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Robert Portfolio. All rights reserved.
          </p>
        </motion.div>
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socialLinks.map((link) => (
            <motion.div
              key={link.label}
              whileHover={{ y: -5, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Link
                to={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {link.icon}
                <span className="sr-only">{link.label}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}
