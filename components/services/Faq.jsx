import React from "react";

const faqData = [
  {
    id: 3,
    question: "Can KOgenie help with product catalog management?",
    answer:
      "Yes, KOgenie specializes in product catalog management, allowing businesses to organize and update their product listings across platforms effortlessly.",
  },
  {
    id: 4,
    question: "What kind of support does KOgenie provide?",
    answer:
      "KOgenie offers 24/7 customer support to ensure that any technical issues or queries are resolved quickly, keeping your business running smoothly.",
  },
  {
    id: 5,
    question: "How does KOgenie handle data analytics?",
    answer:
      "KOgenie’s advanced data analytics tools provide deep insights into customer behavior, helping businesses make data-driven decisions to enhance their strategies.",
  },
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-two" id="accordionOne">
      {faqData.map((faq) => (
        <div className="accordion-item" key={faq.id}>
          <div className="accordion-header" id={`heading${faq.id}`}>
            <button
              className={`accordion-button ${faq.id === 3 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${faq.id}`}
              aria-expanded={faq.id === 3 ? "true" : "false"}
              aria-controls={`collapse${faq.id}`}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={`collapse${faq.id}`}
            className={`accordion-collapse collapse ${
              faq.id === 3 ? "show" : ""
            }`}
            aria-labelledby={`heading${faq.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
