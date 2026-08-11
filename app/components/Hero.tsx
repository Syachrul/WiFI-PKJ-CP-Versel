'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Wifi, Zap, Wrench, Shield, Gauge } from 'lucide-react'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    image: '/slide1.jpeg',
    alt: 'WiFi PKJ - Internet Stabil'
  },
  {
    id: 2,
    image: '/slide2.jpg',
    alt: 'WiFi PKJ - Service Station'
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Jika belum mounted, tampilkan placeholder
  if (!isMounted) {
    return (
      <section id="home" className="pt-24 pb-16 min-h-[600px] md:min-h-[700px] flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500">Loading...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="home" className="relative pt-24 pb-16 min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay Gelap */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="inline-flex items-center gap-2 bg-blue-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-semibold">Internet Stabil</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-green-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                <Wrench className="w-4 h-4" />
                <span className="text-sm font-semibold">Service Station</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Solusi Internet & <br />
              Service Station<br />
              <span className="text-blue-400">RT/RW Net</span> Terbaik
            </h1>

            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Nikmati koneksi internet stabil untuk lingkungan Anda. 
              Kami hadir dengan paket terjangkau dan layanan 24/7.
              <br />
              <span className="text-green-400 font-semibold">
                Serta tempat Service PC, Laptop, Install Windows, Printer dll
              </span>
            </p>

            {/* Speed Share Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-8 border border-white/20">
              <div className="flex items-center gap-2 text-sm text-white/90">
                <Gauge className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">Speed Share Up To 100 Mbps</span>
                <span className="text-white/50">|</span>
                <span className="text-white/70">Dibagi ke semua pengguna</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Lihat Paket
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-lg border border-white/30 transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div>
                <p className="text-2xl font-bold text-white">80+</p>
                <p className="text-sm text-white/70">Pelanggan Aktif</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-sm text-white/70">Area Terjangkau</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">99.9%</p>
                <p className="text-sm text-white/70">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right Content - Card Info */}
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Wifi className="w-10 h-10 text-blue-400" />
                  <span className="text-2xl font-bold text-white">WiFi PKJ</span>
                </div>
                <span className="text-green-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block"></span>
                  Online
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span>Koneksi Aman</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full">
                  <div className="bg-blue-400 h-2 rounded-full w-[95%]"></div>
                </div>
                <div className="flex justify-between text-white/80 text-sm">
                  <span>Kecepatan</span>
                  <span>95%</span>
                </div>
              </div>

              {/* Slide Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-8 h-2 bg-blue-400 rounded-full'
                        : 'w-2 h-2 bg-white/40 rounded-full hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
