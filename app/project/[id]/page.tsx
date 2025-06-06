"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Star, Download, Play, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import rishoGuruImg from "../../assets/images/risho_guru/Risho Guru.png"
import rishoSpeechImg from "../../assets/images/risho_speech/Risho speech.png"
import studyRoomImg from "../../assets/images/study_room/study_room.png"
import talentLensHubImg from "../../assets/images/tlh/TLH.png"
import tlhEmpImg from "../../assets/images/tlh_emp/tlh_emp_main.png"
import studyroom_ss1 from "../../assets/images/study_room/screenshots/study_room_dashboard.png";
import studyroom_ss2 from "../../assets/images/study_room/screenshots/studyroom_hr_helpdesk.png";
import studyroom_ss3 from "../../assets/images/study_room/screenshots/studyroom_assigned_courses.png";
import studyroom_ss4 from "../../assets/images/study_room/screenshots/studyroom_video_lesson.png";
import studyroom_ss5 from "../../assets/images/study_room/screenshots/studyroom_competency_test.png";

const projectData = {
  "study-room": {
    title: "Study Room",
    subtitle: "AI-Powered Language Learning Platform",
    description:
      "An innovative mobile application that leverages artificial intelligence to help users improve their English speaking skills through advanced speech recognition and personalized feedback.",
    longDescription:
      "Risho Speech represents a breakthrough in language learning technology, combining cutting-edge AI with intuitive mobile design. The app provides real-time speech analysis, pronunciation feedback, and personalized learning paths to help users achieve fluency faster than traditional methods.",
    image: rishoSpeechImg,
    screenshots: [
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
    ],
    technologies: [
      { name: "Flutter", icon: "🦋", description: "Cross-platform mobile framework" },
      { name: "Firebase", icon: "🔥", description: "Backend services and authentication" },
      { name: "AI/ML", icon: "🤖", description: "Speech recognition and analysis" },
      { name: "REST API", icon: "🔗", description: "Backend communication" },
      { name: "Provider", icon: "⚡", description: "State management" },
      { name: "Material Design", icon: "💎", description: "UI/UX framework" },
    ],
    features: [
      {
        title: "AI Speech Recognition",
        description: "Advanced speech-to-text technology with real-time pronunciation analysis",
        icon: "🎤",
      },
      {
        title: "Personalized Learning",
        description: "Adaptive learning paths based on individual progress and weaknesses",
        icon: "🎯",
      },
      {
        title: "Progress Tracking",
        description: "Comprehensive analytics and progress visualization",
        icon: "📊",
      },
      {
        title: "Interactive Lessons",
        description: "Engaging content with gamification elements",
        icon: "🎮",
      },
      {
        title: "Offline Mode",
        description: "Continue learning even without internet connection",
        icon: "📱",
      },
      {
        title: "Social Features",
        description: "Connect with other learners and share progress",
        icon: "👥",
      },
    ],
    stats: {
      rating: "4.8",
      downloads: "50K+",
      users: "25K+",
      retention: "85%",
    },
    playStoreUrl: "#",
    githubUrl: "#",
    color: "from-blue-500 to-purple-600",
  },
  "risho-speech": {
    title: "Risho Speech",
    subtitle: "AI-Powered Language Learning Platform",
    description:
      "An innovative mobile application that leverages artificial intelligence to help users improve their English speaking skills through advanced speech recognition and personalized feedback.",
    longDescription:
      "Risho Speech represents a breakthrough in language learning technology, combining cutting-edge AI with intuitive mobile design. The app provides real-time speech analysis, pronunciation feedback, and personalized learning paths to help users achieve fluency faster than traditional methods.",
    image: rishoSpeechImg,
    screenshots: [
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
    ],
    technologies: [
      { name: "Flutter", icon: "🦋", description: "Cross-platform mobile framework" },
      { name: "Firebase", icon: "🔥", description: "Backend services and authentication" },
      { name: "AI/ML", icon: "🤖", description: "Speech recognition and analysis" },
      { name: "REST API", icon: "🔗", description: "Backend communication" },
      { name: "Provider", icon: "⚡", description: "State management" },
      { name: "Material Design", icon: "💎", description: "UI/UX framework" },
    ],
    features: [
      {
        title: "AI Speech Recognition",
        description: "Advanced speech-to-text technology with real-time pronunciation analysis",
        icon: "🎤",
      },
      {
        title: "Personalized Learning",
        description: "Adaptive learning paths based on individual progress and weaknesses",
        icon: "🎯",
      },
      {
        title: "Progress Tracking",
        description: "Comprehensive analytics and progress visualization",
        icon: "📊",
      },
      {
        title: "Interactive Lessons",
        description: "Engaging content with gamification elements",
        icon: "🎮",
      },
      {
        title: "Offline Mode",
        description: "Continue learning even without internet connection",
        icon: "📱",
      },
      {
        title: "Social Features",
        description: "Connect with other learners and share progress",
        icon: "👥",
      },
    ],
    stats: {
      rating: "4.8",
      downloads: "50K+",
      users: "25K+",
      retention: "85%",
    },
    playStoreUrl: "#",
    githubUrl: "#",
    color: "from-blue-500 to-purple-600",
  },
  "risho-guru": {
    title: "Risho Guru",
    subtitle: "Your AI-powered K-12 tutor. Instant answers, videos, and comprehensive study help.",
    description:
      "A comprehensive educational app designed specifically for Bangla medium students, featuring AI-powered tutoring and NCTB curriculum integration.",
    longDescription:
      "Risho.guru is an innovative AI-powered education platform, meticulously developed over two years, offering comprehensive K-12 curriculum coverage from Bangladesh, India, UK, USA, and Canada, with features like an interactive study board for instant answers, a vast library of interactive video lessons, and multifunctional AI assistance for math, writing, programming, mental health support, and more, available 24/7.",
    image: "/placeholder.svg?height=600&width=300",
    screenshots: [
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
    ],
    technologies: [
      { name: "Flutter", icon: "🦋", description: "Cross-platform development" },
      { name: "Provider", icon: "⚡", description: "State management solution" },
      { name: "Firebase", icon: "🔥", description: "Cloud services" },
      { name: "NCTB API", icon: "📚", description: "Curriculum integration" },
      { name: "SQLite", icon: "🗄️", description: "Local data storage" },
      { name: "Push Notifications", icon: "🔔", description: "User engagement" },
    ],
    features: [
      {
        title: "NCTB Curriculum",
        description: "Complete integration with National Curriculum and Textbook Board",
        icon: "📖",
      },
      {
        title: "AI Tutor",
        description: "Intelligent tutoring system for personalized learning",
        icon: "🤖",
      },
      {
        title: "Practice Tests",
        description: "Comprehensive test preparation with detailed analytics",
        icon: "📝",
      },
      {
        title: "Study Planner",
        description: "Smart scheduling and reminder system",
        icon: "📅",
      },
      {
        title: "Performance Analytics",
        description: "Detailed insights into learning progress",
        icon: "📈",
      },
      {
        title: "Offline Content",
        description: "Access educational content without internet",
        icon: "📱",
      },
    ],
    stats: {
      rating: "4.8",
      downloads: "100K+",
      users: "75K+",
      retention: "90%",
    },
    playStoreUrl: "#",
    githubUrl: "#",
    color: "from-green-500 to-teal-600",
  },
  "talentlenshub": {
    title: "TalentLensHub",
    subtitle: "Discover and Showcase Your Talents",
    description:
      "A social platform that connects talented individuals with opportunities, featuring portfolio creation, talent discovery, and networking capabilities.",
    longDescription:
      "TalentLensHub is a comprehensive career growth platform empowering job seekers and professionals with expert-led courses, job preparation tools, and personalized learning paths to enhance skills and secure career opportunities.",
    image: "/placeholder.svg?height=600&width=300",
    screenshots: [
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
      "/placeholder.svg?height=600&width=300",
    ],
    technologies: [
      { name: "Flutter", icon: "🦋", description: "Mobile app development" },
      { name: "Supabase", icon: "⚡", description: "Backend as a service" },
      { name: "Social Features", icon: "👥", description: "Networking capabilities" },
      { name: "Media Upload", icon: "📸", description: "Portfolio management" },
      { name: "Real-time Chat", icon: "💬", description: "Communication system" },
      { name: "Search & Filter", icon: "🔍", description: "Talent discovery" },
    ],
    features: [
      {
        title: "Portfolio Builder",
        description: "Create stunning portfolios with multimedia content",
        icon: "🎨",
      },
      {
        title: "Talent Discovery",
        description: "Advanced search and filtering for finding talents",
        icon: "🔍",
      },
      {
        title: "Social Networking",
        description: "Connect and collaborate with other professionals",
        icon: "🤝",
      },
      {
        title: "Opportunity Board",
        description: "Discover jobs, projects, and collaboration opportunities",
        icon: "💼",
      },
      {
        title: "Real-time Messaging",
        description: "Instant communication with potential collaborators",
        icon: "💬",
      },
      {
        title: "Analytics Dashboard",
        description: "Track portfolio views and engagement metrics",
        icon: "📊",
      },
    ],
    stats: {
      rating: "4.5",
      downloads: "25K+",
      users: "15K+",
      retention: "78%",
    },
    playStoreUrl: "#",
    githubUrl: "#",
    color: "from-purple-500 to-pink-600",
  },
  "talentlenshub-employee": {
    title: "TalentLensHub Employee",
    subtitle: "Discover and Showcase Your Talents",
    description:
      "TalentLensHub is an innovative app designed to streamline talent management and competency assessment within organizations.",
    longDescription:
      "TalentLensHub is an innovative app designed to streamline talent management and competency assessment within organizations. Tailored for forward-thinking companies, TalentLensHub provides a comprehensive platform for employees to enhance their skills, track career progress, and align with organizational goals.",
    image: tlhEmpImg,
    screenshots: [
      studyroom_ss1,
      studyroom_ss2,
      studyroom_ss3,
      studyroom_ss4,
      studyroom_ss5,
    ],
    technologies: [
      { name: "Flutter", icon: "🦋", description: "Mobile app development" },
      { name: "Supabase", icon: "⚡", description: "Backend as a service" },
      { name: "Social Features", icon: "👥", description: "Networking capabilities" },
      { name: "Media Upload", icon: "📸", description: "Portfolio management" },
      { name: "Real-time Chat", icon: "💬", description: "Communication system" },
      { name: "Search & Filter", icon: "🔍", description: "Talent discovery" },
    ],
    features: [
      {
        title: "Portfolio Builder",
        description: "Create stunning portfolios with multimedia content",
        icon: "🎨",
      },
      {
        title: "Talent Discovery",
        description: "Advanced search and filtering for finding talents",
        icon: "🔍",
      },
      {
        title: "Social Networking",
        description: "Connect and collaborate with other professionals",
        icon: "🤝",
      },
      {
        title: "Opportunity Board",
        description: "Discover jobs, projects, and collaboration opportunities",
        icon: "💼",
      },
      {
        title: "Real-time Messaging",
        description: "Instant communication with potential collaborators",
        icon: "💬",
      },
      {
        title: "Analytics Dashboard",
        description: "Track portfolio views and engagement metrics",
        icon: "📊",
      },
    ],
    stats: {
      rating: "4.5",
      downloads: "25K+",
      users: "15K+",
      retention: "78%",
    },
    playStoreUrl: "#",
    githubUrl: "#",
    color: "from-purple-500 to-pink-600",
  },
}

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectData[projectId as keyof typeof projectData]
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % project.screenshots.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [project.screenshots.length])

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-teal-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <motion.div
              className="flex items-center space-x-3 text-slate-700 hover:text-teal-600 transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Portfolio</span>
            </motion.div>
          </Link>
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            MR
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className={`text-5xl lg:text-7xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-4`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl text-slate-600 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {project.subtitle}
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
                <Play className="w-5 h-5 mr-2" />
                View Demo
              </Button>
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3">
                <ExternalLink className="w-5 h-5 mr-2" />
                Play Store
              </Button>
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3">
                <Github className="w-5 h-5 mr-2" />
                Source Code
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-0">
              <Star className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900">{project.stats.rating}</div>
              <div className="text-sm text-slate-600">Rating</div>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-0">
              <Download className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900">{project.stats.downloads}</div>
              <div className="text-sm text-slate-600">Downloads</div>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-0">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900">{project.stats.users}</div>
              <div className="text-sm text-slate-600">Active Users</div>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900">{project.stats.retention}</div>
              <div className="text-sm text-slate-600">Retention</div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Screenshots */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-3xl blur-2xl"
                animate={{ rotate: [0, 1, 0] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
              />
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <div className="relative mx-auto w-64 h-[500px] bg-slate-900 rounded-[3rem] p-2">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    <motion.div
                      key={activeScreenshot}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={project.screenshots[activeScreenshot] || "/placeholder.svg"}
                        alt={`${project.title} Screenshot ${activeScreenshot + 1}`}
                        width={300}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-slate-900 rounded-full opacity-20" />
                  </div>
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                  {project.screenshots.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeScreenshot ? "bg-teal-600" : "bg-slate-300"
                      }`}
                      onClick={() => setActiveScreenshot(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">About the Project</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">{project.description}</p>
              <p className="text-slate-600 leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Technologies Used</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="p-4 bg-gradient-to-br from-white to-teal-50 border-0 shadow-md hover:shadow-lg transition-all">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <div>
                          <h4 className="font-semibold text-slate-900">{tech.name}</h4>
                          <p className="text-sm text-slate-600">{tech.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Key Features</h2>
            <p className="text-xl text-slate-600">What makes this app special</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 bg-white border-0 shadow-lg hover:shadow-xl transition-all h-full">
                  <CardContent className="p-0">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-teal-900 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Interested in Similar Projects?</h2>
            <p className="text-xl text-teal-100 mb-8">
              Let's discuss how I can help bring your mobile app vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 text-lg">Get In Touch</Button>
              </Link>
              <Link href="/#projects">
                <Button
                  variant="outline"
                  className="border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-teal-900 px-8 py-3 text-lg"
                >
                  View More Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
