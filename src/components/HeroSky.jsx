import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function HeroSky() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[80vh] w-full">
        {/* 3D Spline cover */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Soft gradient overlays for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-white/80 dark:to-zinc-950/90" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 dark:from-zinc-950/70 via-transparent to-transparent" />

        {/* Headline */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            Pauds — Server komunitas & portofolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto"
          >
            Tempat berkumpul, berbagi karya, dan membangun jejaring. Gabung ke server Discord kami dan temukan hal-hal seru setiap hari.
          </motion.p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="https://discord.gg/rTA4udVK"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-500 transition-colors"
            >
              Buka Discord Pauds
            </a>
            <a href="#about" className="inline-flex items-center rounded-full bg-white/90 dark:bg-white/10 text-zinc-900 dark:text-zinc-100 px-6 py-3 font-medium hover:bg-white dark:hover:bg-white/20 transition-colors">
              Tentang Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
