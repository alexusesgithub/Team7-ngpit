import { useState } from 'react';
import { 
  ChevronRight, ArrowRight, BrainCircuit, Rocket, Target, 
  Briefcase, Lightbulb, Zap, CheckCircle2, ChevronLeft, Sparkles
} from 'lucide-react';

export default function DiscoverMe({ onBackToHome }: { onBackToHome: () => void }) {
  const [currentStep, setCurrentStep] = useState(0); 
  // 0: Intro, 1: Q1-Q3, 2: Q4-Q6, 3: Q7-Q8, 4: Results

  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    { 
      id: 'q1', trait: 'Leadership',
      scenario: 'When a high-stakes project suddenly loses direction, you naturally...', 
      optionA: 'Wait for structured guidance and clear alignment from stakeholders to avoid errors.', 
      optionB: 'Take charge immediately, organize an emergency huddle, and propose a concrete pivot plan.',
      optionC: 'Quietly begin working on alternative solutions independently until the team reorganizes.' 
    },
    { 
      id: 'q2', trait: 'Communication',
      scenario: 'When explaining an intricate technical framework to non-tech executives, you...', 
      optionA: 'Dive straight into the underlying architecture, technical configurations, and edge cases.', 
      optionB: 'Use relatable metaphors, high-level visual analogies, and focus entirely on business impact.',
      optionC: 'Provide a concise summary memorandum and open the floor immediately to direct Q&A.' 
    },
    { 
      id: 'q3', trait: 'Creativity',
      scenario: 'Faced with a standard, highly repetitive operational task, your natural urge is to...', 
      optionA: 'Follow established processes meticulously to guarantee complete predictability and zero error.', 
      optionB: 'Build a novel automated script or experiment with a completely unconventional workflow shortcut.',
      optionC: 'Delegate parts of the process while analyzing where the operational bottleneck occurs.' 
    },
    { 
      id: 'q4', trait: 'Adaptability',
      scenario: 'Your client completely alters their core requirements halfway through a developmental milestone. You...', 
      optionA: 'Request a formal review meeting to document the friction and push back against scope creep.', 
      optionB: 'Pivot instantly, discarding old work cheerfully to design for the new specifications.',
      optionC: 'Evaluate how much of the existing infrastructure can be cleverly repurposed to fit the new goals.' 
    },
    { 
      id: 'q5', trait: 'Teamwork',
      scenario: 'During a tight 24-hour hackathon sprint, a team member suggests an entirely different architecture than yours. You prefer to...', 
      optionA: 'Defend your personal design choice heavily to save time and prevent project scope creep.', 
      optionB: 'Pause, actively listen to their reasoning, and try to build a hybrid version integrating both ideas.',
      optionC: 'Let them run with their idea while you focus on polishing a separate, isolated module.' 
    },
    { 
      id: 'q6', trait: 'Problem Solving',
      scenario: 'When you encounter a completely unfamiliar roadblock while optimizing a complex data structure or algorithm, you...', 
      optionA: 'Immediately ask for assistance from peers or mentors to get unstuck fast.', 
      optionB: 'Analyze the deep logs, experiment with edge cases, and research underlying documentation thoroughly.',
      optionC: 'Step away to clear your head, hoping a subconscious breakthrough will happen.' 
    },
    { 
      id: 'q7', trait: 'Risk Management',
      scenario: 'You discover a potential security vulnerability in your team\'s application just hours before a major presentation. You...', 
      optionA: 'Delay the presentation to ensure the system is completely locked down and secure.', 
      optionB: 'Implement a rapid, temporary patch and disclose the limitation transparently during the pitch.',
      optionC: 'Proceed with the presentation but focus the demo exclusively on the safe, functional modules.' 
    },
    { 
      id: 'q8', trait: 'Prioritization',
      scenario: 'You are given three equally important tasks but only have time to finish one today. You...', 
      optionA: 'Pick the one that delivers the highest immediate visible value to the end user.', 
      optionB: 'Choose the most technically difficult one to get it out of the way.',
      optionC: 'Ask your manager or team lead to make the final call on prioritization.' 
    },
  ];

  const getQuestionsForStep = () => {
    if (currentStep === 1) return questions.slice(0, 3);
    if (currentStep === 2) return questions.slice(3, 6);
    if (currentStep === 3) return questions.slice(6, 8);
    return [];
  };

  const handleSelect = (qId: string, option: string) => {
    setAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const currentQuestions = getQuestionsForStep();
  const isStepComplete = currentQuestions.every(q => answers[q.id]);

  const renderOption = (qId: string, optionKey: string, text: string) => {
    const isSelected = answers[qId] === optionKey;
    return (
      <button
        onClick={() => handleSelect(qId, optionKey)}
        className={`text-left w-full p-4 rounded-xl border-2 transition-all duration-200 group ${
          isSelected
            ? 'border-blue-600 bg-blue-50/80 shadow-sm ring-1 ring-blue-600/10'
            : 'border-slate-200 bg-slate-50/50 hover:border-blue-300 hover:bg-white'
        }`}
      >
        <div className="flex items-start gap-4">
          <div className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            isSelected ? 'border-blue-600 bg-blue-600' : 'border-slate-300 group-hover:border-blue-400'
          }`}>
            {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
          </div>
          <span className={`text-base font-medium leading-relaxed ${isSelected ? 'text-blue-900' : 'text-slate-700'}`}>
            {text}
          </span>
        </div>
      </button>
    );
  };

  // Extract traits mock
  const topStrengths = [
    { name: 'Strategic Adaptability', score: 94 },
    { name: 'Collaborative Problem Solving', score: 88 },
    { name: 'Action-Oriented Leadership', score: 85 }
  ];

  const recommendedCareers = [
    { role: 'AI Product Manager', reason: 'Your ability to navigate ambiguity and communicate complex ideas perfectly aligns with steering AI product visions.' },
    { role: 'Innovation Consultant', reason: 'Your natural inclination to build novel solutions and pivot quickly makes you ideal for driving corporate innovation.' },
    { role: 'Venture Architect', reason: 'Blending strategic risk-taking with rapid execution, you have the exact profile needed to build and scale new ventures.' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 pb-20">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        
        {/* Intro */}
        {currentStep === 0 && (
          <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-700 mt-10">
            <div className="inline-flex items-center justify-center p-5 bg-white rounded-full mb-8 shadow-md border border-slate-200">
              <BrainCircuit className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
              Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Potential</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Our AI-powered assessment blind tests your behavioral responses to map you to the future-proof careers of 2030.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mx-auto">
              <button 
                onClick={() => setCurrentStep(1)}
                className="px-10 py-5 font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg shadow-blue-600/30 hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg flex items-center gap-2"
              >
                Start Assessment <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={onBackToHome}
                className="px-8 py-5 font-bold text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-full shadow-sm hover:shadow-md hover:text-blue-600 transition-all duration-300 text-lg flex items-center gap-2"
              >
                <ChevronLeft className="w-5 h-5" /> Back to Home
              </button>
            </div>
          </div>
        )}

        {/* Assessment Steps */}
        {currentStep > 0 && currentStep < 4 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-500">
            {/* Progress */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Step {currentStep} of 3</span>
                <span className="text-sm font-medium text-slate-500">
                  {currentStep === 1 ? 'Questions 1-3' : currentStep === 2 ? 'Questions 4-6' : 'Questions 7-8'}
                </span>
              </div>
              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-500"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {currentQuestions.map((q, i) => (
                <div key={q.id} className="bg-white shadow-sm border border-slate-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow">
                  {/* Note: Traits are intentionally HIDDEN in the UI per requirements */}
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 leading-snug">
                    <span className="text-blue-600 mr-2">Q{((currentStep - 1) * 3) + i + 1}.</span> {q.scenario}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {renderOption(q.id, 'A', q.optionA)}
                    {renderOption(q.id, 'B', q.optionB)}
                    {renderOption(q.id, 'C', q.optionC)}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="mt-10 flex justify-between items-center pt-6 border-t border-slate-200">
              <button 
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-6 py-3 rounded-full font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors flex items-center gap-2 group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back
              </button>
              
              <button 
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={!isStepComplete}
                className={`px-8 py-3.5 rounded-full font-bold transition-all flex items-center gap-2 ${
                  !isStepComplete
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-md shadow-blue-600/20 hover:shadow-lg'
                }`}
              >
                {currentStep === 3 ? 'Submit Assessment' : 'Next'} <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Results */}
        {currentStep === 4 && (
          <div className="animate-in fade-in zoom-in-95 duration-700">
            <div className="text-center mb-12 mt-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold uppercase tracking-widest mb-6">
                <Sparkles size={16} className="text-blue-500" /> Assessment Complete
              </div>
              <h1 className="text-3xl font-bold text-slate-500 mb-2">Your AI Employability Profile</h1>
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Future Builder</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Strengths */}
              <div className="md:col-span-1 bg-white shadow-sm hover:shadow-md transition-shadow border border-slate-200 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6 text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                  <Zap className="text-yellow-500" size={24} /> Top Strengths
                </div>
                <div className="space-y-6">
                  {topStrengths.map((str, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm font-bold mb-2">
                        <span className="text-slate-700">{str.name}</span>
                        <span className="text-blue-600">{str.score}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${str.score}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Careers */}
              <div className="md:col-span-2 bg-white shadow-sm hover:shadow-md transition-shadow border border-slate-200 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6 text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                  <Rocket className="text-blue-600" size={24} /> Recommended Careers
                </div>
                <div className="space-y-4">
                  {recommendedCareers.map((career, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors flex gap-4">
                      <div className="bg-white p-3 rounded-xl text-blue-600 shadow-sm border border-slate-200 h-max">
                        {idx === 0 ? <Target size={24} /> : idx === 1 ? <Lightbulb size={24} /> : <Briefcase size={24} />}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{career.role}</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{career.reason}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center mt-12 gap-4">
              <button 
                onClick={() => {
                  setAnswers({});
                  setCurrentStep(1);
                }}
                className="px-8 py-3 rounded-full font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm flex items-center justify-center gap-2 group"
              >
                <Sparkles size={18} className="group-hover:animate-pulse" /> Restart Assessment
              </button>
              <button 
                onClick={onBackToHome}
                className="px-8 py-3 rounded-full font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm shadow-blue-600/30 hover:shadow-md flex items-center justify-center gap-2 group"
              >
                <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
