"use client";

import { useEffect, useState } from "react";

const SKILLS_CORE = [
  { name: "JavaScript", dotColor: "bg-primary" },
  { name: "TypeScript", dotColor: "bg-tertiary" },
  { name: "React & Next.js", dotColor: "bg-primary" },
  { name: "Node.js", dotColor: "bg-primary" },
  { name: "Python", dotColor: "bg-primary"  },
  { name: "SQL", dotColor: "bg-primary" },
  { name: "Figma", dotColor: "bg-primary"  },
  { name: "Adobe CC", dotColor: "bg-primary"  },
  { name: "Git & CI/CD", dotColor: "bg-primary"  },
  { name: "AWS / Vercel", dotColor: "bg-primary"  },
  { name: "PostgreSQL", dotColor: "bg-primary"  },
  { name: "React Native", dotColor: "bg-primary"  },
];

const EDUCATION = [
  {
    schoole_name: "Siliguri Institute of Technology",
    degree: "Computer Science & Engineering(AIML)",
    year: "2023-2027",
    description: "hdhf",
  },
  {
    schoole_name: "ABC School",
    degree: "Class XII",
    year: "2021-2023",
    description: "hdhf",
  },
];

export default function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger progress bar animations on mount
    const timer = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 pt-8 pb-32 space-y-12 flex-grow">
      {/* Hero Section */}
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold text-on-surface tracking-tight">
          Growth &amp; Expertise
        </h1>
        <p className="text-on-surface-variant max-w-xl text-lg">
          A comprehensive overview of my technical proficiency and academic
          foundation in digital craft.
        </p>
      </section>

      {/* Technical Skills Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="neomorph-raised p-2 rounded-lg bg-background">
            <span className="material-symbols-outlined text-primary select-none">
              code
            </span>
          </div>
          <h2 className="text-xl font-semibold text-on-surface">
            Skills
          </h2>
        </div>
        <div className="neomorph-raised bg-background rounded-xl p-6 md:p-8">
          <div className="grid gap-8">
            {/* Development Category */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {SKILLS_CORE.map((skill) => (
                  <div
                    key={skill.name}
                    className="neomorph-raised px-4 py-2 rounded-full bg-background flex items-center gap-2 hover:scale-105 transition-transform cursor-default"
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${skill.dotColor}`}
                    />
                    <span className="text-sm font-semibold text-on-surface">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="neomorph-raised p-2 rounded-lg bg-background">
            <span className="material-symbols-outlined text-primary select-none">
              school
            </span>
          </div>
          <h2 className="text-xl font-semibold text-on-surface">Education</h2>
        </div>
        <div className="relative space-y-8 pl-8 before:content-[''] before:absolute before:left-[11px] before:top-0 before:bottom-0 before:w-1 before:bg-outline-variant/40 before:rounded-full">
          {/* Master's Degree */}
          {EDUCATION.map((edu) => (
            <div key={edu.degree} className="relative group">
              <div className="absolute -left-[30px] top-1 w-6 h-6 neomorph-raised rounded-full bg-background flex items-center justify-center z-10">
                <div className="w-2.5 h-2.5 bg-primary rounded-full" />
              </div>
              <div className="neomorph-raised bg-background rounded-xl p-6 transition-all duration-300 hover:translate-x-2">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-lg font-bold text-on-surface">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-on-surface-variant font-semibold">
                      {edu.schoole_name}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-secondary">
                      <span className="material-symbols-outlined text-base select-none">
                        calendar_today
                      </span>
                      <span className="font-medium">{edu.year}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-outline-variant/30">
                  <p className="text-sm font-bold text-on-surface-variant mb-3">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
