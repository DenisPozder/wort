import React from 'react'
import Hero from './Components/Hero/Hero'
import OurProjects from './Components/OurProjects/OurProjects'

export const metadata = {
  title: "Our Projects",
  description: "Explore our collection of designs, showcasing our commitment to creativity, excellence, and client success.",
};

const page = () => {
  return (
    <main className="page_section">
      <Hero />
      <OurProjects />
    </main>
  )
}

export default page