'use client'

import { useState, useEffect, useRef } from 'react'
import { Star, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'BUMN',
    content: 'Internetnya stabil banget! saya sekarang bisa bekerja dari rumah dengan lancar.',
    rating: 5
  },
  {
    name: 'Siti Rahayu',
    role: 'Ibu Rumah Tangga',
    content: 'Anak-anak bisa belajar online tanpa putus-putus. Harga juga terjangkau.',
    rating: 5
  },
  {
    name: 'Jojo Sutedjo',
    role: 'Pensiunan',
    content: 'Informasi dan hiburan tidak ada hentinya. Harga pas pisan.',
    rating: 5
  },
  {
    name: 'Riswantoro',
    role: 'Pelajar',
    content: 'Belajar dan main game tentunya lebih menyenangkan.',
    rating: 5
  },
  {
    name: 'Agus Wijaya',
    role: 'Pengusaha',
    content: 'Sangat puas dengan layanan WiFiPKJ. Kecepatan gerecep dan support cepat.',
    rating: 5
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const totalItems = testimonials.length

  // Fungsi untuk mendapatkan 3 testimoni yang tampil (dengan wrap-around)
  const getVisibleTestimonials = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % totalItems
      result.push(testimonials[index])
    }
    return result
  }

  // Pindah ke berikutnya
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems)
  }

  // Pindah ke sebelumnya
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems)
  }

  // Auto-play
  useEffect(() => {
    if (isPlaying && !isHovered) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 3000) // Ganti setiap 3 detik
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isPlaying, isHovered])

  const visibleTestimonials = getVisibleTestimonials()

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apa Kata <span className="text-blue-600">Pelanggan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mereka yang sudah merasakan layanan kami
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="max-w-6xl mx-auto relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Tombol Navigasi Kiri */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 border border-gray-200 -ml-5"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>

          {/* Card Container */}
          <div 
            ref={containerRef}
            className="overflow-hidden px-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 min-h-[80px]">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tombol Navigasi Kanan */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 border border-gray-200 -mr-5"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>
        </div>

        {/* Kontrol */}
        <div className="flex justify-center items-center gap-6 mt-8">
          {/* Tombol Play/Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                <span>Jeda</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span>Jalankan</span>
              </>
            )}
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {[...Array(totalItems)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 h-2.5 bg-blue-600 rounded-full'
                    : 'w-2.5 h-2.5 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <span className="text-sm text-gray-400 font-medium">
            {currentIndex + 1} / {totalItems}
          </span>
        </div>

        {/* Status Auto-play */}
        <div className="text-center mt-4">
          <div className="inline-flex items-center gap-2 text-xs text-gray-400">
            <div className={`w-2 h-2 rounded-full ${isPlaying && !isHovered ? 'bg-green-500 animate-pulse' : 'bg-gray-300'}`}></div>
            <span>
              {isPlaying && !isHovered 
                ? 'Bergulir otomatis...' 
                : isHovered 
                  ? 'Dijeda (hover)' 
                  : 'Dijeda'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
