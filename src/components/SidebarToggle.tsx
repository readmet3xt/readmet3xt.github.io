import { PanelRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarToggleProps {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
}

export const SidebarToggle = ({ isOpen, onClick, className }: SidebarToggleProps) => (
    <button
        type="button"
        onClick={onClick}
        className={cn(
            "flex items-center justify-center min-h-[44px] min-w-[44px] rounded text-text-primary hover:bg-bg-secondary transition-colors",
            className
        )}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
    >
        {isOpen ? <X className="w-5 h-5" /> : <PanelRight className="w-5 h-5" />}
    </button>
);
