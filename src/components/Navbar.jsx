import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

function useTheme() {
  const [theme, setTheme] = useState(
    () => (typeof window !== 'undefined' && localStorage.getItem('theme')) || 'light'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggle };
}

export default function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60 border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-white font-bold">
            D
          </div>
          <span className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">Discord</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Features</a>
          <a href="#download" className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Download</a>
          <a href="#safety" className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Safety</a>
          <a href="#support" className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Support</a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#download"
            className="hidden sm:inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500 transition-colors"
          >
            Open Discord
          </a>
        </div>
      </div>
    </header>
  );
}
