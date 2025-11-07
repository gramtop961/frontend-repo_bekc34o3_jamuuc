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
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#download" className="hover:text-white">Download</a></li>
              <li><a href="#nitro" className="hover:text-white">Nitro</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#jobs" className="hover:text-white">Jobs</a></li>
              <li><a href="#news" className="hover:text-white">Newsroom</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li><a href="#college" className="hover:text-white">College</a></li>
              <li><a href="#support" className="hover:text-white">Support</a></li>
              <li><a href="#safety" className="hover:text-white">Safety</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Policies</h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li><a href="#terms" className="hover:text-white">Terms</a></li>
              <li><a href="#privacy" className="hover:text-white">Privacy</a></li>
              <li><a href="#cookies" className="hover:text-white">Cookie Settings</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} Discord — Unofficial concept page.
        </div>
      </div>
    </footer>
  );
}
