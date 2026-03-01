'use client';

import Link from 'next/link';
import Mermaid from '@/components/Mermaid';
import DashboardViewer from '@/components/DashboardViewer';

const cultBlueprint = `
flowchart TD
    classDef demand fill:#ffffff,stroke:#000000,stroke-width:1px,color:#000000,font-family:Georgia,font-size:12px;
    classDef supply fill:#ffffff,stroke:#000000,stroke-width:1px,color:#000000,font-family:Georgia,font-size:12px;
    classDef bridge fill:#ffffff,stroke:#000000,stroke-width:1px,stroke-dasharray: 4 4,color:#000000,font-family:Georgia,font-size:12px;
    classDef note fill:#ffffff,stroke:#999999,stroke-width:1px,color:#666666,font-family:Georgia,font-size:10px,stroke-dasharray: 2 2;

    linkStyle default stroke:#000000,stroke-width:1px,fill:none;

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
            Link_node{"RELATIONSHIP LOGIC"}
            
            Veh --- Link_node
            Op --- Link_node
        end
        
        VantageEntry --> Ontology
        Ontology -->|VALIDATE| Decision["OUTPUT: FEASIBILITY SCORE"]
    end

    Decision -->|STATUS: GREEN| Gantt
    Decision -->|STATUS: RED| Gantt

    class User,LoadoutUI,Gantt demand;
    class VantageEntry,GCSS,IPPS,ATIS,Veh,Op,Link_node,Decision,Ontology,Sources supply;
    class API bridge;
    class note1 note;
`;

const DASHBOARDS = [
    {
        id: 'arc',
        title: 'ARC: Ammunition & Range Coordinator',
        description: 'Automated the calculation of Class V requirements for weapon qualification ranges. Inputs: soldier density and weapon system (M4, M249, etc.). Outputs: exact DODIC requirements, compliance checks, and range site validation.',
        imageSrc: '/arc-dashboard.png',
        tags: ['Power BI', 'Logistics', 'Automation']
    },
    {
        id: 'calc',
        title: 'CAL-C: Container Asset Logistics Calculator',
        description: 'A predictive modeling engine for containerized movement. Showcased in the Jan 2026 Power BI for All competition. Calculates slack time and feasibility based on MHE throughput, node processing, and drive-time limitations.',
        imageSrc: '/calc-dashboard.png',
        tags: ['Predictive Modeling', 'Decision Support']
    }
];

export default function ArmyPage() {
    return (
        <div className="min-h-screen bg-white text-black">

            {/* HEADER */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 pt-12 pb-8 border-b border-neutral-100">
                <Link href="/" className="group inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-black mb-8 transition-colors">
                    <span className="group-hover:-translate-x-1 transition-transform">&larr;</span>
                    <span>Home</span>
                </Link>
                <h1 className="text-3xl md:text-4xl font-normal text-black mb-3">
                    Professional Work
                </h1>
                <p className="text-neutral-500 text-base max-w-2xl leading-relaxed">
                    Systems architecture for sustainment operations.
                    Automation, predictive modeling, and asset visibility.
                </p>
            </div>

            {/* SECTION 1: CULT ARCHITECTURE */}
            <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 border-b border-neutral-100">
                <div className="flex items-start gap-3 mb-8">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></div>
                    <h2 className="text-lg font-normal text-black">
                        C.U.L.T. Manager Architecture
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <div className="lg:col-span-2 border border-neutral-200 rounded-lg p-6 overflow-hidden">
                        <div className="overflow-x-auto">
                            <Mermaid chart={cultBlueprint} />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="border border-neutral-200 p-6 rounded-lg">
                            <h3 className="text-sm font-bold text-black mb-2">The Problem</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed">
                                Disconnect between Demand (Loadout) and Supply (GCSS-A). Manual validation leads to missions planned against non-mission capable assets.
                            </p>
                        </div>
                        <div className="border border-neutral-200 p-6 rounded-lg">
                            <h3 className="text-sm font-bold text-black mb-2">The Solution</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed">
                                API integration between the Army&apos;s Loadout and Palantir Vantage. The system queries the &ldquo;Golden Record&rdquo; (fused GCSS-A/IPPS-A data) to validate feasibility before a mission is accepted.
                            </p>
                        </div>
                        <div className="border border-neutral-200 p-6 rounded-lg">
                            <h3 className="text-sm font-bold text-black mb-2">The Ontology</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed">
                                By linking equipment status from GCSS-Army and personnel records from IPPS-A, I created a live Feasibility Index showing not just if a truck is available, but if a qualified driver is present.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: DASHBOARDS */}
            <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 border-b border-neutral-100">
                <div className="flex items-start gap-3 mb-8">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></div>
                    <h2 className="text-lg font-normal text-black">
                        Power BI Dashboards
                    </h2>
                </div>

                <DashboardViewer dashboards={DASHBOARDS} />
            </section>

            {/* SECTION 3: TIMELINE */}
            <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 mb-12">
                <div className="flex items-start gap-3 mb-8">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></div>
                    <h2 className="text-lg font-normal text-black">
                        Military Timeline
                    </h2>
                </div>

                <div className="border-l border-neutral-200 ml-1 space-y-10">
                    <div className="pl-8 relative">
                        <div className="absolute -left-[4px] top-2 w-2 h-2 bg-white border border-black rounded-full"></div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h4 className="text-black">Battalion Staff Officer (SPO/S3)</h4>
                            <span className="text-sm text-neutral-400">13th CSSB &middot; 2025 &ndash; Present</span>
                        </div>
                        <p className="text-sm text-neutral-500 max-w-2xl">
                            Responsible for Land &amp; Ammunition operations. Architected the unit&apos;s transition to Palantir Vantage.
                        </p>
                    </div>

                    <div className="pl-8 relative">
                        <div className="absolute -left-[4px] top-2 w-2 h-2 bg-white border border-neutral-300 rounded-full"></div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h4 className="text-black">Platoon Leader / Executive Officer</h4>
                            <span className="text-sm text-neutral-400">Various Units &middot; 2022 &ndash; 2025</span>
                        </div>
                        <p className="text-sm text-neutral-500 max-w-2xl">
                            Direct leadership of logistics formations. Developed my first Power BI tools to solve immediate friction in field environments.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}