'use client'

import { Check, Users, Wifi, Gauge } from 'lucide-react'

const plans = [
  {
    name: 'Family Lite',
    icon: Wifi,
    price: 'Rp 80.000',
    speed: '15 Mbps',
    speedLabel: 'Speed Share Up To 15 Mbps',
    features: [
      'Kecepatan share up to 15 Mbps',
      'Kuota Unlimited',
      '5 Perangkat',
      'Support 24/7',
      'Free Installasi',
      'Registrasi Fee Charge',
    ],
    popular: false
  },
  {
    name: 'Family',
    icon: Users,
    price: 'Rp 110.000',
    speed: '25 Mbps',
    speedLabel: 'Speed Share Up To25 Mbps',
    features: [
      'Kecepatan share up to 25 Mbps',
      'Kuota Unlimited',
      '6 Perangkat',
      'Support Prioritas 24/7',
      'Free Installasi',
      'Registrasi Fee Charge ',
      'Prioritas Streaming',
    ],
    popular: true
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Paket <span className="text-blue-600">Harga</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan internet keluarga Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative ${
                plan.popular ? 'border-2 border-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Populer
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-3xl font-bold text-blue-600 mt-2">{plan.price}</p>
                <p className="text-sm text-gray-500">/bulan</p>
                
                {/* Speed Share Up To Badge */}
                <div className="mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3 border border-blue-200">
                  <div className="flex items-center justify-center gap-2">
                    <Gauge className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-700">
                      {plan.speedLabel}
                    </span>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000"
                      style={{ 
                        width: index === 0 ? '50%' : '100%'
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Kecepatan</span>
                    <span>{plan.speed}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                plan.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Pilih Paket {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Catatan tambahan */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Wifi className="w-4 h-4 text-blue-600" />
              <span className="font-semibold">Info Penting:</span>
              <span>Kecepatan adalah kecepatan share (dibagi ke semua pengguna).</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              * Semua paket sudah termasuk Biaya installasi gratis.
              <br />
              Syarat dan ketentuan berlaku.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
