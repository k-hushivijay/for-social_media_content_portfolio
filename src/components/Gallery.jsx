import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

import beautyImg from '../assets/beauty.webp'
import chulbuliImg from '../assets/chulbuli.jpg'
import pastelImg from '../assets/pastel.webp'
import peaceImg from '../assets/peace.JPG'
import exploringImg from '../assets/exploring.JPG'
import wholeImg from '../assets/whole.jpg'
import welcomeImg from '../assets/welcome.jpg'
import elegantImg from '../assets/elegant.jpg'

const photos = [
  { src: beautyImg, label: 'Editorial', size: 'tall' },
  { src: elegantImg, label: 'Elegant', size: 'normal' },
  { src: chulbuliImg, label: 'Chulbuli Vibes', size: 'normal' },
  { src: pastelImg, label: 'Pastel Aesthetic', size: 'normal' },
  { src: peaceImg, label: 'At Peace', size: 'normal' },
  { src: exploringImg, label: 'Exploring', size: 'wide' },
  { src: wholeImg, label: 'The Whole Vibe', size: 'normal' },
  { src: welcomeImg, label: 'Jaipur Roots', size: 'normal' },
]

export default function Gallery() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })
  const [hovered, setHovered] = useState(null)

  return (
    <section id="gallery" ref={ref} style={{
      background: 'var(--blush)',
      padding: '7rem 4rem'
    }}>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        style={{
          fontSize: '0.72rem', letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'var(--rose)',
          marginBottom: '0.8rem'
        }}
      >Visual World</motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          fontWeight: 400, marginBottom: '0.6rem'
        }}
      >
        My <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>Aesthetic</em>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        style={{
          fontSize: '0.95rem', color: 'var(--muted)',
          maxWidth: 500, lineHeight: 1.75, marginBottom: '3rem'
        }}
      >
        Every frame tells a story. This is the visual language I bring
        to every brand I work with.
      </motion.p>

      {/* Row 1: tall left + 2 stacked right + tall right */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>

        {/* Col 1 — tall */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          onMouseEnter={() => setHovered(0)}
          onMouseLeave={() => setHovered(null)}
          style={{
            flex: 1.2, height: 500, borderRadius: 20, overflow: 'hidden',
            position: 'relative', cursor: 'pointer',
            boxShadow: hovered === 0 ? '0 20px 60px rgba(139,58,58,0.2)' : '0 4px 20px rgba(0,0,0,0.06)',
            transition: 'all 0.3s'
          }}
        >
          <img src={beautyImg} alt="Editorial"
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transform: hovered === 0 ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.5s'
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(139,58,58,0.7), transparent)',
            opacity: hovered === 0 ? 1 : 0, transition: 'opacity 0.3s',
            display: 'flex', alignItems: 'flex-end', padding: '1.4rem'
          }}>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontStyle: 'italic', color: 'white' }}>Editorial</span>
          </div>
        </motion.div>

        {/* Col 2 — two stacked */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[{ src: elegantImg, label: 'Elegant', idx: 1 }, { src: chulbuliImg, label: 'Chulbuli Vibes', idx: 2 }].map(p => (
            <motion.div
              key={p.idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + p.idx * 0.1 }}
              onMouseEnter={() => setHovered(p.idx)}
              onMouseLeave={() => setHovered(null)}
              style={{
                flex: 1, borderRadius: 20, overflow: 'hidden',
                position: 'relative', cursor: 'pointer', minHeight: 240,
                boxShadow: hovered === p.idx ? '0 20px 60px rgba(139,58,58,0.2)' : '0 4px 20px rgba(0,0,0,0.06)',
                transition: 'all 0.3s'
              }}
            >
              <img src={p.src} alt={p.label}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transform: hovered === p.idx ? 'scale(1.06)' : 'scale(1)',
                  transition: 'transform 0.5s'
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(139,58,58,0.7), transparent)',
                opacity: hovered === p.idx ? 1 : 0, transition: 'opacity 0.3s',
                display: 'flex', alignItems: 'flex-end', padding: '1rem'
              }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontStyle: 'italic', color: 'white' }}>{p.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Col 3 — tall */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          onMouseEnter={() => setHovered(3)}
          onMouseLeave={() => setHovered(null)}
          style={{
            flex: 1.2, height: 500, borderRadius: 20, overflow: 'hidden',
            position: 'relative', cursor: 'pointer',
            boxShadow: hovered === 3 ? '0 20px 60px rgba(139,58,58,0.2)' : '0 4px 20px rgba(0,0,0,0.06)',
            transition: 'all 0.3s'
          }}
        >
          <img src={pastelImg} alt="Pastel"
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transform: hovered === 3 ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.5s'
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(139,58,58,0.7), transparent)',
            opacity: hovered === 3 ? 1 : 0, transition: 'opacity 0.3s',
            display: 'flex', alignItems: 'flex-end', padding: '1.4rem'
          }}>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontStyle: 'italic', color: 'white' }}>Pastel Aesthetic</span>
          </div>
        </motion.div>
      </div>

      {/* Row 2: wide + two side by side */}
      <div style={{ display: 'flex', gap: '1rem' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          onMouseEnter={() => setHovered(4)}
          onMouseLeave={() => setHovered(null)}
          style={{
            flex: 1.5, height: 280, borderRadius: 20, overflow: 'hidden',
            position: 'relative', cursor: 'pointer',
            boxShadow: hovered === 4 ? '0 20px 60px rgba(139,58,58,0.2)' : '0 4px 20px rgba(0,0,0,0.06)',
            transition: 'all 0.3s'
          }}
        >
          <img src={exploringImg} alt="Exploring"
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transform: hovered === 4 ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.5s'
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(139,58,58,0.7), transparent)',
            opacity: hovered === 4 ? 1 : 0, transition: 'opacity 0.3s',
            display: 'flex', alignItems: 'flex-end', padding: '1.4rem'
          }}>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontStyle: 'italic', color: 'white' }}>Exploring</span>
          </div>
        </motion.div>

        {[{ src: peaceImg, label: 'At Peace', idx: 5 }, { src: wholeImg, label: 'Whole Vibe', idx: 6 }].map(p => (
          <motion.div
            key={p.idx}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 + (p.idx - 4) * 0.1 }}
            onMouseEnter={() => setHovered(p.idx)}
            onMouseLeave={() => setHovered(null)}
            style={{
              flex: 1, height: 280, borderRadius: 20, overflow: 'hidden',
              position: 'relative', cursor: 'pointer',
              boxShadow: hovered === p.idx ? '0 20px 60px rgba(139,58,58,0.2)' : '0 4px 20px rgba(0,0,0,0.06)',
              transition: 'all 0.3s'
            }}
          >
            <img src={p.src} alt={p.label}
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transform: hovered === p.idx ? 'scale(1.06)' : 'scale(1)',
                transition: 'transform 0.5s'
              }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(139,58,58,0.7), transparent)',
              opacity: hovered === p.idx ? 1 : 0, transition: 'opacity 0.3s',
              display: 'flex', alignItems: 'flex-end', padding: '1rem'
            }}>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontStyle: 'italic', color: 'white' }}>{p.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}