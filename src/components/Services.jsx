import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  { icon: '🎬', name: 'UGC & Reels Creation', desc: 'Scroll-stopping short-form video crafted for your brand — native, aesthetic, and built to convert.' },
  { icon: '📱', name: 'Social Media Management', desc: 'End-to-end Instagram management — content calendar, posting, captions, and community building.' },
  { icon: '✨', name: 'Brand Aesthetic Curation', desc: 'I help brands find their visual voice — moodboards, feed aesthetics, and a consistent identity.' },
  { icon: '💻', name: 'Mini Sites & Landing Pages', desc: 'Clean, beautiful web experiences built with React — perfect for brands needing a digital home.' },
  { icon: '🤝', name: 'Brand Partnerships', desc: 'Authentic collaborations where your product meets my audience — integrated naturally into my content.' },
  { icon: '📊', name: 'Content Strategy', desc: 'From niche targeting to trending audio — strategies that grow your account with the right audience.' },
]

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="services" ref={ref} style={{
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
      >✦ What I Offer</motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          fontWeight: 400, marginBottom: '4rem'
        }}
      >
        Services for <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>Brands</em>
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem'
      }}>
        {services.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{
              y: -6,
              boxShadow: '0 24px 60px rgba(196,121,106,0.15)',
              borderColor: 'rgba(196,121,106,0.4)'
            }}
            style={{
              background: 'white', borderRadius: 20,
              padding: '2rem',
              border: '1px solid transparent',
              transition: 'border 0.2s',
              cursor: 'default'
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              style={{
                width: 48, height: 48,
                background: 'linear-gradient(135deg, var(--blush), #E8C5B8)',
                borderRadius: 12,
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '1.4rem',
                marginBottom: '1.2rem'
              }}
            >{s.icon}</motion.div>

            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.2rem', fontWeight: 600,
              color: 'var(--deep)', marginBottom: '0.6rem'
            }}>{s.name}</p>

            <p style={{
              fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7
            }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}