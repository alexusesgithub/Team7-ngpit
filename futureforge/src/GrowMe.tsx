import React, { useState, useEffect } from 'react';

type Skill = { name: string; currentLevel: number; targetLevel: number };
type RoadmapStep = { stepNumber: number; title: string; description: string };
type CareerData = { skills: Skill[]; roadmap: RoadmapStep[] };

export default function GrowMe({ onBackToHome }: { onBackToHome: () => void }) {
  const [careerData, setCareerData] = useState<CareerData | null>(null);
  const [isThinking, setIsThinking] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/generate-roadmap', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ targetCareer: "AI Product Manager" })
        });
        
        if (!response.ok) throw new Error('API Error');
        
        const data = await response.json();
        setCareerData(data);
      } catch (err) {
        console.error('Failed to fetch from AI backend:', err);
        setError(true);
      } finally {
        setIsThinking(false);
      }
    };

    fetchRoadmap();
  }, []);

  return (
    <div className="bg-neutral-950 text-slate-200 antialiased min-h-screen selection:bg-indigo-500/30 font-sans">
      {/* Navbar */}
      <nav className="bg-neutral-950/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">Grow<span className="text-indigo-400">Me</span></span>
          </div>
          <button onClick={onBackToHome} className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors">
            Exit Module
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Active Goal Header */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
              Active Goal
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">AI Product Manager</h1>
          </div>
        </section>

        {/* Loading State */}
        {isThinking && (
          <div className="flex flex-col items-center justify-center py-24 space-y-6">
            <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center animate-pulse relative">
               <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-xl animate-ping"></div>
               <svg className="w-10 h-10 text-indigo-400 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
               </svg>
            </div>
            <p className="text-indigo-300 font-medium tracking-wide animate-pulse">AI is analyzing your career trajectory...</p>
          </div>
        )}

        {/* Error / Fallback State */}
        {error && !isThinking && (
          <div className="bg-red-500/5 border border-red-500/10 rounded-3xl p-8 text-center max-w-2xl mx-auto mt-12">
             <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                 <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
             </div>
             <h3 className="text-xl font-medium text-white mb-3 tracking-tight">Service Unavailable</h3>
             <p className="text-red-300/80 leading-relaxed">Our AI Mentor is currently analyzing global market trends. Please try again in a moment.</p>
          </div>
        )}

        {/* Dynamic AI Data Render */}
        {!isThinking && !error && careerData && (
          <>
            {/* Section 1: AI Career Coach & Goal */}
            <section>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-700"></div>
                <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/25">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">AI Coach Insight</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Based on my real-time analysis of the AI Product Manager market, here is your customized growth roadmap and skill gap evaluation. Let's focus on narrowing these critical gaps.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Skill Gap Analysis */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6 tracking-tight">Skill Gap Analysis</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {careerData.skills.map((skill, index) => (
                  <div key={index} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors">
                    <div className="flex justify-between items-end mb-3">
                      <div>
                        <h4 className="text-white font-medium mb-1">{skill.name}</h4>
                        <p className="text-xs text-neutral-500">Current: {skill.currentLevel}% • Target: {skill.targetLevel}%</p>
                      </div>
                      <span className="text-indigo-400 font-semibold">{skill.currentLevel}%</span>
                    </div>
                    <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-1000 ease-out" style={{ width: `${skill.currentLevel}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Learning Roadmap */}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">Your Custom Roadmap</h2>
              <div className="space-y-6">
                {careerData.roadmap.map((step, index) => (
                  <div key={index} className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-colors duration-300 ${index === 0 ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]' : 'bg-neutral-800 border border-neutral-700 text-neutral-400 group-hover:border-indigo-500/50 group-hover:text-indigo-400'}`}>
                        {step.stepNumber}
                      </div>
                      {index < careerData.roadmap.length - 1 && (
                        <div className={`w-[2px] h-24 mt-2 rounded-full transition-colors duration-300 ${index === 0 ? 'bg-gradient-to-b from-indigo-500/50 to-neutral-800' : 'bg-neutral-800'}`}></div>
                      )}
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex-grow group-hover:bg-white/[0.04] transition-all duration-300 transform group-hover:-translate-y-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-medium text-white">{step.title}</h3>
                        {index === 0 && <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full font-medium">Next Step</span>}
                      </div>
                      <p className="text-neutral-500 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
