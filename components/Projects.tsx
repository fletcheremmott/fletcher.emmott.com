'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    title: "Project Title 1",
    description: "Brief description of project.",
    tags: ["Tag", "Tag", "Tag"],
    image: "/project-placeholder-1.jpg",
    link: "https://your-project-url.com",
    github: "https://github.com/yourusername/project"
  },
  {
    title: "Project Title 2",
    description: "Brief description of project.",
    tags: ["Tag", "Tag", "Tag"],
    image: "/project-placeholder-2.jpg",
    link: "https://your-project-url.com",
    github: "https://github.com/yourusername/project"
  },
  {
    title: "Project Title 3",
    description: "Brief description of project.",
    tags: ["Tag", "Tag", "Tag"],
    image: "/project-placeholder-3.jpg",
    link: "https://your-project-url.com",
    github: "https://github.com/yourusername/project"
  },
  {
    title: "Project Title 4",
    description: "Brief description of project.",
    tags: ["Tag", "Tag", "Tag"],
    image: "/project-placeholder-4.jpg",
    link: "https://your-project-url.com",
    github: "https://github.com/yourusername/project"
  },
  {
    title: "Project Title 5",
    description: "Brief description of project.",
    tags: ["Tag", "Tag", "Tag"],
    image: "/project-placeholder-5.jpg",
    link: "https://your-project-url.com",
    github: "https://github.com/yourusername/project"
  },
  {
    title: "Project Title 6",
    description: "Brief description of project.",
    tags: ["Tag", "Tag", "Tag"],
    image: "/project-placeholder-6.jpg",
    link: "https://your-project-url.com",
    github: "https://github.com/yourusername/project"
  }
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
      <section id="projects" className="relative py-32 bg-[var(--bg-primary)]">
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
              <span className="font-mono text-sm text-[var(--accent)]">02</span>
              <div className="h-[1px] w-12 bg-[var(--accent)]"></div>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl font-bold text-[var(--text-primary)] mb-6">
              Featured Projects
            </h2>

            <p className="font-sans text-lg text-[var(--text-secondary)] max-w-2xl">
              Projects that I have worked on.
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="project-card relative group bg-white border-2 border-[var(--border)] overflow-hidden hover:border-[var(--accent)] transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative w-full h-56 bg-[var(--bg-secondary)] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 border-4 border-[var(--border)] rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="font-mono text-xs text-[var(--text-secondary)]">Project Screenshot</p>
                      </div>
                    </div>
                    {/* Number badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white border-2 border-[var(--border)] font-mono text-sm text-[var(--text-primary)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-[var(--accent)] transition-all">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-sans text-[var(--text-secondary)] mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, tagIndex) => (
                          <span
                              key={tagIndex}
                              className="font-mono text-xs px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)]"
                          >
                      {tag}
                    </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
                      {project.link && (
                          <a
                              href={project.link}
                              className="font-sans text-sm text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors link-underline"
                          >
                            Live Demo →
                          </a>
                      )}
                      {project.github && (
                          <a
                              href={project.github}
                              className="font-sans text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            Code
                          </a>
                      )}
                    </div>
                  </div>
                </motion.article>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Projects