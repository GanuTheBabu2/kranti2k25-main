import React, { useState } from "react";

// FAQSection Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null); // State to track the currently open answer

  const faqs = [
    {
      question: "Will food be provided during the event?",
      answer:
        "Yes, food will be provided to all participants. The event organizers have arranged for refreshments and meals during the event.",
    },
    {
      question: "Will certificates be awarded to participants?",
      answer:
        "Yes, both participation and winner certificates will be provided. All attendees who actively participate in the events will receive a participation certificate, while winners will receive additional recognition.",
    },
    {
      question: "Is transportation arranged by the college for participants?",
      answer:
        "No, the college will not be providing transportation for the event. Participants are responsible for making their own travel arrangements to and from the venue.",
    },
    {
      question: "Is there any registration fee for attending the event?",
      answer:
        "No, there is no registration fee required to participate in the event. Registration is completely free for all eligible participants.",
    },
    {
      question: "What are the scheduled timings for the events?",
      answer:
        "All events are scheduled to take place between 10:00 AM and 1:00 PM. Participants are requested to arrive on time to avoid missing any part of their registered events.",
    },
    {
      question: "Can participants register on the spot during the event?",
      answer:
        "No, on-spot registration will not be available. All participants are required to complete their registration process in advance as per the event guidelines.",
    },
    {
      question: "What should participants bring with them to the event?",
      answer:
        "Participants must carry their college ID along with any other necessary items mentioned in the specific event description. Please check the event details for additional requirements. Additionally, all participants are required to wear professional outfits as part of the event dress code.",
    },
    {
      question: "When will the results of the event be announced?",
      answer:
        "The results of the event will be announced at 12:45 PM. Participants are encouraged to stay updated with announcements from the organizing team.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the visibility
  };

  return (
    <div className="py-12 text-left bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-500">FAQs</h2>
        <div className="mt-6">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 bg-black rounded-lg text-white">
              <div
                className="flex justify-between p-4 cursor-pointer border border-sky-500"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-lg text-sky-400">
                  {faq.question}
                </h3>
                <span
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  &#x25BC; {/* Down arrow */}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 opacity-80 p-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ContactUsSection Component
function ContactUsSection() {
  return (
    <div className="py-12 text-left bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-sky-500">Explore More</h2>
        <p className="mt-4 text-white opacity-70">
          Dive deeper into our website and discover more about us, our team, and
          the exciting events we have planned. Click the buttons below to
          explore!
        </p>
        <div className="mt-8 flex flex-col items-start space-y-2 md:flex-row md:space-x-4 md:space-y-0">
          <a
            href="/about"
            className="inline-block px-6 py-2 rounded-full bg-black text-white font-bold border border-sky-500 hover:bg-gray-800 transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="/dev"
            className="inline-block px-6 py-2 rounded-full bg-black text-white font-bold border border-sky-500 hover:bg-gray-800 transition-colors duration-300"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </div>
  );
}

// Main Component (for example purposes)
function MainComponent() {
  return (
    <div>
      <ContactUsSection />
      <FAQSection />
      {/* Location section would be added here if you have it */}
    </div>
  );
}

export default MainComponent;