import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="contact" ref={ref} style={{
      background: 'var(--ink)',
      color: 'var(--cream)',
      padding: '8rem 4rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* Animated background glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{
          position: 'absolute',
          width: 600, height: 600,
          background: 'radial-gradient(circle, var(--rose), transparent)',
          borderRadius: '50%',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none', zIndex: 0
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          style={{
            fontSize: '0.72rem', letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--blush)',
            marginBottom: '0.8rem'
          }}
        >✦ Let's Work Together</motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 400, color: 'var(--cream)',
            lineHeight: 1.15, marginBottom: '1rem'
          }}
        >
          Ready to create something<br />
          <em style={{ fontStyle: 'italic', color: '#E8A89A' }}>beautiful together?</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: '1rem', color: 'rgba(250,247,242,0.55)',
            maxWidth: 460, margin: '0 auto 2.5rem',
            lineHeight: 1.75
          }}
        >
          Whether you're a brand looking for authentic content or want to 
          chat about a collaboration — my inbox is always open 🌸
        </motion.p>

        {/* Shimmer email */}
        <motion.a
          href="mailto:khushiserene.official@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          whileHover={{
            color: 'var(--rose)',
            borderColor: 'var(--rose)',
            scale: 1.02
          }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
            color: 'var(--blush)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(242,221,213,0.3)',
            paddingBottom: '0.3rem',
            display: 'inline-block',
            marginBottom: '3rem',
            transition: 'all 0.2s'
          }}
        >
          khushiserene.official@gmail.com
        </motion.a>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          style={{
            display: 'flex', justifyContent: 'center',
            gap: '1rem', flexWrap: 'wrap'
          }}
        >
          {[
            { label: '📸 Instagram', href: 'https://www.instagram.com/khushiserene/' },
            { label: '💻 GitHub', href: 'https://github.com/k-hushivijay' },
            { label: '✉️ Email', href: 'mailto:khushiserene.official@gmail.com' },
          ].map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + i * 0.1 }}
              whileHover={{
                borderColor: 'var(--rose)',
                color: 'var(--rose)', y: -3
              }}
              style={{
                padding: '0.6rem 1.6rem',
                border: '1px solid rgba(242,221,213,0.2)',
                borderRadius: '30px',
                color: 'rgba(250,247,242,0.6)',
                fontSize: '0.82rem', textDecoration: 'none',
                letterSpacing: '0.08em',
                transition: 'all 0.2s'
              }}
            >{s.label}</motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        style={{
          marginTop: '5rem', fontSize: '0.75rem',
          color: 'rgba(250,247,242,0.2)', letterSpacing: '0.08em'
        }}
      >
        © 2025 <span style={{ color: 'var(--rose)' }}>Khushi Vijay</span> · 
        Made with ♡ in Jaipur · Open to collaborations worldwide
      </motion.p>
    </section>
  )
}