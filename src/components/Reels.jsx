import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const reels = [
  {
    url: 'https://www.instagram.com/reel/DVz2-8mE8gJ/',
    label: '4.1M Views',
    emoji: '🔥',
    desc: 'Viral Reel'
  },
  {
    url: 'https://www.instagram.com/reel/DZRQiXczkbQ/',
    label: '1.5M Reach',
    emoji: '✨',
    desc: 'Top Performing'
  },
  {
    url: 'https://www.instagram.com/reel/DVTMOq6k48J/',
    label: '1M Reach',
    emoji: '💫',
    desc: 'Trending Content'
  },
  {
    url: 'https://www.instagram.com/reel/DZU2kw5zNTY/',
    label: 'Siblings Special',
    emoji: '🌸',
    desc: 'High Engagement'
  },
  {
    url: 'https://www.instagram.com/reel/DYt13-Izkec/',
    label: 'Dance Reel',
    emoji: '💃',
    desc: 'With Sibling'
  },
  {
    url: 'https://www.instagram.com/reel/DW76aYzExXR/',
    label: 'Favourite',
    emoji: '❤️',
    desc: 'Personal Pick'
  },
  {
    url: 'https://www.instagram.com/reel/DVWD1HSjQd8/',
    label: 'Most Loved',
    emoji: '🎬',
    desc: 'Audience Favourite'
  }
]

function ReelCard({ reel, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: index % 2 === 0 ? -4 : 4 }}
      animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.03 }}
      style={{
        minWidth: 260,
        height: 460,
        borderRadius: 24,
        overflow: 'hidden',
        scrollSnapAlign: 'start',
        flexShrink: 0,
        position: 'relative',
        background: 'linear-gradient(180deg, #2D1010, #140909)',
        border: '1px solid rgba(255,255,255,0.08)'
      }}
    >
      {/* Glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 20%, rgba(196,121,106,0.25), transparent 60%)'
      }} />

      {/* Badge */}
      <div style={{
        position: 'absolute',
        top: 14,
        left: 14,
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(10px)',
        borderRadius: 30,
        padding: '0.3rem 0.8rem',
        fontSize: '0.7rem',
        color: 'var(--blush)',
        letterSpacing: '0.06em'
      }}>
        {reel.emoji} {reel.label}
      </div>

      {/* Play Button */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 70,
          height: 70,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)',
          fontSize: '1.2rem'
        }}
      >
        ▶
      </motion.div>

      {/* Bottom Content */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '1.5rem 1rem',
        background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)'
      }}>
        <p style={{
          fontSize: '0.8rem',
          color: 'rgba(250,247,242,0.7)',
          marginBottom: '0.6rem'
        }}>
          {reel.desc}
        </p>

        <a
          href={reel.url}
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: '0.7rem',
            color: 'var(--blush)',
            textDecoration: 'none',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            borderBottom: '1px solid rgba(242,221,213,0.3)'
          }}
        >
          Watch Reel →
        </a>
      </div>
    </motion.div>
  )
}

export default function Reels() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section
      id="reels"
      ref={ref}
      style={{
        background: 'linear-gradient(160deg, #1C1412 0%, #2D1010 100%)',
        padding: '6rem 4rem',
        overflow: 'hidden'
      }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2.2rem,4vw,3rem)',
          color: 'var(--cream)',
          marginBottom: '2rem'
        }}
      >
        Featured Reels
      </motion.h2>

      {/* Stats */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        marginBottom: '3rem',
        flexWrap: 'wrap'
      }}>
        {[
          { num: '4.1M+', label: 'Top Reel Views' },
          { num: '7', label: 'Featured Reels' },
          { num: '1M+', label: 'Avg Reach' }
        ].map((stat) => (
          <div key={stat.label}>
            <div style={{
              fontSize: '2rem',
              color: 'var(--rose)',
              fontFamily: 'Cormorant Garamond'
            }}>
              {stat.num}
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: 'rgba(250,247,242,0.5)'
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Cards Row */}
      <div style={{
        display: 'flex',
        gap: '1.5rem',
        overflowX: 'auto',
        scrollSnapType: 'x mandatory'
      }}>
        {reels.map((reel, i) => (
          <ReelCard key={i} reel={reel} index={i} inView={inView} />
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a
          href="https://www.instagram.com/khushiserene/"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: '0.8rem 2rem',
            borderRadius: 40,
            background: 'linear-gradient(135deg,#C13584,#E1306C,#FD1D1D)',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '0.85rem',
            letterSpacing: '0.05em'
          }}
        >
          Follow @khushiserene
        </a>
      </div>
    </section>
  )
}