// LinkedIn recommendations, quoted in full and verbatim.

interface Recommendation {
  name: string;
  role: string;
  relationship: string;
  text: string;
}

const RECOMMENDATIONS: Recommendation[] = [
  {
    name: 'Elin Sjursen',
    role: 'Senior Design Strategy Director, Visa',
    relationship: 'Mentored Amaan on the Pebble project at the RCA',
    text: "Amaan delivered his final student work at RCA as an employee experience project in collaboration with Visa. He and his team did an amazing job exploring ways of creating happy environments for our remotely working employees. Amaan was not only proactive in managing his stakeholders and bringing together the right people at the right time in the design thinking process, his thoughts, analysis of the insight and creative output was thoughtful, articulate and incredibly creative. Check out the Pebbles project in his portfolio and you will be very impressed. Dependable, smart, insightful and driven, I highly recommend you snap up Amaan on your team.",
  },
  {
    name: 'Chandana Gowda',
    role: 'UI/UX Designer, KoinBasket',
    relationship: 'Reported to Amaan at KoinBasket',
    text: "I had the pleasure of working with Amaan Khan, and he was an incredible mentor throughout my role. He generously shared materials, provided valuable tips, and guided me in refining my skills. What truly stands out about Amaan is his meticulous attention to detail and his ability to explore multiple solutions to meet both client expectations and design requirements. He consistently strives to enhance products through thorough research and innovative ideas while keeping a company's budget in mind. Overall, he is not only a talented designer but also a great person to work with. I'm grateful to have had the opportunity to learn from him and highly recommend him to anyone looking for a skilled and thoughtful professional.",
  },
  {
    name: 'Khaleelulla Baig',
    role: 'Founder, KoinBasket',
    relationship: 'Managed Amaan at KoinBasket',
    text: 'Amaan is a great talent in the UI UX design space. He thinks out of the box and follows the most appropriate research and implementation process. All the best and look forward to collaborating again',
  },
  {
    name: 'Deljo Joseph',
    role: 'Founder, Getter',
    relationship: 'Worked with Amaan at KoinBasket',
    text: "I worked closely with Amaan at KoinBasket on various projects. He consistently delivered impressive UI/UX work, even on tight deadlines. He's a genuine team player and a great asset to any team.",
  },
];

interface RecommendationsProps {
  showTitle?: boolean;
}

/** All four recommendations in full, in equal-height cards with the names aligned along the bottom. */
export const Recommendations = ({ showTitle = true }: RecommendationsProps) => (
  <section aria-labelledby={showTitle ? 'recommendations-heading' : undefined} aria-label={showTitle ? undefined : 'Recommendations'} className={showTitle ? 'border-t border-border py-16' : ''}>
    {showTitle && <h2 id="recommendations-heading" className="text-3xl sm:text-4xl mb-10">Recommendations</h2>}
    <div className="grid gap-5 md:grid-cols-2">
      {RECOMMENDATIONS.map((r) => (
        <figure key={r.name} className="flex h-full flex-col rounded-2xl border border-border bg-bg-secondary p-6 sm:p-8">
          <span aria-hidden="true" className="text-4xl leading-none text-accent-primary">“</span>
          <blockquote className="mt-2 leading-relaxed text-text-primary">{r.text}</blockquote>
          <figcaption className="mt-auto pt-6 text-sm">
            <span className="block font-medium text-text-primary">{r.name}</span>
            <span className="block text-text-secondary">{r.role}</span>
            <span className="block font-mono text-xs mt-1 text-text-tertiary">{r.relationship}</span>
          </figcaption>
        </figure>
      ))}
    </div>
    <p className="mt-6 text-sm">
      <a href="https://www.linkedin.com/in/readmetxt/details/recommendations/" target="_blank" rel="noopener noreferrer" className="link-ink inline-flex min-h-[44px] items-center">
        Read them on LinkedIn ↗
      </a>
    </p>
  </section>
);
