export default function SectionTitle({ title, subtitle }) {
return (
<div className="mb-8">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
{subtitle && (
<p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">{subtitle}</p>
)}
</div>
);
}