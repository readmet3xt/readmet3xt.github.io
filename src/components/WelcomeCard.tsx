import { Link } from 'react-router-dom';

export const WelcomeCard = () => {
  return (
    <Link 
      to="/about" 
      className="project-card reveal-on-scroll rounded-xl overflow-hidden group bg-gradient-to-br from-accent-primary/10 via-accent-primary/5 to-card border border-accent-primary/20 block min-h-[340px] flex flex-col w-full max-w-full relative hover:border-accent-primary/40 transition-colors duration-300 cursor-pointer touch-manipulation active:scale-[0.98] transition-transform select-none"
    >
      {/* Image */}
      <div className="h-48 sm:h-52 relative overflow-hidden bg-gradient-to-br from-accent-primary/10 to-accent-primary/5">
        <img 
          src="/lovable-uploads/6bba6c1a-b7f8-404a-b8c3-367c42cbc2a0.png"
          alt="Amaan Khan - Product Designer" 
          className="w-full h-full object-cover"
        />
        
        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 w-16 h-16 bg-accent-primary/10 rounded-full blur-xl" />
        <div className="absolute bottom-8 right-8 w-12 h-12 bg-accent-primary/10 rounded-full blur-lg" />
      </div>

      <div className="p-4 sm:p-6 flex-1 flex flex-col relative z-10">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-xl sm:text-2xl font-bold font-dm-sans text-foreground break-words text-left">Amaan Khan</h3>
          {/* Available Badge */}
          <div className="flex items-center gap-2 px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full border border-green-500/30">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-xs font-medium text-white">Available</span>
          </div>
        </div>
        <p className="text-base sm:text-lg text-text-secondary break-words text-left">Product Designer</p>
        <p className="text-sm sm:text-base mt-3 text-text-secondary/80 leading-relaxed flex-1 break-words text-left">
          Hi there, Amaan here! I'm a Mechanical Engineer who traded engineering blueprints for service blueprints. I now build seamless experiences—digital or not—with an engineer's focus on function and a designer's focus on feeling.
        </p>
      </div>
    </Link>
  );
};