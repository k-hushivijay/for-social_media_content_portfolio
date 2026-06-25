import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const reels = [
  {
    code: 'DVz2-8mE8gJ',
    url: 'https://www.instagram.com/reel/DVz2-8mE8gJ/',
    label: '4.1M Views',
    tag: '🔥 Viral',
    desc: 'Pyaar To Koi Bhi Karle — cinematic reel',
    color: '#2D1515'
  },
  {
    code: 'DZRQiXczkbQ',
    url: 'https://www.instagram.com/reel/DZRQiXczkbQ/',
    label: '1.5M Reach',
    tag: '✨ Top Reel',
    desc: 'Aesthetic travel content',
    color: '#1A1020'
  },
  {
    code: 'DVTMOq6k48J',
    url: 'https://www.instagram.com/reel/DVTMOq6k48J/',
    label: '1M Reach',
    tag: '💫 Trending',
    desc: 'I hope I never meet someone who dims my spark',
    color: '#0D1520'
  },
  {
    code: 'DZU2kw5zNTY',
    url: 'https://www.instagram.com/reel/DZU2kw5zNTY/',
    label: 'Viral',
    tag: '🌸 Siblings',
    desc: 'Meri Behnen Haina — sibling special',
    color: '#1A100D'
  },
  {
    code: 'DYt13-Izkec',
    url: 'https://www.instagram.com/reel/DYt13-Izkec/',
    label: 'High Views',
    tag: '💃 Dance',
    desc: 'Dance moves with sibling',
    color: '#0D1A10'
  },
  {
    code: 'DW76aYzExXR',
    url: 'https://www.instagram.com/reel/DW76aYzExXR/',
    label: 'Fav ❤️',
    tag: '❤️ My Fav',
    desc: 'Personal favourite reel',
    color: '#1A0D15'
  },
  {
    code: 'DVWD1HSjQd8',
    url: 'https://www.instagram.com/reel/DVWD1HSjQd8/',
    label: 'Most Loved',
    tag: '🎬 Cinematic',
    desc: 'Most loved by my audience',
    color: '#151520'
  },
]

function ReelCard({ reel, index, inView }) {
  const [imgError, setImgError] = useState(false)
  const [cardRef, cardInView] = useInView({ threshold: 0.5 })

  // Instagram public thumbnail — works without login
  const thumbUrl = `https://www.instagram.com/p/${reel.code}/media/?size=l`

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotate: index % 2 === 0 ? -5 : 5 }}
      animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -12, scale: 1.03 }}
      onClick={() => window.open(reel.url, '_blank')}
      style={{
        minWidth: 220,
        height: 400,
        borderRadius: 22,
        overflow: 'hidden',
        scrollSnapAlign: 'start',
        flexShrink: 0,
        position: 'relative',
        border: cardInView
          ? '2px solid var(--rose)'
          : '1px solid rgba(255,255,255,0.08)',
        boxShadow: cardInView
          ? '0 0 50px rgba(196,121,106,0.5)'
          : '0 10px 40px rgba(0,0,0,0.4)',
        transition: 'border 0.4s, box-shadow 0.4s',
        cursor: 'pointer',
        background: reel.color
      }}
    >
      {/* Thumbnail image */}
      {!imgError ? (
        <img
          src={thumbUrl}
          alt={reel.desc}
          onError={() => setImgError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            position: 'absolute',
            inset: 0
          }}
        />
      ) : (
        // Fallback if thumbnail doesn't load
        <div style={{
          width: '100%', height: '100%',
          background: `linear-gradient(160deg, ${reel.color}, #2D1010)`,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '0.8rem'
        }}>
          <div style={{ fontSize: '3rem' }}>🎬</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--blush)', textAlign: 'center', padding: '0 1rem' }}>
            {reel.desc}
          </div>
        </div>
      )}

      {/* Dark overlay gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)'
      }} />

      {/* Top tag badge */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.1 + 0.3 }}
        style={{
          position: 'absolute', top: 14, left: 14, zIndex: 3,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
          borderRadius: 30, padding: '0.3rem 0.8rem',
          fontSize: '0.7rem', color: 'var(--blush)',
          letterSpacing: '0.06em', fontWeight: 500
        }}
      >{reel.tag}</motion.div>

      {/* Pulsing play icon */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 52, height: 52,
          background: 'rgba(196,121,106,0.9)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.2rem', zIndex: 3,
          boxShadow: '0 0 30px rgba(196,121,106,0.6)'
        }}
      >&#9654;</motion.div>

      {/* Bottom info */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '1.5rem 1rem 1rem', zIndex: 3
      }}>
        <div style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.4rem', fontWeight: 600,
          color: 'var(--rose)', marginBottom: '0.2rem'
        }}>{reel.label}</div>
        <div style={{
          fontSize: '0.72rem', color: 'rgba(250,247,242,0.7)',
          lineHeight: 1.4
        }}>{reel.desc}</div>
        <div style={{
          marginTop: '0.8rem',
          fontSize: '0.65rem',
          color: 'var(--blush)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          borderTop: '1px solid rgba(242,221,213,0.2)',
          paddingTop: '0.6rem'
        }}>Tap to watch on Instagram</div>
      </div>
    </motion.div>
  )
}

