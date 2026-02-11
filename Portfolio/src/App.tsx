import './App.css'
import { SmoothCursor } from './components/ui/smooth-cursor'
import { AnimatedThemeToggler } from './components/ui/animated-theme-toggler'
import Nav from './components/Nav'
import Background from './components/background'
import { TypingAnimation } from './components/ui/typing-animation'

function App() {
  return (
    <>
      {/* Particles Background */}
      <Background />

      {/* Smooth Cursor */}
      <SmoothCursor />

      {/* Theme Toggler */}
      <AnimatedThemeToggler className='Toggle' />

      {/* Nav Dock */}
      <Nav />

      {/* Container */}
      <div className='Hero'>
        <div className='Photo'>
          <img src='src/assets/Rijan__Photo.png' alt='Profile' className='Profile__image' />
        </div>
        <div className='User__container'>
          <h1 className='User__greeting'>Hi, I'm</h1>
          <TypingAnimation className='TypingAnimation'
            words={['Rijan Shrestha', 'Developer', 'UI/UX Designer']}
            typeSpeed={150}
            deleteSpeed={100}
            pauseDelay={1000}
            loop={true}
            showCursor={true}
            cursorStyle='block'
            blinkCursor={true}
          />
          <div className='User__description'>
            <p>   A passionate developer and UI/UX designer with a knack for creating engaging digital experiences. With a strong foundation in both development and design, I specialize in crafting intuitive interfaces and seamless user interactions. My work is driven by a commitment to innovation, creativity, and delivering high-quality solutions that resonate with users.</p>
            <p>   Whether it's building responsive websites, designing user-friendly applications, or exploring the latest trends in technology, I thrive on bringing ideas to life through code and design. Let's connect and create something amazing together!</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
