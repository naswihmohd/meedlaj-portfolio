import Link from 'next/link';
import { motion } from 'framer-motion';

function NavLink({
    href,
    label,
    active,
    onNavigate,
  }: {
    href: string;
    label: string;
    active: boolean;
    onNavigate?: () => void;
  }) {
    return (
      <Link
        href={href}
        onClick={onNavigate}
        className="group relative inline-flex py-1 text-[15px] font-medium"
      >
        <motion.span
          className={
            active
              ? "text-blue-600"
              : "text-[color:var(--nav-text)] transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400"
          }
          whileHover={{ y: -1 }}
          transition={{ duration: 0.18 }}
        >
          {label}
        </motion.span>
        <span
          aria-hidden
          className={`absolute bottom-0 left-0 h-[2px] w-full origin-left rounded-full bg-blue-500 transition-transform duration-200 ease-out ${
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </Link>
    );
  }


export default NavLink
