import { FAQ_ITEMS } from "@/lib/data/faq";
import FAQAccordion from "@/components/ui/FAQAccordion";

function FAQSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <FAQSchema />
      <p className="eyebrow mb-4">Frequently Asked</p>
      <h2 className="max-w-2xl font-display text-3xl leading-tight text-bone md:text-4xl">
        Questions people actually ask before reaching out.
      </h2>

      <div className="mt-12">
        <FAQAccordion />
      </div>
    </section>
  );
}
