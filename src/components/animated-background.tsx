import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function AnimatedBackground() {
  const starsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!starsRef.current) return

    // Create stars
    const starsContainer = starsRef.current
    const starCount = 150

    // Clear any existing stars
    starsContainer.innerHTML = ""

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div")
      star.classList.add("star")

      // Random position
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`

      // Random size
      const size = Math.random() * 2 + 1
      star.style.width = `${size}px`
      star.style.height = `${size}px`

      // Random animation duration and delay
      star.style.setProperty("--duration", `${Math.random() * 3 + 2}s`)
      star.style.setProperty("--delay", `${Math.random() * 5}s`)
      star.style.setProperty("--opacity", `${Math.random() * 0.5 + 0.1}`)

      starsContainer.appendChild(star)
    }
  }, [])

  return (
    <>
      <div className="stars" ref={starsRef}></div>
      <div className="grid-bg"></div>
      <div className="animated-bg">
        <motion.div
          className="shape shape-1"
          animate={{
            filter: ["blur(10px)", "blur(20px)", "blur(10px)"],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="shape shape-2"
          animate={{
            filter: ["blur(10px)", "blur(25px)", "blur(10px)"],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="shape shape-3"
          animate={{
            filter: ["blur(10px)", "blur(15px)", "blur(10px)"],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="shape shape-4"
          animate={{
            filter: ["blur(10px)", "blur(30px)", "blur(10px)"],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    </>
  )
}