import { useState } from 'react';
import Home from './Home';
import DiscoverMe from './DiscoverMe';
import GrowMe from './GrowMe';

function App() {
  const [currentView, setCurrentView] = useState('home');

  if (currentView === 'home') {
    return (
      <Home 
        onLaunchModule1={() => setCurrentView('discover')} 
        onLaunchModule2={() => setCurrentView('grow')} 
      />
    );
  }

  if (currentView === 'discover') {
    return <DiscoverMe onBackToHome={() => setCurrentView('home')} />;
  }

  if (currentView === 'grow') {
    return <GrowMe onBackToHome={() => setCurrentView('home')} />;
  }

  return null;
}

export default App;
