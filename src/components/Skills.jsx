import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const socialSkills = [
  { name: 'Reels & Short-form Video', pct: 90 },
  { name: 'Instagram Growth Strategy', pct: 85 },
  { name: 'Content Aesthetic & Curation', pct: 92 },
  { name: 'Brand Storytelling', pct: 80 },
  { name: 'Video Editing (CapCut / Premiere)', pct: 82 },
]

const techSkills = [
  { name: 'HTML / CSS / JavaScript', pct: 85 },
  { name: 'React JS', pct: 78 },
  { name: 'Python', pct: 70 },
  { name: 'Git & GitHub', pct: 80 },
  { name: 'UI/UX & Figma', pct: 72 },
]

const techChips = ['React', 'JavaScript', 'Python', 'HTML/CSS', 'Node.js', 'Figma', 'Git', 'Tailwind', 'CapCut', 'Canva']

function SkillBar({ name, pct, inView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      style={{ marginBottom: '1.4rem' }}
    >
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        marginBottom: '0.4rem'
      }}>
        <span style={{ fontSize: '0.88rem', color: 'var(--ink)' }}>{name}</span>
        <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{pct}%</span>
      </div>
      <div style={{
        height: 3, background: 'rgba(196,121,106,0.15)',
        borderRadius: 10, overflow: 'hidden'
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, var(--rose), var(--deep))',
            borderRadius: 10
          }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="skills" ref={ref} style={{
      background: 'var(--cream)',
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
      >✦ What I Bring</motion.p>

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
        Skills & <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>Expertise</em>
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5rem'
      }}>
        {/* Social Skills */}
        <div>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.3rem', fontStyle: 'italic',
            color: 'var(--deep)', marginBottom: '1.8rem',
            paddingBottom: '0.5rem',
            borderBottom: '1px solid rgba(196,121,106,0.2)'
          }}>Social Media & Content</p>
          {socialSkills.map((s, i) => (
            <SkillBar key={s.name} {...s} inView={inView} delay={i * 0.1} />
          ))}
        </div>

        {/* Tech Skills */}
        <div>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.3rem', fontStyle: 'italic',
            color: 'var(--deep)', marginBottom: '1.8rem',
            paddingBottom: '0.5rem',
            borderBottom: '1px solid rgba(196,121,106,0.2)'
          }}>Tech & Development</p>
          {techSkills.map((s, i) => (
            <SkillBar key={s.name} {...s} inView={inView} delay={i * 0.1 + 0.2} />
          ))}

          {/* Tech chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '2rem' }}>
            {techChips.map((chip, i) => (
              <motion.span key={chip}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.06 + 0.8 }}
                whileHover={{ y: -3, borderColor: 'var(--rose)', color: 'var(--rose)' }}
                style={{
                  padding: '0.45rem 1rem',
                  background: 'white',
                  border: '1px solid rgba(196,121,106,0.2)',
                  borderRadius: '30px', fontSize: '0.78rem',
                  color: 'var(--ink)', cursor: 'default',
                  transition: 'all 0.2s',
                  boxShadow: '0 2px 10px rgba(196,121,106,0.06)'
                }}
              >{chip}</motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2 }}
        style={{ textAlign: 'center', marginTop: '4rem' }}
      >
        <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1rem' }}>
          Want to see my dev work?
        </p>
        <motion.a
          href="https://github.com/k-hushivijay"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05, y: -2, background: 'var(--rose)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            background: 'var(--deep)', color: 'var(--cream)',
            borderRadius: '40px', textDecoration: 'none',
            fontSize: '0.85rem', letterSpacing: '0.08em',
            transition: 'background 0.2s'
          }}
        >View GitHub →</motion.a>
      </motion.div>
    </section>
  )
}