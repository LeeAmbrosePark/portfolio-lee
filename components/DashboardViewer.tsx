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
    link?: string;
};

interface DashboardViewerProps {
    dashboards: Dashboard[];
}

export default function DashboardViewer({ dashboards }: DashboardViewerProps) {
    const [selectedDash, setSelectedDash] = useState<Dashboard | null>(null);

    return (
        <div className="space-y-12">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {dashboards.map((dash) => (
                    <div
                        key={dash.id}
                        className="group cursor-pointer"
                        onClick={() => setSelectedDash(dash)}
                    >
                        <div className="relative aspect-video bg-neutral-50 border border-neutral-200 rounded-lg overflow-hidden mb-4 group-hover:border-black transition-colors">
                            <Image
                                src={dash.imageSrc}
                                alt={dash.title}
                                fill
                                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>

                        <h3 className="text-black text-lg mb-2 group-hover:underline">
                            {dash.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                            {dash.tags.map(tag => (
                                <span key={tag} className="text-[11px] border border-neutral-200 px-2 py-0.5 text-neutral-400 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-neutral-500 leading-relaxed max-w-md">
                            {dash.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* FULL SCREEN MODAL */}
            <AnimatePresence>
                {selectedDash && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedDash(null)}
                            className="absolute inset-0 bg-white/90 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ scale: 0.97, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.97, opacity: 0 }}
                            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col bg-white border border-neutral-200 shadow-xl rounded-lg overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center p-4 border-b border-neutral-100">
                                <h2 className="text-sm text-black">
                                    {selectedDash.title}
                                </h2>
                                <button
                                    onClick={() => setSelectedDash(null)}
                                    className="text-sm text-neutral-400 hover:text-black transition-colors"
                                >
                                    Close
                                </button>
                            </div>

                            <div className="flex-grow relative bg-neutral-50 overflow-auto flex items-center justify-center p-4">
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

                            <div className="p-4 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <p className="text-sm text-neutral-500 max-w-2xl">
                                    {selectedDash.description}
                                </p>
                                {selectedDash.link && (
                                    <a
                                        href={selectedDash.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-black underline hover:no-underline"
                                    >
                                        Open
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
