import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Code, Sparkles, Zap, Users, Lightbulb, Puzzle, Layers, Github, Twitter, Linkedin, Mail } from "lucide-react"
import { GradientLine } from "@/components/gradient-line"

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

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#why-us" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Por Qué Nosotros
            </Link>
            <Link href="#solutions" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Soluciones
            </Link>
            <Link href="#team" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Equipo
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Contacto
            </Link>
          </nav>

          <div>
            <Button className="relative overflow-hidden group bg-gradient-to-r from-[#4169a1] to-[#5f825a] hover:from-[#4169a1]/90 hover:to-[#5f825a]/90 text-white border-0">
              <span className="relative z-10">Comenzar</span>
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
            <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center p-1 bg-gray-800/50 backdrop-blur-sm rounded-full mb-4">
                <span className="text-xs font-medium px-3 py-1 text-gray-300">Creando Excelencia Digital</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight md:leading-tight">
                Convertimos Desafíos Complejos En
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#4169a1] via-[#b43c3c] to-[#5f825a]">
                    {" "}
                    Soluciones Elegantes
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#4169a1] via-[#b43c3c] to-[#5f825a] opacity-50 blur-sm"></span>
                </span>
              </h1>

              <p className="text-xl text-gray-400 max-w-2xl">
                Dynamik es donde la colaboración interdisciplinaria se encuentra con la innovación en software. No solo
                escribimos código—resolvemos problemas que importan.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-[#4169a1] to-[#5f825a] hover:from-[#4169a1]/90 hover:to-[#5f825a]/90 text-white border-0 h-12 px-8">
                  <span className="relative z-10">
                      <a href="https://api.whatsapp.com/send?phone=543834778649&text=Hola%2C%20me%20gustar%C3%ADa%20proponer%20un%20proyecto%20para%20desarrollar">
                        Proponer un Desafío
                      </a>
                  </span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 h-12 px-8"
                >
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Explorar Nuestro Trabajo
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

        {/* Why Dynamiksoft Section */}
        <section id="why-us" className="py-20 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Qué Dynamik</h2>
              <p className="text-gray-400 max-w-2xl">
                Nuestro enfoque es diferente. Combinamos diversa experiencia, pensamiento creativo y excelencia técnica
                para abordar desafíos que otros no pueden.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-[#4169a1]/50 transition-colors group overflow-hidden">
                <div className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4169a1]/10 to-[#5f825a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#4169a1]/20 flex items-center justify-center mb-4">
                      <Puzzle className="h-6 w-6 text-[#4169a1]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Solucionadores de Problemas</h3>
                    <p className="text-gray-400">
                      Prosperamos con desafíos complejos y abordamos cada proyecto como un rompecabezas único para
                      resolver con creatividad y precisión.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-[#b43c3c]/50 transition-colors group overflow-hidden">
                <div className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#b43c3c]/10 to-[#5f825a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#b43c3c]/20 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-[#b43c3c]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Enfoque Colaborativo</h3>
                    <p className="text-gray-400">
                      Nuestros equipos interdisciplinarios aportan diversas perspectivas a cada proyecto, resultando en
                      soluciones más innovadoras y robustas.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-[#5f825a]/50 transition-colors group overflow-hidden">
                <div className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5f825a]/10 to-[#4169a1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#5f825a]/20 flex items-center justify-center mb-4">
                      <Layers className="h-6 w-6 text-[#5f825a]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Experiencia Flexible</h3>
                    <p className="text-gray-400">
                      No estamos atados a tecnologías específicas. Seleccionamos las herramientas adecuadas para cada
                      desafío único, asegurando resultados óptimos.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-[#d4b95e]/50 transition-colors group overflow-hidden">
                <div className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4b95e]/10 to-[#4169a1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#d4b95e]/20 flex items-center justify-center mb-4">
                      <Lightbulb className="h-6 w-6 text-[#d4b95e]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Pasión por la Innovación</h3>
                    <p className="text-gray-400">
                      Nos impulsa una pasión genuina por crear software que marque la diferencia y rompa barreras.
                    </p>
                  </div>
                </div>
              </Card>
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
                Explora algunos de nuestros proyectos más innovadores que muestran nuestras capacidades de resolución de
                problemas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden group">
                <div className="p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4169a1] to-[#5f825a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-[#4169a1]/20 flex items-center justify-center">
                        <Code className="h-8 w-8 text-[#4169a1]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Eventia</h3>
                      <p className="text-gray-400 mb-4">
                        Una plataforma de eventos pensada para solucionar los cuellos de botella organizacionales. Automatizando procesos y simplificando aquellos
                        complejos.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-[#4169a1]/20 text-[#4169a1]/90 text-xs rounded-full">
                          Mobile y Web
                        </span>
                        <span className="px-2 py-1 bg-[#5f825a]/20 text-[#5f825a]/90 text-xs rounded-full">
                          Offline
                        </span>
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                          Arquitectura híbrida
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden group">
                <div className="p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5f825a] to-[#b43c3c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-[#5f825a]/20 flex items-center justify-center">
                        <Zap className="h-8 w-8 text-[#5f825a]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Transcribe.Io</h3>
                      <p className="text-gray-400 mb-4">
                        Plataforma de transcripción de audio multi idioma en línea. Funciona con cola de espera, prioridad de usuarios, soporte de múltiples extensiones.
                        Posibilidad de exportar el texto generado.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-[#5f825a]/20 text-[#5f825a]/90 text-xs rounded-full">
                          Sintetización de audio
                        </span>
                        <span className="px-2 py-1 bg-[#b43c3c]/20 text-[#b43c3c]/90 text-xs rounded-full">
                          Cola de procesos
                        </span>
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                          Arquitectura cloud
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden group">
                <div className="p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b43c3c] to-[#d4b95e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-[#b43c3c]/20 flex items-center justify-center">
                        <Sparkles className="h-8 w-8 text-[#b43c3c]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">EssentIA</h3>
                      <p className="text-gray-400 mb-4">
                        Una plataforma en construcción para perfumerías. Permite a los usuarios entender cuál es la fragrancia ideal y a las perfumerías tener un vendedor
                        que funciona en automático capaz de guiar y crear una experiencia de compra soñada.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-[#b43c3c]/20 text-[#b43c3c]/90 text-xs rounded-full">
                          IA
                        </span>
                        <span className="px-2 py-1 bg-[#d4b95e]/20 text-[#d4b95e]/90 text-xs rounded-full">
                          Offline first
                        </span>
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">Arquitectura híbrida</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden group">
                <div className="p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d4b95e] to-[#4169a1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-[#d4b95e]/20 flex items-center justify-center">
                        <Users className="h-8 w-8 text-[#d4b95e]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Securización de redes</h3>
                      <p className="text-gray-400 mb-4">
                        Soporte técnico remoto. Gestión, control, prevención, recuperación y control de intrusiones en redes.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-[#d4b95e]/20 text-[#d4b95e]/90 text-xs rounded-full">
                          Colaboración en Equipo
                        </span>
                        <span className="px-2 py-1 bg-[#4169a1]/20 text-[#4169a1]/90 text-xs rounded-full">
                          Gestión del Conocimiento
                        </span>
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                          Trabajo remoto
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Spirit Section */}
        <section id="team" className="py-20 relative">
          <div className="relative">
            <GradientLine color="green" />
          </div>

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Espíritu de Equipo</h2>
              <p className="text-gray-400 max-w-2xl">
                Somos un grupo diverso de pensadores, creadores y solucionadores de problemas unidos por nuestra pasión
                por la innovación.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-1 lg:col-span-2">
                <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm h-full">
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex-1">
                      <p className="text-xl text-gray-300 italic mb-6">
                        "En Dynamik, no solo construimos software—construimos soluciones que importan. Nuestro enfoque
                        interdisciplinario significa que vemos los desafíos desde múltiples ángulos, lo que conduce a
                        resultados más innovadores y efectivos."
                      </p>

                      <p className="text-xl text-gray-300 italic mb-6">
                        "Lo que nos distingue es nuestra capacidad para combinar experiencia técnica con pensamiento
                        creativo. No somos solo ingenieros; somos solucionadores de problemas que resultan ser
                        excelentes en desarrollo de software."
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-800 flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-[#4169a1] to-[#5f825a] p-[2px]">
                        <div className="absolute inset-0 rounded-full bg-gray-900"></div>
                        <div className="relative z-10 w-full h-full flex items-center justify-center text-white font-bold">
                          DS
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold">Dynamik Soft</h4>
                        <p className="text-sm text-gray-400">Equipo de conjunto de trabajo</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="col-span-1">
                <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm h-full">
                  <div className="p-6 h-full flex flex-col">
                    <h3 className="text-xl font-bold mb-4">Nuestro ADN Colaborativo</h3>

                    <div className="space-y-6 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#4169a1]/20 flex items-center justify-center">
                          <Code className="h-5 w-5 text-[#4169a1]" />
                        </div>
                        <div>
                          <h4 className="font-medium">Ingenieros y Técnicos</h4>
                          <p className="text-sm text-gray-400">Excelencia técnica</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#5f825a]/20 flex items-center justify-center">
                          <Lightbulb className="h-5 w-5 text-[#5f825a]" />
                        </div>
                        <div>
                          <h4 className="font-medium">Diseñadores</h4>
                          <p className="text-sm text-gray-400">Resolución creativa de problemas</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#b43c3c]/20 flex items-center justify-center">
                          <Users className="h-5 w-5 text-[#b43c3c]" />
                        </div>
                        <div>
                          <h4 className="font-medium">Expertos en Dominio</h4>
                          <p className="text-sm text-gray-400">Conocimiento de la industria:</p>
                          <p className="text-sm text-gray-300">Educación</p>
                          <p className="text-sm text-gray-300">Judicial y legal</p>
                          <p className="text-sm text-gray-300">Contable</p>
                          <p className="text-sm text-gray-300">Idiomas (Inglés, Español y Frances)</p>
                          <p className="text-sm text-gray-300">Construcción (arquitectura, agrimensura, etc)</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#d4b95e]/20 flex items-center justify-center">
                          <Puzzle className="h-5 w-5 text-[#d4b95e]" />
                        </div>
                        <div>
                          <h4 className="font-medium">Estrategas</h4>
                          <p className="text-sm text-gray-400">Visión de negocio</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-800">
                      <p className="text-gray-400 text-sm">
                        Nuestro equipo diverso reúne múltiples disciplinas para crear soluciones mayores que la suma de
                        sus partes.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <Link href="#" className="text-gray-400 hover:text-white transition-colors group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#4169a1] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <Twitter className="h-5 w-5 relative z-10" />
                  </div>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#5f825a] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <Linkedin className="h-5 w-5 relative z-10" />
                  </div>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#b43c3c] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <Github className="h-5 w-5 relative z-10" />
                  </div>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#d4b95e] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <Mail className="h-5 w-5 relative z-10" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#why-us" className="text-gray-400 hover:text-white transition-colors">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-gray-400 hover:text-white transition-colors">
                    Nuestro Enfoque
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-gray-400 hover:text-white transition-colors">
                    Equipo
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Soluciones</h3>
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
