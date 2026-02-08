'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type Dashboard = {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    tags: string[];
    link?: string; // Optional external link if they have one
};

interface DashboardViewerProps {
    dashboards: Dashboard[];
}

export default function DashboardViewer({ dashboards }: DashboardViewerProps) {
    const [selectedDash, setSelectedDash] = useState<Dashboard | null>(null);

    return (
        <div className="space-y-12">

            {/* GRID OF THUMBNAILS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {dashboards.map((dash) => (
                    <div
                        key={dash.id}
                        className="group cursor-pointer"
                        onClick={() => setSelectedDash(dash)}
                    >
                        {/* CARD FRAME */}
                        <div className="relative aspect-video bg-neutral-900 border border-neutral-800 rounded-sm overflow-hidden mb-4 group-hover:border-green-500/50 transition-colors">
                            {/* SCAN LINE EFFECT */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:translate-y-[100%] transition-all duration-1000 z-10 pointer-events-none"></div>

                            <Image
                                src={dash.imageSrc}
                                alt={dash.title}
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                            />

                            <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-3 border-t border-neutral-800 translate-y-full group-hover:translate-y-0 transition-transform">
                                <span className="text-[10px] text-green-500 font-bold tracking-widest uppercase">
                                    [CLICK_TO_INSPECT]
                                </span>
                            </div>
                        </div>

                        {/* INFO */}
                        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-green-400 transition-colors">
                            {dash.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                            {dash.tags.map(tag => (
                                <span key={tag} className="text-[10px] bg-neutral-950 border border-neutral-800 px-2 py-0.5 text-neutral-500">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-xs text-neutral-500 leading-relaxed max-w-md">
                            {dash.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* FULL SCREEN MODAL */}
            <AnimatePresence>
                {selectedDash && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        {/* BACKDROP */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedDash(null)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-md"
                        />

                        {/* CONTENT */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-6xl max-h-[90vh] flex flex-col bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* HEADER */}
                            <div className="flex justify-between items-center p-4 border-b border-neutral-800 bg-black">
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <h2 className="text-sm font-bold text-white uppercase tracking-widest">
                                        System_Viewer: {selectedDash.title}
                                    </h2>
                                </div>
                                <button
                                    onClick={() => setSelectedDash(null)}
                                    className="text-xs text-neutral-500 hover:text-white uppercase tracking-widest border border-neutral-800 px-3 py-1 hover:bg-neutral-800 transition-colors"
                                >
                                    [ESC] Close_Module
                                </button>
                            </div>

                            {/* IMAGE CONTAINER */}
                            <div className="flex-grow relative bg-black overflow-auto flex items-center justify-center p-4 group">
                                <div className="relative w-full h-full min-h-[50vh]">
                                    <Image
                                        src={selectedDash.imageSrc}
                                        alt={selectedDash.title}
                                        fill
                                        className="object-contain"
                                        quality={100}
                                    />
                                </div>
                            </div>

                            {/* FOOTER METADATA */}
                            <div className="p-4 border-t border-neutral-800 bg-neutral-950 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <p className="text-xs text-neutral-400 max-w-2xl">
                                    {selectedDash.description}
                                </p>
                                {selectedDash.link && (
                                    <a
                                        href={selectedDash.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-xs font-bold text-white bg-green-600 hover:bg-green-500 px-4 py-2 transition-colors rounded-sm"
                                    >
                                        LAUNCH_EXTERNAL
                                        <span>↗</span>
                                    </a>
                                )}
                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}
