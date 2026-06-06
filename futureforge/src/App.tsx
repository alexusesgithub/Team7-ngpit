import { useState } from 'react';
import Home from './Home';
import DiscoverMe from './DiscoverMe';
import GrowMe from './GrowMe';
import ChallengeMe from './ChallengeMe';
import ShowcaseMe from './ShowcaseMe';

function App() {
  const [currentView, setCurrentView] = useState('home');

  if (currentView === 'home') {
    return (
      <Home 
        onLaunchModule1={() => setCurrentView('discover')}
        onLaunchModule2={() => setCurrentView('grow')}
        onLaunchModule3={() => setCurrentView('challenge')}
        onLaunchModule4={() => setCurrentView('showcase')}
      />
    );
  }

  if (currentView === 'discover') {
    return <DiscoverMe onBackToHome={() => setCurrentView('home')} />;
  }

  if (currentView === 'grow') {
    return <GrowMe onBackToHome={() => setCurrentView('home')} />;
  }

  if (currentView === 'challenge') {
    return <ChallengeMe onBackToHome={() => setCurrentView('home')} />;
  }

  if (currentView === 'showcase') {
    return <ShowcaseMe onBackToHome={() => setCurrentView('home')} />;
  }

  return null;
}

export default App;
