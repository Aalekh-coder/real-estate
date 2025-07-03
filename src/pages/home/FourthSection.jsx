import ResponsiveImageGallery from '@/components/miniCompo/Gallery'
import React from 'react'

const FourthSection = () => {
  return (
    <div>
        <h2 className='text-center font-bold text-xl md:text-4xl'>Real Estate Gallery: Home, Investment, Future & Community</h2>
        <p className='text-center px-5 my-2 md:text-xl'>Your dream property, precisely where you want it.</p>
        <ResponsiveImageGallery />

    </div>
  )
}

export default FourthSection