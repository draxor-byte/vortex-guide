'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const smoothMouseX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const smoothMouseY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const x1 = useTransform(smoothMouseX, [0, 1], [-30, 30]);
  const x2 = useTransform(smoothMouseX, [0, 1], [20, -20]);
  const x3 = useTransform(smoothMouseX, [0, 1], [-10, 10]);

  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.7, 0.4]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.6, 0.3]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.2]);

  // Generate random positions only on the client
  const randomElements = useRef<Array<{
    top: string;
    left: string;
    width: string;
    height: string;
    background: string;
    xRange: [number, number];
    yRange: [number, number];
  }>>([]);

  if (typeof window !== 'undefined' && randomElements.current.length === 0) {
    for (let i = 0; i < 12; i++) {
      randomElements.current.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${4 + Math.random() * 8}px`,
        height: `${4 + Math.random() * 8}px`,
        background: `rgba(${150 + Math.random() * 105}, ${220 + Math.random() * 35}, 255, 0.5)`,
        xRange: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200],
        yRange: [(Math.random() - 0.5) * 150, (Math.random() - 0.5) * 150],
      });
    }
  }

  return (
    <div ref={containerRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      {/* Layer 1 – distant slow-moving shapes */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 30%, rgba(34,211,238,0.3) 0%, transparent 40%)',
          x: x1,
          y: y1,
          opacity: opacity1,
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
          x: useTransform(smoothMouseX, [0, 1], [-50, 50]),
          y: useTransform(smoothMouseY, [0, 1], [-30, 30]),
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,121,249,0.2) 0%, transparent 70%)',
          x: useTransform(smoothMouseX, [0, 1], [40, -40]),
          y: useTransform(smoothMouseY, [0, 1], [20, -20]),
        }}
      />

      {/* Layer 2 – medium-moving particles */}
      <motion.div
        style={{
          position: 'absolute',
          top: '40%',
          left: '30%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.3) 0%, transparent 70%)',
          x: useTransform(smoothMouseX, [0, 1], [-80, 80]),
          y: useTransform(smoothMouseY, [0, 1], [-60, 60]),
          opacity: opacity2,
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '70%',
          left: '60%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)',
          x: useTransform(smoothMouseX, [0, 1], [60, -60]),
          y: useTransform(smoothMouseY, [0, 1], [40, -40]),
          opacity: opacity2,
        }}
      />

      {/* Layer 3 – fast-moving small glints */}
      {randomElements.current.map((el, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: el.top,
            left: el.left,
            width: el.width,
            height: el.height,
            borderRadius: '50%',
            background: el.background,
            filter: 'blur(2px)',
            x: useTransform(smoothMouseX, [0, 1], el.xRange),
            y: useTransform(smoothMouseY, [0, 1], el.yRange),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.8, 0.4]),
          }}
        />
      ))}
    </div>
  );
}