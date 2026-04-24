/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Link,
  Mail,
  MessageCircle,
  Code2,
  Cpu,
  Layers,
  ChevronRight,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: () => ({
    opacity: 1,
    y: 0,
  }),
};

import { ThemeToggle } from "@/components/theme-toggle";

export default function Portfolio() {
  const skills = [
    "React Js",
    "Node Js",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Java",
    "Python",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "AWS",
    "Azure",
    "Web3",
    "Blockchain",
    "Git/GitHub",
  ];

  const experience = [
    {
      company: "SBXCLOUD",
      role: "Desarrollador Frontend",
      period: "2025 - 2026",
      desc: "Desarrollo de interfaces modernas y escalables.",
    },
    {
      company: "InfoDesign Colombia",
      role: "Desarrollador Frontend Senior",
      period: "2023 - 2026",
      desc: "Liderazgo técnico y arquitectura frontend.",
    },
    {
      company: "Certika sas",
      role: "Desarrollador FullStack Senior",
      period: "2020 - 2023",
      desc: "Desarrollo de soluciones Blockchain y arquitecturas FullStack.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-black/5 dark:border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-indigo-50 shadow-lg shadow-indigo-500/20">
            L
          </div>
          <span className="font-bold tracking-tight text-foreground hidden sm:block">
            Lennin Lara
          </span>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a
              href="#about"
              className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              Sobre mí
            </a>
            <a
              href="#skills"
              className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              Habilidades
            </a>
            <a
              href="#experience"
              className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              Experiencia
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              Contacto
            </a>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <motion.div
            className="flex-1 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeIn}
          >
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase">
                Full Stack Developer | Senior Frontend
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-foreground">
                Impulsando el futuro con
                <span className="text-gradient">Tecnología Web.</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg lg:text-xl leading-relaxed max-w-2xl">
                Soy Lennin Lara, Ingeniero de Sistemas especializado en
                desarrollo de software con arquitecturas escalables, soluciones
                en Blockchain y aplicaciones de alto impacto.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-2"
              >
                Trabajemos juntos <ChevronRight size={18} />
              </a>
              <div className="flex gap-3">
                {[
                  {
                    icon: <Mail size={20} />,
                    href: "mailto:lenninlara28@gmail.com",
                  },
                  {
                    icon: <MessageCircle size={20} />,
                    href: "https://wa.me/573015699747", // Reemplaza con tu número de WhatsApp
                  },
                  {
                    icon: <Link size={20} />,
                    href: "https://www.linkedin.com/in/lennin-lara-0b205228b/",
                  },
                  {
                    icon: <Globe size={20} />,
                    href: "https://github.com/lenninlara28",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass hover:border-indigo-500/50 transition-all text-slate-400 hover:text-indigo-600 dark:hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeIn}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-linear-to-br from-indigo-500 to-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden glass p-2 border-2 border-indigo-500/20">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img src="/images/profile.png" alt="Lennin Lara" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats / Highlight */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code2 className="text-indigo-600 dark:text-indigo-400" />,
              title: "Full Stack Focus",
              desc: "Dominio de React, Next.js, TypeScript, Java, Python, Api Rest, Node.js y ecosistemas modernos de JS.",
            },
            {
              icon: <Layers className="text-cyan-600 dark:text-cyan-400" />,
              title: "Web3 & Blockchain",
              desc: "Experiencia integrando soluciones descentralizadas.",
            },
            {
              icon: <Cpu className="text-purple-600 dark:text-purple-400" />,
              title: "Arquitectura Senior",
              desc: "Diseño de sistemas escalables y mantenibles en AWS y Azure.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-3xl glass space-y-4 hover:border-white/20 transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeIn}
            >
              <div className="p-3 rounded-2xl bg-white/5 w-fit">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Stack <span className="text-gradient">Tecnológico</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              He dominado un conjunto diverso de herramientas para construir
              cualquier tipo de producto digital.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, i) => (
              <motion.span
                key={i}
                className="px-6 py-3 rounded-2xl glass text-sm font-medium hover:text-indigo-400 transition-colors"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i % 5}
                variants={fadeIn}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Experiencia <span className="text-gradient">Laboral</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Trayectoria profesional en empresas líderes del sector
              tecnológico.
            </p>
          </div>
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-3xl glass border-l-4 border-l-indigo-500 flex flex-col md:flex-row justify-between gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeIn}
              >
                <div className="space-y-2">
                  <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold uppercase tracking-widest">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <h6 className="text-lg font-bold text-foreground">
                    {exp.company}
                  </h6>
                </div>
                <div className="max-w-md">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer / CTA */}
        <section
          id="contact"
          className="relative p-12 lg:p-24 rounded-[40px] overflow-hidden bg-linear-to-br from-indigo-600/20 to-cyan-600/20 border border-white/10 text-center space-y-8"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            ¿Listo para el siguiente <br />
            <span className="text-gradient">gran proyecto?</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto">
            Hablemos sobre cómo puedo ayudarte a construir software excepcional.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:lenninlara28@gmail.com"
              className="px-8 py-4 rounded-2xl bg-white text-black font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={20} /> Enviar Email
            </a>
            <a
              href="https://wa.me/573015699747" // Reemplaza con tu número de WhatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-[#25D366] text-white font-bold hover:bg-[#20ba5a] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
            >
              <MessageCircle size={20} /> WhatsApp
            </a>
            <a
              href="https://github.com/lenninlara28"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl glass font-bold hover:border-white/40 transition-colors"
            >
              Ver GitHub
            </a>
          </div>
          <div className="pt-12 border-t border-white/5 text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Lennin Lara. Hecho con React &
            Next.js.
          </div>
        </section>
      </main>
    </div>
  );
}
