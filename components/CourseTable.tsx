'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type Course = {
    code: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    semester?: string;
    grade?: string;
    presentationUrl?: string; // e.g., "/presentations/mpsc-5530-final.pdf"
};

interface CourseTableProps {
    courses: Course[];
}

export default function CourseTable({ courses }: CourseTableProps) {
    const [filter, setFilter] = useState('');
    const [sortConfig, setSortConfig] = useState<{ key: keyof Course; direction: 'asc' | 'desc' } | null>(null);
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

    // 1. Filter
    const filteredCourses = courses.filter((course) => {
        const searchTerm = filter.toLowerCase();
        return (
            course.title.toLowerCase().includes(searchTerm) ||
            course.code.toLowerCase().includes(searchTerm) ||
            course.category.toLowerCase().includes(searchTerm) ||
            course.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    });

    // 2. Sort
    const sortedCourses = [...filteredCourses].sort((a, b) => {
        if (!sortConfig) return 0;

        // Handle specific sort keys that might be undefined safely
        // For this simple example, we'll cast to string for comparison or handle specific types if needed
        const aValue = String(a[sortConfig.key] || '').toLowerCase();
        const bValue = String(b[sortConfig.key] || '').toLowerCase();

        if (aValue < bValue) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    const requestSort = (key: keyof Course) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const getSortIcon = (key: keyof Course) => {
        if (!sortConfig || sortConfig.key !== key) return <span className="opacity-30">↕</span>;
        return sortConfig.direction === 'asc' ? <span className="text-green-500">↑</span> : <span className="text-green-500">↓</span>;
    };

    return (
        <div className="w-full font-mono text-xs md:text-sm">

            {/* CONTROLS */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6 border-b border-white/10 pb-6">
                <div className="w-full md:w-1/2">
                    <label className="text-[10px] uppercase text-neutral-500 tracking-widest mb-2 block">
                // SEARCH_DATABASE
                    </label>
                    <div className="relative group">
                        <span className="absolute left-4 top-3.5 text-neutral-600 group-focus-within:text-green-500 transition-colors">
                            Search:
                        </span>
                        <input
                            type="text"
                            placeholder="Find course, tag, or skill..."
                            className="w-full bg-black border border-neutral-800 text-white pl-20 p-3 ring-1 ring-transparent focus:ring-green-500/50 focus:border-green-500/50 transition-all outline-none"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        />
                    </div>
                </div>
                <div className="text-[10px] text-neutral-600 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    {filteredCourses.length} RECORDS FOUND
                </div>
            </div>

            {/* TABLE HEADER */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-neutral-900/40 border-y border-white/5 text-[10px] uppercase tracking-widest text-neutral-500 font-bold select-none">
                <div className="col-span-2 cursor-pointer hover:text-white transition-colors flex items-center gap-2 group" onClick={() => requestSort('code')}>
                    ID_CODE {getSortIcon('code')}
                </div>
                <div className="col-span-4 cursor-pointer hover:text-white transition-colors flex items-center gap-2 group" onClick={() => requestSort('title')}>
                    COURSE_TITLE {getSortIcon('title')}
                </div>
                <div className="col-span-2 cursor-pointer hover:text-white transition-colors flex items-center gap-2 group" onClick={() => requestSort('category')}>
                    CATEGORY {getSortIcon('category')}
                </div>
                <div className="col-span-4">
                    KEY_TAGS // SKILLS
                </div>
            </div>

            {/* TABLE BODY */}
            <div className="space-y-1 mt-2">
                <AnimatePresence>
                    {sortedCourses.map((course) => (
                        <motion.div
                            key={course.code}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, height: 0 }}
                            layout
                            onClick={() => setSelectedCourse(course)}
                            className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 p-4 border border-transparent hover:border-green-900/50 hover:bg-green-900/10 transition-all cursor-pointer group items-center relative"
                        >
                            {/* Mobile Label */}
                            <div className="md:hidden text-[10px] text-neutral-600 mb-1">ID_CODE</div>

                            <div className="col-span-2 font-bold text-white group-hover:text-green-400 transition-colors font-mono">
                                {course.code}
                            </div>

                            <div className="md:hidden text-[10px] text-neutral-600 mt-2 mb-1">TITLE</div>
                            <div className="col-span-4 text-neutral-300 font-medium">
                                {course.title}
                            </div>

                            <div className="md:hidden text-[10px] text-neutral-600 mt-2 mb-1">CATEGORY</div>
                            <div className="col-span-2">
                                <span className="text-[10px] border border-neutral-800 px-2 py-0.5 text-neutral-500 bg-neutral-950 inline-block rounded-sm">
                                    {course.category}
                                </span>
                            </div>

                            <div className="md:hidden text-[10px] text-neutral-600 mt-2 mb-1">TAGS</div>
                            <div className="col-span-4 flex flex-wrap gap-2">
                                {course.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="text-[10px] text-neutral-500">#{tag}</span>
                                ))}
                                {course.tags.length > 3 && (
                                    <span className="text-[10px] text-neutral-700">+{course.tags.length - 3}</span>
                                )}
                            </div>

                            <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-green-500 text-lg">›</span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* DETAIL MODAL */}
            <AnimatePresence>
                {selectedCourse && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCourse(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative bg-black border border-green-900/50 w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl shadow-green-900/20 rounded-sm"
                        >
                            {/* Modal Content */}
                            <div className="p-8">
                                <div className="absolute top-0 right-0 p-4">
                                    <button
                                        onClick={() => setSelectedCourse(null)}
                                        className="text-neutral-500 hover:text-white transition-colors p-2"
                                    >
                                        [ESC] CLOSE
                                    </button>
                                </div>


                                <div className="mb-8 border-b border-white/10 pb-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="text-xs text-black bg-green-500 px-2 py-1 font-bold tracking-widest uppercase">
                                    // RECORD_RETRIEVED
                                        </div>
                                        <span className="font-mono text-green-500 opacity-50">{selectedCourse.code}</span>
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{selectedCourse.title}</h2>

                                    <div className="flex flex-wrap gap-4 text-xs text-neutral-400 font-mono border-l-2 border-green-500 pl-4">
                                        <span className="uppercase">{selectedCourse.category}</span>
                                        <span className="text-neutral-700">|</span>
                                        <span>SEMESTER: {selectedCourse.semester || 'N/A'}</span>
                                        {selectedCourse.grade && (
                                            <>
                                                <span className="text-neutral-700">|</span>
                                                <span className="text-white">GRADE: {selectedCourse.grade}</span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="prose prose-invert prose-sm max-w-none">
                                    <h3 className="text-xs font-bold uppercase text-neutral-500 mb-3 tracking-widest">
                                        Course Abstract
                                    </h3>
                                    <p className="text-neutral-300 leading-relaxed mb-8 text-sm md:text-base">
                                        {selectedCourse.description}
                                    </p>

                                    <h3 className="text-xs font-bold uppercase text-neutral-500 mb-3 tracking-widest">
                                        Competencies Acquired
                                    </h3>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {selectedCourse.tags.map(tag => (
                                            <span key={tag} className="border border-neutral-800 bg-neutral-900/50 px-3 py-1.5 text-xs text-neutral-300 hover:border-green-500/50 hover:text-green-400 transition-colors cursor-default">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* SECTION FOR FILE UPLOADS */}
                                    <div className={`border p-6 rounded-sm relative overflow-hidden group transition-colors ${selectedCourse.presentationUrl
                                            ? "bg-neutral-900/30 border-neutral-700 hover:border-white"
                                            : "bg-neutral-950 border-neutral-800"
                                        }`}>
                                        <h3 className={`text-[10px] font-bold uppercase mb-4 tracking-widest ${selectedCourse.presentationUrl ? "text-white" : "text-neutral-600"
                                            }`}>
                                            ARTIFACTS / DELIVERABLES
                                        </h3>

                                        {selectedCourse.presentationUrl ? (
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-white text-black rounded-sm">
                                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-white">Final Presentation / deliverable</h4>
                                                    <a
                                                        href={selectedCourse.presentationUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-xs text-neutral-400 hover:text-white underline decoration-neutral-600 hover:decoration-white transition-all"
                                                    >
                                                        Download PDF ↗
                                                    </a>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center justify-center border-2 border-dashed border-neutral-800 p-6 text-center">
                                                <p className="text-xs text-neutral-500 mb-2">No digital artifacts currently available.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}
