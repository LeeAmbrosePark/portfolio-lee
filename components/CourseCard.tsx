interface CourseCardProps {
    code: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
  }
  
  export default function CourseCard({ code, title, category, description, tags }: CourseCardProps) {
    return (
      <div className="bg-neutral-950 border border-neutral-900 p-6 flex flex-col justify-between hover:border-white transition-colors duration-300 group h-full">
        <div>
          <div className="flex justify-between items-start mb-4">
             <span className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest">{code}</span>
             <span className="text-[10px] text-neutral-500 border border-neutral-800 px-2 py-1 bg-black">{category}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-500 transition-colors">{title}</h3>
          <p className="text-sm text-neutral-400 leading-relaxed mb-6">{description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-wide text-green-600/80 bg-green-900/10 border border-green-900/30 px-2 py-1">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    );
  }