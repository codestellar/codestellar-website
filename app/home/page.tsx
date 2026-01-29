import React from 'react'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import Experience from './sections/ExperienceSection'
import GitHubStats from './sections/GithubStats'

export default function HomePage () {
  return (
    <>
        <HeroSection />
        <AboutSection />
        <Experience />
        <GitHubStats />
    </>
  )
}
