import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">

      <main className="flex-grow flex flex-col justify-center p-6 md:p-12 lg:p-24 max-w-4xl mx-auto w-full">

        <div className="mb-16">
          <h1 className="text-3xl md:text-5xl font-normal tracking-tight text-black mb-4">
            Lee Ambrose Park
          </h1>
          <p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-2xl mb-6">
            Army logistics officer and Georgetown graduate student studying supply chain management. I build tools that help units move faster and plan smarter.
          </p>

          <div className="flex gap-6 text-sm text-neutral-400">
            <a href="https://www.linkedin.com/in/leepark/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors underline decoration-neutral-300 hover:decoration-black">LinkedIn</a>
            <a href="mailto:lap118@georgetown.edu" className="hover:text-black transition-colors underline decoration-neutral-300 hover:decoration-black">Email</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

          <Link href="/army-logistics" className="group block border border-neutral-200 rounded-lg p-8 hover:border-black transition-colors">
            <div className="flex flex-col h-full justify-between min-h-[10rem]">
              <div className="mb-6">
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-normal text-black mb-2 group-hover:underline">
                  Professional Work
                </h2>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Palantir Vantage architecture, Power BI dashboards, and logistics automation for 13th CSSB.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/academics" className="group block border border-neutral-200 rounded-lg p-8 hover:border-black transition-colors">
            <div className="flex flex-col h-full justify-between min-h-[10rem]">
              <div className="mb-6">
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-normal text-black mb-2 group-hover:underline">
                  Georgetown Coursework
                </h2>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  MPS in Supply Chain Management. Coursework, capstone project, and all my academic deliverables.
                </p>
              </div>
            </div>
          </Link>

        </div>
      </main>

      <footer className="p-8 text-center text-xs text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Lee Ambrose Park</p>
      </footer>

    </div>
  );
}