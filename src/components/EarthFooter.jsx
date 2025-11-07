export default function EarthFooter() {
  return (
    <footer className="relative">
      <div className="relative w-full bg-gradient-to-b from-blue-900 via-blue-950 to-black text-zinc-100">
        {/* Earth curve */}
        <div className="relative h-44 overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[140%] h-[140%] rounded-[50%] bg-gradient-to-b from-emerald-700 via-blue-800 to-blue-900 opacity-90 shadow-[0_-40px_120px_rgba(59,130,246,0.35)]" />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Pauds</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li><a href="https://discord.gg/rTA4udVK" target="_blank" rel="noreferrer" className="hover:text-white">Discord</a></li>
              <li><a href="#about" className="hover:text-white">Tentang Kami</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Komunitas</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li><a href="#events" className="hover:text-white">Event</a></li>
              <li><a href="#collab" className="hover:text-white">Kolaborasi</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Sumber Daya</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li><a href="#guides" className="hover:text-white">Panduan</a></li>
              <li><a href="#support" className="hover:text-white">Dukungan</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li><a href="#terms" className="hover:text-white">Ketentuan</a></li>
              <li><a href="#privacy" className="hover:text-white">Privasi</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} Pauds — Komunitas & portofolio.
        </div>
      </div>
    </footer>
  );
}
