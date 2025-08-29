export default function Footer() {
return (
<footer className="border-t border-neutral-100 dark:border-neutral-900">
<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-500 dark:text-neutral-400">
© {new Date().getFullYear()} Rabia. Built with React + Tailwind.
</div>
</footer>
);
}