// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'

// const coreTools = [
//   { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
//   { name: 'Instagram', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' },
//   { name: 'Pinterest', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png' },
//   { name: 'Meta Ads', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
//   { name: 'Google Ads', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg' },
//   { name: 'Notion', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
//   { name: 'CapCut', logo: 'data:image/png;base64,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' },
// { name: 'InShot', logo: 'data:image/jpeg;base64,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' },
//   { name: 'YouTube', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' },
// ]

// const aiTools = [
//   { name: 'Gemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
//   { name: 'Claude', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg' },
//   { name: 'ChatGPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
//   { name: 'Framer', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg' },
//   { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
//   { name: 'Lovable', logo: 'data:image/jpeg;base64,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' },
//   { name: 'Higgsfield', logo: 'https://higgsfield.ai/favicon.ico' },
// ]

// const techTools = [
//   { name: 'React JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
//   { name: 'HTML/CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
//   { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
//   { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
//   { name: 'Vercel', logo: 'https://assets.vercel.com/image/upload/v1607554385/repositories/vercel/logo.png' },
//   { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
// ]

// function ToolGrid({ tools, inView, delayBase }) {
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
//       {tools.map((tool, i) => (
//         <motion.div
//           key={tool.name}
//           initial={{ opacity: 0, y: 20, scale: 0.85 }}
//           animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
//           transition={{ delay: delayBase + i * 0.06, duration: 0.4 }}
//           whileHover={{ y: -6, scale: 1.08, boxShadow: '0 12px 35px rgba(196,121,106,0.2)' }}
//           style={{
//             display: 'flex', flexDirection: 'column',
//             alignItems: 'center', gap: '0.6rem',
//             padding: '1rem 1.2rem',
//             background: 'white', borderRadius: 16,
//             border: '1px solid rgba(196,121,106,0.12)',
//             cursor: 'default', minWidth: 85,
//             boxShadow: '0 2px 12px rgba(0,0,0,0.05)'
//           }}
//         >
//           <img
//             src={tool.logo}
//             alt={tool.name}
//             style={{ width: 36, height: 36, objectFit: 'contain' }}
//             onError={e => { e.target.style.display = 'none' }}
//           />
//           <div style={{
//             fontSize: '0.68rem', color: 'var(--ink)',
//             fontWeight: 500, textAlign: 'center'
//           }}>{tool.name}</div>
//         </motion.div>
//       ))}
//     </div>
//   )
// }

// export default function Skills() {
//   const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

//   return (
//     <section id="skills" ref={ref} style={{ background: 'var(--cream)', padding: '7rem 4rem' }}>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={inView ? { opacity: 1 } : {}}
//         style={{
//           fontSize: '0.72rem', letterSpacing: '0.22em',
//           textTransform: 'uppercase', color: 'var(--rose)',
//           marginBottom: '0.8rem'
//         }}
//       >
//         Skills and Tools
//       </motion.p>

//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.7 }}
//         style={{
//           fontFamily: 'Cormorant Garamond, serif',
//           fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
//           fontWeight: 400, marginBottom: '0.6rem'
//         }}
//       >
//         Every tool that helps me{' '}
//         <em style={{ fontStyle: 'italic', color: 'var(--rose)' }}>create</em>
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={inView ? { opacity: 1 } : {}}
//         transition={{ delay: 0.2 }}
//         style={{
//           fontSize: '0.95rem', color: 'var(--muted)',
//           maxWidth: 540, lineHeight: 1.75, marginBottom: '4rem'
//         }}
//       >
//         Every project tells a different story and these are the elements
//         that help me bring my vision to life.
//       </motion.p>

//       {/* Core Tools */}
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         animate={inView ? { opacity: 1, x: 0 } : {}}
//         transition={{ delay: 0.3 }}
//         style={{ marginBottom: '3rem' }}
//       >
//         <div style={{
//           display: 'flex', alignItems: 'center',
//           gap: '1.5rem', marginBottom: '1.5rem'
//         }}>
//           <h3 style={{
//             fontFamily: 'Cormorant Garamond, serif',
//             fontSize: '1.5rem', fontStyle: 'italic',
//             color: 'var(--deep)', whiteSpace: 'nowrap'
//           }}>Core Tools</h3>
//           <div style={{ flex: 1, height: 1, background: 'rgba(196,121,106,0.2)' }} />
//         </div>
//         <ToolGrid tools={coreTools} inView={inView} delayBase={0.3} />
//       </motion.div>

//       {/* AI Tools */}
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         animate={inView ? { opacity: 1, x: 0 } : {}}
//         transition={{ delay: 0.5 }}
//         style={{ marginBottom: '3rem' }}
//       >
//         <div style={{
//           display: 'flex', alignItems: 'center',
//           gap: '1.5rem', marginBottom: '1.5rem'
//         }}>
//           <h3 style={{
//             fontFamily: 'Cormorant Garamond, serif',
//             fontSize: '1.5rem', fontStyle: 'italic',
//             color: 'var(--deep)', whiteSpace: 'nowrap'
//           }}>AI Tools</h3>
//           <div style={{ flex: 1, height: 1, background: 'rgba(196,121,106,0.2)' }} />
//         </div>
//         <ToolGrid tools={aiTools} inView={inView} delayBase={0.5} />
//       </motion.div>

//       {/* Tech Stack */}
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         animate={inView ? { opacity: 1, x: 0 } : {}}
//         transition={{ delay: 0.7 }}
//         style={{ marginBottom: '3rem' }}
//       >
//         <div style={{
//           display: 'flex', alignItems: 'center',
//           gap: '1.5rem', marginBottom: '1.5rem'
//         }}>
//           <h3 style={{
//             fontFamily: 'Cormorant Garamond, serif',
//             fontSize: '1.5rem', fontStyle: 'italic',
//             color: 'var(--deep)', whiteSpace: 'nowrap'
//           }}>Tech Stack</h3>
//           <div style={{ flex: 1, height: 1, background: 'rgba(196,121,106,0.2)' }} />
//         </div>
//         <ToolGrid tools={techTools} inView={inView} delayBase={0.7} />
//       </motion.div>

//       {/* Bottom quote */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={inView ? { opacity: 1 } : {}}
//         transition={{ delay: 1.2 }}
//         style={{
//           marginTop: '3rem',
//           fontFamily: 'Cormorant Garamond, serif',
//           fontSize: '1.1rem', fontStyle: 'italic',
//           color: 'var(--muted)', textAlign: 'center',
//           borderTop: '1px solid rgba(196,121,106,0.2)',
//           paddingTop: '2rem'
//         }}
//       >
//         "Tools keep evolving — the hunger to create something new,
//         and create it right, never fades."
//       </motion.p>

//       {/* GitHub CTA */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={inView ? { opacity: 1 } : {}}
//         transition={{ delay: 1.3 }}
//         style={{ textAlign: 'center', marginTop: '1.5rem' }}
//       >
//         <motion.a
//           href="https://github.com/k-hushivijay"
//           target="_blank"
//           rel="noreferrer"
//           whileHover={{ scale: 1.05, background: 'var(--rose)' }}
//           style={{
//             display: 'inline-block',
//             padding: '0.7rem 2rem',
//             background: 'var(--deep)',
//             color: 'var(--cream)',
//             borderRadius: '40px',
//             textDecoration: 'none',
//             fontSize: '0.82rem',
//             letterSpacing: '0.08em',
//             transition: 'background 0.2s'
//           }}
//         >
//           View Tech Projects on GitHub
//         </motion.a>
//       </motion.div>

//     </section>
//   )
// }