import { useTheme } from '../context/ThemeContext';


export default function ThemeToggle() {
const { theme, toggle } = useTheme();
return (
<button
onClick={toggle}
className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition-all border-neutral-200 dark:border-neutral-800"
aria-label="Toggle dark mode"
>
{theme === 'dark' ? '🌙 Light' : '☀️ Dark'}
</button>
);
}