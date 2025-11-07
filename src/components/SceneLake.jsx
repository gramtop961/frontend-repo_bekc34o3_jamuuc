import { motion } from 'framer-motion';

export default function SceneLake() {
  return (
    <section className="relative">
      <div className="relative h-[60vh] w-full overflow-hidden bg-gradient-to-b from-sky-200/60 to-sky-300/60 dark:from-slate-800 dark:to-slate-900">
        {/* Lake surface */}
        <div className="absolute inset-0">
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-sky-300/70 to-sky-500/70 dark:from-slate-700 dark:to-slate-900">
            {/* layered waves */}
            {Array.from({ length: 14 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[140%] left-1/2 -translate-x-1/2"
                style={{ bottom: `${i * 3.5}%` }}
                initial={{ x: 0 }}
                animate={{ x: [ -20, 20, -20 ] }}
                transition={{ duration: 6 + i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div
                  className="h-8 rounded-[100%]"
                  style={{
                    background:
                      'radial-gradient(100% 60% at 50% 100%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.0) 70%)',
                    opacity: 0.35 - i * 0.02,
                    filter: 'blur(0.5px)'
                  }}
                />
              </motion.div>
            ))}

            {/* subtle glints */}
            {Array.from({ length: 18 }).map((_, i) => (
              <motion.div
                key={`glint-${i}`}
                className="absolute h-px bg-white/40 dark:bg-white/10"
                style={{ width: `${20 + (i % 6) * 8}%`, left: `${(i * 13) % 100}%`, bottom: `${10 + (i % 10) * 4}%` }}
                initial={{ opacity: 0.2 }}
                animate={{ opacity: [0.1, 0.6, 0.1] }}
                transition={{ duration: 3 + (i % 5), repeat: Infinity }}
              />
            ))}
          </div>
        </div>

        {/* Lake heading */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">Danau tenang untuk berkumpul</h2>
          <p className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300">
            Gelombang halus yang menenangkan — tempat yang pas untuk ngobrol santai dan membangun komunitas.
          </p>
        </div>
      </div>
    </section>
  );
}
