"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const carouselImages = [
  {
    url: "https://placehold.co/1920x600/3B82F6/FFFFFF?text=Fajas+Postquirúrgicas+Premium",
    alt: "Fajas postquirúrgicas de alta calidad"
  },
  {
    url: "https://placehold.co/1920x600/60A5FA/FFFFFF?text=Recuperación+Confortable",
    alt: "Recuperación cómoda y segura"
  },
  {
    url: "https://placehold.co/1920x600/93C5FD/FFFFFF?text=Diseños+Ergonómicos",
    alt: "Diseños ergonómicos para mejor ajuste"
  },
  {
    url: "https://placehold.co/1920x600/DBEAFE/1E40AF?text=Calidad+Profesional",
    alt: "Calidad profesional en cada producto"
  }
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel */}
      <section className="relative h-[600px] overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">{image.alt}</h1>
                <p className="text-xl">Especialistas en fajas postquirúrgicas</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Company Description */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Bienvenidos a FajaCare</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Somos el marketplace líder en fajas postquirúrgicas especializadas, dedicados a brindar 
            soluciones de alta calidad para la recuperación postoperatoria. Nuestra misión es ofrecer 
            productos médicamente certificados que combinan tecnología avanzada, confort superior y 
            diseños ergonómicos, respaldados por profesionales de la salud. Trabajamos con las mejores 
            marcas internacionales para garantizar que cada paciente reciba el soporte adecuado durante 
            su proceso de recuperación, priorizando siempre su bienestar y seguridad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Calidad Certificada</h3>
            <p className="text-gray-600">Productos médicamente aprobados y certificados</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Diseño Ergonómico</h3>
            <p className="text-gray-600">Tecnología avanzada para máximo confort</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Atención Personalizada</h3>
            <p className="text-gray-600">Asesoramiento especializado para cada paciente</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Dirección</h4>
              <p className="text-sm">Av. Principal 123, Santiago, Chile</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Teléfono</h4>
              <p className="text-sm">+56 9 1234 5678</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-sm">contacto@fajacare.cl</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">País</h4>
              <p className="text-sm">Chile</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
