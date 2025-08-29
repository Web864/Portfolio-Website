import { motion } from 'framer-motion';


export default function ProjectCard({ project }) {
return (
<motion.article
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.4 }}
className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-lg transition-shadow"
>
<img
src={project.image}
alt={project.title}
className="h-48 w-full object-cover"
loading="lazy"
/>
<div className="p-5">
<h3 className="text-xl font-semibold">{project.title}</h3>
<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{project.summary}</p>
<div className="mt-3 flex flex-wrap gap-2">
{project.tags.map(t => (
<span key={t} className="rounded-full border px-2.5 py-1 text-xs border-neutral-200 dark:border-neutral-800">
{t}
</span>
))}
</div>
<div className="mt-4 flex gap-3">
<a className="underline" href={project.demo} target="_blank" rel="noreferrer">Live</a>
<a className="underline" href={project.repo} target="_blank" rel="noreferrer">Code</a>
</div>
</div>
</motion.article>
);
}