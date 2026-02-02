'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-32 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Title and decorative element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-32">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-sm text-[var(--accent)]">01</span>
                <div className="h-[1px] w-12 bg-[var(--accent)]"></div>
              </div>
              
              <h2 className="font-display text-5xl sm:text-6xl font-bold text-[var(--text-primary)] mb-8">
                About Me
              </h2>

              <div className="relative w-full h-96 bg-[var(--accent)] opacity-10 rounded-sm overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                  {[...Array(16)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="border border-white/20"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: i * 0.05 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="font-sans text-lg text-[var(--text-primary)] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p className="font-sans text-lg text-[var(--text-secondary)] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p className="font-sans text-lg text-[var(--text-secondary)] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Stats or highlights */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[var(--border)]">
              <div>
                <p className="font-display text-4xl font-bold text-[var(--accent)] mb-2">3+</p>
                <p className="font-sans text-sm uppercase tracking-wider text-[var(--text-secondary)]">
                  Years Experience
                </p>
              </div>
             </div>

            {/* Quick facts */}
            <div className="space-y-4 pt-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[var(--accent)] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-sans font-medium text-[var(--text-primary)]">Currently Learning</p>
                  <p className="font-sans text-[var(--text-secondary)]">Mobile App Development & Database Management</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[var(--accent)] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-sans font-medium text-[var(--text-primary)]">Interests</p>
                  <p className="font-sans text-[var(--text-secondary)]">Full-time positions & Collaborative Projects</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
