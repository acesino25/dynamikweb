import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Code, Sparkles, Zap, Users, Lightbulb, Puzzle, Layers, Github, Twitter, Linkedin, Mail } from "lucide-react"
import { GradientLine } from "@/components/gradient-line"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-[-1]" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(65,105,145,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(180,60,60,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(95,130,90,0.15),transparent_50%)] z-[-1]" />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20dynamik%20cactus%20blanco%20fondo%20negro-kATh1dSqoki7R7IgA8uYphhNRv60oh.png"
              alt="Dynamik Software Solutions"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          <div>
            <Button className="relative overflow-hidden group bg-gradient-to-r from-[#4169a1] to-[#5f825a] hover:from-[#4169a1]/90 hover:to-[#5f825a]/90 text-white border-0">
              <span className="relative z-10">Soy Cliente</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute h-px w-1/3 bg-gradient-to-r from-transparent via-[#4169a1] to-transparent top-1/4 -left-10 animate-[moveRight_15s_linear_infinite]">
              <div className="absolute inset-0 gradient-line-blue"></div>
            </div>
            <div className="absolute h-px w-1/4 bg-gradient-to-r from-transparent via-[#b43c3c] to-transparent top-1/3 -right-10 animate-[moveLeft_20s_linear_infinite]">
              <div className="absolute inset-0 gradient-line-red"></div>
            </div>
            <div className="absolute h-px w-1/3 bg-gradient-to-r from-transparent via-[#5f825a] to-transparent bottom-1/4 -right-10 animate-[moveLeft_25s_linear_infinite]">
              <div className="absolute inset-0 gradient-line-green"></div>
            </div>
          </div>

          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
              <div className="inline-flex items-center justify-center p-1 bg-gray-800/50 backdrop-blur-sm rounded-full mb-4">
                <span className="text-xs font-medium px-3 py-1 text-gray-300">Soluciones Tecnológicas a Tu Medida</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight md:leading-tight">
                Soporte Técnico y
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#4169a1] via-[#b43c3c] to-[#5f825a]">
                    {" "}
                    Desarrollo de Software
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#4169a1] via-[#b43c3c] to-[#5f825a] opacity-50 blur-sm"></span>
                </span>
              </h1>

              <p className="text-xl text-gray-400 max-w-2xl">
                Te ayudamos a resolver problemas técnicos y convertimos tus ideas en sistemas funcionales
              </p>

              {/* Servicios Destacados */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-12">
                {/* Servicio 1: Asistencia Técnica Remota */}
                <Card className="bg-gradient-to-br from-gray-900/90 to-gray-900/50 border-gray-700 backdrop-blur-sm hover:border-[#4169a1] transition-all duration-300 group">
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4169a1] to-[#5f825a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-left">Asistencia Técnica Remota</h3>
                    
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-gray-500 text-sm">desde</span>
                      <span className="text-5xl font-bold text-white">$12.500</span>
                      <span className="ml-auto px-3 py-1 bg-[#4169a1]/20 text-[#4169a1] text-xs rounded-full font-medium">Consultar</span>
                    </div>
                    
                    <p className="text-gray-400 text-left mb-6 leading-relaxed">
                      ¿Problemas con tu PC? Te ayudamos a instalar programas, solucionar errores y optimizar tu equipo desde donde estés.
                    </p>

                    <ul className="text-sm text-gray-400 space-y-2 mb-6 text-left">
                      <li className="flex items-start gap-2">
                        <span className="text-[#4169a1] mt-1">✓</span>
                        <span>Instalación y configuración de software</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#4169a1] mt-1">✓</span>
                        <span>Reparación de errores del sistema</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#4169a1] mt-1">✓</span>
                        <span>Soporte inmediato online</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gradient-to-r from-[#4169a1] to-[#5f825a] hover:from-[#4169a1]/90 hover:to-[#5f825a]/90 text-white border-0 group-hover:shadow-lg group-hover:shadow-[#4169a1]/20 transition-all duration-300">
                      <a href="https://api.whatsapp.com/send?phone=543834778649&text=Hola%2C%20necesito%20asistencia%20t%C3%A9cnica%20remota" className="w-full">
                        Solicitar Soporte
                      </a>
                    </Button>
                  </div>
                </Card>

                {/* Servicio 2: Desarrollo de Software */}
                <Card className="bg-gradient-to-br from-gray-900/90 to-gray-900/50 border-gray-700 backdrop-blur-sm hover:border-[#b43c3c] transition-all duration-300 group">
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#b43c3c] to-[#d4b95e] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-left">Desarrollo de Sistemas Personalizados</h3>
                    
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-gray-500 text-sm">desde</span>
                      <span className="text-5xl font-bold text-white">$35.000</span>
                    </div>
                    
                    <p className="text-gray-400 text-left mb-6 leading-relaxed">
                      ¿Necesitas un "sistemita" para tu negocio? Creamos software a medida que resuelve tus necesidades específicas.
                    </p>

                    <ul className="text-sm text-gray-400 space-y-2 mb-6 text-left">
                      <li className="flex items-start gap-2">
                        <span className="text-[#b43c3c] mt-1">✓</span>
                        <span>Sistemas de gestión empresarial</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#b43c3c] mt-1">✓</span>
                        <span>Aplicaciones web y móviles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#b43c3c] mt-1">✓</span>
                        <span>Consultoría y análisis de requerimientos</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-gradient-to-r from-[#b43c3c] to-[#d4b95e] hover:from-[#b43c3c]/90 hover:to-[#d4b95e]/90 text-white border-0 group-hover:shadow-lg group-hover:shadow-[#b43c3c]/20 transition-all duration-300">
                      <a href="https://api.whatsapp.com/send?phone=543834778649&text=Hola%2C%20necesito%20desarrollar%20un%20sistema%20personalizado" className="w-full">
                        Consultar Proyecto
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 h-12 px-8"
                >
                  <Link href="#solutions" className="text-gray-400 hover:text-white transition-colors">
                    Ver Proyectos Realizados
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Sparkle effects */}
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#4169a1] rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-[#b43c3c] rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#5f825a] rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-[#d4b95e] rounded-full animate-pulse"></div>
        </section>

        {/* Clients Carousel Section */}
        <section id="clients" className="py-20 relative bg-gradient-to-b from-black to-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Clientes que
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4169a1] via-[#b43c3c] to-[#5f825a]">
                  {" "}Confían en Nosotros
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Empresas que ya transformaron sus desafíos en soluciones digitales con Dynamik
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-[#4169a1]/50 transition-all duration-300 group">
                        <div className="flex aspect-video items-center justify-center p-12">
                          <Image
                            src="/logo-clientes/caizzen-logo.png"
                            alt="Caizzen"
                            width={200}
                            height={100}
                            className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                          />
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-[#b43c3c]/50 transition-all duration-300 group">
                        <div className="flex aspect-video items-center justify-center p-12">
                          <Image
                            src="/logo-clientes/logo-arcat-2.png"
                            alt="Arcat"
                            width={200}
                            height={100}
                            className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                          />
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-[#5f825a]/50 transition-all duration-300 group">
                        <div className="flex aspect-video items-center justify-center p-12">
                          <Image
                            src="/logo-clientes/logo-enea12.jpg"
                            alt="Enea"
                            width={200}
                            height={100}
                            className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                          />
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>

                  <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-[#4169a1]/50 transition-all duration-300 group">
                        <div className="flex aspect-video items-center justify-center p-12">
                          <Image
                            src="/logo-clientes/logo-iventt.png"
                            alt="Iventt"
                            width={200}
                            height={100}
                            className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                          />
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>

                  {/* Duplicar items para efecto loop infinito */}
                  <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-[#4169a1]/50 transition-all duration-300 group">
                        <div className="flex aspect-video items-center justify-center p-12">
                          <Image
                            src="/logo-clientes/caizzen-logo.png"
                            alt="Caizzen"
                            width={200}
                            height={100}
                            className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                          />
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                
                <CarouselPrevious className="hidden md:flex -left-12 border-gray-700 bg-gray-900/50 hover:bg-gray-800 hover:border-[#4169a1]/50" />
                <CarouselNext className="hidden md:flex -right-12 border-gray-700 bg-gray-900/50 hover:bg-gray-800 hover:border-[#4169a1]/50" />
              </Carousel>

              {/* Trust indicators */}
              <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4169a1] to-[#5f825a]">
                    3+
                  </span>
                  <span className="text-sm text-gray-400 mt-1">Clientes Activos</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#b43c3c] to-[#d4b95e]">
                    10+
                  </span>
                  <span className="text-sm text-gray-400 mt-1">Proyectos Completados</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#5f825a] to-[#4169a1]">
                    100%
                  </span>
                  <span className="text-sm text-gray-400 mt-1">Satisfacción</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="solutions" className="py-20 relative">
          <div className="relative">
            <GradientLine color="blue" />
          </div>

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluciones Destacadas</h2>
              <p className="text-gray-400 max-w-2xl">
                Descubre algunas de nuestras soluciones desarrolladas para organizaciones y proyectos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden group">
                <div className="p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4169a1] to-[#5f825a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#4169a1]/20 flex items-center justify-center">
                        <Users className="h-6 w-6 text-[#4169a1]" />
                      </div>
                      <h3 className="text-xl font-bold">iventt</h3>
                    </div>
                    <p className="text-gray-400 mb-2">
                      Plataforma de eventos académicos diseñada para gestionar inscripciones, horarios y comunicación entre
                      asistentes y organizadores.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-[#4169a1]/20 text-[#4169a1]/90 text-xs rounded-full">Eventos</span>
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">Académico</span>
                      <span className="px-2 py-1 bg-[#5f825a]/20 text-[#5f825a]/90 text-xs rounded-full">Inscripciones</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden group">
                <div className="p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5f825a] to-[#b43c3c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#5f825a]/20 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-[#5f825a]" />
                      </div>
                      <h3 className="text-xl font-bold">parker</h3>
                    </div>
                    <p className="text-gray-400 mb-2">
                      Sistema de gestión de plazas vehiculares para instituciones, con reservas, control de accesos y reportes.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-[#5f825a]/20 text-[#5f825a]/90 text-xs rounded-full">Gestión Vehicular</span>
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">Reservas</span>
                      <span className="px-2 py-1 bg-[#b43c3c]/20 text-[#b43c3c]/90 text-xs rounded-full">Reportes</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden group">
                <div className="p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b43c3c] to-[#d4b95e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#b43c3c]/20 flex items-center justify-center">
                        <Sparkles className="h-6 w-6 text-[#b43c3c]" />
                      </div>
                      <h3 className="text-xl font-bold">cubas</h3>
                    </div>
                    <p className="text-gray-400 mb-2">
                      Gestor académico optimizado con automatización de procesos: gestión de cursos, calificaciones y tareas.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-[#b43c3c]/20 text-[#b43c3c]/90 text-xs rounded-full">Gestión Académica</span>
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">Automatización</span>
                      <span className="px-2 py-1 bg-[#d4b95e]/20 text-[#d4b95e]/90 text-xs rounded-full">Calificaciones</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        

        {/* Call-to-Action Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4169a1]/20 via-[#b43c3c]/20 to-[#5f825a]/20"></div>

          {/* Animated elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute h-px w-1/3 bg-gradient-to-r from-transparent via-[#4169a1] to-transparent top-1/4 -left-10 animate-[moveRight_15s_linear_infinite]">
              <div className="absolute inset-0 gradient-line-blue"></div>
            </div>
            <div className="absolute h-px w-1/4 bg-gradient-to-r from-transparent via-[#b43c3c] to-transparent bottom-1/3 -right-10 animate-[moveLeft_20s_linear_infinite]">
              <div className="absolute inset-0 gradient-line-red"></div>
            </div>
          </div>

          <div className="container px-4 md:px-6 relative">
            <Card className="bg-gray-900/70 border-gray-800 backdrop-blur-md overflow-hidden">
              <div className="p-8 md:p-12 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4169a1] via-[#b43c3c] to-[#5f825a]"></div>

                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para Transformar tu Desafío?</h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Colaboremos para convertir tu problema complejo en una solución elegante que genere un impacto real.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="relative overflow-hidden group bg-gradient-to-r from-[#4169a1] to-[#5f825a] hover:from-[#4169a1]/90 hover:to-[#5f825a]/90 text-white border-0 h-12 px-8">
                      <span className="relative z-10">
                        <a href="https://api.whatsapp.com/send?phone=543834778649&text=Hola%2C%20me%20gustar%C3%ADa%20proponer%20un%20proyecto%20para%20desarrollar">
                          Propón tu Desafío
                        </a>  
                      </span>
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 h-12 px-8"
                    >
                      <a href="https://api.whatsapp.com/send?phone=543834778649&text=Hola%2C%20me%20gustar%C3%ADa%20proponer%20un%20proyecto%20para%20desarrollar">
                        Programa una Consulta
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-800 py-12 relative">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20dynamik%20cactus%20blanco%20fondo%20negro-kATh1dSqoki7R7IgA8uYphhNRv60oh.png"
                  alt="Dynamik Software Solutions"
                  width={150}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400">
                Convirtiendo desafíos complejos en soluciones de software elegantes a través de la colaboración
                interdisciplinaria.
              </p>
              <div className="flex space-x-4">
                <Link href="https://ar.linkedin.com/in/jotsuha-castro25" className="text-gray-400 hover:text-white transition-colors group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#5f825a] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <Linkedin className="h-5 w-5 relative z-10" />
                  </div>
                </Link>
                <Link href="https://github.com/acesino25" className="text-gray-400 hover:text-white transition-colors group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#b43c3c] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <Github className="h-5 w-5 relative z-10" />
                  </div>
                </Link>
                <Link href="mailto:dynamiksoftware@gmail.com" className="text-gray-400 hover:text-white transition-colors group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#d4b95e] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <Mail className="h-5 w-5 relative z-10" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Software a Medida
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    IA & Aprendizaje Automático
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Arquitectura Cloud
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Análisis de Datos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Ciberseguridad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Soporte Técnico Remoto
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contacto</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <b>ARGENTINA</b>
                  <br />
                  CATAMARCA, Capital
                </li>
                <li>
                  <Link href="mailto:dynamiksoftware@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    dynamiksoftware@gmail.com
                  </Link>
                </li>
                <li>
                  <Link href="https://api.whatsapp.com/send?phone=543834778649&text=Hola%2C%20me%20gustar%C3%ADa%20proponer%20un%20proyecto%20para%20desarrollar" className="text-gray-400 hover:text-white transition-colors" target="_blank">
                    +543834778649
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Dynamik Software Solutions. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
