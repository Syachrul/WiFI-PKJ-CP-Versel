'use client'

import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, XCircle, Loader2 } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  // Nomor WhatsApp
  const phoneNumber = '6285220025810'
  const phoneDisplay = '+62 852-2002-5810'
  const emailTujuan = 'beenetbdg.dev@gmail.com'

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message })
    setTimeout(() => setNotification({ type: null, message: '' }), 6000)
  }

  // Submit ke Email via mailto
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validasi form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showNotification('error', '⚠️ Semua field harus diisi!')
      return
    }

    // Validasi email sederhana
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      showNotification('error', '⚠️ Format email tidak valid!')
      return
    }

    setIsLoading(true)
    setNotification({ type: null, message: '' })

    try {
      // Buat subject dan body email
      const subject = encodeURIComponent(`Pesan dari ${formData.name} - WiFi PKJ`)
      const body = encodeURIComponent(
        `Halo WiFi PKJ!%0A%0A` +
        `Nama: ${formData.name}%0A` +
        `Email: ${formData.email}%0A%0A` +
        `Pesan:%0A${formData.message}%0A%0A` +
        `--%0A` +
        `Dikirim dari Website WiFi PKJ`
      )

      // Buat mailto URL
      const mailtoUrl = `mailto:${emailTujuan}?subject=${subject}&body=${body}`

      // Deteksi device
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

      // Buka email client
      if (isMobile) {
        window.location.href = mailtoUrl
      } else {
        const newWindow = window.open(mailtoUrl, '_blank', 'noopener,noreferrer')
        if (!newWindow) {
          // Fallback: buka di tab yang sama
          window.location.href = mailtoUrl
        }
      }

      // Notifikasi sukses
      showNotification(
        'success',
        `✅ Email client dibuka. Silakan tekan Kirim di email Anda untuk mengirim pesan ke ${emailTujuan}.`
      )

      // Reset form
      setFormData({ name: '', email: '', message: '' })

    } catch (error) {
      console.error('Email error:', error)
      showNotification(
        'error',
        '❌ Gagal membuka email client. Silakan hubungi kami via WhatsApp atau email langsung.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hubungi <span className="text-blue-600">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Siap membantu Anda 24/7. Hubungi kami sekarang!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                <p className="text-gray-600">{phoneDisplay}</p>
                <p className="text-sm text-gray-500">Respon cepat</p>
                <a 
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 bg-green-500 text-white px-4 py-1.5 rounded-lg hover:bg-green-600 transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat via WhatsApp
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">{emailTujuan}</p>
                <p className="text-sm text-gray-500">Balas dalam 24 jam</p>
                <a 
                  href={`mailto:${emailTujuan}`}
                  className="inline-flex items-center gap-2 mt-2 bg-blue-500 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Kirim Email
                </a>
              </div>
            </div>

            {/* Alamat */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Alamat</h3>
                <p className="text-gray-600">
                  Perumahan Grand Pesona Kramat Jaya<br />
                  Rancamanyar - Bandung, Indonesia
                </p>
              </div>
            </div>

            {/* Info Cara Kerja */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="flex items-start gap-2 text-sm text-gray-700">
                <MessageCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">2 Cara Menghubungi Kami:</span>
                  <ul className="text-gray-600 mt-1 space-y-1">
                    <li>💬 <strong>WhatsApp</strong> - Respon cepat via wa.me</li>
                    <li>📧 <strong>Email</strong> - Kirim via form di samping</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Status Layanan */}
            <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 rounded-xl p-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Layanan aktif 24 jam</span>
            </div>
          </div>

          {/* Contact Form - Kirim ke Email */}
          <div>
            {/* Notification */}
            {notification.type && (
              <div className={`mb-4 p-4 rounded-xl flex items-start gap-3 ${
                notification.type === 'success' 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                {notification.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <p className={`text-sm ${
                  notification.type === 'success' ? 'text-green-700' : 'text-red-700'
                }`}>
                  {notification.message}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-3 border border-blue-200 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold">Kirim pesan via Email ke {emailTujuan}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  * Akan membuka email client Anda (Gmail, Outlook, dll)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Masukkan nama Anda"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Masukkan email Anda"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pesan <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tulis pesan Anda..."
                  disabled={isLoading}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Membuka Email...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Kirim via Email
                  </>
                )}
              </button>

              <div className="bg-yellow-50 rounded-xl p-3 border border-yellow-200">
                <p className="text-xs text-yellow-700 text-center">
                  ⚠️ Setelah email client terbuka, <strong>tekan tombol Kirim</strong> di email Anda.
                </p>
              </div>

              {/* Progress indicator saat loading */}
              {isLoading && (
                <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                  <div className="bg-blue-600 h-1 rounded-full animate-pulse w-full"></div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
