import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import welcomeImg from '../assets/welcome.jpg'

const fullText = "Khushi Vijay"

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [cursor, setCursor] = useState(true)

  // Typewriter effect
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1))
      i++
      if (i === fullText.length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  // Cursor blink
  useEffect(() => {
    const blink = setInterval(() => setCursor(c => !c), 500)
    return () => clearInterval(blink)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      padding: '6rem 4rem 3rem',
      gap: '3rem',
      overflow: 'hidden'
    }}>

      {/* LEFT TEXT */}
      <div>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: '0.75rem', letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--rose)',
            marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem'
          }}
        >
          <span style={{ display: 'inline-block', width: 28, height: 1, background: 'var(--rose)' }} />
          Content Creator · Jaipur, India
        </motion.p>

        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(3rem, 6vw, 5.5rem)',
          fontWeight: 300, lineHeight: 1.05,
          marginBottom: '0.5rem'
        }}>
          {displayed}
          <span style={{ opacity: cursor ? 1 : 0, color: 'var(--rose)' }}>|</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1rem, 2vw, 1.4rem)',
            fontStyle: 'italic', color: 'var(--muted)',
            marginBottom: '1.8rem'
          }}
        >
          Where aesthetics meet algorithms ✦
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          style={{
            fontSize: '0.95rem', lineHeight: 1.8,
            color: '#5A4540', maxWidth: 420, marginBottom: '2.2rem'
          }}
        >
          I'm a social media creator & tech builder from the Pink City 🌸 
          I craft scroll-stopping reels, build beautiful web experiences, 
          and help brands connect authentically with their audience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <motion.a href="#reels"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '0.75rem 2rem',
              background: 'var(--deep)', color: 'var(--cream)',
              borderRadius: '40px', textDecoration: 'none',
              fontSize: '0.85rem', letterSpacing: '0.08em'
            }}
          >See My Content</motion.a>

          <motion.a href="#contact"
            whileHover={{ scale: 1.05, y: -2, background: 'var(--rose)', color: 'white' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '0.75rem 2rem',
              border: '1px solid var(--rose)', color: 'var(--rose)',
              borderRadius: '40px', textDecoration: 'none',
              fontSize: '0.85rem', letterSpacing: '0.08em',
              transition: 'all 0.2s'
            }}
          >Let's Collaborate</motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3 }}
          style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}
        >
          {[
            { label: '📸 @khushiserene', href: 'https://www.instagram.com/khushiserene/' },
            { label: '✉️ Email Me', href: 'mailto:khushiserene.official@gmail.com' },
            { label: '📍 Jaipur, India', href: '#about' }
          ].map(s => (
            <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.04, borderColor: 'var(--rose)', color: 'var(--rose)' }}
              style={{
                padding: '0.35rem 1rem',
                border: '1px solid rgba(196,121,106,0.3)',
                borderRadius: '30px', fontSize: '0.75rem',
                color: 'var(--muted)', textDecoration: 'none',
                transition: 'all 0.2s'
              }}
            >{s.label}</motion.a>
          ))}
        </motion.div>
      </div>

      {/* RIGHT IMAGE */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>

        {/* Floating glow behind image */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            width: 320, height: 420,
            background: 'radial-gradient(circle, #F2DDD5, #E8C5B8)',
            borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
            filter: 'blur(30px)',
            zIndex: 0
          }}
        />

        {/* Main image - floats up and down */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <img
            src={welcomeImg}
            alt="Khushi Vijay - Namaste from Jaipur"
            style={{
              width: 300,
              height: 400,
              objectFit: 'cover',
              borderRadius: '40% 60% 55% 45% / 45% 40% 60% 55%',
              boxShadow: '0 30px 80px rgba(139,58,58,0.2)',
              display: 'block'
            }}
          />
        </motion.div>

        {/* Floating badge - City */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{ delay: 2, duration: 3, repeat: Infinity, repeatDelay: 0.5 }}
          style={{
            position: 'absolute', bottom: 40, left: -10, zIndex: 3,
            background: 'white', borderRadius: 14,
            padding: '0.7rem 1.1rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
          }}
        >
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: 'var(--deep)' }}>🏰</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.06em' }}>Jaipur, India</div>
        </motion.div>

        {/* Floating badge - Open to collabs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{ delay: 2.4, duration: 3.5, repeat: Infinity, repeatDelay: 0.3 }}
          style={{
            position: 'absolute', top: 30, right: -10, zIndex: 3,
            background: 'var(--deep)', borderRadius: 14,
            padding: '0.7rem 1.1rem',
            boxShadow: '0 8px 30px rgba(139,58,58,0.25)'
          }}
        >
          <div style={{ fontSize: '0.7rem', color: 'var(--blush)', letterSpacing: '0.06em' }}>✨ Open to</div>
          <div style={{ fontSize: '0.7rem', color: 'white', fontWeight: 500 }}>Collabs</div>
        </motion.div>

      </div>
    </section>
  )
}