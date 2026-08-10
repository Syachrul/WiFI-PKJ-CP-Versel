import { Wifi, Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wifi className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">WiFi <span className="text-blue-400">PKJ</span></span>
            </div>
            <p className="text-gray-400 text-sm">
              Solusi internet cepat dan stabil untuk lingkungan RT/RW Anda.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Layanan</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Harga</a></li>
              <li><a href="#coverage" className="hover:text-white transition-colors">Jangkauan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +62 852-2002-5810
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                beenetbdg.dev@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2024 WiFi PKJ. All rights reserved Powered by BeeNET Computer. 
        </div>
      </div>
    </footer>
  )
}
