import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: scrolled ? '0.8rem 3rem' : '1.3rem 3rem',
        backdropFilter: 'blur(16px)',
        background: scrolled ? 'rgba(250,247,242,0.92)' : 'rgba(250,247,242,0.6)',
        borderBottom: '1px solid rgba(196,121,106,0.15)',
        transition: 'all 0.4s ease'
      }}
    >
      <div style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.5rem', fontWeight: 600,
        color: 'var(--deep)', letterSpacing: '0.04em'
      }}>
        Khushi <span style={{ fontStyle: 'italic', color: 'var(--rose)' }}>Vijay</span>
      </div>

      <ul style={{ display: 'flex', gap: '2.2rem', listStyle: 'none' }}>
        {['About', 'Skills', 'Reels', 'Services', 'Contact'].map((item, i) => (
          <motion.li key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.4 }}
          >
            <a href={`#${item.toLowerCase()}`} style={{
              textDecoration: 'none',
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              transition: 'color 0.2s'
            }}
              onMouseEnter={e => e.target.style.color = 'var(--deep)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{item}</a>
          </motion.li>
        ))}
      </ul>

      <motion.a href="#contact"
        whileHover={{ scale: 1.05, backgroundColor: 'var(--rose)' }}
        whileTap={{ scale: 0.97 }}
        style={{
          padding: '0.55rem 1.4rem',
          background: 'var(--deep)',
          color: 'var(--cream)',
          borderRadius: '40px',
          fontSize: '0.78rem',
          letterSpacing: '0.1em',
          textDecoration: 'none',
          transition: 'background 0.2s'
        }}
      >
        Work With Me
      </motion.a>
    </motion.nav>
  )
}