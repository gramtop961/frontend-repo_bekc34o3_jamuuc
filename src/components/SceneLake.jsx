import { motion } from 'framer-motion';

function Duck({ delay = 0, reverse = false }) {
  return (
    <motion.div
      initial={{ x: reverse ? '100%' : '-20%' }}
      animate={{ x: reverse ? '-20%' : '100%' }}
      transition={{ duration: 22, delay, repeat: Infinity, ease: 'linear' }}
      className="absolute bottom-8"
    >
      <div className="relative">
        <div className="h-5 w-8 bg-yellow-300 rounded-full shadow" />
        <div className="absolute -right-2 top-1 h-3 w-3 bg-yellow-300 rounded-full" />
        <div className="absolute -right-3 top-1 h-2 w-3 bg-orange-400 rounded-r-full" />
        <div className="absolute -bottom-2 left-2 h-2 w-3 bg-orange-300 rounded-b-full animate-[wiggle_0.8s_ease-in-out_infinite]" />
        <div className="absolute -bottom-2 left-4 h-2 w-3 bg-orange-300 rounded-b-full animate-[wiggle_0.8s_ease-in-out_infinite]" />
      </div>
    </motion.div>
  );
}

export default function SceneLake() {
  return (
    <section className="relative">
      <div className="relative h-[60vh] w-full overflow-hidden bg-gradient-to-b from-sky-200/60 to-sky-300/60 dark:from-slate-800 dark:to-slate-900">
        {/* Lake surface */}
        <div className="absolute inset-0">
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-sky-300/70 to-sky-500/70 dark:from-slate-700 dark:to-slate-900">
            {/* gentle waves */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px w-full bg-white/30 dark:bg-white/10"
                style={{ top: `${i * 7}%` }}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 4 + i, repeat: Infinity }}
              />
            ))}
          </div>

          {/* Ducks */}
          <Duck delay={0.5} />
          <Duck delay={3} reverse />
          <Duck delay={6} />
        </div>

        {/* Lake heading */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">Stay close with your community</h2>
          <p className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300">
            Voice, video, and text that feel effortless. Hop in to hang out, collaborate, or just relax together.
          </p>
        </div>
      </div>
    </section>
  );
}
