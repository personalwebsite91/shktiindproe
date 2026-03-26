import React, { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { 
  ShieldCheck, 
  Zap, 
  Microscope, 
  ArrowRight, 
  Brain, 
  Radio, 
  Car, 
  Lock, 
  Globe, 
  Activity,
  ChevronDown
} from "lucide-react";

const Section = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 cinematic-spacing ${className}`}>
    {children}
  </section>
);

const RevealText = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative selection:bg-brand-orange/20 selection:text-brand-orange">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 mix-blend-difference text-white">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold tracking-tighter">
            <span className="text-brand-orange">shakti</span>
            <span className="text-brand-green">ind</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest opacity-80">
          <a href="#ecosystem" className="hover:text-brand-orange transition-colors">Ecosystem</a>
          <a href="#vision" className="hover:text-brand-green transition-colors">Vision</a>
          <a href="#founder" className="hover:text-brand-orange transition-colors">Founder</a>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <Section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl" 
          />
        </div>

        <div className="max-w-5xl z-10">
          <RevealText>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-8">
              Building Real Technology <br />
              That Protects Human Life <br />
              <span className="text-brand-orange">— Every Second It Exists.</span>
            </h1>
          </RevealText>
          
          <RevealText delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-12 font-light leading-relaxed">
              ShaktiInd Technologies is not building applications. <br />
              We are building systems that matter in real life.
            </p>
          </RevealText>

          <RevealText delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-brand-dark text-white rounded-full font-medium flex items-center gap-2 hover:bg-brand-orange transition-all duration-300 group">
                Enter Ecosystem <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-gray-200 rounded-full font-medium hover:border-brand-green hover:text-brand-green transition-all duration-300">
                View Vision
              </button>
            </div>
          </RevealText>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-300"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </Section>

      {/* 2. THE PHILOSOPHY */}
      <Section className="bg-brand-light">
        <div className="max-w-4xl mx-auto text-center">
          <RevealText>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-orange mb-8 block">Core Identity</span>
          </RevealText>
          <div className="space-y-6">
            {["We believe technology lost its purpose.", "It became addictive.", "It became distracting.", "It stopped solving real problems.", "We are bringing back real technology."].map((line, i) => (
              <div key={i}>
                <RevealText delay={i * 0.1}>
                  <p className={`text-3xl md:text-5xl font-display font-medium ${i === 4 ? 'text-brand-green' : 'text-gray-400'}`}>
                    {line}
                  </p>
                </RevealText>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. WHAT IS SHAKTIIND */}
      <Section id="about">
        <RevealText>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-16">
            ShaktiInd is a <span className="text-brand-orange">Real-Tech</span> Company
          </h2>
        </RevealText>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck className="w-10 h-10 text-brand-orange" />,
              title: "Safety Tech",
              desc: "Systems designed to protect human life in real time",
              color: "hover:border-brand-orange"
            },
            {
              icon: <Zap className="w-10 h-10 text-brand-green" />,
              title: "Innovative Tech",
              desc: "New paradigms beyond existing solutions",
              color: "hover:border-brand-green"
            },
            {
              icon: <Microscope className="w-10 h-10 text-blue-500" />,
              title: "Research-Driven Tech",
              desc: "Deep exploration before execution",
              color: "hover:border-blue-500"
            }
          ].map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`p-10 rounded-3xl border border-gray-100 bg-white transition-all duration-500 group ${pillar.color} hover:shadow-xl`}
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{pillar.icon}</div>
              <h3 className="text-2xl font-display font-bold mb-4">{pillar.title}</h3>
              <p className="text-gray-500 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 4. CURRENT BUILD */}
      <Section id="ecosystem" className="bg-brand-dark text-white">
        <div className="max-w-6xl">
          <RevealText>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-orange mb-8 block">Live Ecosystem</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-20">What We Are Building Right Now</h2>
          </RevealText>

          <div className="space-y-12">
            {[
              {
                id: "01",
                title: "Unified Safety Social Infrastructure (Naya Bharat)",
                tags: ["Fail-safe", "Proactive", "Social Layer"],
                tagline: "Not just an app. A living safety network.",
                icon: <Globe className="w-6 h-6" />
              },
              {
                id: "02",
                title: "The Band",
                tags: ["Professional-grade", "Instant Response", "Reliable"],
                tagline: "Wearable safety that never fails.",
                icon: <Activity className="w-6 h-6" />
              },
              {
                id: "03",
                title: "BrainWave",
                tags: ["Neuro-frequency", "Sound Alignment", "Calmness"],
                tagline: "Every frequency carries impact. We tune it for humans.",
                icon: <Brain className="w-6 h-6" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer border-b border-white/10 pb-12 last:border-0"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                  <span className="text-5xl font-display font-bold text-white/20 group-hover:text-brand-orange transition-colors">{item.id}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:translate-x-2 transition-transform">{item.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-white/5 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <p className="text-gray-400 italic font-light">{item.tagline}</p>
                  </div>
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:border-brand-orange transition-all">
                    {item.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. FUTURE TECHNOLOGIES */}
      <Section id="vision" className="relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/5 blur-[120px] -z-10" />
        
        <RevealText>
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-green mb-8 block">Vision Pipeline</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-20">What We Are Exploring</h2>
        </RevealText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-12 rounded-[40px] bg-brand-light border border-gray-100 group"
          >
            <Car className="w-12 h-12 text-brand-orange mb-8" />
            <h3 className="text-3xl font-display font-bold mb-4">PredictMyJourney</h3>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Detects unsafe travel patterns and alerts passengers before accidents happen. Proactive intelligence for every trip.
            </p>
            <span className="text-sm font-bold text-brand-orange uppercase tracking-widest">Development Phase</span>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-12 rounded-[40px] bg-brand-light border border-gray-100 group"
          >
            <Radio className="w-12 h-12 text-brand-green mb-8" />
            <h3 className="text-3xl font-display font-bold mb-4">OceanNet</h3>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Internet connectivity in oceans using modular gateway architecture. Bridging the final frontier of connectivity.
            </p>
            <span className="text-sm font-bold text-brand-green uppercase tracking-widest">Research Phase</span>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 p-12 rounded-[40px] bg-brand-dark text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 to-transparent opacity-50" />
            <div className="relative z-10">
              <Lock className="w-12 h-12 text-brand-orange mb-8" />
              <h3 className="text-3xl font-display font-bold mb-4">Confidential Projects</h3>
              <p className="text-gray-400 text-lg max-w-xl">
                "Some technologies are not ready to be seen yet. We are working on deep-tech solutions that will redefine human safety."
              </p>
            </div>
            <div className="relative z-10 text-8xl font-display font-bold text-white/5 select-none">
              SECRET
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 6. WHY THIS MATTERS */}
      <Section className="bg-brand-orange text-white text-center">
        <div className="max-w-4xl mx-auto">
          <RevealText>
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 leading-tight">
              Technology should save lives. <br />
              <span className="opacity-50">Not consume them.</span>
            </h2>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="text-2xl md:text-3xl font-light opacity-90">
              We are not here to build engagement. <br />
              We are here to build impact.
            </p>
          </RevealText>
        </div>
      </Section>

      {/* 7. FOUNDER SECTION */}
      <Section id="founder">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Founder 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-48 h-48 md:w-64 md:h-64 rounded-[40px] bg-brand-light border-4 border-white shadow-2xl overflow-hidden flex items-center justify-center shrink-0"
            >
              <div className="text-5xl font-display font-bold text-brand-orange">SR</div>
            </motion.div>
            <div className="flex-1 text-center md:text-left">
              <RevealText>
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-green mb-4 block">The Visionary</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-dark drop-shadow-[0_0_15px_rgba(245,130,32,0.3)]">Somu Reddy</h2>
                <p className="text-lg text-brand-orange font-bold mb-6 uppercase tracking-widest">Founder, ShaktiInd Technologies</p>
                <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
                  "A student entrepreneur focused on building real-world technology that solves critical human problems. We are bringing back the soul of innovation."
                </p>
              </RevealText>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-48 h-48 md:w-64 md:h-64 rounded-[40px] bg-brand-light border-4 border-white shadow-2xl overflow-hidden flex items-center justify-center shrink-0"
            >
              <div className="text-5xl font-display font-bold text-brand-green">GR</div>
            </motion.div>
            <div className="flex-1 text-center md:text-right">
              <RevealText delay={0.2}>
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-orange mb-4 block">The Architect</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-dark drop-shadow-[0_0_15px_rgba(0,141,72,0.3)]">Gopi Krishna Reddy</h2>
                <p className="text-lg text-brand-green font-bold mb-6 uppercase tracking-widest">Co-Founder, ShaktiInd Technologies</p>
                <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl ml-auto">
                  "Supportive tech and student entrepreneur dedicated to building resilient systems that empower humanity. Innovation is a collaborative journey."
                </p>
              </RevealText>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. CALL TO ACTION */}
      <Section className="bg-brand-light text-center">
        <div className="max-w-4xl mx-auto">
          <RevealText>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-12">
              Join the Movement of <br />
              <span className="text-brand-orange">Real Technology</span>
            </h2>
          </RevealText>
          
          <RevealText delay={0.2}>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-5 bg-brand-dark text-white rounded-full font-bold text-lg hover:bg-brand-orange transition-all shadow-lg hover:shadow-brand-orange/20">
                Collaborate
              </button>
              <button className="px-10 py-5 border-2 border-brand-dark text-brand-dark rounded-full font-bold text-lg hover:bg-brand-dark hover:text-white transition-all">
                Investor Connect
              </button>
              <button className="px-10 py-5 bg-brand-green text-white rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-brand-green/20">
                Experience Prototype
              </button>
            </div>
          </RevealText>
        </div>
      </Section>

      {/* 9. FOOTER */}
      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <span className="text-2xl font-display font-bold tracking-tighter">
            <span className="text-brand-orange">shakti</span>
            <span className="text-brand-green">ind</span>
          </span>
          <p className="text-gray-400 text-sm mt-2 font-medium tracking-widest uppercase">"Real Tech for Real Life"</p>
        </div>
        
        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
          <a href="#" className="hover:text-brand-orange transition-colors">Twitter</a>
          <a href="#" className="hover:text-brand-green transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Instagram</a>
        </div>

        <div className="text-gray-400 text-sm font-medium">
          © 2026 ShaktiInd Technologies. One Platform, One Nation.
        </div>
      </footer>
    </div>
  );
}
