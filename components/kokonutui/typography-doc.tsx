"use client"

export default function TypographyDoc() {
  return (
    <div className="p-8 bg-neutral-950 text-primary">
      <h1 className="text-3xl font-bold mb-8">From The Trenches Typography System</h1>

      <p className="mb-8 text-primary/80 font-sans">
        This typography system is designed to provide a consistent visual language across the From The Trenches
        platform. We use a combination of fonts to balance the cyberpunk aesthetic with readability and accessibility.
      </p>

      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4">Font Families</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border border-primary/20 rounded-md bg-black/40">
            <h3 className="text-lg font-bold mb-2">Heading Font: Share Tech Mono</h3>
            <p className="text-primary/80 mb-4 font-sans">
              Used for headings, titles, and UI elements that need to stand out. This monospace font reinforces our
              tech/cyberpunk aesthetic.
            </p>
            <div className="space-y-4">
              <div className="font-mono text-4xl">HEADING 1</div>
              <div className="font-mono text-3xl">HEADING 2</div>
              <div className="font-mono text-2xl">HEADING 3</div>
              <div className="font-mono text-xl">HEADING 4</div>
              <div className="font-mono text-lg">HEADING 5</div>
              <div className="font-mono text-base">HEADING 6</div>
            </div>
          </div>

          <div className="p-6 border border-primary/20 rounded-md bg-black/40">
            <h3 className="text-lg font-bold mb-2">Body Font: Inter</h3>
            <p className="text-primary/80 mb-4 font-sans">
              Used for body text, paragraphs, and UI elements that require better readability. This sans-serif font
              provides excellent legibility.
            </p>
            <div className="space-y-4">
              <p className="font-sans text-lg">Large paragraph text for important information.</p>
              <p className="font-sans text-base">Standard paragraph text for most content on the site.</p>
              <p className="font-sans text-sm">Smaller text for secondary information and UI elements.</p>
              <p className="font-sans text-xs">Very small text for legal information and footnotes.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4">Font Sizes</h2>
        <div className="p-6 border border-primary/20 rounded-md bg-black/40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-4">Heading Sizes</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-6xl font-mono mb-2">6XL</div>
                  <div className="text-primary/70 text-sm font-sans">60px - Hero headlines</div>
                </div>
                <div>
                  <div className="text-5xl font-mono mb-2">5XL</div>
                  <div className="text-primary/70 text-sm font-sans">48px - Main headlines</div>
                </div>
                <div>
                  <div className="text-4xl font-mono mb-2">4XL</div>
                  <div className="text-primary/70 text-sm font-sans">36px - Section headlines</div>
                </div>
                <div>
                  <div className="text-3xl font-mono mb-2">3XL</div>
                  <div className="text-primary/70 text-sm font-sans">30px - Subsection headlines</div>
                </div>
                <div>
                  <div className="text-2xl font-mono mb-2">2XL</div>
                  <div className="text-primary/70 text-sm font-sans">24px - Card headlines</div>
                </div>
                <div>
                  <div className="text-xl font-mono mb-2">XL</div>
                  <div className="text-primary/70 text-sm font-sans">20px - Small headlines</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Body Sizes</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-lg font-sans mb-2">Large</div>
                  <div className="text-primary/70 text-sm font-sans">18px - Featured paragraphs</div>
                </div>
                <div>
                  <div className="text-base font-sans mb-2">Base</div>
                  <div className="text-primary/70 text-sm font-sans">16px - Standard paragraphs</div>
                </div>
                <div>
                  <div className="text-sm font-sans mb-2">Small</div>
                  <div className="text-primary/70 text-sm font-sans">14px - Secondary text</div>
                </div>
                <div>
                  <div className="text-xs font-sans mb-2">Extra Small</div>
                  <div className="text-primary/70 text-sm font-sans">12px - Captions, footnotes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4">Font Weights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-primary/20 rounded-md bg-black/40">
            <h3 className="text-lg font-bold mb-4">Heading Weights</h3>
            <div className="space-y-4">
              <div className="font-mono font-bold text-xl">Bold (700) - Primary headings</div>
              <div className="font-mono font-semibold text-xl">Semibold (600) - Secondary headings</div>
              <div className="font-mono font-medium text-xl">Medium (500) - Tertiary headings</div>
            </div>
          </div>

          <div className="p-6 border border-primary/20 rounded-md bg-black/40">
            <h3 className="text-lg font-bold mb-4">Body Weights</h3>
            <div className="space-y-4">
              <div className="font-sans font-bold">Bold (700) - Emphasized text</div>
              <div className="font-sans font-semibold">Semibold (600) - Subheadings</div>
              <div className="font-sans font-medium">Medium (500) - UI elements</div>
              <div className="font-sans font-normal">Regular (400) - Body text</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 border border-primary/20 rounded-md bg-black/40">
        <h2 className="text-xl font-bold mb-4">Typography Guidelines</h2>
        <ul className="space-y-3 font-sans text-primary/80">
          <li>
            <strong className="text-primary">Headings:</strong> Use Share Tech Mono for all headings. Keep headings in
            uppercase for the cyberpunk aesthetic.
          </li>
          <li>
            <strong className="text-primary">Body Text:</strong> Use Inter for all body text to ensure readability.
            Avoid uppercase for paragraphs.
          </li>
          <li>
            <strong className="text-primary">Line Height:</strong> Use 1.5 for body text and 1.2 for headings to ensure
            proper readability.
          </li>
          <li>
            <strong className="text-primary">Letter Spacing:</strong> Headings may benefit from slightly increased
            letter spacing (0.025em) for better readability.
          </li>
          <li>
            <strong className="text-primary">Responsive Typography:</strong> Font sizes should scale down on mobile
            devices. Use the provided responsive classes.
          </li>
          <li>
            <strong className="text-primary">Accessibility:</strong> Maintain a minimum contrast ratio of 4.5:1 for
            normal text and 3:1 for large text.
          </li>
        </ul>
      </div>
    </div>
  )
}
