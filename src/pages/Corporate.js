import React from "react";
import SuccessStories from "../components/common/SuccessStories";
import CommonFaq from "../components/common/CommonFaq";
import scholarshipbg from "../assets/images/corporatebgimg.svg";
import ExploreSection from "../components/Homecomponent/ExploreSection";
import BreadCrumb from "../components/common/BreadCrumbs";

const accordionData1 = [
  {
    id: 1,
    title: "What types of learning options does Skillonit offer for corporates?",
    content: "We offer self-paced courses, LIVE interactive online classes, and 1-to-1 personalized instruction, allowing employees to choose a learning style that suits their needs.",
  },
  {
    id: 2,
    title: "How can Skillonit help improve my team's skills?",
    content: "Our platform provides hands-on practice, real-world experience through internships, and job assistance to ensure your team gains the necessary skills to excel in their roles."
  },
  {
    id: 3,
    title: "Does Skillonit offer any corporate training programs?",
    content: "Yes, we provide tailored corporate solutions designed to meet the specific needs of your business, helping your team stay ahead in their field."
  },
  {
    id: 4,
    title: "Can Skillonit assist in career advancement for employees?",
    content: "We offer access to a premium professional network and job assistance services to help employees secure their dream roles and advance their careers."
  },
  {
    id: 5,
    title: "How flexible are the learning options?",
    content: "Our courses are designed for flexible learning, allowing your team to learn at their own pace, with the option of joining live sessions for more interactive learning."
  },
  {
    id: 6,
    title: "What kind of support does Skillonit provide during the learning process?",
    content: "We offer personalized support through 1-to-1 instruction, interactive practice platforms, and access to dedicated mentors to guide employees throughout their learning experience."
  },
  {
    id: 7,
    title: "How do I get started with Skillonit for my corporate needs?",
    content: "Simply contact us to discuss your company’s specific requirements, and we will help create a customized learning plan for your team."
  },
];

const Corporate = () => {
  return (
    <div className="corporate">
      <div className="scholarship">
        <BreadCrumb pagename="Corporate" cname="corporate-bread-top" />
        <section className="s-section-1 mt-4">
          <div className="row w-100">
            <div className="col-lg-8 col-md-12 col-12">
              <h1 className="h-text-1  mt-lg-5 mt-md-2 mt-1">
                Empowering
                <span className="s-text-1">
                  {" "}
                  Corporates <br className="break t-break" />with Skillonit’s{" "}
                </span>
                Smart<br className="break t-break" /> Learning Solutions
              </h1>
              <p className="p-text-1">
                Skillonit provides corporates with effective, easy-to-implement learning
                <br className="break t-break" />
                solutions that drive employee growth and productivity. With a
                <br className="break t-break" />
                seamless process for finding and enrolling in courses,
                <br className="break t-break" />
                businesses can offer their teams accessible,
                <br className="break t-break" />
                focused learning opportunities.
              </p>
              <button
                className="btn-s-apply"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                {" "}
                Explore Our Offerings{" "}
              </button>
            </div>
            <div className="col-lg-4 col-md-4 col-12 tab-hide mobile-hide">
              <div className="scholar-bg-right">
                <img
                  src={scholarshipbg}
                  alt="scholarship"
                  className="scholarship-bg-img-1 img-fluid "
                />
              </div>
            </div>
          </div>
        </section>
        <div className="homepage pt-0">
          <section className="home-section-6">
            <h2 className="h-text-2">
              What do we offer for your corporate needs?
            </h2>
            <p className="center-p center-p-margin">
              We offer self-paced courses for flexible learning, LIVE classes with interactive online sessions, and 1-to-1 personalized instruction to fast-track your progress. Enhance your skills with interactive practice platforms, gain real-world experience through internships, and receive job assistance to secure your dream role. We also provide classroom learning, customized corporate solutions, and access to a premium professional network for career advancement.
            </p>
            <ExploreSection />
          </section>
        </div>
        <div className="homepage">
          <h2 className="h-text-2">Success Stories with our Certifications</h2>
          <p className="center-p center-p-margin">
            Hear from our graduates who transformed their careers with
            Skillonit! <br className="break" />
            Discovering inspiring journey of students who mastered new skills,
            secured internships, and landed <br className="break" />
            their dream jobs through our programs. Their achievements reflect
            the power of our training <br className="break" />
            support!.
          </p>
          <SuccessStories />
        </div>
        <CommonFaq
          accordionData1={accordionData1}
          title="Frequently Asked Questions (FAQs)"
        />
      </div>
    </div>
  );
};

export default Corporate;
