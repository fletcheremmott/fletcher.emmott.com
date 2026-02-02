'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 grid-background opacity-30"></div>
      
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--accent)] opacity-[0.03] rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Small intro text */}
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-4">
            <div className="decorative-line"></div>
            <p className="font-mono text-sm uppercase tracking-widest text-[var(--accent)]">
              Welcome to my portfolio
            </p>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            variants={itemVariants}
            className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-[var(--text-primary)] mb-8 leading-tight"
          >
            Hi, I'm <span className="text-[var(--accent)]">Fletcher Emmott</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="font-sans text-2xl sm:text-3xl text-[var(--text-secondary)] mb-8"
          >
            Computer Science Student and Software Engineer
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="font-sans text-lg text-[var(--text-secondary)] max-w-2xl mb-12 leading-relaxed"
          >
            Description about me.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
            <motion.button
              onClick={() => {
                const element = document.getElementById('projects')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 bg-[var(--accent)] text-white font-sans font-medium rounded-none border-2 border-[var(--accent)] hover:bg-[var(--accent-light)] hover:border-[var(--accent-light)] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
                Scroll
              </span>
              <div className="w-[1px] h-12 bg-[var(--text-secondary)]"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
