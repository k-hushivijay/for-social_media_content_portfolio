import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import elegantImg from '../assets/elegant.jpg'

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" ref={ref} style={{
      background: 'var(--ink)',
      color: 'var(--cream)',
      padding: '7rem 4rem',
      overflow: 'hidden'
    }}>

      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: '0.72rem', letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'var(--blush)',
          marginBottom: '0.8rem'
        }}
      >✦ About Me</motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          fontWeight: 400, marginBottom: '4rem', color: 'var(--cream)'
        }}
      >
        The girl behind the <em style={{ color: 'var(--blush)', fontStyle: 'italic' }}>content</em>
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5rem',
        alignItems: 'center'
      }}>

        {/* LEFT - Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          <motion.img
            src={elegantImg}
            alt="Khushi Vijay"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            style={{
              width: '100%',
              height: 480,
              objectFit: 'cover',
              borderRadius: '24px',
              boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
              display: 'block'
            }}
          />
          {/* Floating label on image */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            style={{
              position: 'absolute', bottom: -20, right: -20,
              background: 'var(--rose)', borderRadius: 16,
              padding: '1rem 1.4rem',
              boxShadow: '0 10px 30px rgba(196,121,106,0.4)'
            }}
          >
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.1rem', color: 'white', fontStyle: 'italic'
            }}>Pink City 🌸</div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>
              Jaipur, Rajasthan
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT - Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)',
            fontStyle: 'italic', fontWeight: 300,
            lineHeight: 1.5, color: 'var(--blush)',
            borderLeft: '2px solid var(--rose)',
            paddingLeft: '1.5rem',
            marginBottom: '2rem'
          }}>
            "I believe great content isn't just seen — it's felt."
          </p>

          <p style={{
            fontSize: '0.95rem', lineHeight: 1.85,
            color: 'rgba(250,247,242,0.7)', marginBottom: '1.2rem'
          }}>
            Hey, I'm Khushi — a content creator and tech enthusiast from the 
            beautiful Pink City of Jaipur 🏰 I create aesthetic, scroll-stopping 
            reels and help brands find their voice on social media.
          </p>

          <p style={{
            fontSize: '0.95rem', lineHeight: 1.85,
            color: 'rgba(250,247,242,0.7)', marginBottom: '2rem'
          }}>
            What makes me different? I understand both sides — the algorithm 
            and the art. Whether it's crafting a reel that feels native to the 
            feed, or building a web product from scratch, I bring the same 
            intentionality to everything I create.
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['Content Creation', 'Reels & Video', 'Social Strategy',
              'Web Development', 'Brand Aesthetic', 'Open to Collabs'].map(tag => (
              <motion.span key={tag}
                whileHover={{ borderColor: 'var(--rose)', color: 'var(--rose)', scale: 1.04 }}
                style={{
                  padding: '0.35rem 1rem',
                  border: '1px solid rgba(242,221,213,0.25)',
                  borderRadius: '30px', fontSize: '0.75rem',
                  color: 'var(--blush)', cursor: 'default',
                  transition: 'all 0.2s'
                }}
              >{tag}</motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}