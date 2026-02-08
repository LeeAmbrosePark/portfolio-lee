'use client';

import CourseTable, { Course } from '@/components/CourseTable';
import Link from 'next/link';

const COURSES: Course[] = [
  {
    code: "MPSC-5530",
    title: "Cost & Financial Analysis",
    category: "Core Finance",
    grade: "A",
    semester: "Fall 2024",
    description: "Developed valuation models to assess supply chain investments. I dedicated 700+ hours to mastering the quantitative foundations (valuation, break-even analysis, liquidity risk) to aggressively bridge a non-technical background—a critical investment in analytical rigor.",
    tags: ['Valuation', 'Excel Modeling', 'Risk Analysis']
  },
  {
    code: "MPPM-6820",
    title: "AI Project Management",
    category: "Dual Enrollment",
    grade: "A",
    semester: "Spring 2025",
    description: "Explored integration of Large Language Models (LLMs) in defense workflows. Focused on prompt engineering strategies for secure environments (IL5/IL6) and managing lifecycle of AI products.",
    tags: ['LLMs', 'Prompt Eng', 'Agile', 'Defense Tech']
  },
  {
    code: "MPSC-6715",
    title: "Securing Digital Supply Chain",
    category: "Cybersecurity",
    grade: "A",
    semester: "Spring 2025",
    description: "Analyzed vulnerabilities in global logistics networks, focusing on 'Software Bill of Materials' (SBOM) and risks of hardware interdiction. Developed frameworks for auditing third-party vendors.",
    tags: ['Cybersecurity', 'Risk Mgmt', 'SBOM', 'Auditing']
  },
  {
    code: "MPSC-7000",
    title: "Strategic Sourcing",
    category: "Strategy",
    grade: "A",
    semester: "Fall 2024",
    description: "Studied shift from transactional purchasing to strategic partnerships. Created sourcing strategies for high-tech components that mitigated geopolitical risk while maintaining cost efficiency.",
    tags: ['Procurement', 'Negotiation', 'Supplier Mgmt']
  },
  {
    code: "MPSC-5565",
    title: "SC Project Management",
    category: "Operations",
    grade: "A",
    semester: "Summer 2024",
    description: "Utilized network optimization techniques to design resilient distribution networks. Managed simulated complex projects using Critical Path Method (CPM) and resource leveling.",
    tags: ['Network Design', 'Project Mgmt', 'CPM']
  },
  {
    code: "MPSC-7760",
    title: "High-Stakes Negotiations",
    category: "Elective",
    grade: "A",
    semester: "Summer 2024",
    description: "Practiced advanced negotiation tactics for multi-party disputes and high-value contracts. Focused on value creation (expanding the pie) rather than zero-sum operational attrition.",
    tags: ['Soft Skills', 'Conflict Resolution', 'Contracting']
  },
  {
    code: "MPSC-5520",
    title: "Operations Management",
    category: "Core Ops",
    grade: "A",
    semester: "Spring 2024",
    description: "Focused on process analysis, bottleneck identification, and Six Sigma methodologies. Modeled throughput efficiency for complex distribution centers.",
    tags: ['Six Sigma', 'Process Flow', 'Throughput']
  },
  {
    code: "MPSC-6000",
    title: "Analytics & Technology",
    category: "Data Science",
    grade: "A",
    semester: "Spring 2024",
    description: "Leveraged SQL and Python for supply chain decision making. Built predictive models to forecast demand and optimize inventory placement strategies.",
    tags: ['SQL', 'Python', 'Predictive Modeling']
  },
  {
    code: "MPSC-7800",
    title: "Distribution Strategy",
    category: "Logistics",
    grade: "A",
    semester: "Fall 2023",
    description: "Designed last-mile delivery networks and analyzed warehousing footprints. Evaluated trade-offs between centralized vs. decentralized distribution models.",
    tags: ['Last Mile', 'Warehousing', 'Network Design']
  },
  {
    code: "MPSC-5000",
    title: "Ethics & CSR",
    category: "Core Ethics",
    grade: "A",
    semester: "Fall 2023",
    description: "Examined ethical implications of global supply chains, focusing on labor rights, sustainability, and ESG compliance in modern procurement.",
    tags: ['ESG', 'Sustainability', 'Compliance']
  }
];

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-black text-slate-300 font-mono selection:bg-green-500/30">

      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto p-6 md:p-12 border-b border-neutral-900">
        <div className="flex justify-between items-start">
          <div>
            <Link href="/" className="text-[10px] text-neutral-600 hover:text-white uppercase tracking-widest mb-6 inline-block transition-colors hover:translate-x-1 duration-300">
              {'<'} RETURN_ROOT
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-xs text-green-500 uppercase tracking-widest">
                System_Online // Georgetown_University
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
              ACADEMIC_DATABASE
            </h1>
            <p className="text-sm text-neutral-500 max-w-xl">
              Master of Professional Studies in Supply Chain Management. <br />
              <span className="text-neutral-600">Index of coursework, competencies, and research artifacts.</span>
            </p>
          </div>
          <div className="hidden md:block text-right">
            <div className="inline-block border border-neutral-800 bg-neutral-950 p-4 text-center">
              <div className="text-[10px] text-neutral-600 uppercase mb-1">CUMULATIVE_GPA</div>
              <div className="text-3xl font-bold text-white">4.0</div>
            </div>
            <div className="text-[10px] text-neutral-600 uppercase mt-2">CLASS_OF_2026</div>
          </div>
        </div>
      </div>

      {/* ACTIVE THREAD: CAPSTONE */}
      <section className="max-w-7xl mx-auto p-6 md:p-12 mb-8 bg-neutral-900/20 border-b border-neutral-900">
        <div className="flex items-center gap-3 mb-6">
          <svg className="w-4 h-4 text-green-500 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <h2 className="text-xs text-green-500 font-bold uppercase tracking-widest">
            Active_Process: Capstone_Project
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Automated Feasibility Analysis (C.U.L.T.)
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Architecting a secure bridge between Army demand signals (OMNI/Loadout) and supply constraints (Palantir Vantage).
              Moving from passive scheduling to predictive, constraint-based planning by establishing a handshake between distinct data ecosystems.
            </p>
            <Link href="/army-logistics" className="inline-flex items-center gap-2 text-xs font-bold uppercase text-white hover:text-green-400 transition-colors group">
              <span className="border-b border-white group-hover:border-green-400 pb-0.5">View System Architecture</span>
              <span>→</span>
            </Link>
          </div>
          <div className="bg-black border border-neutral-800 p-4 font-mono text-[10px] text-neutral-500">
            <div className="border-b border-neutral-800 pb-2 mb-2 uppercase tracking-widest">Stack_Trace</div>
            <div className="grid grid-cols-2 gap-2">
              <span>&gt; Palantir Vantage</span>
              <span className="text-right text-green-900">CONNECTED</span>
              <span>&gt; Python / PySpark</span>
              <span className="text-right text-green-900">READY</span>
              <span>&gt; TypeScript</span>
              <span className="text-right text-green-900">READY</span>
              <span>&gt; OMNI API</span>
              <span className="text-right text-yellow-900">PENDING</span>
            </div>
          </div>
        </div>
      </section>

      {/* COURSEWORK DATABASE */}
      <section className="max-w-7xl mx-auto p-6 md:p-12">
        <CourseTable courses={COURSES} />
      </section>
    </div>
  );
}
