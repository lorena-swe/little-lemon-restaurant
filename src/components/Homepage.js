import '../App.css'
import HeroSection from './HeroSection'
import HighlightsSection from './HighlightsSection'
import TestimonialsSection from './TestimonialsSection'
// import AboutSection from './AboutSection'

function Homepage () {
  return (
    <div>
      <HeroSection />
      <HighlightsSection />
      <TestimonialsSection />
      {/* <AboutSection /> */}
    </div>
  )
}

export default Homepage;