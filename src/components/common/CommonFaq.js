import React, { useState } from "react";
import plus from "../../assets/images/enroll/plus.svg";
import minus from "../../assets/images/enroll/minus.svg";

const CommonFaq = ({ accordionData1, title }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const visibleFaqs = accordionData1.slice(0, visibleCount);
  const hasMore = visibleCount < accordionData1.length;

  return (
    <div className="common-faq enroll">
      <section className="enroll-section-5">
        <h2 className="h-text">{title}</h2>
        <div className="enroll-accordion-section-2">
          <div className="accordion" id="accordionExample">
            {visibleFaqs.map((item) => (
              <div
                key={item.id}
                className="accordion-item enroll-accordion-item-2"
              >
                <button
                  className={`accordion-button ${expandedId === item.id ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => handleToggle(item.id)}
                  aria-expanded={expandedId === item.id}
                  aria-controls={`collapse${item.id}`}
                >
                  {item.title}
                  <img
                    src={expandedId === item.id ? minus : plus}
                    alt={expandedId === item.id ? "minus" : "plus"}
                    className={`plus-img ${expandedId === item.id ? "rotate-img" : ""}`}
                  />
                </button>
                <div
                  id={`collapse${item.id}`}
                  className={`accordion-collapse collapse ${expandedId === item.id ? "show" : ""}`}
                  data-bs-parent="#accordionExample"
                  style={{
                    transition: "max-height 0.5s ease-out",
                    maxHeight: expandedId === item.id ? "500px" : "0",
                    overflow: "hidden",
                  }}
                >
                  <div className="accordion-body">
                    {item.content && item.description?.length > 0 ? (
                      <>
                        <p
                          className="accord-pt-text-2"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        />
                        <ul className="common-faq-ul">
                          {item.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                          ))}
                        </ul>
                        <p
                          className="accord-pt-text-2"
                          dangerouslySetInnerHTML={{ __html: item.content1 }}
                        />
                      </>
                    ) : item.content ? (
                      <p
                        className="accord-pt-text-2"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    ) : item.description?.length > 0 ? (
                      <ul className="common-faq-ul">
                        {item.description.map((desc, index) => (
                          <li key={index}>{desc}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {hasMore && (
            <button className="load-more-btn" onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default CommonFaq;