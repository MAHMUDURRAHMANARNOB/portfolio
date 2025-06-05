"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import rishoGuruImg from "../app/assets/images/risho_guru/Risho Guru.png"
import rishoSpeechImg from "../app/assets/images/risho_speech/Risho speech.png"
import studyRoomImg from "../app/assets/images/study_room/study_room.png"
import talentLensHubImg from "../app/assets/images/tlh/TLH.png"
import tlhEmpImg from "../app/assets/images/tlh_emp/tlh_emp_main.png"

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const projects = [
    {
      id: "study-room",
      title: "Study Room",
      description: "AI-driven educational platform for Bangladeshi students, offering personalized learning, and interactive problem-solving with real-time collaboration.",
      image: studyRoomImg,
      technologies: ["Flutter", "Firebase", "AI/ML", "REST API"],
      rating: "4.8★",
      downloads: "50K+",
    },
    {
      id: "risho-speech",
      title: "Risho Speech",
      description: "AI-powered language learning app with speech recognition",
      image: rishoSpeechImg,
      technologies: ["Flutter", "Firebase", "AI/ML", "REST API"],
      rating: "4.8★",
      downloads: "50K+",
    },
    {
      id: "risho-guru",
      title: "Risho Guru",
      description: "Educational platform for Bangla medium students",
      image: rishoGuruImg,
      technologies: ["Flutter", "Provider", "Firebase", "NCTB API"],
      rating: "4.8★",
      downloads: "100K+",
    },
    {
      id: "talentlenshub",
      title: "TalentLensHub",
      description: "Platform to discover and showcase talents",
      // image: "/placeholder.svg?height=300&width=200",
      image: talentLensHubImg,
      technologies: ["Flutter", "Supabase", "Social Features", "Media Upload"],
      rating: "4.5★",
      downloads: "25K+",
    },
    {
      id: "talentlenshub-employee",
      title: "TalentLensHub Employee",
      description: "Platform to discover and showcase talents",
      // image: "/placeholder.svg?height=300&width=200",
      image: tlhEmpImg,
      technologies: ["Flutter", "Supabase", "Social Features", "Media Upload"],
      rating: "4.5★",
      downloads: "25K+",
    },
  ]

  const skills = [
    { name: "Flutter", icon: "🐦", category: "Framework" },
    { name: "Firebase", icon: "🔥", category: "Backend" },
    { name: "REST APIs", icon: "🔗", category: "Integration" },
    { name: "Provider", icon: "⚡", category: "State Management" },
    { name: "Supabase", icon: "⚡", category: "Backend" },
    { name: "Figma", icon: "🎨", category: "Design" },
    { name: "Android", icon: "🤖", category: "Platform" },
    { name: "iOS", icon: "📱", category: "Platform" },
    { name: "Git", icon: "📝", category: "Version Control" },
    { name: "Clean Architecture", icon: "🏗️", category: "Architecture" },
    { name: "BLoC", icon: "🧩", category: "State Management" },
    { name: "Material Design", icon: "💎", category: "Design" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-teal-600/5 rounded-full blur-2xl"
          animate={{
            x: mousePosition.x * 0.015,
            y: mousePosition.y * 0.015,
            rotate: mousePosition.x * 0.1,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 25 }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-teal-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            MR
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-700 hover:text-teal-600 transition-colors font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Mahmudur
              </span>
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Mobile Application Developer specializing in <span className="text-teal-600 font-semibold">Flutter</span>{" "}
              and <span className="text-teal-600 font-semibold">Android</span> development. Creating engaging
              experiences for 100K+ users.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg">View My Work</Button>
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 text-lg">
                Get In Touch
              </Button>
            </motion.div>
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href="https://github.com/MAHMUDURRAHMANARNOB"
                className="text-slate-600 hover:text-teal-600 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/mahmudur-rahman0920"
                className="text-slate-600 hover:text-teal-600 transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:mahmudur.rahman2023@gmail.com"
                className="text-slate-600 hover:text-teal-600 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative w-80 h-80 mx-auto"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 opacity-20"></div>
              <motion.div
                className="absolute inset-4 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 opacity-30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              ></motion.div>
              <motion.div
                className="absolute inset-8 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 opacity-40"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              ></motion.div>
            </motion.div>
            <motion.div className="absolute inset-0 flex items-center justify-center" whileHover={{ scale: 1.05 }}>
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-white to-teal-50 shadow-2xl flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-8 h-8 text-teal-600" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              About <span className="text-teal-600">Me</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experienced Mobile Application Developer with 3+ years of expertise in Flutter and native Android
              development.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <span className="text-slate-700">Uttara, Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-teal-600" />
                  <span className="text-slate-700">mahmudur.rahman2023@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-teal-600" />
                  <span className="text-slate-700">+8801758387250</span>
                </div>
              </div> */}

              <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  <motion.li className="flex items-start space-x-3" whileHover={{ x: 5 }}>
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <span className="text-slate-700">
                      Enhanced user engagement by 30% through AI-based EdTech projects
                    </span>
                  </motion.li>
                  <motion.li className="flex items-start space-x-3" whileHover={{ x: 5 }}>
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <span className="text-slate-700">Achieved 99% crash-free rate across all applications</span>
                  </motion.li>
                  <motion.li className="flex items-start space-x-3" whileHover={{ x: 5 }}>
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <span className="text-slate-700">
                      Successfully serving 100,000+ students through mobile applications
                    </span>
                  </motion.li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl opacity-20"
                  animate={{ rotate: [0, 1, 0] }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
                ></motion.div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Experience Timeline</h3>
                  <div className="space-y-6">
                    <motion.div className="flex items-start space-x-4" whileHover={{ scale: 1.02 }}>
                      <div className="w-4 h-4 bg-teal-600 rounded-full mt-1"></div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Software Engineer</h4>
                        <p className="text-teal-600">Shonod • May 2022 - Present</p>
                        <p className="text-slate-600 text-sm mt-1">Leading AI-based mobile app development</p>
                      </div>
                    </motion.div>
                    <motion.div className="flex items-start space-x-4" whileHover={{ scale: 1.02 }}>
                      <div className="w-4 h-4 bg-emerald-600 rounded-full mt-1"></div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Software Developer Intern</h4>
                        <p className="text-emerald-600">Shonod • Oct 2021 - Apr 2022</p>
                        <p className="text-slate-600 text-sm mt-1">UI/UX development and server management</p>
                      </div>
                    </motion.div>
                    <motion.div className="flex items-start space-x-4" whileHover={{ scale: 1.02 }}>
                      <div className="w-4 h-4 bg-slate-400 rounded-full mt-1"></div>
                      <div>
                        <h4 className="font-semibold text-slate-900">BSc in CSE</h4>
                        <p className="text-slate-600">AIUB • 2018 - 2022</p>
                        <p className="text-slate-600 text-sm mt-1">CGPA 3.36/4.00</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Featured <span className="text-teal-600">Projects</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Mobile applications that have impacted thousands of users worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <motion.div className="absolute inset-0 bg-gradient-to-t from-teal-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={300}
                          height={400}
                          className="w-full h-64 object-cover"
                        />
                      </motion.div>
                      <motion.div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <Link href={`/project/${project.id}`}>
                          <Button className="bg-white text-teal-600 hover:bg-teal-50">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </Link>
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                        <div className="text-right">
                          <div className="text-sm text-amber-600 font-semibold">{project.rating}</div>
                          <div className="text-xs text-slate-500">{project.downloads}</div>
                        </div>
                      </div>
                      <p className="text-slate-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Technical <span className="text-teal-600">Skills</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: Math.random() * 10 - 5,
                    transition: { duration: 0.2 },
                  }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="bg-white hover:bg-gradient-to-br hover:from-teal-50 hover:to-emerald-50 transition-all duration-300 border-0 shadow-md hover:shadow-xl">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className="text-4xl mb-3"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <h3 className="font-semibold text-slate-900 mb-1">{skill.name}</h3>
                      <p className="text-sm text-slate-500">{skill.category}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-teal-900 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Build Something <span className="text-teal-300">Amazing</span>
            </h2>
            <p className="text-xl text-teal-100 mb-12 max-w-2xl mx-auto">
              Ready to bring your mobile app idea to life? Let's discuss how we can create an exceptional user
              experience together.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <Mail className="w-8 h-8 mx-auto mb-4 text-teal-300" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-teal-100">mahmudur.rahman2023@gmail.com</p>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <Phone className="w-8 h-8 mx-auto mb-4 text-teal-300" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-teal-100">+8801758387250</p>
            </motion.div>
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <MapPin className="w-8 h-8 mx-auto mb-4 text-teal-300" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-teal-100">Uttara, Dhaka</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:mahmudur.rahman2023@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 text-lg">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/mahmudur-rahman0920"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className="border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-teal-900 px-8 py-3 text-lg"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">© 2024 Mahmudur Rahman. Crafted with passion and precision.</p>
        </div>
      </footer>
    </div>
  )
}
