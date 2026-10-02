// LinkedIn recommendations, quoted verbatim. Excerpts keep the original words
// and mark omissions with an ellipsis.

interface Recommendation {
  name: string;
  role: string;
  relationship: string;
  text: string;
  excerpt: string;
}

const RECOMMENDATIONS: Recommendation[] = [
  {
    name: 'Elin Sjursen',
    role: 'Senior Design Strategy Director, Visa',
    relationship: 'Mentored Amaan on the Pebble project at the RCA',
    text: "Amaan delivered his final student work at RCA as an employee experience project in collaboration with Visa. He and his team did an amazing job exploring ways of creating happy environments for our remotely working employees. Amaan was not only proactive in managing his stakeholders and bringing together the right people at the right time in the design thinking process, his thoughts, analysis of the insight and creative output was thoughtful, articulate and incredibly creative. Check out the Pebbles project in his portfolio and you will be very impressed. Dependable, smart, insightful and driven, I highly recommend you snap up Amaan on your team.",
    excerpt: 'He and his team did an amazing job exploring ways of creating happy environments for our remotely working employees. … Dependable, smart, insightful and driven, I highly recommend you snap up Amaan on your team.',
  },
  {
    name: 'Chandana Gowda',
    role: 'UI/UX Designer, KoinBasket',
    relationship: 'Reported to Amaan at KoinBasket',
    text: "I had the pleasure of working with Amaan Khan, and he was an incredible mentor throughout my role. He generously shared materials, provided valuable tips, and guided me in refining my skills. What truly stands out about Amaan is his meticulous attention to detail and his ability to explore multiple solutions to meet both client expectations and design requirements. He consistently strives to enhance products through thorough research and innovative ideas while keeping a company's budget in mind. Overall, he is not only a talented designer but also a great person to work with. I'm grateful to have had the opportunity to learn from him and highly recommend him to anyone looking for a skilled and thoughtful professional.",
    excerpt: 'He was an incredible mentor throughout my role. … What truly stands out about Amaan is his meticulous attention to detail and his ability to explore multiple solutions to meet both client expectations and design requirements.',
  },
  {
    name: 'Khaleelulla Baig',
    role: 'Founder, KoinBasket',
    relationship: 'Managed Amaan at KoinBasket',
    text: 'Amaan is a great talent in the UI UX design space. He thinks out of the box and follows the most appropriate research and implementation process. All the best and look forward to collaborating again',
    excerpt: 'Amaan is a great talent in the UI UX design space. He thinks out of the box and follows the most appropriate research and implementation process.',
  },
  {
    name: 'Deljo Joseph',
    role: 'Founder, Getter',
    relationship: 'Worked with Amaan at KoinBasket',
    text: "I worked closely with Amaan at KoinBasket on various projects. He consistently delivered impressive UI/UX work, even on tight deadlines. He's a genuine team player and a great asset to any team.",
    excerpt: "He consistently delivered impressive UI/UX work, even on tight deadlines.",
  },
];

interface RecommendationsProps {
  /** Home shows three short excerpts; About shows all four in full. */
  variant?: 'excerpts' | 'full';
  showTitle?: boolean;
}

export const Recommendations = ({ variant = 'excerpts', showTitle = true }: RecommendationsProps) => {
  const items = variant === 'excerpts' ? RECOMMENDATIONS.slice(0, 3) : RECOMMENDATIONS;

  return (
    <section aria-labelledby={showTitle ? 'recommendations-heading' : undefined} aria-label={showTitle ? undefined : 'Recommendations'} className={showTitle ? 'border-t border-border py-16' : ''}>
      {showTitle && <h2 id="recommendations-heading" className="text-3xl sm:text-4xl mb-10">Recommendations</h2>}
      <div className={`grid gap-10 ${variant === 'excerpts' ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
        {items.map((r) => (
          <figure key={r.name}>
            <blockquote className="font-serif text-lg leading-snug text-text-primary">
              "{variant === 'excerpts' ? r.excerpt : r.text}"
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-medium text-text-primary">{r.name}</span>
              <span className="block text-text-secondary">{r.role}</span>
              <span className="block text-text-tertiary">{r.relationship}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-10 text-sm">
        <a href="https://www.linkedin.com/in/readmetxt/details/recommendations/" target="_blank" rel="noopener noreferrer" className="link-ink">
          Read them on LinkedIn ↗
        </a>
      </p>
    </section>
  );
};
