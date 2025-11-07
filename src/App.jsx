import Navbar from './components/Navbar';
import HeroSky from './components/HeroSky';
import SceneLake from './components/SceneLake';
import Grassland from './components/Grassland';
import EarthFooter from './components/EarthFooter';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-700">
      <Navbar />
      {/* Sky container */}
      <HeroSky />
      {/* Lake container */}
      <SceneLake />
      {/* Grassland container */}
      <Grassland />
      {/* Earth footer container */}
      <EarthFooter />
    </div>
  );
}

export default App;
