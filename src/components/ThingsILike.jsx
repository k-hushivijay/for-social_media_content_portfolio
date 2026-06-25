import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const things = [
  {
    label: 'Swimming',
    desc: 'Underwater calm is my reset button',
    img: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=300&q=80',
    rotate: -8, x: -380, y: -140
  },
  {
    label: 'Tennis',
    desc: 'Court time = clear mind',
    img: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=300&q=80',
    rotate: 5, x: -60, y: -190
  },
  {
    label: 'Techno & Music',
    desc: 'DJ sets and late night beats',
    img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&q=80',
    rotate: 8, x: 300, y: -160
  },
  {
    label: 'Café Corners',
    desc: 'Laptop + coffee = my office',
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&q=80',
    rotate: -6, x: -400, y: 90
  },
  {
    label: 'Reading',
    desc: 'Books that change your perspective',
    img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&q=80',
    rotate: 4, x: -260, y: 210
  },
  {
    label: 'Open Roads',
    desc: 'Sunsets from moving windows',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
    rotate: -4, x: 310, y: 130
  },
  {
    label: 'Flowers',
    desc: 'Pink tulips, always',
    img: 'https://i.pinimg.com/736x/7d/bc/cc/7dbccc29c2d48a796246d83486ef3440.jpg',
    rotate: 6, x: 60, y: 230
  },
]

export default function ThingsILike() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [hovered, setHovered] = useState(null)

  return (
    <section ref={ref} style={{
      background: 'var(--deep)',
      padding: '7rem 4rem',
      overflow: 'hidden',
      position: 'relative'
    }}>

      {/* Dot pattern bg */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(242,221,213,0.07) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          style={{
            fontSize: '0.72rem', letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--blush)',
            marginBottom: '0.8rem'
          }}
        >Beyond the Camera</motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 400, color: 'var(--cream)',
            marginBottom: '0.5rem'
          }}
        >
          Things I{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--blush)' }}>Like</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: '0.95rem',
            color: 'rgba(250,247,242,0.55)',
            maxWidth: 480, lineHeight: 1.75,
            marginBottom: '2rem'
          }}
        >
          Underwater calm, café corners, open roads and techno drops.
          I live for all of it. Life's too short to pick just one passion.
        </motion.p>
      </div>

      {/* Polaroid scatter area */}
      <div style={{
        position: 'relative',
        height: 560,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        {/* Center label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6, ease: 'backOut' }}
          style={{
            position: 'absolute', zIndex: 10,
            background: 'var(--cream)', borderRadius: 16,
            padding: '1.5rem 2.2rem',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            textAlign: 'center'
          }}
        >
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2.2rem', fontStyle: 'italic',
            color: 'var(--deep)', fontWeight: 700,
            lineHeight: 1.15
          }}>Things<br />I like</p>
        </motion.div>

        {/* Polaroid cards */}
        {things.map((thing, i) => (
          <motion.div
            key={thing.label}
            initial={{ opacity: 0, scale: 0.5, rotate: 0, x: 0, y: 0 }}
            animate={inView ? {
              opacity: 1, scale: 1,
              rotate: thing.rotate,
              x: thing.x, y: thing.y
            } : {}}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.7, ease: 'easeOut' }}
            whileHover={{
              scale: 1.18, rotate: 0, zIndex: 30,
              boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
              transition: { duration: 0.25 }
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: 'absolute',
              background: 'white',
              borderRadius: 8,
              padding: '0.8rem 0.8rem 2.8rem',
              width: 140,
              boxShadow: '0 8px 30px rgba(0,0,0,0.35)',
              cursor: 'pointer',
              zIndex: hovered === i ? 30 : 5,
            }}
          >
            {/* Photo */}
            <div style={{
              width: '100%', height: 110,
              borderRadius: 4, overflow: 'hidden',
              marginBottom: '0.5rem'
            }}>
              <img
                src={thing.img}
                alt={thing.label}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  transform: hovered === i ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.4s'
                }}
              />
            </div>

            <p style={{
              fontSize: '0.7rem', color: 'var(--ink)',
              textAlign: 'center', fontWeight: 600,
              letterSpacing: '0.02em'
            }}>{thing.label}</p>

            {hovered === i && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  fontSize: '0.58rem', color: 'var(--muted)',
                  textAlign: 'center', marginTop: '0.25rem',
                  lineHeight: 1.3, padding: '0 0.2rem'
                }}
              >{thing.desc}</motion.p>
            )}

            {/* Pin */}
            <div style={{
              position: 'absolute', top: -10, left: '50%',
              transform: 'translateX(-50%)',
              width: 18, height: 18,
              background: 'var(--rose)', borderRadius: '50%',
              boxShadow: '0 3px 10px rgba(196,121,106,0.6)'
            }} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}