'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface SkillCategory {
  category: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Language 1", "Language 2"]
  },
  {
    category: "Frontend",
    skills: ["Frontend 1", "Frontend 2"]
  },
  {
    category: "Backend",
    skills: ["Backend 1", "Backend 2"]
  },
  {
    category: "Databases",
    skills: ["Database 1", "Database 2"]
  },
  {
    category: "Tools & Others",
    skills: ["Tool 1", "Tool 2"]
  }
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-32 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-sm text-[var(--accent)]">03</span>
            <div className="h-[1px] w-12 bg-[var(--accent)]"></div>
          </div>
          
          <h2 className="font-display text-5xl sm:text-6xl font-bold text-[var(--text-primary)] mb-6">
            Skills & Technologies
          </h2>
          
          <p className="font-sans text-lg text-[var(--text-secondary)] max-w-2xl">
            The Skills/Technologies I have used.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="relative bg-white border-2 border-[var(--border)] p-8 group hover:border-[var(--accent)] transition-all duration-300"
            >
              {/* Category header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 border-2 border-[var(--accent)] flex items-center justify-center">
                    <span className="font-mono text-xs text-[var(--accent)]">
                      {String(categoryIndex + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[var(--text-primary)]">
                    {category.category}
                  </h3>
                </div>
                <div className="h-[2px] w-12 bg-[var(--accent)]"></div>
              </div>

              {/* Skills list */}
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="flex items-center gap-3 group/item"
                  >
                    <div className="w-1.5 h-1.5 bg-[var(--accent)] rotate-45 group-hover/item:scale-150 transition-transform"></div>
                    <span className="font-sans text-[var(--text-secondary)] group-hover/item:text-[var(--text-primary)] group-hover/item:translate-x-1 transition-all">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-[var(--accent)] border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block border-t-2 border-[var(--border)] pt-8">
            <p className="font-mono text-sm text-[var(--accent)] uppercase tracking-widest">
              Currently exploring: Swift • Routing Technologies • GIS
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
