import React from 'react';

interface CourseCardProps {
  code: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export default function CourseCard({ code, title, category, description, tags }: CourseCardProps) {
  return (
    <div className="group relative bg-black border border-neutral-800 p-6 hover:border-white transition-colors duration-300 h-full flex flex-col justify-between">
      
      {/* Top Meta Data */}
      <div className="flex justify-between items-start mb-4 border-b border-neutral-900 pb-4">
        <div className="flex flex-col">
            <span className="text-[10px] font-mono text-white tracking-widest uppercase mb-1">
                [{code}]
            </span>
            <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase">
                // {category}
            </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white mb-3 tracking-tighter uppercase group-hover:underline decoration-1 underline-offset-4">
          {title}
        </h3>
        <p className="text-xs text-neutral-500 leading-relaxed font-mono">
          {description}
        </p>
      </div>

      {/* Footer Tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-4">
        {tags.map((tag) => (
          <span key={tag} className="text-[9px] text-neutral-400 font-mono px-1 border border-neutral-800 group-hover:border-neutral-600 transition-colors uppercase">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}