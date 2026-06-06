import { ChevronLeft, CheckCircle2 } from 'lucide-react';

export default function ShowcaseMe({ onBackToHome }: { onBackToHome: () => void }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-200 pb-20">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        
        {/* Intro */}
        <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-700 mt-10">
          <div className="inline-flex items-center justify-center p-5 bg-white rounded-full mb-8 shadow-md border border-slate-200">
            <CheckCircle2 className="w-12 h-12 text-cyan-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
            Showcase <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Me</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Generate your dynamic 'Employability Passport' to prove your practical skills directly to recruiters.
          </p>
          
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200 mb-12">
            <p className="text-lg text-slate-500 font-medium">
              🚧 This module is currently under construction. Please check back later!
            </p>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={onBackToHome}
              className="px-8 py-4 font-bold text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-full shadow-sm hover:shadow-md hover:text-cyan-600 transition-all duration-300 text-lg flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" /> Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
