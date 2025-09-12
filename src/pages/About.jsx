import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 text-2xl text-center pt-8 border-t">
      <Title text1={'About'} text2={'US'} />

      <div className="my-10 flex flex-col md:flex-row gap-16 items-center">
        <img
          className="w-full md:max-w-[450px] rounded-lg shadow-md"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-left md:text-justify">
          <p>lorjakdjjE-commerce Platform is a React-based online shopping application aimed at providing an easy, interactive, and modern shopping experience for users. The platform allows users to view products across different categories, add items to their cart, and proceed to checkout seamlessly. Objectives TheE-commerce Platform is a React-based online shopping application aimed at providing an easy, interactive, and modern shopping experience for users. The platform allows users to view products across different categories, add items to their cart, and proceed to checkout seamlessly. Objectives The</p>
          <p>ajsd ad jaE-commerce Platform is a React-based online shopping application aimed at providing an easy, interactive, and modern shopping experience for users. The platform allows users to view products across different categories, add items to their cart, and proceed to checkout seamlessly. Objectives TheE-commerce Platform is a React-based online shopping application aimed at providing an easy, interactive, and modern shopping experience for users. The platform allows users to view products across different categories, add items to their cart, and proceed to checkout seamlessly. Objectives The</p>

          <b className="text-gray-800 text-lg">Our Mission</b>
          <p>ajsd ad ja afjd dE-commerce Platform is a React-based online shopping application aimed at providing an easy, interactive, and modern shopping experience for users. The platform allows users to view products across different categories, add items to their cart, and proceed to checkout seamlessly. Objectives The</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-6 justify-center">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-md shadow-sm">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">djjak adjfka E-commerce Platform is a React-based online shopping application aimed at providing an easy, interactive, and modern shopping experience for users. The platform allows users to view products across different categories, add items to their cart, and proceed to checkout seamlessly. Objectives The.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-md shadow-sm">
          <b>Convenience:</b>
          <p className="text-gray-600">djjak E-commerce Platform is a React-based online shopping application aimed at providing an easy, interactive, and modern shopping experience for users. The platform allows users to view products across different categories, add items to their cart, and proceed to checkout seamlessly. Objectives The</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-md shadow-sm">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">djjak adjfkaE-commerce Platform is a React-based online shopping application aimed at providing an easy, interactive, and modern shopping experience for users. The platform allows users to view products across different categories, add items to their cart, and proceed to checkout seamlessly. Objectives The.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
