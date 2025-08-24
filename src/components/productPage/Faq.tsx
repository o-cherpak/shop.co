export function Faq() {
  const faqs = [
    {
      question: "What is the return policy?",
      answer:
        "You can return any item within 30 days of purchase as long as it is in its original condition."
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide. Delivery times and fees vary depending on the destination."
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you will receive a tracking number via email to follow your package."
    },
    {
      question: "Can I change my order after placing it?",
      answer:
        "Yes, you can modify or cancel your order within 2 hours of placing it. After that, we may not be able to make changes."
    }
  ];

  return (
      <div className="grid gap-6 md:grid-cols-2 p-6 md:px-20 text-black/60">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-500 hover:scale-102"
          >
            <p className="font-semibold text-lg mb-2 text-black/80">
              {faq.question}
            </p>

            <p className="leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
  );
}
