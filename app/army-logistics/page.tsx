'use client';

import Link from 'next/link';
import Mermaid from '@/components/Mermaid';
import DashboardViewer from '@/components/DashboardViewer';

// MONOCHROME / HIGH-CONTRAST BLUEPRINT
const cultBlueprint = `
flowchart TD
    %% MONOCHROME STYLING
    classDef demand fill:#000000,stroke:#ffffff,stroke-width:1px,color:#ffffff,font-family:ui-monospace,font-size:12px;
    classDef supply fill:#000000,stroke:#ffffff,stroke-width:1px,color:#ffffff,font-family:ui-monospace,font-size:12px;
    classDef bridge fill:#000000,stroke:#ffffff,stroke-width:1px,stroke-dasharray: 4 4,color:#ffffff,font-family:ui-monospace,font-size:12px;
    classDef note fill:#000000,stroke:#555555,stroke-width:1px,color:#999999,font-family:ui-monospace,font-size:10px,stroke-dasharray: 2 2;

    %% ARROW STYLING (Pure White)
    linkStyle default stroke:#ffffff,stroke-width:1px,fill:none;

    subgraph Phase1 ["DEMAND SIGNAL (OMNI/LOADOUT)"]
        direction TB
        User[("UNIT CUSTOMER")] -->|Input: TMR| LoadoutUI["LOADOUT INTERFACE"]
        LoadoutUI -->|Visualize| Gantt["SCHEDULER VIEW"]
        
        note1["GAP: VISIBILITY ONLY. NO FEASIBILITY CHECK."]
        Gantt -.- note1
    end

    subgraph Phase2 ["INTEGRATION LAYER"]
        direction LR
        Gantt -->|API HANDSHAKE| API{"FEASIBILITY CHECK"}
        API -->|QUERY: ASSET AVAILABILITY| VantageEntry
    end

    subgraph Phase3 ["SUPPLY CONSTRAINTS (PALANTIR VANTAGE)"]
        direction TB
        VantageEntry["LOGIC ENGINE"]
        
        subgraph Sources ["RAW DATA INGEST"]
            GCSS["GCSS-ARMY (EQUIPMENT)"]
            IPPS["IPPS-A (PERSONNEL)"]
            ATIS["ATIS (QUALIFICATIONS)"]
        end
        
        Sources -->|ETL PIPELINE| Ontology
        
        subgraph Ontology ["GOLDEN RECORDS"]
            Veh["OBJECT: VEHICLE (FMC)"]
            Op["OBJECT: OPERATOR (QUALIFIED)"]
            Link{"RELATIONSHIP LOGIC"}
            
            Veh --- Link
            Op --- Link
        end
        
        VantageEntry --> Ontology
        Ontology -->|VALIDATE| Decision["OUTPUT: FEASIBILITY SCORE"]
    end

    %% FEEDBACK LOOP
    Decision -->|STATUS: GREEN| Gantt
    Decision -->|STATUS: RED| Gantt

    %% APPLY STYLES
    class User,LoadoutUI,Gantt demand;
    class VantageEntry,GCSS,IPPS,ATIS,Veh,Op,Link,Decision,Ontology,Sources supply;
    class API bridge;
    class note1 note;
`;

const DASHBOARDS = [
    {
        id: 'arc',
        title: 'ARC: Ammunition & Range Coordinator',
        description: 'Automated the calculation of Class V requirements for weapon qualification ranges. Inputs: Density of soldiers and Weapon System (M4, M249, etc.). Outputs: Exact DODIC requirements, regulatory compliance checks, and range site selection validation.',
        imageSrc: '/arc-dashboard.png',
        tags: ['POWER BI', 'LOGISTICS ESTIMATION', 'AUTOMATION']
    },
    {
        id: 'calc',
        title: 'CAL-C: Container Asset Logistics Calculator',
        description: 'A predictive modeling engine for containerized movement. Showcased in Jan-26 Power BI for All competition @Department of War. Calculates "Slack Time" and feasibility based on Material Handling Equipment (MHE) throughput, node processing factors, and drive-time limitations. Provides a binary GO/NO-GO for mission planners.',
        imageSrc: '/calc-dashboard.png',
        tags: ['PREDICTIVE MODELING', 'ASSET UTILIZATION', 'DECISION SUPPORT']
    }
];

