"use client";

import { useState } from "react";
import Image from "next/image";

const PROJECTS = [
  {
    title: "E-commerce App Prototype",
    description:
      "A full-featured mobile shopping experience built with React Native, focusing on seamless micro-interactions and performance.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA6DD2Bn1v6UF_DvjEoqz03KKFeln69KV462YfNQ7M1kdVjkt9cS3xjlg_J5Pkm0Myq2cfhahyzfEA6xKDssogJoVxgA0bii14_eyK3CuODkRNOgl4XASk4_NeeATo0lin905lU1zcJuoG01zkk8NAa7zapQDrH_loSpOBk4C3VwQFjF55EsdND3cioibJvGG7XvHkd1qkeCvq0fuKs2Gt7qLkETB4G1d5lvmSiFdmPi3UcoxpeYqFbcuKuTPfrnlPzmqYk9W2WUI",
    tags: ["React Native", "Firebase", "Tailwind"],
    github: "https://github.com/yourusername/ecommerce-app",
    demo: "https://ecommerce-app.vercel.app",
  },
  {
    title: "Weather Analytics Suite",
    description:
      "Real-time data visualization tool that processes global weather patterns using OpenWeather API and Chart.js integration.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdbDg8iuQLd_6hAtQHP60-j1rv0nBmBBLYIeOYGbfPYJmeUWvNmRHk_nCAb0b5WNBsnB9flogX_fS_F5hRiqjfjINlqrVBOGQ04yhijX5NdQ98JxksPTa4WZ4TxN8p1QjAGhgdPwqxsesAFU8oRSTvWYL2iGStExLghGwoMYH3925p_fr3Qz3ydYCNS4PizfDbi4dFvCiD9hSi7GSDP1MkuRIO8bTXq1WVQEbregtpEUiliqoBJYX8G7MRBHpyvZc0_gZmByHn4UM",
    tags: ["JavaScript", "Chart.js", "API"],
    github: "https://github.com/yourusername/weather-analytics",
    demo: "https://weather-analytics.vercel.app",
  },
  {
    title: "Focus Task Manager",
    description:
      "A productivity tool designed with a focus on deep work, utilizing local storage for persistence and offline capabilities.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWjxatmr7Zz6Y-S6GjG5qfTzvVPSG52citAX1pHVRyhIHb6YgVhquxDafhiEcRsNu-4Cv7DIeF72orujDi3F_xe3bw2xHiLLxjKWTcFLXxZjD_rN7D9faMI57hQkZ7fiMkq75aUaDUS6RoQdb9azUiJ7R9uh6GUOgBXSVLWuasBoeh5Ck0I9nGZduTXJ7tji4IOFD-M71yMCYXohKD11Bninicv2R1RajDCeUlzA_MzssBRmmbX_-BrSPJ1pa3aLxcGOPST9sx7qo",
    tags: ["Vue.js", "Pinia", "PWA"],
    github: "https://github.com/yourusername/focus-task-manager",
    demo: "https://focus-task-manager.vercel.app",
  },
  {
    title: "DevConnect Social Hub",
    description:
      "A specialized networking platform for junior developers to collaborate on open-source projects and share code snippets.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-MIlbKWVgahZ45T5rovoNPrOF5-9GCG0xkWaImBxrRqJKOKvDrOIURXL-fvBWwrA3V9KbThQEjARPUxGcSL8Sux7qGYhxzZQu90GuIWblwy3xRTqppyeuO-QJ5FSnhSMUVrH2X7Il5RK7DmWD8fLP4PVtxg18tHJZCNQT8EFoccSEsPk1WNQN9pdpTkup4oX47vGr-aQMqCpTeDruaH3r3bL9CwPdLUV8KoZo97jn7V53ekbq-2IJiSnN8TLa3QScBmL8TfnuMVE",
    tags: ["Next.js", "Supabase", "Prisma", "TypeScript"],
    github: "https://github.com/yourusername/devconnect",
    demo: "https://devconnect.vercel.app",
  },
  {
    title: "Neomorph Portfolio",
    description:
      "The very portfolio you are browsing! Built as an exploration of soft UI principles and modern Tailwind CSS configurations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoYmCEiyd_p7lA5BH7TezRUMO8mJ86JcUtW4XJoTSyN2xf-LsZPSBVwtlswC77zqZ9E_y5xjY10m9_aASv__PdnAQhpo8KSpskdG1E_qYXUzphJAHPbKeRfj6iwa0utqrXROetwbL8xfvBvkj8i528ftnZA2iHQNUofIIZsIh8DA4HcV7TE0fLlM99o-4RVdC0dO0NkPJ7Eg-ypfVDLjgdGjqdkfDgEJc8hR6zjHaJzX4SUA8PoClxIAoni1gYJHgCrERmU_8RswE",
    tags: ["HTML5", "Tailwind", "Vite"],
    category: "Web",
    github: "https://github.com/yourusername/neomorph-portfolio",
    demo: "https://portfolio.vercel.app",
  },
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <main className="max-w-6xl mx-auto px-6 py-10 pb-32 flex-grow">
      {/* Hero Section */}
      <section className="mb-12 space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight">
          Project Gallery
        </h2>
        <p className="text-on-surface-variant max-w-2xl font-medium text-lg leading-relaxed">
          A curated selection of my work as a fresh computer science student,
          focusing on clean architecture and intuitive user experiences.
        </p>
      </section>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => {

          return (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="neomorph-raised p-5 rounded-xl bg-background group cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg aspect-video neomorph-inset w-full">
                  <Image
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={project.title}
                    src={project.image}
                    fill
                  />
                </div>

                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-on-surface leading-tight">
                    {project.title}
                  </h3>
                  <span className="material-symbols-outlined text-primary select-none">
                    open_in_new
                  </span>
                </div>

                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="neomorph-inset px-3 py-1 rounded-full text-xs font-semibold text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-background rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto neomorph-raised"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 md:h-96 w-full ">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-sm text-primary font-medium">
                    {selectedProject.category}
                  </span>

                  <h2 className="text-3xl font-bold mt-1">
                    {selectedProject.title}
                  </h2>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-2xl text-on-surface-variant hover:text-on-surface"
                >
                  ✕
                </button>
              </div>

              <p className="text-on-surface-variant leading-relaxed text-base">
                {selectedProject.description}
              </p>

              <div>
                <h3 className="font-semibold mb-3">Technologies Used</h3>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="neomorph-inset px-3 py-1 rounded-full text-xs font-semibold text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neomorph-raised px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
                >
                  Live Demo
                </a>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neomorph-inset px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}