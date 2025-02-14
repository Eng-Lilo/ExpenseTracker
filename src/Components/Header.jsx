import React from 'react'
import FeaturesSection from './FeaturesSection'
const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center px-4 py-8 h-screen">
  <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold mb-4">
  Xpenso – Smart Expense Tracking Made Simple
  </h2>
  <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6 ">
  Take control of your finances with Xpenso! Track, analyze, and manage your expenses effortlessly for better financial decisions. 
  </p>
  <a className="px-6 py-2 bg-[#0D1B2A] text-white font-semibold rounded-md hover:bg-[#0D1B2A] transition-all"
    href="#"
  >
    Shop Now
  </a>
</div>
<FeaturesSection />

    </div>
  )
}

export default Header