export default function Home({ onLaunchModule1, onLaunchModule2 }: { onLaunchModule1: () => void, onLaunchModule2: () => void }) {
    return (
        <div className="bg-slate-50 text-slate-900 antialiased selection:bg-blue-200 min-h-screen">
            {/* Navigation Bar */}
            <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-600/20">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <span className="text-2xl font-extrabold tracking-tight text-slate-900">FutureForge <span className="text-blue-600">AI</span></span>
                    </div>
                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
                        <a href="#" className="text-blue-600 font-bold">Home</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">For Students</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">For Mentors</a>
                        <a href="#" className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-full transition-colors">Login</a>
                    </div>
                    {/* Mobile Menu Icon (Placeholder) */}
                    <div className="md:hidden flex items-center">
                        <button className="text-slate-600 hover:text-blue-600 focus:outline-none">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
                {/* Background Blur Accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-blue-200 rounded-full blur-[120px] opacity-40 -z-10 pointer-events-none"></div>
                
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider mb-8 shadow-sm">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span> 2030 Ready
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-slate-900 leading-[1.1]">
                        Bridge the Gap Between Education and the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">2030 Workforce.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Discover your strengths, build future-proof skills, and prove your employability in an AI-driven world.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#modules" className="px-10 py-5 font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/30 text-lg flex items-center gap-2 group">
                            Get Started <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                    </div>
                </div>
            </header>

            {/* Modules Grid Section */}
            <section id="modules" className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">The Employability Ecosystem</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Four intelligent modules designed to transform you from a student into a future-ready professional.</p>
                    </div>

                    {/* 2x2 Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        {/* Module 1: Discover Me */}
                        <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl border border-slate-200 p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 group flex flex-col">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            </div>
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-full">Module 1</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Discover Me</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed flex-grow">AI-powered behavioral and interest assessment to map your true potential and identify your core strengths.</p>
                            <button onClick={onLaunchModule1} className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition-colors w-max">
                                Launch Module 1 <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                        </div>

                        {/* Module 2: Grow Me */}
                        <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl border border-slate-200 p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 group flex flex-col">
                            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-lg">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                            </div>
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-full">Module 2</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Grow Me</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed flex-grow">Personalized career coaching, real-time skill gap analysis, and tailored learning roadmaps designed just for you.</p>
                            <button onClick={onLaunchModule2} className="inline-flex items-center gap-2 font-bold text-indigo-600 hover:text-indigo-800 transition-colors w-max">
                                Launch Module 2 <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                        </div>

                        {/* Module 3: Challenge Me */}
                        <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl border border-slate-200 p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 group flex flex-col">
                            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 group-hover:bg-purple-600 group-hover:text-white group-hover:shadow-lg">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                            </div>
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-full">Module 3</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Challenge Me</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed flex-grow">Ditch the tutorials. Build real-world industry projects alongside AI co-pilots and expert mentors.</p>
                            <a href="#" className="inline-flex items-center gap-2 font-bold text-purple-600 hover:text-purple-800 transition-colors w-max">
                                Launch Module 3 <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </a>
                        </div>

                        {/* Module 4: Showcase Me */}
                        <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl border border-slate-200 p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 group flex flex-col">
                            <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 group-hover:bg-cyan-600 group-hover:text-white group-hover:shadow-lg">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a2 2 0 11-4 0 2 2 0 014 0zM9 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-full">Module 4</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Showcase Me</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed flex-grow">Generate your dynamic 'Employability Passport' to prove your practical skills directly to recruiters.</p>
                            <a href="#" className="inline-flex items-center gap-2 font-bold text-cyan-600 hover:text-cyan-800 transition-colors w-max">
                                Launch Module 4 <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="bg-white border-t border-slate-200 py-10 mt-10">
                <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 font-medium">
                    <p>&copy; 2030 FutureForge AI. Building the workforce of tomorrow.</p>
                </div>
            </footer>
        </div>
    );
}
