import { motion } from 'framer-motion';

export default function Grassland() {
  return (
    <section className="relative">
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Create an invite-only space',
                desc: 'Servers are organized into channels where you can collaborate, share, or just talk about your day without clogging up a group chat.'
              },
              {
                title: 'From few to a fandom',
                desc: 'Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.'
              },
              {
                title: 'Where hanging out is easy',
                desc: 'Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk.'
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

        {/* rolling hills */}
        <div className="relative h-24">
          <div className="absolute -bottom-8 left-0 right-0 h-28 bg-gradient-to-t from-emerald-500 to-emerald-400 dark:from-emerald-800 dark:to-emerald-700 rounded-t-[100%]" />
        </div>
      </div>
    </section>
  );
}
