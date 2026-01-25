import CourseCard from '@/components/CourseCard';
import Link from 'next/link';

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-black text-slate-300 font-mono selection:bg-white/20">
      
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto p-8 md:p-12 border-b border-neutral-800">
        <div className="flex justify-between items-start">
            <div>
                <Link href="/" className="text-[10px] text-neutral-500 hover:text-white uppercase tracking-widest mb-6 inline-block transition-colors">
                    // RETURN_ROOT
                </Link>
                <p className="text-sm text-neutral-500 max-w-xl uppercase tracking-wide mb-2">
                  Georgetown University // Master of Professional Studies
                </p>
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
                  SUPPLY CHAIN MANAGEMENT
                </h1>
            </div>
            {/* REMOVED GPA SECTION AS REQUESTED */}
            <div className="hidden md:block text-right">
                <div className="text-[10px] text-white uppercase mt-1">CLASS_OF_2026</div>
            </div>
        </div>
      </div>

      {/* FEATURED: CAPSTONE */}
      <section className="max-w-7xl mx-auto p-8 md:p-12 mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-2 h-2 bg-white"></div>
          <h2 className="text-sm text-white font-bold uppercase tracking-widest">
            Current Operation: The Capstone
          </h2>
        </div>

        <div className="bg-neutral-950 border border-neutral-800 p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4">
             {/* CHANGED TO GREEN */}
             <span className="text-[10px] border border-green-900/30 px-2 py-1 text-green-500 bg-green-900/10">STATUS: IN_PROGRESS</span>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">
                Automated Feasibility Analysis
              </h3>
              {/* INCREASED FONT SIZE */}
              <p className="text-sm text-neutral-400 leading-relaxed mb-8 max-w-2xl">
                Transportation planners at the tactical edge of Army logistics have relied for too long on referencing random excel spreadsheets, pdfs, and word docs to gain insight into adjacent units (customer) requests for support. This project architects a secure bridge between the demand signal (OMNI/Loadout TMRs) and the supply constraint (Palantir Vantage CULT Ontology). By establishing an API handshake between these distinct ecosystems, we move from passive scheduling to predictive, constraint-based planning.
              </p>
              
              <div className="flex gap-4">
                <Link href="/army-logistics" className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors">
                  View Architecture Blueprint
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="md:w-1/3 border-l border-neutral-800 pl-8 md:pl-12 flex flex-col justify-center space-y-8">
              <div>
                <h4 className="text-[10px] text-neutral-600 uppercase tracking-widest mb-3">Tech Stack</h4>
                {/* INCREASED FONT SIZE */}
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li>// Palantir Vantage</li>
                  <li>// Python / PySpark</li>
                  <li>// TypeScript Functions</li>
                  <li>// OMNI Loadout API</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSEWORK GRID */}
      <section className="max-w-7xl mx-auto p-8 md:p-12 border-t border-neutral-800">
        <div className="flex items-center gap-4 mb-12">
           <div className="w-2 h-2 bg-neutral-800"></div>
           <h2 className="text-sm text-white font-bold uppercase tracking-widest">
             Coursework Ledger
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Note: Ensure CourseCard.tsx is updated to accept color classes if needed, 
              or we update the tags prop here. Assuming CourseCard handles styling internally.
              For now, I'm passing standard props. If you want these tags GREEN, 
              we might need to tweak CourseCard.tsx next. */}
          
          <CourseCard 
            code="MPSC-5530"
            title="Cost & Financial Analysis"
            category="Core Finance"
            description="Developed valuation models to assess supply chain investments. I dedicated 700+ hours to mastering the quantitative foundations (valuation, break-even analysis, liquidity risk) to aggressively bridge a non-technical background—a critical investment in analytical rigor."
            tags={['Valuation', 'Excel Modeling', 'Risk Analysis']}
          />

          <CourseCard 
            code="MPPM-6820"
            title="AI Project Management"
            category="Dual Enrollment"
            description="Explored integration of Large Language Models (LLMs) in defense workflows. Focused on prompt engineering strategies for secure environments (IL5/IL6) and managing lifecycle of AI products."
            tags={['LLMs', 'Prompt Eng', 'Agile', 'Defense Tech']}
          />

          <CourseCard 
            code="MPSC-6715"
            title="Securing Digital Supply Chain"
            category="Cybersecurity"
            description="Analyzed vulnerabilities in global logistics networks, focusing on 'Software Bill of Materials' (SBOM) and risks of hardware interdiction. Developed frameworks for auditing third-party vendors."
            tags={['Cybersecurity', 'Risk Mgmt', 'SBOM', 'Auditing']}
          />

          <CourseCard 
             code="MPSC-7000"
            title="Strategic Sourcing"
            category="Strategy"
            description="Studied shift from transactional purchasing to strategic partnerships. Created sourcing strategies for high-tech components that mitigated geopolitical risk while maintaining cost efficiency."
            tags={['Procurement', 'Negotiation', 'Supplier Mgmt']}
          />

          <CourseCard 
            code="MPSC-5565"
            title="SC Project Management"
            category="Operations"
            description="Utilized network optimization techniques to design resilient distribution networks. Managed simulated complex projects using Critical Path Method (CPM) and resource leveling."
            tags={['Network Design', 'Project Mgmt', 'CPM']}
          />

          <CourseCard 
             code="MPSC-7760"
            title="High-Stakes Negotiations"
            category="Elective"
            description="Practiced advanced negotiation tactics for multi-party disputes and high-value contracts. Focused on value creation (expanding the pie) rather than zero-sum operational attrition."
            tags={['Soft Skills', 'Conflict Resolution', 'Contracting']}
          />
          
          <CourseCard 
             code="MPSC-5520"
            title="Operations Management"
            category="Core Ops"
            description="Focused on process analysis, bottleneck identification, and Six Sigma methodologies. Modeled throughput efficiency for complex distribution centers."
            tags={['Six Sigma', 'Process Flow', 'Throughput']}
          />

          <CourseCard 
             code="MPSC-6000"
            title="Analytics & Technology"
            category="Data Science"
            description="Leveraged SQL and Python for supply chain decision making. Built predictive models to forecast demand and optimize inventory placement strategies."
            tags={['SQL', 'Python', 'Predictive Modeling']}
          />

          <CourseCard 
             code="MPSC-7800"
            title="Distribution Strategy"
            category="Logistics"
            description="Designed last-mile delivery networks and analyzed warehousing footprints. Evaluated trade-offs between centralized vs. decentralized distribution models."
            tags={['Last Mile', 'Warehousing', 'Network Design']}
          />

           <CourseCard 
             code="MPSC-5000"
            title="Ethics & CSR"
            category="Core Ethics"
            description="Examined ethical implications of global supply chains, focusing on labor rights, sustainability, and ESG compliance in modern procurement."
            tags={['ESG', 'Sustainability', 'Compliance']}
          />

        </div>
      </section>
    </div>
  );
}
