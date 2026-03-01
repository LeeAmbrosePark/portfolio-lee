'use client';

import CourseTable, { Course } from '@/components/CourseTable';
import Link from 'next/link';

const COURSES: Course[] = [
  {
    code: "MPSC-5530",
    title: "Cost & Financial Analysis",
    category: "Finance",
    semester: "Fall 2024",
    description: "This was where I built my quantitative foundation. I came in without a finance background, so I put in over 700 hours teaching myself valuation, break-even analysis, and financial modeling in Excel. By the end I could build a full financial model from scratch and brief it to a room.",
    tags: ['Valuation', 'Excel Modeling', 'Risk Analysis', 'NPV/IRR', 'Financial Statements'],
    highlights: [
      "Final project briefing to senior management on financial performance",
      "ExxonMobil multi-checkpoint valuation project",
      "Sparkle Radiance demand forecasting case",
      "Lease vs. Buy financial decision calculator",
      "Lululemon competitor comparison using PivotTables",
      "Hostess FY18 financial management video presentation"
    ],
    artifacts: [
      { name: "Senior Management Briefing", type: "presentation", description: "Final project — financial analysis presentation to simulated executive stakeholders" },
      { name: "ExxonMobil Valuation", type: "presentation", description: "Multi-checkpoint financial due diligence with ratio analysis" },
      { name: "Sparkle Radiance Forecasting", type: "spreadsheet", description: "Demand forecasting case using Excel Analysis ToolPak" },
      { name: "Lululemon Competitor Report", type: "spreadsheet", description: "PivotTable financial comparison across competitors" },
      { name: "NPV/IRR Workbook", type: "spreadsheet", description: "Payback period, NPV, and IRR calculations" },
      { name: "Lease vs Buy Calculator", type: "report", description: "Financial decision framework for capital equipment" },
      { name: "Hostess FY18 Analysis", type: "video", description: "Video presentation on Hostess Brands SCM financial management" }
    ]
  },
  {
    code: "MPPM-6820",
    title: "AI Project Management",
    category: "Dual Enrollment",
    semester: "Spring 2025",
    description: "I dual-enrolled in this course from the project management program because I wanted to understand how to actually manage AI projects — not just use the tools, but plan and govern them. I wrote an AI strategy for my Army unit and built a custom tutoring bot.",
    tags: ['LLMs', 'Prompt Engineering', 'Agile', 'Defense Tech', 'AI Strategy'],
    highlights: [
      "AI strategy for the 13th CSSB — full implementation roadmap",
      "Advanced prompt engineering for project managers",
      "AI-Assisted Project Planning for Army logistics",
      "TechnoEthical audit of AI in military operations",
      "Custom TutorBot for Army Power BI training",
      "Agile PM group presentation on AI adoption"
    ],
    artifacts: [
      { name: "AI Strategy for 13th CSSB", type: "paper", description: "Comprehensive AI strategy for a military logistics unit" },
      { name: "AI Implementation Plan", type: "paper", description: "Turning strategy into a concrete implementation roadmap" },
      { name: "Prompt Engineering Exercises", type: "paper", description: "Advanced prompt engineering for project managers" },
      { name: "AI-Assisted Project Planning", type: "paper", description: "Army Logistics Transportation Dashboard using AI tools" },
      { name: "LLM Research Report", type: "report", description: "Comparative analysis of LLM capabilities" },
      { name: "TutorBot for Army Power BI", type: "report", description: "Custom AI tutoring bot for military analytics training" },
      { name: "TechnoEthical Audit", type: "paper", description: "Ethics assessment of AI deployment in defense" },
      { name: "Agile PM Presentation", type: "video", description: "Group presentation on AI within Agile frameworks" }
    ]
  },
  {
    code: "MPSC-6715",
    title: "Securing Digital Supply Chain",
    category: "Cybersecurity",
    semester: "Spring 2025",
    description: "This course taught me to think about supply chains as attack surfaces. We looked at SBOM vulnerabilities, hardware interdiction risks, and how to audit third-party vendors for security compliance.",
    tags: ['Cybersecurity', 'Risk Management', 'SBOM', 'Vendor Auditing', 'Zero Trust']
  },
  {
    code: "MPSC-7000",
    title: "Strategic Sourcing",
    category: "Strategy",
    semester: "Fall 2024",
    description: "This is where procurement stopped being transactional for me. I built a full RFP from scratch for Sprouts Farmers Market, did a defense sector due diligence on Anduril Industries, and learned how to structure sourcing decisions that actually align with business strategy.",
    tags: ['Procurement', 'Negotiation', 'RFP/RFX', 'Due Diligence', 'Supplier Management'],
    highlights: [
      "Multi-part Sprouts Farmers Market RFP — full procurement cycle",
      "Anduril Industries due diligence report (defense sector)",
      "AI-powered proposal evaluation methodology",
      "Tall Drink of Water strategic sourcing plan",
      "Sprouts Uniform Category Profile with spend analytics"
    ],
    artifacts: [
      { name: "Sprouts RFP Final Document", type: "paper", description: "Complete RFP for uniform sourcing at Sprouts Farmers Market" },
      { name: "Sprouts RFP Presentation", type: "video", description: "Final video presentation to simulated procurement board" },
      { name: "Anduril Due Diligence (Part 2)", type: "paper", description: "Industry analysis within Industrials/Defense GICS" },
      { name: "Anduril Due Diligence (Part 3)", type: "paper", description: "Deep dive into Lattice platform and competitive positioning" },
      { name: "Tall Drink Strategic Sourcing", type: "video", description: "Full sourcing plan presentation" },
      { name: "AI Proposal Evaluation", type: "paper", description: "Using AI to evaluate and score vendor proposals" },
      { name: "Sprouts Category Profile", type: "spreadsheet", description: "Uniform category spend analysis" },
      { name: "SCRM Contract Requirements", type: "paper", description: "Supply chain risk management compliance" }
    ]
  },
  {
    code: "MPSC-5565",
    title: "SC Design & Project Management",
    category: "Operations",
    semester: "Summer 2024",
    description: "I learned how to actually design supply chain networks and manage complex projects. I evaluated a TMS system for Traeger, redesigned Shell's supply chain operations, and built Gantt charts with real resource leveling. The project management side clicked for me here.",
    tags: ['Network Design', 'Project Management', 'CPM', 'ERP', 'Risk Register', 'Gantt'],
    highlights: [
      "Final: Traeger TMS system evaluation and recommendation",
      "Shell Supply Chain Redesign — midterm project",
      "Tesla supply chain design with sustainability case study",
      "Warehouse expansion case with Gantt charts",
      "Dairflay ERP integration simulation",
      "TMR Dashboard for transportation logistics"
    ],
    artifacts: [
      { name: "Traeger TMS Final Project", type: "video", description: "Final presentation on TMS system evaluation" },
      { name: "Traeger TMS Slides", type: "presentation", description: "TMS system recommendation deck" },
      { name: "Shell SC Redesign - Midterm", type: "presentation", description: "Organizational redesign of Shell supply chain" },
      { name: "Shell SC Redesign Video", type: "video", description: "Video walkthrough of Shell redesign proposal" },
      { name: "Tesla SC Design", type: "video", description: "Supply chain design for Tesla" },
      { name: "Warehouse Expansion Case", type: "paper", description: "Case study with Gantt chart and dependencies" },
      { name: "Dairflay ERP Integration", type: "presentation", description: "Team realignment simulation for ERP rollout" },
      { name: "Risk Register", type: "spreadsheet", description: "Risk assessment with scoring and mitigation plans" },
      { name: "TMR Dashboard", type: "presentation", description: "Transportation Movement Request dashboard" }
    ]
  },
  {
    code: "MPSC-7760",
    title: "High-Stakes Negotiations",
    category: "Elective",
    semester: "Summer 2024",
    description: "This was the most fun class. We did live negotiations, multi-party disputes, and practiced creating value instead of just splitting it. I recorded a pricing negotiation that was analyzed by Yoodli AI for feedback.",
    tags: ['Negotiation', 'Conflict Resolution', 'Contracting', 'BATNA'],
    highlights: [
      "Mock multi-party negotiation with scoring",
      "Cross-cultural negotiation presentation (SVP from Spain)",
      "AI-analyzed pricing agreement negotiation"
    ],
    artifacts: [
      { name: "SVP Persuasion Presentation", type: "presentation", description: "Cross-cultural negotiation simulation" },
      { name: "Pricing Negotiation", type: "video", description: "AI-analyzed pricing agreement exercise" },
      { name: "Mock Negotiation Brief", type: "paper", description: "Multi-party negotiation prep and scoring" }
    ]
  },
  {
    code: "MPSC-5520",
    title: "Operations Management",
    category: "Core",
    semester: "Spring 2024",
    description: "Process analysis, bottleneck identification, and Six Sigma. We modeled throughput for distribution centers and I started understanding how to think about operations as a system, not just a series of tasks.",
    tags: ['Six Sigma', 'Process Flow', 'Throughput', 'Simulation'],
    highlights: [
      "HLPE team final project — operations simulation",
      "As-Is process mapping and workflow redesign",
      "Peer review coordination"
    ],
    artifacts: [
      { name: "HLPE Final Project", type: "presentation", description: "Team project on supply chain operations optimization" },
      { name: "As-Is Process Diagram", type: "report", description: "Current state workflow diagram and improvement writeup" },
      { name: "Operations Simulation", type: "paper", description: "Simulation results with bottleneck analysis" }
    ]
  },
  {
    code: "MPSC-6000",
    title: "Analytics & Technology",
    category: "Data Science",
    semester: "Spring 2024",
    description: "Applied SQL and Python to supply chain decision making. I built a dashboard for my Army unit using Power BI and used the Analytical Hierarchy Process to evaluate Dollar Tree's supply chain. This class is where I first connected data skills to real operational problems.",
    tags: ['SQL', 'Python', 'Predictive Modeling', 'Power BI', 'AHP'],
    highlights: [
      "AHP applied to Dollar Tree supply chain decisions",
      "TMR Dashboard for 13th CSSB (Power BI)",
      "Midterm: analytics recommendations for military logistics",
      "Amazon Forecast tool evaluation"
    ],
    artifacts: [
      { name: "AHP & Dollar Tree Analysis", type: "video", description: "Decision framework for supply chain optimization" },
      { name: "TMR Dashboard Presentation", type: "presentation", description: "Transportation dashboard for 13th CSSB" },
      { name: "13th CSSB Midterm Report", type: "paper", description: "Analytics recommendations for Army logistics" },
      { name: "Forecasting with Amazon", type: "paper", description: "Evaluation of Amazon Forecast tools" },
      { name: "Predictive Modeling Report", type: "report", description: "AI/ML applications in supply chain forecasting" }
    ]
  },
  {
    code: "MPSC-7800",
    title: "Distribution Strategy",
    category: "Logistics",
    semester: "Spring 2026",
    description: "Currently taking this course. Designing last-mile delivery networks and analyzing warehousing trade-offs. We're looking at centralized vs. decentralized distribution and real-world cases like UPS and Boeing.",
    tags: ['Last Mile', 'Warehousing', 'Network Design', 'Reverse Logistics', 'Omnichannel'],
    highlights: [
      "UPS Omnichannel & Reverse Logistics presentation",
      "Boeing Spirit AeroSystems supply chain strategy"
    ],
    artifacts: [
      { name: "UPS Reverse Logistics", type: "video", description: "Rapid presentation on UPS distribution strategy" },
      { name: "UPS Slides", type: "presentation", description: "Accompanying slides for UPS presentation" },
      { name: "Boeing Spirit Strategy", type: "presentation", description: "Supply chain strategy for Boeing Spirit AeroSystems" }
    ]
  },
  {
    code: "MPSC-5000",
    title: "Ethics & CSR",
    category: "Core",
    semester: "Fall 2023",
    description: "My first Georgetown course. We examined labor rights, sustainability reporting, and ESG compliance. I compared Apple and Tesla's sustainability approaches and analyzed Disney's CSR report. It set the ethical foundation for everything else.",
    tags: ['ESG', 'Sustainability', 'Compliance', 'CSR Reporting'],
    highlights: [
      "Final presentation on CSR in supply chains",
      "Apple vs Tesla sustainability comparison",
      "Disney CSR report analysis"
    ],
    artifacts: [
      { name: "Ethics & CSR Final", type: "presentation", description: "End-of-course presentation on CSR in global supply chains" },
      { name: "Apple vs Tesla Sustainability", type: "presentation", description: "Comparative analysis of sustainability reporting" },
      { name: "Disney CSR Analysis", type: "paper", description: "In-depth analysis of Walt Disney Company CSR" }
    ]
  },
  {
    code: "MPSC-8000",
    title: "SCM Capstone",
    category: "Capstone",
    semester: "2025–2026",
    description: "This is the big one. I'm building a bridge between the Army's demand signals (OMNI/Loadout) and supply constraints (Palantir Vantage). The goal is to move from passive scheduling to predictive, constraint-based planning. Nine stakeholder interviews, six formal milestones, and a 238-slide final presentation.",
    tags: ['Palantir', 'Army Logistics', 'AI/ML', 'CULT Framework', 'Vantage'],
    highlights: [
      "6 milestones: Objectives, SWOT, Stakeholder Analysis, Research Plan, As-Is Diagram, Gap Analysis",
      "238-slide final presentation on AI Logistics for 13th CSSB",
      "Total Care Network 18-month analytics roadmap",
      "9 stakeholder interviews across Army logistics commands"
    ],
    artifacts: [
      { name: "Capstone Presentation", type: "video", description: "Full presentation on AI Logistics for 13th CSSB" },
      { name: "Capstone Slide Deck", type: "presentation", description: "238-slide deck covering the CULT framework" },
      { name: "Gap Analysis & Memo", type: "report", description: "Comprehensive gap analysis with recommendations" },
      { name: "SWOT Memo (Palantir)", type: "paper", description: "SWOT analysis of Palantir Vantage for Army logistics" },
      { name: "Stakeholder Charter", type: "paper", description: "Stakeholder analysis and project timeline" },
      { name: "Research Plan", type: "paper", description: "Methodology and data collection framework" },
      { name: "TCN Analytics Roadmap", type: "report", description: "Total Care Network 18-month roadmap" },
      { name: "Predictive Logistics Strategy", type: "presentation", description: "AI-driven predictive logistics for sustainment" }
    ]
  }
];

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-12 pb-8 border-b border-neutral-100">
        <Link href="/" className="group inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-black mb-8 transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
          <span>Home</span>
        </Link>

        <h1 className="text-3xl md:text-4xl font-normal text-black mb-3">
          Georgetown Coursework
        </h1>
        <p className="text-neutral-500 text-base max-w-2xl leading-relaxed">
          Master of Professional Studies in Supply Chain Management.
          Everything I worked on across {COURSES.length} courses, organized with all my deliverables.
        </p>
      </div>

      {/* CAPSTONE CALLOUT */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 border-b border-neutral-100">
        <div className="flex items-start gap-4">
          <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></div>
          <div>
            <h2 className="text-lg font-normal text-black mb-2">
              Current Focus: Capstone Project
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl mb-3">
              Building a bridge between Army demand signals and Palantir Vantage supply constraints.
              Moving from passive scheduling to predictive planning.
            </p>
            <Link href="/army-logistics" className="text-sm text-black underline hover:no-underline">
              View system architecture
            </Link>
          </div>
        </div>
      </div>

      {/* COURSE TABLE */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <CourseTable courses={COURSES} />
      </section>
    </div>
  );
}
