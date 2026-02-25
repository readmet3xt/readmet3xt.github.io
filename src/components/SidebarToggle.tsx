import { motion } from 'framer-motion';
import { PanelLeft, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarToggleProps {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
    minimal?: boolean;
}

export const SidebarToggle = ({ isOpen, onClick, className, minimal }: SidebarToggleProps) => {
    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: isOpen ? 0.5 : 1,
                scale: 1
            }}
            whileHover={{ scale: 1.05, opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={cn(
                "z-50 p-2 rounded-xl flex items-center justify-center transition-all duration-300",
                !minimal && "bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg",
                !minimal && "hover:bg-white/20 dark:hover:bg-black/20 hover:border-accent-primary/50",
                "group min-h-[44px] min-w-[44px]",
                className
            )}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
        >
            <div className="relative w-6 h-6 flex items-center justify-center">
                <motion.div
                    animate={{
                        rotate: isOpen ? 90 : 0,
                        opacity: isOpen ? 0 : 1,
                        scale: isOpen ? 0.5 : 1
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <PanelLeft className="w-5 h-5 text-text-primary group-hover:text-accent-primary transition-colors" />
                </motion.div>

                <motion.div
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{
                        rotate: isOpen ? 0 : -90,
                        opacity: isOpen ? 1 : 0,
                        scale: isOpen ? 1 : 0.5
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <X className="w-5 h-5 text-text-primary group-hover:text-accent-primary transition-colors" />
                </motion.div>
            </div>

            {!isOpen && !minimal && (
                <motion.div
                    layoutId="pulse"
                    className="absolute inset-0 rounded-xl bg-accent-primary/20 -z-10"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0, 0.2]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            )}
        </motion.button>
    );
};
