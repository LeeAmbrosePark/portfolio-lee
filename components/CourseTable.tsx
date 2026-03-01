'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type Artifact = {
    name: string;
    type: 'paper' | 'presentation' | 'spreadsheet' | 'video' | 'report';
    description: string;
    url?: string;
};

export type Course = {
    code: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    semester?: string;
    grade?: string;
    presentationUrl?: string;
    artifacts?: Artifact[];
    highlights?: string[];
};

interface CourseTableProps {
    courses: Course[];
}

const ArtifactIcon = ({ type }: { type: Artifact['type'] }) => {
    const cls = "w-4 h-4";
    switch (type) {
        case 'paper':
            return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>;
        case 'presentation':
            return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h16.5M3.75 3h-1.5m18 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" /></svg>;
        case 'spreadsheet':
            return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M10.875 12c-.621 0-1.125.504-1.125 1.125M12 12c.621 0 1.125.504 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 0v1.5c0 .621-.504 1.125-1.125 1.125" /></svg>;
        case 'video':
            return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>;
        case 'report':
            return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" /></svg>;
    }
};

const TYPE_LABELS: Record<Artifact['type'], string> = {
    paper: 'Paper',
    presentation: 'Slides',
    spreadsheet: 'Data',
    video: 'Video',
    report: 'Report',
};

export default function CourseTable({ courses }: CourseTableProps) {
    const [filter, setFilter] = useState('');
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

    const filteredCourses = courses.filter((course) => {
        const searchTerm = filter.toLowerCase();
        return (
            course.title.toLowerCase().includes(searchTerm) ||
            course.code.toLowerCase().includes(searchTerm) ||
            course.category.toLowerCase().includes(searchTerm) ||
            course.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    });

    return (
        <div className="w-full">

            {/* SEARCH */}
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Search courses, tags, or skills..."
                    className="w-full max-w-md bg-white border border-neutral-200 text-black px-4 py-3 rounded-lg focus:border-black focus:ring-1 focus:ring-black/10 transition-all outline-none text-sm"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <p className="text-xs text-neutral-400 mt-2">{filteredCourses.length} courses</p>
            </div>

            {/* COURSE TILES */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <AnimatePresence>
                    {filteredCourses.map((course) => (
                        <motion.div
                            key={course.code}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            layout
                            onClick={() => setSelectedCourse(course)}
                            className="border border-neutral-200 rounded-lg p-6 hover:border-black transition-colors cursor-pointer group"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs text-neutral-400">{course.code}</span>
                                {course.semester && (
                                    <span className="text-xs text-neutral-400">{course.semester}</span>
                                )}
                            </div>

                            <h3 className="text-base font-normal text-black mb-2 group-hover:underline">
                                {course.title}
                            </h3>

                            <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2 mb-4">
                                {course.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5">
                                {course.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="text-[11px] text-neutral-400 border border-neutral-200 px-2 py-0.5 rounded">
                                        {tag}
                                    </span>
                                ))}
                                {course.tags.length > 3 && (
                                    <span className="text-[11px] text-neutral-300">+{course.tags.length - 3}</span>
                                )}
                            </div>

                            {course.artifacts && course.artifacts.length > 0 && (
                                <div className="mt-4 pt-3 border-t border-neutral-100 text-xs text-neutral-400">
                                    {course.artifacts.length} deliverable{course.artifacts.length !== 1 ? 's' : ''}
                                </div>
                            )}
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
                            className="absolute inset-0 bg-white/80 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ scale: 0.97, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.97, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative bg-white border border-neutral-200 w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-xl rounded-lg"
                        >
                            <div className="p-8">
                                <div className="absolute top-0 right-0 p-4">
                                    <button
                                        onClick={() => setSelectedCourse(null)}
                                        className="text-neutral-400 hover:text-black transition-colors p-2 text-sm"
                                    >
                                        Close
                                    </button>
                                </div>

                                {/* Header */}
                                <div className="mb-6 pb-6 border-b border-neutral-100">
                                    <p className="text-xs text-neutral-400 mb-2">{selectedCourse.code} &middot; {selectedCourse.semester || ''}</p>
                                    <h2 className="text-2xl font-normal text-black mb-3">{selectedCourse.title}</h2>
                                    <span className="text-xs text-neutral-400 border border-neutral-200 px-2 py-1 rounded">{selectedCourse.category}</span>
                                </div>

                                {/* Description */}
                                <div className="mb-6">
                                    <p className="text-neutral-600 leading-relaxed text-[15px]">
                                        {selectedCourse.description}
                                    </p>
                                </div>

                                {/* Highlights */}
                                {selectedCourse.highlights && selectedCourse.highlights.length > 0 && (
                                    <div className="mb-6">
                                        <h3 className="text-xs font-bold uppercase text-neutral-400 mb-3 tracking-wide">
                                            Key Work
                                        </h3>
                                        <ul className="space-y-2">
                                            {selectedCourse.highlights.map((h, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                                                    <span className="text-neutral-300 mt-0.5 shrink-0">&ndash;</span>
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Tags */}
                                <div className="mb-6">
                                    <h3 className="text-xs font-bold uppercase text-neutral-400 mb-3 tracking-wide">
                                        Skills
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedCourse.tags.map(tag => (
                                            <span key={tag} className="text-xs text-neutral-500 border border-neutral-200 px-3 py-1.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Artifacts */}
                                <div className="border border-neutral-200 rounded-lg overflow-hidden">
                                    <div className="bg-neutral-50 px-4 py-3 border-b border-neutral-200 flex items-center justify-between">
                                        <h3 className="text-xs font-bold uppercase text-neutral-400 tracking-wide">
                                            Deliverables
                                        </h3>
                                        {selectedCourse.artifacts && selectedCourse.artifacts.length > 0 && (
                                            <span className="text-xs text-neutral-400">
                                                {selectedCourse.artifacts.length} items
                                            </span>
                                        )}
                                    </div>

                                    {selectedCourse.artifacts && selectedCourse.artifacts.length > 0 ? (
                                        <div className="divide-y divide-neutral-100">
                                            {selectedCourse.artifacts.map((artifact, i) => (
                                                <div key={i} className="flex items-start gap-3 p-4 hover:bg-neutral-50 transition-colors">
                                                    <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-neutral-200 rounded text-neutral-400">
                                                        <ArtifactIcon type={artifact.type} />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 mb-0.5">
                                                            <h4 className="text-sm text-black">{artifact.name}</h4>
                                                            <span className="text-[10px] text-neutral-400 border border-neutral-200 px-1.5 py-0.5 rounded shrink-0">
                                                                {TYPE_LABELS[artifact.type]}
                                                            </span>
                                                        </div>
                                                        <p className="text-xs text-neutral-400 leading-relaxed">{artifact.description}</p>
                                                        {artifact.url && (
                                                            <a
                                                                href={artifact.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-1 text-[11px] text-black underline mt-1"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                Download
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="p-6 text-center">
                                            <p className="text-sm text-neutral-400">No deliverables uploaded yet.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}
