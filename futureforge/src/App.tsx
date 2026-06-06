import { useState } from 'react';
import Home from './Home';
import DiscoverMe from './DiscoverMe';

function App() {
  const [currentView, setCurrentView] = useState('home');

  if (currentView === 'home') {
    return <Home onLaunchModule1={() => setCurrentView('discover')} />;
  }

  if (currentView === 'discover') {
    return <DiscoverMe onBackToHome={() => setCurrentView('home')} />;
  }

  return null;
}

export default App;
