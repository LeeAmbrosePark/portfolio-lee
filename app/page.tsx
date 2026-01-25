import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-white/20 flex flex-col">
      
      {/* 1. TOP STATUS BAR */}
      <header className="border-b border-neutral-800 p-6 flex justify-between items-center text-[10px] tracking-widest uppercase text-neutral-500">
        <div>Lee_Ambrose_Park // Portfolio_v1.0</div>
        <div className="flex gap-6">
          <span>Loc: U.S.A.</span>
          <span className="text-white animate-pulse">● System_Online</span>
        </div>
      </header>

      {/* 2. MAIN INTRO SECTION */}
      <main className="flex-grow flex flex-col justify-center p-6 md:p-12 lg:p-24 max-w-7xl mx-auto w-full">
        
        <div className="mb-16 flex flex-col md:flex-row gap-12 items-center md:items-start">
          
          {/* PROFILE PHOTO */}
          <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-full overflow-hidden border-2 border-neutral-800 group">
            <Image 
              src="/my-photo.jpg" 
              alt="Lee Ambrose Park"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>

          {/* HEADLINE TEXT */}
          <div className="flex flex-col justify-center h-full pt-4">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">
              LOGISTICS <span className="text-neutral-600">X</span> DATA
            </h1>
            <p className="text-sm md:text-lg text-neutral-400 max-w-2xl leading-relaxed">
              Bridging the tactical edge with systems architecture. <br/>
              U.S. Army Logistics Officer & Georgetown Supply Chain Master's Candidate.
            </p>
          </div>
        </div>

        {/* 3. THE TWO BUCKETS (NAVIGATION) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          {/* BUCKET I: OPERATIONAL */}
          <Link href="/army-logistics" className="group relative block h-64 md:h-80 border border-neutral-800 bg-neutral-950 p-8 hover:bg-white hover:border-white transition-all duration-300">
            <div className="flex flex-col h-full justify-between relative z-10">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-black transition-colors">
                  Bucket_01
                </span>
                <span className="text-xl group-hover:text-black transition-colors">↗</span>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-2 group-hover:text-black transition-colors">
                  OPERATIONAL LOGISTICS
                </h2>
                <p className="text-xs text-neutral-500 group-hover:text-neutral-800 transition-colors max-w-xs">
                  13th CSSB Land & Ammo. Palantir Vantage Architecture. Field Logistics Leadership.
                </p>
              </div>
            </div>
          </Link>

          {/* BUCKET II: ACADEMICS */}
          <Link href="/academics" className="group relative block h-64 md:h-80 border border-neutral-800 bg-neutral-950 p-8 hover:bg-white hover:border-white transition-all duration-300">
            <div className="flex flex-col h-full justify-between relative z-10">
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-black transition-colors">
                  Bucket_02
                </span>
                <span className="text-xl group-hover:text-black transition-colors">↗</span>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-2 group-hover:text-black transition-colors">
                  ACADEMIC RIGOR
                </h2>
                <p className="text-xs text-neutral-500 group-hover:text-neutral-800 transition-colors max-w-xs">
                  Currently working on: Automated Feasibility Analysis (C.U.L.T.).
                </p>
              </div>
            </div>
          </Link>

        </div>
      </main>

      {/* 4. FOOTER */}
      <footer className="border-t border-neutral-800 p-6 text-[10px] text-neutral-600 uppercase tracking-widest flex justify-between">
        <div>© 2026</div>
        <div className="flex gap-4">
          <a 
            href="https://www.linkedin.com/in/leepark/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a 
            href="mailto:lap118@georgetown.edu" 
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </footer>

    </div>
  );
}
