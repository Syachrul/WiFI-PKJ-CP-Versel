'use client'

import { Wifi, Cpu, Shield, Clock, Wrench, Users, Zap } from 'lucide-react'

const services = [
  {
    icon: Wifi,
    title: 'WiFi Hotspot',
    description: 'Jaringan WiFi dengan cakupan luas dan sinyal kuat untuk seluruh area RT/RW.'
  },
  {
    icon: Zap,
    title: 'Kecepatan Tinggi',
    description: 'Kecepatan internet hingga 100 Mbps untuk pengalaman browsing dan streaming lancar.'
  },
  {
    icon: Shield,
    title: 'Keamanan Terjamin',
    description: 'Sistem keamanan jaringan terbaik dengan firewall dan enkripsi data.'
  },
  {
    icon: Clock,
    title: 'Layanan 24/7',
    description: 'Tim support siap membantu Anda kapan saja dengan respons cepat.'
  },
  {
    icon: Cpu,
    title: 'Network Stabil ',
    description: 'Infrastruktur jaringan menggunakan Technology Fiber Optic dan perangkat berkualitas tinggi untuk koneksi stabil.'
  },  
  {
    icon: Wrench,
    title: 'Service Station',
    description: 'Melayani Service dan Maintenance PC, Laptop, Install Windows, Networking, Printer Dll.'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan <span className="text-blue-600">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan layanan internet berkualitas untuk memenuhi kebutuhan digital Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
