interface FAQItem {
  question: string
  answer: string
  schema_eligible: boolean
}

interface ResourceFAQProps {
  faqs: FAQItem[]
  title?: string
}

export function ResourceFAQ({ faqs, title = "Frequently Asked Questions" }: ResourceFAQProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{title}</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {faq.question}
            </h3>
            <div className="text-gray-700 leading-relaxed">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
