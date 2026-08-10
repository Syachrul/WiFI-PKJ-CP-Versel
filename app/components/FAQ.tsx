'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Wifi, Wrench, Clock, Shield, Users, CreditCard, MessageCircle } from 'lucide-react'

const faqs = [
  {
    id: 1,
    category: 'Internet',
    icon: Wifi,
    question: 'Apa itu kecepatan "share" dan bagaimana cara kerjanya?',
    answer: 'Kecepatan "share" adalah total bandwidth yang dibagi ke semua pengguna yang terhubung di jaringan yang sama. Misalnya, jika paket Family Lite memiliki kecepatan share 15 Mbps, maka kecepatan tersebut akan dibagi rata ke semua perangkat yang terhubung. Semakin sedikit pengguna yang aktif, semakin cepat kecepatan yang didapat.'
  },
  {
    id: 2,
    category: 'Internet',
    icon: Wifi,
    question: 'Apakah ada biaya instalasi?',
    answer: 'Tidak! Kami memberikan FREE INSTALLASI untuk semua paket yang tersedia. Anda hanya perlu membayar biaya registrasi/aktivasi sesuai paket yang dipilih.'
  },
  {
    id: 3,
    category: 'Internet',
    icon: Clock,
    question: 'Berapa lama proses aktivasi internet?',
    answer: 'Proses aktivasi biasanya segera setelah registrasi dan pembayaran. Tim teknis kami akan segera melakukan survey dan instalasi di lokasi Anda.'
  },
  {
    id: 4,
    category: 'Internet',
    icon: Shield,
    question: 'Apakah jaringan aman dari hacker atau pencurian data?',
    answer: 'Ya! Kami menggunakan sistem keamanan jaringan dengan firewall, enkripsi data, dan perlindungan dari akses tidak sah. Setiap pengguna juga memiliki akun dan password masing-masing untuk keamanan maksimal.'
  },
  {
    id: 5,
    category: 'Service',
    icon: Wrench,
    question: 'Apa saja layanan Service Station yang tersedia?',
    answer: 'Kami melayani berbagai kebutuhan teknis seperti: Service PC & Laptop, Install Ulang Windows, Perbaikan Printer, Instalasi Software, Jaringan (Networking), dan Maintenance rutin. Semua dikerjakan oleh teknisi berpengalaman.'
  },
  {
    id: 6,
    category: 'Service',
    icon: Wrench,
    question: 'Berapa lama waktu perbaikan untuk service PC/Laptop?',
    answer: 'Untuk perbaikan ringan, biasanya selesai dalam 1-2 hari. Untuk perbaikan berat atau yang memerlukan part khusus, bisa memakan waktu 3-5 hari. Kami akan memberikan estimasi waktu yang jelas saat Anda menyerahkan perangkat.'
  },
  {
    id: 7,
    category: 'Pembayaran',
    icon: CreditCard,
    question: 'Bagaimana cara pembayaran untuk paket internet?',
    answer: 'Pembayaran dapat dilakukan melalui transfer bank (BCA), Kami juga menerima pembayaran tunai untuk area yang terjangkau.'
  },
]

const categories = ['Semua', 'Internet', 'Service', 'Pembayaran']

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const filteredFaqs = activeCategory === 'Semua'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Internet':
        return <Wifi className="w-4 h-4" />
      case 'Service':
        return <Wrench className="w-4 h-4" />
      case 'Pembayaran':
        return <CreditCard className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Wifi className="w-4 h-4" />
            <span className="text-sm font-semibold">Tanya Jawab</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pertanyaan yang sering diajukan tentang layanan internet dan service kami
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category === 'Semua' ? '📋 Semua' : (
                <span className="flex items-center gap-1">
                  {getCategoryIcon(category)}
                  {category}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openItems.includes(faq.id)
            const Icon = faq.icon

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      faq.category === 'Internet' ? 'bg-blue-100 text-blue-700' :
                      faq.category === 'Service' ? 'bg-orange-100 text-orange-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {faq.category}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-4 pt-2">
                    <div className="border-t border-gray-100 pt-3">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA - Masih Ada Pertanyaan? */}
        <div className="text-center mt-12">
          <div className="inline-block bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
            <p className="text-gray-700 mb-3">
              ❓ Masih ada pertanyaan? Jangan ragu untuk menghubungi kami!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
              >
                Hubungi Kami
              </a>
              <a 
                href="https://wa.me/6285220025810"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-semibold flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
