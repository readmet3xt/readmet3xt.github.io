import { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoEmbedProps {
  provider: 'vimeo' | 'youtube';
  id: string;
  title: string;
}

const embedUrl = (provider: VideoEmbedProps['provider'], id: string) =>
  provider === 'vimeo'
    ? `https://player.vimeo.com/video/${id}?autoplay=1&dnt=1&badge=0&autopause=0`
    : `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;

/**
 * A video that loads only when asked: a play card first, the player (and its
 * scripts and cookies) after a click. Keeps case studies fast for reviewers.
 */
export const VideoEmbed = ({ provider, id, title }: VideoEmbedProps) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-secondary aspect-video">
      {playing ? (
        <iframe
          src={embedUrl(provider, id)}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-primary text-bg-primary transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110">
            <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
          </span>
          <span className="px-6 text-lg font-medium text-text-primary">{title}</span>
          <span className="font-mono text-xs text-text-tertiary">Plays on {provider === 'vimeo' ? 'Vimeo' : 'YouTube'}</span>
        </button>
      )}
    </div>
  );
};
