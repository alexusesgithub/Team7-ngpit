import { useState } from 'react';
import Home from './Home';
import DiscoverMe from './DiscoverMe';
import ChallengeMe from './ChallengeMe';

function App() {
  const [currentView, setCurrentView] = useState('home');

  if (currentView === 'home') {
    return <Home onLaunchModule1={() => setCurrentView('discover')} onLaunchModule3={() => setCurrentView('challenge')} />;
  }

  if (currentView === 'discover') {
    return <DiscoverMe onBackToHome={() => setCurrentView('home')} />;
  }

  if (currentView === 'challenge') {
    return <ChallengeMe onBackToHome={() => setCurrentView('home')} />;
  }

  return null;
}

export default App;
