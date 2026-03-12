import { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Footer from '../components/Footer';
import FloatingLines from '../components/FloatingLines';
import BackToTop from '../components/BackToTop';
import ScrollProgress from '../components/ScrollProgress';
import Download from '../components/sections/Download';
import FAQ from '../components/sections/FAQ';
import Badges from '../components/sections/Badges';
import Results from '../components/sections/Results';
import {
  whatIsVortexContent,
  accountContent,
  apiKeysContent,
  vmSetupContent,
  profileContent,
  scanningContent,
  rulesContent,
  methodsContent,
  plansContent,
  historyContent,
  repContent,
  leaderboardContent,
  conductContent,
} from '../data/sections';
import styles from '../styles/Home.module.css';

// Dynamic imports with SSR disabled to prevent hydration mismatch
const BeeModel = dynamic(() => import('../components/BeeModel'), { ssr: false });
const ParallaxBackground = dynamic(() => import('../components/ParallaxBackground'), { ssr: false });

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
    const h = () => setSidebarOpen(window.innerWidth >= 1060);
    h();
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  return (
    <>
      <Head>
        <title>Vortex — Documentation & Field Guide</title>
        <meta name="description" content="Complete documentation for Vortex — a multi-layer behavioral threat analysis platform." />
        <link rel="icon" href="/vortex.ico" />
      </Head>

      <ScrollProgress />

      <div className={styles.container}>
        {/* Background layers – order matters */}
        <div className={styles.background} style={{ zIndex: 0 }}>
          <FloatingLines
            linesGradient={['#1e3a8a', '#0f766e', '#831843']} /* darker, deeper colors */
            animationSpeed={0.5}
            interactive={true}
            parallaxStrength={0.8}
            bendRadius={12}
            bendStrength={-1.5}
            mouseDamping={0.05}
          />
        </div>
        <ParallaxBackground />

        <BeeModel />

        <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        <Topbar sidebarOpen={sidebarOpen} />

        <main
          className={`${styles.main} ${!sidebarOpen ? styles.mainExpanded : ''}`}
          style={{ position: 'relative', zIndex: 10 }}
        >
          <Hero />

          <Section id="what"        align="right" title="What is Vortex"     content={whatIsVortexContent} />
          <Section id="account"     align="left"  title="Create Account"     content={accountContent} />
          <Section id="apikeys"     align="right" title="API Keys"           content={apiKeysContent} />
          <Section id="setup"       align="left"  title="VM Setup"           content={vmSetupContent} />
          <Section id="profile"     align="right" title="Profile Setup"      content={profileContent} />
          <Section id="scanning"    align="left"  title="How to Scan"        content={scanningContent} />
          <Section id="rules"       align="right" title="Scan Rules"         content={rulesContent} />
          <Section id="results"     align="left"  title="Reading Results"    content={<Results />} />
          <Section id="methods"     align="right" title="Analysis Methods"   content={methodsContent} />
          <Section id="plans"       align="left"  title="Free vs Premium"    content={plansContent} />
          <Section id="history"     align="right" title="Scan History"       content={historyContent} />
          <Section id="badges"      align="left"  title="Badge System"       content={<Badges />} />
          <Section id="rep"         align="right" title="Reputation & Stats" content={repContent} />
          <Section id="leaderboard" align="left"  title="Leaderboard"        content={leaderboardContent} />
          <Section id="conduct"     align="right" title="Rules & Conduct"    content={conductContent} />
          <Section id="faq"         align="left"  title="FAQ"                content={<FAQ />} />

          <section id="download" className="s s-alt">
            <div className="s-inner">
              <div className="sec-eyebrow">17 — Download</div>
              <h2 className="sec-h2">Download <span className="gradient-text">Vortex</span></h2>
              <Download />
            </div>
          </section>

          <Footer />
        </main>

        <BackToTop />
      </div>
    </>
  );
}