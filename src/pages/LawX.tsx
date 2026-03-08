import {
    CaseStudyLayout,
    CaseStudyHero,
    CaseStudySection,
    CaseStudyParagraph,
    CaseStudyQuote,
    CaseStudyList,
    CaseStudyImage,
    CaseStudyImageGrid,
    CaseStudyCard,
    CaseStudyCardGrid,
} from '@/components/case-study';

export const LawX = () => {
    return (
        <CaseStudyLayout
            title="Law.X"
            description="Designing Transparency into Legal AI — How I turned a 'black box' chatbot into a workspace lawyers actually trust."
        >
            <CaseStudyHero
                title="Designing Transparency into Legal AI"
                subtitle="How I turned a 'black box' chatbot into a workspace lawyers actually trust"
                pills={[
                    'Legal Tech',
                    'AI UX',
                    'Transparency Design',
                    '1-Month Contract',
                    'Figma',
                ]}
                intro="Legal professionals don't trust AI — and for good reason. When I took on this 1-month contract for early concept design, the brief was clear: design an AI assistant that lawyers would actually use. The answer wasn't better AI. It was better transparency."
                overview={{
                    role: [
                        'Concept Designer (Contract)',
                        'UX strategy, information architecture',
                        'Interface design, visual identity',
                        'Interaction design',
                    ],
                    timeline: '1-month contract',
                    tools: [
                        'Figma',
                        'User Research',
                        'Interaction Design',
                        'Design Systems',
                    ],
                }}
                heroImage="/jollyai/jollyai1.png"
                heroImageAlt="Law.X transparent legal assistant workspace"
            />

            {/* The Challenge */}
            <CaseStudySection title="The Challenge">
                <CaseStudyParagraph lead>
                    Lawyers are deeply skeptical of AI hallucinations — and rightly so. Confidently stated
                    falsehoods don't just embarrass lawyers, they end careers. My client needed a design
                    that addressed three specific realities of legal practice in India: trust in AI output,
                    precision of legal tone, and accuracy across state-specific jurisdictions.
                </CaseStudyParagraph>

                <CaseStudyParagraph>
                    The existing solution was a standard chatbot. You ask, it answers. No explanation of how.
                    For a lawyer, that's not a tool — it's a liability.
                </CaseStudyParagraph>

                <CaseStudyImage
                    src="/jollyai/jollyai2.png"
                    alt="The challenge of trust in legal AI"
                    caption="Standard chatbots offer no transparency into how they arrive at legal conclusions"
                />
            </CaseStudySection>

            {/* The Key Insight */}
            <CaseStudySection title="The Key Insight: Glass Box UX">
                <CaseStudyParagraph lead>
                    The breakthrough wasn't about making the AI more accurate. It was about making it more verifiable.
                </CaseStudyParagraph>

                <CaseStudyParagraph>
                    Lawyers don't need AI to be perfect. They need to catch it when it's wrong — before it matters.
                    So instead of hiding the AI's reasoning, I designed a system that surfaces it.
                </CaseStudyParagraph>

                <CaseStudyQuote>
                    The moment I showed lawyers they could watch the AI think — and catch mistakes before
                    they happened — their skepticism transformed into genuine interest.
                </CaseStudyQuote>

                <CaseStudyImage
                    src="/jollyai/jollyai3.png"
                    alt="Glass Box UX concept"
                    caption="Making AI reasoning visible transforms skepticism into trust"
                />
            </CaseStudySection>

            {/* The Thinking Panel */}
            <CaseStudySection title="The Thinking Panel">
                <CaseStudyParagraph lead>
                    Before generating any answer, the UI displays the AI's internal workflow in real time:
                    Query Reframing, Clarification, and Legal Index Framework Review. Lawyers can see exactly
                    which statutes are being referenced — Section 56(2) of the Income Tax Act, for example —
                    before they trust the output.
                </CaseStudyParagraph>

                <CaseStudyParagraph>
                    This single decision reframed the entire product from "AI that might be wrong" to "AI you can supervise."
                </CaseStudyParagraph>

                <CaseStudyImage
                    src="/jollyai/jollyai4.png"
                    alt="The Thinking Panel interface"
                    caption="Real-time visibility into the AI's reasoning process"
                />
            </CaseStudySection>

            {/* Context & Customisation */}
            <CaseStudySection title="Context & Customisation">
                <CaseStudyParagraph lead>
                    Legal tone isn't one thing. A court filing, a client email, and a legal notice require
                    completely different registers. I designed two systems to give lawyers precise control.
                </CaseStudyParagraph>

                <CaseStudyCardGrid columns={2}>
                    <CaseStudyCard title="Instruction Modal">
                        <CaseStudyParagraph>
                            A persistent settings layer directly in the chat input. Lawyers set global parameters —
                            "Keep it concise," "Use formal legal terminology" — and the AI carries them across sessions
                            without re-prompting.
                        </CaseStudyParagraph>
                    </CaseStudyCard>

                    <CaseStudyCard title="State-Specific Onboarding">
                        <CaseStudyParagraph>
                            Laws in India vary significantly by state. The onboarding flow makes jurisdiction selection
                            mandatory from the first interaction, ensuring accuracy before a single query is made.
                        </CaseStudyParagraph>
                    </CaseStudyCard>
                </CaseStudyCardGrid>

                <CaseStudyImage
                    src="/jollyai/jollyai5.png"
                    alt="Context and customisation features"
                    caption="Instruction modal and state-specific onboarding for precise legal control"
                />
            </CaseStudySection>

            {/* Reducing the Blank Page Problem */}
            <CaseStudySection title="Reducing the Blank Page Problem">
                <CaseStudyParagraph lead>
                    Legal professionals manage dozens of cases simultaneously. I designed two features
                    specifically to reduce friction at the start of tasks.
                </CaseStudyParagraph>

                <CaseStudyCardGrid columns={2}>
                    <CaseStudyCard title="Prompt Gallery">
                        <CaseStudyParagraph>
                            The home screen leads with curated, legal-specific prompts: "Draft IT notice response,"
                            "Outline M&A due diligence," "Summarize contract risks." No blank chat box, no cognitive
                            load about where to start.
                        </CaseStudyParagraph>
                    </CaseStudyCard>

                    <CaseStudyCard title="Side Panel Navigation">
                        <CaseStudyParagraph>
                            A collapsible sidebar for jumping between cases and threads instantly. Essential for
                            professionals managing multiple clients with overlapping deadlines.
                        </CaseStudyParagraph>
                    </CaseStudyCard>
                </CaseStudyCardGrid>

                <CaseStudyImage
                    src="/jollyai/jollyai6.png"
                    alt="Prompt gallery and side panel navigation"
                    caption="Reducing friction with curated prompts and efficient case management"
                />
            </CaseStudySection>

            {/* Visual Identity */}
            <CaseStudySection title="Visual Identity">
                <CaseStudyParagraph lead>
                    The design language is deliberately restrained — stark black, white, and grey with
                    high-contrast typography. Legal professionals read thousands of words daily; clarity
                    takes priority over personality. The one deliberate accent: a yellow "Thinking..." status
                    pill that signals AI activity without cluttering the interface.
                </CaseStudyParagraph>

                <CaseStudyImage
                    src="/jollyai/jollyai7.png"
                    alt="Law.X visual identity"
                    caption="Minimalist, high-contrast design conveying professionalism and authority"
                />
            </CaseStudySection>

            {/* The Outcome */}
            <CaseStudySection title="The Outcome">
                <CaseStudyParagraph lead>
                    A Figma prototype delivering a cohesive legal workspace that addresses the core barrier
                    to AI adoption in law: trust. By making reasoning visible rather than hiding it, a generic
                    chatbot became a specialized professional tool.
                </CaseStudyParagraph>

                <CaseStudyCardGrid columns={2}>
                    <CaseStudyCard title="🔍 Transparency First">
                        <CaseStudyParagraph>Show the reasoning, not just the result.</CaseStudyParagraph>
                    </CaseStudyCard>
                    <CaseStudyCard title="🎯 Precise Control">
                        <CaseStudyParagraph>Tone and terminology must be lawyer-defined, not AI-assumed.</CaseStudyParagraph>
                    </CaseStudyCard>
                    <CaseStudyCard title="📍 Jurisdictional Accuracy">
                        <CaseStudyParagraph>State-specific context from the very first interaction.</CaseStudyParagraph>
                    </CaseStudyCard>
                    <CaseStudyCard title="⚡ Workflow Efficiency">
                        <CaseStudyParagraph>Reduce the friction before users even start a task.</CaseStudyParagraph>
                    </CaseStudyCard>
                </CaseStudyCardGrid>
            </CaseStudySection>

            {/* Reflection */}
            <CaseStudySection title="Reflection">
                <CaseStudyQuote>
                    This project taught me that designing for trust is fundamentally different from
                    designing for usability. Sometimes the best UX isn't hiding complexity — it's
                    revealing it in a way that empowers users to make informed decisions.
                </CaseStudyQuote>

                <CaseStudyParagraph>
                    The legal tech space is growing fast, but adoption hinges on trust. Law.X demonstrates
                    that thoughtful UX can bridge the gap between AI capability and professional confidence —
                    not by making AI smarter, but by making it legible.
                </CaseStudyParagraph>

                <CaseStudyImage
                    src="/jollyai/jollyai8.png"
                    alt="Law.X final prototype overview"
                    caption="The complete Law.X design system — trust through transparency"
                />
            </CaseStudySection>
        </CaseStudyLayout>
    );
};
