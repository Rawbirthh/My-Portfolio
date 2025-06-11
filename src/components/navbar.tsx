import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 50], [0, 1])
  const blur = useTransform(scrollY, [0, 50], [0, 8])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.div
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-background/80 border-border" : "bg-transparent border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <motion.div
        className="absolute inset-0 bg-background/80"
        style={{ opacity, backdropFilter: `blur(${blur}px)` }}
      />
      <div className="container flex h-16 items-center justify-between relative z-10">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Link to="/" className="font-bold text-2xl">
            <span className="sr-only">Portfolio Home</span>
            <span className="flex items-center gap-1">
              <span className="text-primary animated-gradient-text">Robert</span>
              <span className="text-secondary animated-gradient-text">Portfolio</span>
            </span>
          </Link>
        </motion.div>
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item, index) => (
             <NavigationMenuItem key={item.name}>
             <motion.div
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.1 }}
               whileHover={{ y: -2 }}
             >
               <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
               <a href={item.href} className={navigationMenuTriggerStyle()}>
  {item.name}
</a>
               </NavigationMenuLink>
             </motion.div>
           </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2">
          {/* <ModeToggle /> */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {/* <Button
  variant="default"
  className="hidden md:flex bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-2 rounded-md"
>
  Download CV
</Button> */}


          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
