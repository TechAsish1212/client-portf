import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 pb-32 space-y-16 flex-grow">
      {/* Hero / Profile Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full neomorph-raised p-4">
            <div className="w-full h-full rounded-full overflow-hidden neomorph-inset relative">
              <img
                className="object-cover"
                alt="Alex Rivera headshot"
                src="https://i.pinimg.com/736x/02/3f/f8/023ff8a889118ed652bfdf6a384e68f2.jpg"
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-7 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-purple-600">
              Abhishek Roy Chowdhury
            </h2>
            <p className="text-xl md:text-2xl text-primary font-medium">
              Aspiring Software Engineer &amp; UI Enthusiast
            </p>
          </div>
          <p className="text-on-surface-variant leading-relaxed max-w-xl text-lg">
            A passionate computer science graduate focused on building
            accessible, human-centered digital experiences. I blend technical
            logic with visual precision to create software that feels as good as
            it looks.
          </p>
          {/* <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <button className="neomorph-raised neomorph-btn px-8 py-4 rounded-xl flex items-center gap-2 text-primary font-semibold cursor-pointer">
              <span className="material-symbols-outlined select-none">download</span>
              Download Resume
            </button>
            <Link
              href="/contact"
              className="neomorph-raised neomorph-btn px-8 py-4 rounded-xl flex items-center gap-2 text-on-surface font-semibold cursor-pointer"
            >
              <span className="material-symbols-outlined select-none">mail</span>
              Let's Talk
            </Link>
          </div> */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <Link
              href="/asish_resume_2.pdf"
              download="asish_resume_2.pdf"
              className="neomorph-raised neomorph-btn px-8 py-4 rounded-xl flex items-center gap-2 text-primary font-semibold cursor-pointer"
            >
              <span className="material-symbols-outlined select-none">
                download
              </span>
              Download Resume
            </Link>

            <Link
              href="/contact"
              className="neomorph-raised neomorph-btn px-8 py-4 rounded-xl flex items-center gap-2 text-on-surface font-semibold cursor-pointer"
            >
              <span className="material-symbols-outlined select-none">
                mail
              </span>
              Let's Talk
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project Card */}
      <section className="space-y-8">
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold">Featured Project</h3>
            <p className="text-on-surface-variant">
              The latest work from my design and dev lab.
            </p>
          </div>
          <Link
            href="/work"
            className="text-primary font-semibold flex items-center gap-1 group"
          >
            View Archive
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 select-none">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="neomorph-raised rounded-2xl overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto overflow-hidden neomorph-inset m-4 rounded-xl min-h-[300px] relative">
              <Image
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                alt="NeoFinance Dashboard Preview"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL-FThF-H_pNANcpjCd0sIrR83IaJff9onhTPUw-VABhstaGXd3N538WRHrUgfA4VFFkjKpywD0yVRwI2O1kFqb39AlB122pin7NQI2CDqnYKdhFwhoMOFovU97XnFdKDe-hZl477yudANXhkqGXbr3oVt2mUdXTdYuGN_RTtosH7nW9MNmIo02f-JOYyG32qXDk35PlqhoYyEEzzp0Z7BkBwskFthWZ609_76C2AmOK7zcZEP83U4TrxifuK-zCxmrWc5udHGWD0"
                fill
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#818cf8] text-white neomorph-raised uppercase tracking-wider">
                  React
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-background text-on-surface-variant neomorph-raised uppercase tracking-wider">
                  Tailwind CSS
                </span>
              </div>
              <div className="space-y-3">
                <h4 className="text-3xl font-bold text-on-surface">
                  NeoFinance Dashboard
                </h4>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  A comprehensive financial tracking system designed with soft
                  UI principles. Features real-time data visualization,
                  automated expense categorization, and a highly responsive
                  layout optimized for user focus.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="neomorph-raised neomorph-btn px-6 py-3 rounded-xl bg-primary text-white font-semibold flex items-center gap-2 cursor-pointer">
                  <span className="material-symbols-outlined select-none">
                    visibility
                  </span>
                  Live Demo
                </button>
                <Link
                  href="/work"
                  className="neomorph-raised neomorph-btn px-6 py-3 rounded-xl text-on-surface font-semibold flex items-center justify-center cursor-pointer"
                >
                  View Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-center">My Tech Toolkit</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="neomorph-raised p-4 rounded-2xl flex items-center gap-3 w-40 justify-center group hover:scale-105 transition-transform cursor-default">
            <span className="material-symbols-outlined text-primary select-none">
              code
            </span>
            <span className="font-semibold text-on-surface">TypeScript</span>
          </div>
          <div className="neomorph-raised p-4 rounded-2xl flex items-center gap-3 w-40 justify-center group hover:scale-105 transition-transform cursor-default">
            <span className="material-symbols-outlined text-primary select-none">
              layers
            </span>
            <span className="font-semibold text-on-surface">Next.js</span>
          </div>
          <div className="neomorph-raised p-4 rounded-2xl flex items-center gap-3 w-40 justify-center group hover:scale-105 transition-transform cursor-default">
            <span className="material-symbols-outlined text-primary select-none">
              brush
            </span>
            <span className="font-semibold text-on-surface">Figma</span>
          </div>
          <div className="neomorph-raised p-4 rounded-2xl flex items-center gap-3 w-40 justify-center group hover:scale-105 transition-transform cursor-default">
            <span className="material-symbols-outlined text-primary select-none">
              database
            </span>
            <span className="font-semibold text-on-surface">PostgreSQL</span>
          </div>
        </div>
      </section>
    </main>
  );
}
