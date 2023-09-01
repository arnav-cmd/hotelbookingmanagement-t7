import React, { useState } from 'react';
import './FAQ.css';
import Navbar from './navbar';

const FAQSection = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (index) => {
        if (activeQuestion === index) {
            setActiveQuestion(null);
        } else {
            setActiveQuestion(index);
        }
    };

    const faqData = [
        {
            question: 'How can I view my booking?',
            answer: 'To view your booking, check BookingHistory on Navbar'
        },
        {
            question: 'What payment methods are accepted?',
            answer: 'We accept credit cards and PayPal for payment...'
        },
        {
            question: 'How can I contact Travely?',
            answer: 'By accessing the Contact Us Page, you can place your query.'
        },
        {
            question: ' Can I edit my Travely Booking?',
            answer: 'As of now you can not edit or delete your booking but we will soon add the feature'
        },
        // Add more FAQ data objects here
    ];

    return (
        <>
        <Navbar/>
        <section className="faq-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-3">
                        <div className="faq-title">
                            <h2>FAQ</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="faq" id="accordion">
                            {faqData.map((faq, index) => (
                                <div className="card" key={index}>
                                    <div
                                        className={`card-header ${activeQuestion === index ? 'active' : ''}`}
                                        id={`faqHeading-${index}`}
                                        onClick={() => toggleQuestion(index)}
                                    >
                                        <div className="mb-0">
                                            <h5
                                                className="faq-title"
                                                data-toggle="collapse"
                                                data-target={`#faqCollapse-${index}`}
                                                data-aria-expanded={activeQuestion === index ? 'true' : 'false'}
                                                data-aria-controls={`faqCollapse-${index}`}
                                            >
                                                <span className="badge">{index + 1}</span> {faq.question}
                                            </h5>
                                        </div>
                                    </div>
                                    <div
                                        id={`faqCollapse-${index}`}
                                        className={`collapse ${activeQuestion === index ? 'show' : ''}`}
                                        aria-labelledby={`faqHeading-${index}`}
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default FAQSection;

