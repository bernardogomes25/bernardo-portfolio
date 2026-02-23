import { useState } from 'react'
import {
  Github,
  User,
  Phone,
  Briefcase,
  Monitor,
  Mail,
  Instagram,
  Linkedin,
  ImageIcon,
} from 'lucide-react'

// Data

const NAV_LINKS = [
  { label: 'Projects',   Icon: Monitor,   href: '#projects'    },
  { label: 'About',      Icon: User,      href: '#about'       },
  { label: 'Contacts',   Icon: Phone,     href: '#contacts'    },
  { label: 'Experience', Icon: Briefcase, href: '#experience'  },
]

const PROJECTS = [
  {
    title: 'Project Title',
    tags: ['HTML', 'JS', 'CSS'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iste praesentium provident repudiandae eius ipsa quos perferendis libero fugit minima.',
    github: '#',
  },
  {
    title: 'Project Title',
    tags: ['Java', 'Spring', 'MySQL'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iste praesentium provident repudiandae eius ipsa quos perferendis libero fugit minima.',
    github: '#',
  },
  {
    title: 'Project Title',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iste praesentium provident repudiandae eius ipsa quos perferendis libero fugit minima.',
    github: '#',
  },
  {
    title: 'Project Title',
    tags: ['TypeScript', 'Next.js', 'Tailwind'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, iste praesentium provident repudiandae eius ipsa quos perferendis libero fugit minima.',
    github: '#',
  },
]

const EXPERIENCES = [
  {
    company: 'Company Name',
    period: 'Employment period',
    title: 'Job Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odit atque accusantium, dolorem aliquid hic doloribus veritatis tempore quidem provident voluptate ipsa, aut possimus ad suscipit. Quasi nostrum saepe explicabo, iste illo maxime recusandae asperiores eos maiores autem consequuntur nam!',
  },
  {
    company: 'Company Name',
    period: 'Employment period',
    title: 'Job Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odit atque accusantium, dolorem aliquid hic doloribus veritatis tempore quidem provident voluptate ipsa, aut possimus ad suscipit. Quasi nostrum saepe explicabo, iste illo maxime recusandae asperiores eos maiores autem consequuntur nam!',
  },
]


const GREEN = '#A3C552'


const gridBg = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
  backgroundSize: '36px 36px',
}

// Navbar

function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 rounded-b-3xl"
      style={{ backgroundColor: GREEN }}
    >
      <span className="text-black font-bold text-xl tracking-wide">devname</span>

      <ul className="flex items-center gap-8">
        {NAV_LINKS.map(({ label, Icon, href }) => (
          <li key={label}>
            <a
              href={href}
              className="flex flex-col items-center gap-1 text-black hover:opacity-60 transition-opacity"
            >
              <Icon size={22} strokeWidth={1.8} />
              <span className="text-xs font-medium">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// Footer

function Footer() {
  return (
    <footer
      className="flex items-center px-10 py-5 rounded-t-3xl mt-16"
      style={{ backgroundColor: GREEN }}
    >
      <a href="#" aria-label="GitHub" className="text-black hover:opacity-60 transition-opacity">
        <Github size={28} strokeWidth={1.8} />
      </a>
      <p className="flex-1 text-center text-black text-sm">
        © 2026 Devname Surname. All rights reserved.
      </p>
      {/* Spacer to keep copyright centred */}
      <div className="w-7" />
    </footer>
  )
}

// About Section

function AboutSection() {
  return (
    <section id="about" className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-white text-5xl font-bold text-center mb-16">About me</h2>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Circular profile image */}
        <div className="flex-shrink-0">
          <div
            className="w-56 h-56 rounded-full overflow-hidden ring-4"
            style={{ ringColor: GREEN }}
          >
            <img
              src="https://placehold.co/224x224/1a1a1a/ffffff?text=Photo"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text blocks */}
        <div className="flex-1 space-y-5 text-white leading-relaxed">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis iure placeat
            distinctio mollitia eaque architecto, ipsum alias veniam, ad delectus maxime molestiae
            laborum recusandae voluptates excepturi perspiciatis quod molestias debitis! Eum,
            incidunt consequatur corporis perferendis exercitationem nesciunt ab impedit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatibus dolores
            ullam id eius possimus ea. Dolore, magnam libero in alias veritatis earum odit
            laudantium sed minima temporibus doloribus perferendis.
          </p>
        </div>
      </div>

      {/* Hobbies */}
      <div className="mt-20">
        <h3 className="text-white text-4xl font-bold text-center mb-8">Hobbies and interests</h3>
        <p className="text-white text-center max-w-3xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi officiis aliquid facere
          quidem. Voluptates repudiandae doloribus soluta deleniti eius! Alias, ipsam. Sint earum
          porro, soluta aliquid explicabo nam quisquam, totam obcaecati omnis voluptas eveniet,
          saepe neque est error. Numquam minus placeat amet in nisi vel temporibus rerum consequatur
          nam adipisci nesciunt assumenda, ipsa dolorum!
        </p>
      </div>
    </section>
  )
}

// Projects Section

function ProjectCard({ project }) {
  return (
    <div className="flex gap-8 py-8 items-start">
      {/* Info side */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-white text-xl font-semibold">{project.title}</h3>
          <a
            href={project.github}
            aria-label="GitHub repository"
            className="ml-auto hover:opacity-60 transition-opacity"
            style={{ color: GREEN }}
          >
            <Github size={22} strokeWidth={1.8} />
          </a>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-black text-xs font-semibold px-4 py-1 rounded-full"
              style={{ backgroundColor: GREEN }}
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-white leading-relaxed">{project.description}</p>
      </div>

      {/* Image placeholder */}
      <div className="flex-shrink-0 w-44 h-36 rounded-2xl border border-gray-600 flex items-center justify-center">
        <ImageIcon size={44} className="text-gray-600" strokeWidth={1.2} />
      </div>
    </div>
  )
}

function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(2)

  return (
    <section id="projects" className="pt-20 pb-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-white text-5xl font-bold text-center mb-12">My Projects</h2>

      <div>
        {PROJECTS.slice(0, visibleCount).map((project, i) => (
          <div key={i}>
            <ProjectCard project={project} />
            {i < visibleCount - 1 && <hr className="border-gray-800" />}
          </div>
        ))}
      </div>

      {visibleCount < PROJECTS.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((c) => Math.min(c + 2, PROJECTS.length))}
            className="text-black font-semibold px-16 py-3 rounded-full hover:opacity-80 transition-opacity"
            style={{ backgroundColor: GREEN }}
          >
            Load more...
          </button>
        </div>
      )}
    </section>
  )
}

// Experience Section

function ExperienceSection() {
  return (
    <section id="experience" className="pt-20 pb-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-white text-5xl font-bold text-center mb-16">Experience</h2>

      <div className="relative pl-24">
        {/* Vertical line */}
        <div
          className="absolute left-16 top-0 bottom-0 w-0.5"
          style={{ backgroundColor: GREEN }}
        />
        {/* Top T-cap */}
        <div
          className="absolute top-0 w-5 h-1 rounded-sm"
          style={{ backgroundColor: GREEN, left: 'calc(4rem - 10px)' }}
        />
        {/* Bottom T-cap */}
        <div
          className="absolute bottom-0 w-5 h-1 rounded-sm"
          style={{ backgroundColor: GREEN, left: 'calc(4rem - 10px)' }}
        />

        <div className="space-y-10">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="relative flex items-start">
              {/* Circular dot centred on the vertical line.
                  Container has pl-24 (6rem); line is at left-16 (4rem).
                  Row `left:0` = 6rem from container, so dot needs offset -2.5rem to
                  place its centre at exactly 4rem (the line). */}
              <div
                className="absolute w-4 h-4 rounded-full z-10"
                style={{
                  backgroundColor: GREEN,
                  border: '3px solid #000',
                  left: '-2.5rem',
                  top: '1.5rem',
                }}
              />
              {/* Horizontal connector from dot right-edge to card */}
              <div
                className="absolute"
                style={{
                  backgroundColor: GREEN,
                  left: '-1.5rem',
                  width: '1.5rem',
                  height: '2px',
                  top: 'calc(1.5rem + 0.375rem)',
                }}
              />

              {/* Experience card */}
              <div className="flex-1 rounded-2xl p-6" style={{ backgroundColor: GREEN }}>
                <div className="flex items-center justify-between mb-4 gap-4 flex-wrap">
                  <h3 className="text-black font-bold text-xl">{exp.company}</h3>
                  <span className="text-black text-sm">{exp.period}</span>
                  <span className="text-black text-sm font-semibold">{exp.title}</span>
                </div>
                <p className="text-black text-sm leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire up email service
    alert('Message sent!')
  }

  return (
    <section id="contacts" className="pt-20 pb-16 px-6 max-w-3xl mx-auto">
      <h2 className="text-white text-5xl font-bold text-center mb-12">Contact Me</h2>

      {/* Social info card */}
      <div className="rounded-3xl p-8 mb-8" style={{ backgroundColor: GREEN }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
          <div className="flex items-center gap-3">
            <Mail size={22} className="text-black flex-shrink-0" />
            <span className="text-black text-sm">johnsnow@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Instagram size={22} className="text-black flex-shrink-0" />
            <span className="text-black text-sm">johnsnow24</span>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin size={22} className="text-black flex-shrink-0" />
            <span className="text-black text-sm">John Snow</span>
          </div>
          <div className="flex items-center gap-3">
            <Github size={22} className="text-black flex-shrink-0" />
            <span className="text-black text-sm">johnsnowdev</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-white text-center leading-relaxed mb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt deleniti corporis nam.
        Quasi odit animi illo harum dolorum magni nesciunt quas! Ipsum veritatis totam ad.
      </p>

      {/* Contact form */}
      <div className="rounded-3xl p-8" style={{ backgroundColor: GREEN }}>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name + Email row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="flex items-center gap-3 flex-1">
              <span className="text-black font-medium w-14 flex-shrink-0">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="flex-1 rounded-full bg-gray-200 px-4 py-2 text-black text-sm outline-none focus:ring-2"
                style={{ '--tw-ring-color': '#000' }}
              />
            </label>
            <label className="flex items-center gap-3 flex-1">
              <span className="text-black font-medium w-14 flex-shrink-0">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="flex-1 rounded-full bg-gray-200 px-4 py-2 text-black text-sm outline-none"
              />
            </label>
          </div>

          {/* Subject */}
          <label className="flex items-center gap-3">
            <span className="text-black font-medium w-14 flex-shrink-0">Subject</span>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="flex-1 rounded-full bg-gray-200 px-4 py-2 text-black text-sm outline-none"
            />
          </label>

          {/* Message */}
          <label className="flex items-start gap-3">
            <span className="text-black font-medium w-14 flex-shrink-0 pt-2">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="flex-1 rounded-2xl bg-gray-200 px-4 py-3 text-black text-sm outline-none resize-none"
            />
          </label>

          {/* Send button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="bg-gray-800 text-white font-semibold px-20 py-3 rounded-full hover:bg-gray-700 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

// Root App

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white" style={gridBg}>
      <Navbar />
      <main>
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
