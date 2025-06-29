import React, { useState } from "react";
import plus from "../../assets/images/enroll/plus.svg";
import minus from "../../assets/images/enroll/minus.svg";

const BlogFaq = ({ blogFaqs, title, cname }) => {
    const [expandedId, setExpandedId] = useState(null);

    const handleToggle = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const truncateText = (text, wordLimit, appendEllipsis = true) => {
        if (typeof text !== "string") {
            console.warn("Input text must be a string.");
            return "";
        }

        const plainText = text.replace(/<\/?[^>]+(>|$)/g, "");

        const words = plainText.trim().split(/\s+/);
        if (words.length > wordLimit) {
            return `${words.slice(0, wordLimit).join(" ")}${appendEllipsis ? "" : ""
                }`;
        }

        return plainText;
    };

    return (
        <div className={`common-faq enroll ${cname}`}>
            <section className="enroll-section-5">
                <h2 className="h-text">{title}</h2>
                <div className="enroll-accordion-section-2">
                    <div className="accordion" id="accordionExample">
                        {blogFaqs?.map((item, index) => (
                            <div
                                key={index}
                                className="accordion-item enroll-accordion-item-2"
                            >
                                <button
                                    className={`accordion-button ${expandedId === index ? "" : "collapsed"
                                        }`}
                                    type="button"
                                    onClick={() => handleToggle(index)}
                                    aria-expanded={expandedId === index}
                                    aria-controls={`collapse${index}`}
                                >
                                    {item.question}
                                    <img
                                        src={expandedId === index ? minus : plus}
                                        alt={expandedId === index ? "minus" : "plus"}
                                        className={`plus-img ${expandedId === index ? "rotate-img" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    id={`collapse${index}`}
                                    className={`accordion-collapse collapse ${expandedId === index ? "show" : ""
                                        }`}
                                    data-bs-parent="#accordionExample"
                                    style={{
                                        transition: "max-height 0.5s ease-out",
                                        maxHeight: expandedId === index ? "500px" : "0",
                                        overflow: "hidden",
                                    }}
                                >
                                    <div
                                        className="accordion-body pt-0"
                                        dangerouslySetInnerHTML={{
                                            __html: truncateText(item?.answer, 30),
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogFaq;
