import { motion } from 'framer-motion';

export default function Grassland() {
  return (
    <section id="about" className="relative">
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-emerald-100 to-emerald-200 dark:from-emerald-900 dark:to-emerald-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">Tentang Pauds</h2>
            <p className="mt-3 max-w-2xl mx-auto text-zinc-700 dark:text-zinc-300">
              Server Discord untuk berkarya dan berjejaring. Showcase portofolio, kolaborasi, dan belajar bareng komunitas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Portfolio Showcase',
                desc: 'Bagikan karya terbaikmu dan dapatkan feedback yang membangun dari komunitas.'
              },
              {
                title: 'Kolaborasi Proyek',
                desc: 'Temukan rekan tim untuk hackathon, desain, dan proyek kreatif lainnya.'
              },
              {
                title: 'Belajar Bersama',
                desc: 'Ikut sesi diskusi mingguan dan sumber belajar yang terkurasi.'
              }
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-white/70 dark:bg-white/5 p-6 shadow-xl ring-1 ring-black/5 dark:ring-white/10 backdrop-blur"
              >
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{card.title}</h3>
                <p className="mt-2 text-zinc-700 dark:text-zinc-300">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* professional grass gradient base */}
        <div className="relative h-24">
          <div className="absolute -bottom-8 left-0 right-0 h-28 bg-gradient-to-t from-emerald-500 via-emerald-400 to-emerald-300 dark:from-emerald-800 dark:via-emerald-700 dark:to-emerald-600 rounded-t-[100%]" />
        </div>
      </div>
    </section>
  );
}