export default function Reels() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="reels" ref={ref} style={{
      background: 'linear-gradient(160deg, var(--ink) 0%, #2D1010 100%)',
      padding: '7rem 4rem',
      overflow: 'hidden'
    }}>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        style={{
          fontSize: '0.72rem', letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'var(--blush)',
          marginBottom: '0.8rem'
        }}
      >Content Showcase</motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          fontWeight: 400, color: 'var(--cream)',
          marginBottom: '0.8rem'
        }}
      >
        My{' '}
        <em style={{ fontStyle: 'italic', color: '#E8A89A' }}>Reels</em>
      </motion.h2>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}
        style={{
          display: 'flex', gap: '3rem',
          marginBottom: '3rem', flexWrap: 'wrap'
        }}
      >
        {[
          { num: '4.1M+', label: 'Views on one reel' },
          { num: '7+', label: 'Viral reels' },
          { num: '1M+', label: 'Reach per reel' },
          { num: '100%', label: 'Organic growth' },
        ].map(stat => (
          <div key={stat.label}>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '2.2rem', color: 'var(--rose)', fontWeight: 600
            }}>{stat.num}</div>
            <div style={{
              fontSize: '0.7rem',
              color: 'rgba(250,247,242,0.4)',
              letterSpacing: '0.06em'
            }}>{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Scroll hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
        style={{
          fontSize: '0.72rem', color: 'rgba(250,247,242,0.3)',
          marginBottom: '1.5rem', letterSpacing: '0.08em'
        }}
      >
        Scroll sideways to explore — tap any card to watch
      </motion.p>

      {/* Reel cards */}
      <div style={{
        display: 'flex', gap: '1.5rem',
        overflowX: 'auto', paddingBottom: '1.5rem',
        paddingTop: '0.5rem',
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'thin',
        scrollbarColor: 'var(--rose) rgba(255,255,255,0.05)'
      }}>
        {reels.map((reel, i) => (
          <ReelCard key={reel.code} reel={reel} index={i} inView={inView} />
        ))}
      </div>

      {/* Instagram CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1 }}
        style={{ textAlign: 'center', marginTop: '3rem' }}
      >
        <motion.a
          href="https://www.instagram.com/khushiserene/"
          target="_blank" rel="noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            padding: '0.9rem 2.5rem',
            background: 'linear-gradient(135deg, #C13584, #E1306C, #FD1D1D)',
            color: 'white', borderRadius: '40px',
            fontSize: '0.88rem', textDecoration: 'none',
            letterSpacing: '0.06em',
            boxShadow: '0 10px 40px rgba(193,53,132,0.3)'
          }}
        >
          Follow @khushiserene for More
        </motion.a>
      </motion.div>
    </section>
  )
}