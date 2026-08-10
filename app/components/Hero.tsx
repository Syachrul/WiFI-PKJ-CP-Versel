'use client'

import { ArrowRight, Wifi, Zap, Wrench, Shield, Gauge } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">Internet Stabil</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Wrench className="w-4 h-4" />
              <span className="text-sm font-semibold">Service Station</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solusi Internet & <br />
              Service Station<br />
              <span className="text-blue-600">RT/RW Net</span> Terbaik
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Nikmati koneksi internet stabil untuk lingkungan Anda. 
              Kami hadir dengan paket terjangkau dan layanan 24/7.<br />
              <span className="text-green-600">Serta tempat Service PC, Laptop, Install Windows, Printer dll</span><br />
            </p>
            
            {/* Speed Share Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-8 border border-blue-200">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Gauge className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Speed Share Up To 100 Mbps</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-500">Dibagi ke semua pengguna</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Lihat Paket
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12">
              <div>
                <p className="text-2xl font-bold text-gray-900">80+</p>
                <p className="text-sm text-gray-600">Pelanggan Aktif</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">Area Terjangkau</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">99.9%</p>
                <p className="text-sm text-gray-600">Uptime</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Wifi className="w-10 h-10 text-white" />
                    <span className="text-2xl font-bold text-white">WiFi PKJ</span>
                  </div>
                  <span className="text-white font-bold">Online</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white">
                    <Shield className="w-5 h-5" />
                    <span>Koneksi Aman</span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full">
                    <div className="bg-white h-2 rounded-full w-[95%]"></div>
                  </div>
                  <div className="flex justify-between text-white text-sm">
                    <span>Kecepatan</span>
                    <span>95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
