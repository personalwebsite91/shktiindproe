import React, { useRef, useState } from "react";
import { motion, useScroll, AnimatePresence } from "motion/react";
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

const Sparkles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%", 
            opacity: 0,
            scale: 0 
          }}
          animate={{ 
            y: [null, "-10%", "110%"],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{ 
            duration: Math.random() * 5 + 5, 
            repeat: Infinity, 
            delay: Math.random() * 5,
            ease: "linear"
          }}
          className="absolute w-1 h-1 bg-brand-orange/40 rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

const VideoDisplay = () => {
  const [impacted, setImpacted] = React.useState(false);
  const [safetyVideoIndex, setSafetyVideoIndex] = React.useState(0);

  const allVideos = [
    "https://res.cloudinary.com/dn4jcnne6/video/upload/v1774537449/WhatsApp_Video_2026-03-26_at_8.31.24_PM_fhnpgo.mp4",
    "https://res.cloudinary.com/dn4jcnne6/video/upload/v1774537599/WhatsApp_Video_2026-03-26_at_8.36.06_PM_c6fnrr.mp4",
    "https://res.cloudinary.com/dn4jcnne6/video/upload/v1774537858/WhatsApp_Video_2026-03-26_at_8.39.16_PM_rc5i3d.mp4",
    "https://res.cloudinary.com/dn4jcnne6/video/upload/v1774535154/WhatsApp_Video_2026-03-26_at_7.54.42_PM_rgjaps.mp4"
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSafetyVideoIndex((prev) => (prev + 1) % allVideos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { 
      label: "App UI", 
      delay: 0, 
      type: "video", 
      src: "https://res.cloudinary.com/dn4jcnne6/video/upload/v1774535154/WhatsApp_Video_2026-03-26_at_7.54.42_PM_rgjaps.mp4" 
    },
    { 
      label: "Band Usage", 
      delay: 0.1, 
      type: "video", 
      src: "https://res.cloudinary.com/dn4jcnne6/video/upload/v1774537449/WhatsApp_Video_2026-03-26_at_8.31.24_PM_fhnpgo.mp4" 
    },
    { 
      label: "Hardware Test", 
      delay: 0.2, 
      type: "video", 
      src: "https://res.cloudinary.com/dn4jcnne6/video/upload/v1774537599/WhatsApp_Video_2026-03-26_at_8.36.06_PM_c6fnrr.mp4" 
    },
    { 
      label: "Safety System", 
      delay: 0.3, 
      type: "video", 
      src: allVideos[safetyVideoIndex] 
    },
    { 
      label: "Prototype", 
      delay: 0.4, 
      type: "video", 
      src: "https://res.cloudinary.com/dn4jcnne6/video/upload/v1774537858/WhatsApp_Video_2026-03-26_at_8.39.16_PM_rc5i3d.mp4" 
    },
    { 
      label: "Research", 
      delay: 0.5, 
      type: "image", 
      src: "https://res.cloudinary.com/dn4jcnne6/image/upload/v1774537426/Screenshot_2026-03-26_203330_mjjx6o.png" 
    }
  ];

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full h-full max-w-3xl">
        {blocks.map((block, i) => (
          <motion.div
            key={i}
            initial={{ y: -1200, opacity: 0, rotate: Math.random() * 20 - 10 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            onAnimationComplete={() => i === blocks.length - 1 && setImpacted(true)}
            transition={{
              duration: 1.2,
              delay: block.delay,
              ease: [0.45, 0, 0.55, 1]
            }}
            className="relative bg-brand-dark rounded-2xl overflow-hidden border border-white/10 shadow-xl group aspect-square md:aspect-auto"
          >
            {block.type === "video" ? (
              <video
                key={block.src} // Force re-render for Safety System rotation
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              >
                <source src={block.src} type="video/mp4" />
              </video>
            ) : (
              <img 
                src={block.src} 
                alt={block.label}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3">
              <span className="text-[9px] font-mono text-brand-orange font-bold uppercase tracking-[0.2em]">
                {block.label}
              </span>
            </div>
            
            {/* Scanning Line Effect for each block */}
            <motion.div 
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[1px] bg-brand-orange/20 z-20 pointer-events-none"
            />
          </motion.div>
        ))}
      </div>

      {/* "Make it exist first" Symbol Overlay */}
      {impacted && (
        <motion.div
          initial={{ scale: 3, opacity: 0, rotate: -15 }}
          animate={{ scale: 1, opacity: 1, rotate: -8 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring", damping: 12 }}
          className="absolute z-30 pointer-events-none"
        >
          <div className="relative border-4 border-brand-orange/30 p-6 rounded-2xl backdrop-blur-[2px]">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white/20 uppercase tracking-tighter leading-none select-none text-center">
              make it <br /> <span className="text-brand-orange/40">exist</span> <br /> first
            </h2>
            <div className="absolute -top-3 -right-3 bg-brand-orange text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
              Execution First
            </div>
          </div>
        </motion.div>
      )}

      {/* Dust/Impact Effect */}
      {impacted && (
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: "50%", 
                y: "100%", 
                scale: 0, 
                opacity: 0.8,
                filter: "blur(4px)"
              }}
              animate={{ 
                x: `${Math.random() * 100}%`, 
                y: "-100%", 
                scale: Math.random() * 4 + 2, 
                opacity: 0 
              }}
              transition={{ 
                duration: 1.5, 
                ease: "easeOut" 
              }}
              className="absolute bottom-0 w-8 h-8 bg-gray-200/30 rounded-full"
            />
          ))}
        </div>
      )}

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -top-10 -right-10 w-32 h-32 bg-brand-green/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl"
      />
    </div>
  );
};

export default function App() {
  const containerRef = useRef(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);
  const [showEcosystem, setShowEcosystem] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEnterEcosystem = () => {
    setShowEcosystem(true);
    setTimeout(() => {
      ecosystemRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleExperiencePrototype = () => {
    const email = "founder@shaktiind.in";
    const cc = "pandurugowri16888@gmail.com";
    const subject = "Request for Prototype Experience";
    const body = "Hello Shaktiind Team,\n\nI am interested in experiencing the Shaktiind prototype. Please let me know the next steps.\n\nBest regards,";
    window.location.href = `mailto:${email}?cc=${cc}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div ref={containerRef} className="relative selection:bg-brand-orange/20 selection:text-brand-orange">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-brand-dark text-white border-b border-white/5 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold tracking-tighter">
            <span className="text-brand-orange">shakti</span>
            <span className="text-brand-green">ind</span>
            <span className="text-white/40 ml-1 text-lg font-light">technologies</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest opacity-80">
          <button onClick={handleEnterEcosystem} className="hover:text-brand-orange transition-colors cursor-pointer">Ecosystem</button>
          <button onClick={() => scrollToSection("vision")} className="hover:text-brand-green transition-colors cursor-pointer">Vision</button>
          <button onClick={() => scrollToSection("founder")} className="hover:text-brand-orange transition-colors cursor-pointer">Founder</button>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <Section className="relative overflow-hidden bg-white pt-24 md:pt-0">
        <Sparkles />
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

        <div className="grid lg:grid-cols-2 gap-12 items-center z-10 w-full">
          <div className="max-w-3xl">
            <RevealText>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-8">
                Building Real Technology <br />
                That Protects Human Life <br />
                <span className="text-brand-orange">— Every Second It Exists.</span>
              </h1>
            </RevealText>
            
            <RevealText delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-12 font-light leading-relaxed">
                Shaktiind Technologies is not a collection of products. <br />
                It is a <span className="text-brand-dark font-medium">unified system</span> designed to protect, predict and respond in real life.
              </p>
            </RevealText>

            <RevealText delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleEnterEcosystem}
                  className="px-8 py-4 bg-brand-dark text-white rounded-full font-medium flex items-center gap-2 hover:bg-brand-orange transition-all duration-300 group"
                >
                  Enter Ecosystem <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection("vision")}
                  className="px-8 py-4 border border-gray-200 rounded-full font-medium hover:border-brand-green hover:text-brand-green transition-all duration-300"
                >
                  View Vision
                </button>
              </div>
            </RevealText>
          </div>

          <div className="hidden lg:block">
            <VideoDisplay />
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-300 hidden md:block"
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

      {/* 2.2 WHY NOW SECTION */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto">
          <RevealText>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-orange mb-8 block">The Urgency</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-16 leading-tight">
              The world is becoming <br /> more connected, <br /> 
              <span className="text-brand-orange">but less safe.</span>
            </h2>
          </RevealText>
          <div className="grid md:grid-cols-2 gap-16 items-start">
             <RevealText delay={0.2}>
               <div className="space-y-8">
                 <p className="text-2xl text-gray-500 font-light leading-relaxed">
                   Technology is growing, but responsibility is declining. We are witnessing a gap between innovation and human safety.
                 </p>
                 <div className="h-[1px] w-24 bg-brand-orange" />
               </div>
             </RevealText>
             <RevealText delay={0.4}>
               <div className="p-12 bg-brand-light rounded-[40px] border border-gray-100">
                 <p className="text-2xl md:text-3xl text-brand-dark font-bold leading-tight mb-6">
                   This is why Shaktiind Technologies exists now.
                 </p>
                 <p className="text-lg text-gray-500 leading-relaxed">
                   To bridge the gap with systems that prioritize life over engagement. We are rebuilding technology from purpose.
                 </p>
               </div>
             </RevealText>
          </div>
        </div>
      </Section>

      {/* 2.5 WHY WE EXIST */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto">
          <RevealText>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-orange mb-8 block">🔥 Why We Exist</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-12 leading-tight">
              We are not here <br /> to build apps.
            </h2>
          </RevealText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <RevealText delay={0.2}>
              <div className="space-y-8">
                <p className="text-2xl md:text-3xl text-gray-500 font-light leading-relaxed">
                  We are here because: <br />
                  <span className="text-brand-dark font-medium">Technology stopped solving real problems.</span>
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xl text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-brand-orange" />
                    <p>Safety became reactive.</p>
                  </div>
                  <div className="flex items-center gap-4 text-xl text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-brand-orange" />
                    <p>Systems became unreliable.</p>
                  </div>
                </div>
                <p className="text-2xl md:text-3xl text-brand-green font-bold">
                  We are rebuilding technology from purpose.
                </p>
              </div>
            </RevealText>
            
            <div className="relative h-64 md:h-96 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-gray-100 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-dashed border-brand-orange/20 rounded-full"
              />
              <div className="text-4xl font-display font-bold text-brand-dark z-10 bg-white p-6 rounded-full shadow-xl">
                PURPOSE
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. WHAT IS SHAKTIIND */}
      <Section id="about">
        <RevealText>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-16">
            Shaktiind Technologies is a <span className="text-brand-orange">Real-Tech</span> Company
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

      {/* 4.5 CONNECT EVERYTHING (ECOSYSTEM) */}
      <AnimatePresence>
        {showEcosystem && (
          <motion.div
            ref={ecosystemRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <Section id="ecosystem" className="bg-brand-light overflow-hidden">
              <div className="max-w-6xl mx-auto relative">
                <div className="text-center z-10 relative">
                  <RevealText>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-12">
                      Shaktiind Technologies is not a <br /> collection of products.
                    </h2>
                    <p className="text-2xl md:text-3xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
                      It is a <span className="text-brand-dark font-medium">unified system</span> designed to protect, predict and respond in real life.
                    </p>
                  </RevealText>
                </div>

                <div className="mt-24 relative h-[600px] flex items-center justify-center">
                  {/* Central Core */}
                  <motion.div 
                    animate={{ 
                      boxShadow: ["0 0 20px rgba(245,130,32,0.2)", "0 0 60px rgba(245,130,32,0.4)", "0 0 20px rgba(245,130,32,0.2)"]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-48 h-48 rounded-full bg-brand-orange flex items-center justify-center text-white font-display font-bold text-center p-6 z-20 shadow-2xl"
                  >
                    Shaktiind Technologies
                  </motion.div>

                  {/* Revolving Elements */}
                  {[
                    { label: "The Band", icon: <Activity />, delay: 0, radius: 200 },
                    { label: "Wearable Devices", icon: <ShieldCheck />, delay: 2, radius: 200 },
                    { label: "Applications", icon: <Zap />, delay: 4, radius: 200 },
                    { label: "Naya Bharat", icon: <Globe />, delay: 1, radius: 280 },
                    { label: "BrainWave", icon: <Brain />, delay: 3, radius: 280 },
                    { label: "OceanNet", icon: <Radio />, delay: 5, radius: 280 }
                  ].map((node, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        rotate: 360 
                      }}
                      transition={{ 
                        duration: 25 + i * 3, 
                        repeat: Infinity, 
                        ease: "linear",
                        delay: node.delay
                      }}
                      className="absolute w-full h-full flex items-center justify-center pointer-events-none"
                    >
                      <div 
                        style={{ transform: `translateX(${node.radius}px)` }}
                        className="pointer-events-auto"
                      >
                        <motion.div 
                          animate={{ rotate: -360 }}
                          transition={{ duration: 25 + i * 3, repeat: Infinity, ease: "linear", delay: node.delay }}
                          className="flex flex-col items-center gap-2"
                        >
                          <div className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-lg flex items-center justify-center text-brand-orange">
                            {node.icon}
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{node.label}</span>
                        </motion.div>
                      </div>
                      
                      {/* Connecting Line */}
                      <div 
                        style={{ width: `${node.radius}px` }}
                        className="absolute left-1/2 top-1/2 h-[1px] bg-gradient-to-r from-brand-orange/20 to-transparent origin-left"
                      />
                    </motion.div>
                  ))}
                  
                  {/* Background Rings */}
                  <div className="absolute w-[400px] h-[400px] border border-gray-100 rounded-full" />
                  <div className="absolute w-[560px] h-[560px] border border-gray-100 rounded-full" />
                </div>
              </div>
            </Section>
          </motion.div>
        )}
      </AnimatePresence>

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
            className="md:col-span-2 p-12 rounded-[40px] bg-brand-dark text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <Lock className="w-12 h-12 text-brand-orange" />
                <div className="px-4 py-1 bg-brand-orange/20 border border-brand-orange/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-orange">
                  Access Restricted
                </div>
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Confidential Projects</h3>
              <p className="text-gray-400 text-lg max-w-xl blur-[4px] group-hover:blur-0 transition-all duration-700">
                "Some technologies are not ready to be seen yet. We are working on deep-tech solutions that will redefine human safety."
              </p>
              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-brand-green uppercase tracking-widest animate-pulse">
                <div className="w-2 h-2 rounded-full bg-brand-green" />
                Research Layer Active
              </div>
            </div>
            <div className="relative z-10 text-8xl font-display font-bold text-white/5 select-none group-hover:text-white/10 transition-colors">
              SECRET
            </div>
          </motion.div>
        </div>
      </Section>

      {/* 5.5 EXECUTION SECTION */}
      <Section className="bg-brand-dark text-white">
        <div className="max-w-5xl mx-auto">
          <RevealText>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-orange mb-8 block">Execution</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-16">Currently in Progress</h2>
          </RevealText>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Safety Ecosystem", status: "Prototype in development", icon: <Globe className="text-brand-orange" /> },
              { title: "Hardware Device", status: "Testing ongoing", icon: <Activity className="text-brand-green" /> },
              { title: "AI Safety Systems", status: "Under research", icon: <Brain className="text-blue-500" /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-widest">{item.status}</p>
              </motion.div>
            ))}
          </div>
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
              <img 
                src="https://res.cloudinary.com/dn4jcnne6/image/upload/v1774534240/1_yng62c.jpg" 
                alt="Panduru Somu Reddy"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="flex-1 text-center md:text-left">
              <RevealText>
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-green mb-4 block">The Visionary</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-dark drop-shadow-[0_0_15px_rgba(245,130,32,0.3)]">Panduru Somu Reddy</h2>
                <p className="text-lg text-brand-orange font-bold mb-6 uppercase tracking-widest">Founder, Shaktiind Technologies</p>
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
              <img 
                src="https://res.cloudinary.com/dn4jcnne6/image/upload/v1774534255/2_afau2w.jpg" 
                alt="Gopi Krishna Reddy M"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="flex-1 text-center md:text-right">
              <RevealText delay={0.2}>
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-brand-orange mb-4 block">The Architect</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-dark drop-shadow-[0_0_15px_rgba(0,141,72,0.3)]">Gopi Krishna Reddy M</h2>
                <p className="text-lg text-brand-green font-bold mb-6 uppercase tracking-widest">Co-Founder, Shaktiind Technologies</p>
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
              Be Part of the <br />
              <span className="text-brand-orange">Real-Tech Revolution</span>
            </h2>
          </RevealText>
          
          <RevealText delay={0.2}>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://instagram.com/shaktiindofficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-5 bg-brand-dark text-white rounded-full font-bold text-lg hover:bg-brand-orange transition-all shadow-lg hover:shadow-brand-orange/20 inline-block"
              >
                Work With Us
              </a>
              <a 
                href="mailto:founder@shaktiind.in"
                className="px-10 py-5 border-2 border-brand-dark text-brand-dark rounded-full font-bold text-lg hover:bg-brand-dark hover:text-white transition-all inline-block"
              >
                Investor Access
              </a>
              <button 
                onClick={handleExperiencePrototype}
                className="px-10 py-5 bg-brand-green text-white rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-brand-green/20"
              >
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
            <span className="text-gray-400 ml-1 text-lg font-light">technologies</span>
          </span>
          <p className="text-gray-400 text-sm mt-2 font-medium tracking-widest uppercase">"Real Tech for Real Life"</p>
        </div>
        
        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
          <a href="https://twitter.com/shaktiindo8821" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Twitter</a>
          <a href="https://linkedin.com/company/shaktiindofficial" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">LinkedIn</a>
          <a href="https://instagram.com/shaktiindofficial" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Instagram</a>
        </div>

        <div className="text-gray-400 text-sm font-medium">
          © 2026 Shaktiind Technologies. One Platform, One Nation.
        </div>
      </footer>
    </div>
  );
}
