import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-neutral-800 selection:text-white flex flex-col">

      {/* 1. HERO / BIO SECTION */}
      <main className="flex-grow flex flex-col justify-center p-6 md:p-12 lg:p-24 max-w-5xl mx-auto w-full">

        <div className="flex flex-col items-start mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
                Lee Ambrose Park
              </h1>
              <p className="text-neutral-500 text-sm md:text-base uppercase tracking-widest font-mono">
                Logistics // Analytics // Strategy
              </p>
            </div>

            {/* SOCIAL LINKS - CLEAN */}
            <div className="flex gap-6 text-sm font-medium text-neutral-500">
              <a href="https://www.linkedin.com/in/leepark/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="mailto:lap118@georgetown.edu" className="hover:text-white transition-colors">Email</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        {/* 2. NAVIGATION BUCKETS (CLEAN) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">

          {/* BUCKET I: OPERATIONAL (PROFESSIONAL) */}
          <Link href="/army-logistics" className="group block h-auto min-h-[16rem] bg-neutral-900/50 border border-neutral-800 rounded-lg p-8 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300">
            <div className="flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-neutral-950 rounded-md border border-neutral-800 group-hover:border-white/20 transition-colors">
                  <svg className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-neutral-600 group-hover:text-white transition-colors text-xl">→</span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  Professional Work
                </h2>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Operational logistics, Palantir Vantage architecture, and Power BI dashboard development for 13th CSSB.
                </p>
              </div>
            </div>
          </Link>

          {/* BUCKET II: ACADEMICS */}
          <Link href="/academics" className="group block h-auto min-h-[16rem] bg-neutral-900/50 border border-neutral-800 rounded-lg p-8 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300">
            <div className="flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-neutral-950 rounded-md border border-neutral-800 group-hover:border-white/20 transition-colors">
                  <svg className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-neutral-600 group-hover:text-white transition-colors text-xl">→</span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-2">
                  Academic Database
                </h2>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Georgetown MPS coursework, Capstone project on Automated Feasibility Analysis, and research artifacts.
                </p>
              </div>
            </div>
          </Link>

        </div>
      </main>

      {/* 3. SUBTLE FOOTER */}
      <footer className="p-8 text-center text-xs text-neutral-600">
        <p>&copy; {new Date().getFullYear()} Lee Ambrose Park. Built with Next.js & Tailwind.</p>
      </footer>

    </div>
  );
}