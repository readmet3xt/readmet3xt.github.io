import { ImageOff } from 'lucide-react';

interface ImagePlaceholderProps {
  /** Aspect ratio of the image (e.g., "16/9", "4/3", "1/1") */
  aspectRatio?: string;
  /** Height in pixels or rem (e.g., "400px", "20rem") */
  height?: string;
  /** Label to display in the placeholder */
  label: string;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show dimensions hint */
  showDimensions?: boolean;
  /** Recommended dimensions hint (e.g., "1200x675") */
  dimensions?: string;
}

export const ImagePlaceholder = ({ 
  aspectRatio = "16/9", 
  height,
  label, 
  className = "",
  showDimensions = true,
  dimensions 
}: ImagePlaceholderProps) => {
  const style: React.CSSProperties = {
    aspectRatio: aspectRatio,
    ...(height && { height })
  };

  return (
    <div 
      className={`relative w-full bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg border-2 border-dashed border-border overflow-hidden ${className}`}
      style={style}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/5 to-transparent animate-shimmer" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center gap-3 p-6 text-center">
        <ImageOff className="w-12 h-12 text-muted-foreground/40" />
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          {showDimensions && dimensions && (
            <p className="text-xs text-muted-foreground/60">
              Recommended: {dimensions}
            </p>
          )}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="h-1 bg-accent-primary/20 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-accent-primary/40 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-accent-primary/20 rounded-tl-lg" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-accent-primary/20 rounded-tr-lg" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-accent-primary/20 rounded-bl-lg" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-accent-primary/20 rounded-br-lg" />
    </div>
  );
};

// Add shimmer animation to tailwind if not already present
// You can add this to your tailwind.config.ts:
// animation: { 'shimmer': 'shimmer 3s ease-in-out infinite' }
// keyframes: { shimmer: { '0%, 100%': { transform: 'translateX(-100%)' }, '50%': { transform: 'translateX(100%)' } } }