export default function ArmyPage() {
    return (
        <div className="min-h-screen bg-black text-slate-300 font-mono selection:bg-green-500/30">

            {/* HEADER SECTION */}
            <div className="max-w-7xl mx-auto p-8 md:p-12 border-b border-neutral-800">
                <div className="flex justify-between items-start">
                    <div>
                        <Link href="/" className="text-[10px] text-neutral-500 hover:text-white uppercase tracking-widest mb-6 inline-block transition-colors hover:translate-x-1 duration-300">
                            {'<'} RETURN_ROOT
                        </Link>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <p className="text-xs text-green-500 uppercase tracking-widest">
                                System_Online // US_Army_Logistics
                            </p>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
                            OPERATIONAL LOGISTICS
                        </h1>
                        <p className="text-sm text-neutral-500 max-w-xl uppercase tracking-wide">
                            Systems architecture for sustainment operations. <br />
                            Focus: Automation, Predictive Modeling, and Asset Visibility.
                        </p>
                    </div>
                    <div className="hidden md:block text-right">
                        <div className="text-xs text-neutral-600">STATUS</div>
                        <div className="text-white text-xs">ACTIVE DUTY // U.S. ARMY</div>
                    </div>
                </div>
            </div>

            {/* SECTION 1: THE ARCHITECTURE (CULT) */}
            <section className="max-w-7xl mx-auto p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-2 h-2 bg-white"></div>
                    <h2 className="text-sm text-white font-bold uppercase tracking-widest">
                        Primary Architecture: The Transformation of the Army's Common User Land Transportation (C.U.L.T.) Manager
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <div className="lg:col-span-2 bg-black border border-neutral-800 rounded-lg p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-50">
                            <span className="text-[10px] border border-neutral-800 px-2 py-1 text-neutral-500">VANTAGE_ONTOLOGY_V1.2</span>
                        </div>
                        {/* INVERT FILTER: Makes the diagram crisp white on black */}
                        <div className="mt-8 overflow-x-auto grayscale invert-0">
                            <Mermaid chart={cultBlueprint} />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-neutral-950 border border-neutral-900 p-6 rounded-lg hover:border-green-900/30 transition-colors">
                            <h3 className="text-white text-xs font-bold uppercase mb-2">The Problem Set</h3>
                            <p className="text-xs text-neutral-500 leading-relaxed">
                                Disconnect between Demand (Loadout) and Supply (GCSS-A). Manual validation of TMRs leads to "Ghost Truck" scheduling—missions planned against non-mission capable assets.
                            </p>
                        </div>
                        <div className="bg-neutral-950 border border-neutral-900 p-6 rounded-lg hover:border-green-900/30 transition-colors">
                            <h3 className="text-white text-xs font-bold uppercase mb-2">The Solution</h3>
                            <p className="text-xs text-neutral-500 leading-relaxed">
                                API integration between the Army's (Omni AI) Loadout and Palantir Vantage. The system queries what I describe as the "Golden Record" (fused GCSS-A/IPPS-A data) to validate feasibility before a mission is accepted.
                            </p>
                        </div>
                        <div className="bg-neutral-950 border border-neutral-900 p-6 rounded-lg hover:border-green-900/30 transition-colors">
                            <h3 className="text-white text-xs font-bold uppercase mb-2">Deep Dive: Data Ontology</h3>
                            <p className="text-xs text-neutral-500 leading-relaxed">
                                The core achievement of CULT is not just the interface, but the underlying ontology. By linking disparate data objects—specifically the Equipment Status Report (ESR) from GCSS-Army and Personnel Records (Sanitized) from IPPS-A—I will create a live "Feasibility Index." This allows commanders to see not just <i>if</i> a truck is available, but if a <i>qualified</i> driver is present to operate it, removing the guesswork from movement planning.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: TACTICAL TOOLSET (ARC & CAL-C) */}
            <section className="max-w-7xl mx-auto p-8 md:p-12 border-t border-neutral-800">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-2 h-2 bg-green-600 animate-pulse"></div>
                    <h2 className="text-sm text-white font-bold uppercase tracking-widest">
                        Tactical Toolset (Power BI)
                    </h2>
                </div>

                {/* NEW DASHBOARD VIEWER COMPONENT */}
                <DashboardViewer dashboards={DASHBOARDS} />

            </section>

            {/* SECTION 3: DEPLOYMENT HISTORY */}
            <section className="max-w-7xl mx-auto p-8 md:p-12 border-t border-neutral-800 mb-24">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-2 h-2 bg-neutral-800"></div>
                    <h2 className="text-sm text-white font-bold uppercase tracking-widest">
                        MILITARY TIMELINE
                    </h2>
                </div>

                <div className="border-l border-neutral-800 ml-3 space-y-12">

                    {/* ROLE 1 */}
                    <div className="pl-8 relative">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-black border border-neutral-600 rounded-full"></div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h4 className="text-white font-bold">Battalion Staff Officer (SPO/S3)</h4>
                            <span className="text-[10px] font-mono text-neutral-600">13TH CSSB // 2025 - PRESENT</span>
                        </div>
                        <p className="text-xs text-neutral-500 max-w-2xl">
                            Responsible for Land & Ammunition operations. Architected the unit's transition to Palantir Vantage.
                        </p>
                    </div>

                    {/* ROLE 2 */}
                    <div className="pl-8 relative">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-black border border-neutral-600 rounded-full"></div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h4 className="text-white font-bold">Platoon Leader / Executive Officer</h4>
                            <span className="text-[10px] font-mono text-neutral-600">VARIOUS UNITS // 2022 - 2025</span>
                        </div>
                        <p className="text-xs text-neutral-500 max-w-2xl">
                            Direct leadership of logistics formations. Developed my first Power BI tools to solve immediate friction points in field environments.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
}