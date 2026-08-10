'use client'

import { MapPin, CheckCircle, Building, Wifi } from 'lucide-react'

export default function Coverage() {
  return (
    <section id="coverage" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Wifi className="w-4 h-4" />
            <span className="text-sm font-semibold">Jaringan Tersedia</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Area <span className="text-blue-600">Jangkauan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Melayani Perumahan Grand Pesona Kramat Jaya, Rancamanyar - Bandung. 
            <br className="hidden md:block" />
            dan sekitarnya.
          </p>
        </div>

        {/* Single Large Box - Grand Pesona Kramat Jaya */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-blue-200 hover:shadow-2xl transition-all duration-300">
            
            {/* Badge Premium */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 text-xs font-bold px-6 py-2 rounded-full shadow-lg">
                ⭐ PREMIUM
              </span>
            </div>

            {/* Content Center */}
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Building className="w-10 h-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Grand Pesona Kramat Jaya
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-4">
                Perumahan Grand Pesona Kramat Jaya
              </p>

              {/* Status Tersedia */}
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Tersedia</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA - Lokasi Utama */}
        <div className="text-center mt-12">
          <div className="inline-block bg-gray-50 rounded-2xl p-6 border border-gray-200 max-w-2xl">
            <p className="text-gray-700">
              📍 <span className="font-semibold">Lokasi Utama:</span> 
              Perumahan Grand Pesona Kramat Jaya, Rancamanyar - Bandung
            </p>
            <p className="text-sm text-gray-500 mt-2">
              🏠 Melayani  wilayah sekitarnya
            </p>
            <a 
              href="#contact" 
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
            >
              Cek Ketersediaan di Area Anda
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
