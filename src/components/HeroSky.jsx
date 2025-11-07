import { motion } from 'framer-motion';

export default function HeroSky() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[70vh] w-full transition-colors duration-700 bg-gradient-to-b from-sky-200 via-sky-100 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
        {/* Sun / Moon */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute right-10 top-10"
        >
          <div className="relative">
            <div className="h-20 w-20 rounded-full bg-amber-300 shadow-[0_0_60px_20px_rgba(251,191,36,0.35)] dark:hidden" />
            <div className="hidden dark:block h-16 w-16 rounded-full bg-slate-200/90 shadow-[0_0_50px_15px_rgba(226,232,240,0.25)]" />
          </div>
        </motion.div>

        {/* Clouds */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ x: -200, opacity: 0.6 }}
              animate={{ x: ['-20%', '120%'] }}
              transition={{ duration: 30 + i * 6, repeat: Infinity, ease: 'linear' }}
              style={{ top: `${10 + i * 12}%`, left: `${-20 + i * 10}%` }}
            >
              <div className="h-10 sm:h-12 md:h-14 bg-white/80 dark:bg-white/10 backdrop-blur rounded-full px-10 flex items-center shadow-lg">
                <div className="h-6 w-6 rounded-full bg-white/80 dark:bg-white/10 -ml-6" />
                <div className="h-8 w-8 rounded-full bg-white/80 dark:bg-white/10 -ml-3" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Headline */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            Imagine a place...
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto"
          >
            ...where you can belong to a school club, a gaming group, or a worldwide art community.
            Where just you and a handful of friends can spend time together.
          </motion.p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#download" className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-500 transition-colors">Download for Windows</a>
            <a href="#browser" className="inline-flex items-center rounded-full bg-zinc-900/90 dark:bg-white/10 text-white dark:text-zinc-100 px-6 py-3 font-medium hover:bg-zinc-800 dark:hover:bg-white/20 transition-colors">Open Discord in your browser</a>
          </div>
        </div>
      </div>
    </section>
  );
}
