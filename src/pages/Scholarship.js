import React from "react";
import SuccessStories from "../components/common/SuccessStories";
import CommonFaq from "../components/common/CommonFaq";
import scholarshipbg from "../assets/images/scholarshipbg.svg";
import scholarpipe from "../assets/images/scholarpipe.svg";
import BreadCrumb from "../components/common/BreadCrumbs";

const accordionData1 = [
  {
    id: 1,
    title: "Who is eligible for the Skillonit Scholarship Program? ",
    content:
      "The Skillonit Scholarship is specifically for rural students who meet the academic and eligibility criteria outlined in the application guidelines.",
  },
  {
    id: 2,
    title: "How do I apply for the Skillonit Scholarship? ",
    content:
      "You can apply by filling out the application form available on the Skillonit website, ensuring all required documents are submitted along with your application.",
  },
  {
    id: 3,
    title: "What are the requirements to be considered for this scholarship? ",
    content:
      "Applicants must be enrolled in a recognized academic institution and must be from a rural area. Specific academic performance requirements are mentioned in the application guidelines.",
  },
  {
    id: 4,
    title: "What does the Skillonit Scholarship cover? ",
    content:
      "The scholarship provides financial assistance for tuition fees and other educational expenses related to your chosen course or program.",
  },
  {
    id: 5,
    title: "Is there an age limit to apply for the Skillonit Scholarship?",
    content:
      "There is no age limit; however, applicants must meet the academic criteria and be currently pursuing an educational course.",
  },
  {
    id: 6,
    title:
      "Can I apply for the scholarship if I am already receiving other financial aid?",
    content:
      "Yes, you can still apply for the Skillonit Scholarship, but please ensure you meet the eligibility criteria as outlined.",
  },
  {
    id: 7,
    title: "How will I be notified if I am selected for the scholarship? ",
    content:
      "Successful applicants will be notified via email or phone within a specified time frame after the application deadline.",
  },
  {
    id: 8,
    title: "Can I apply for the Skillonit Scholarship more than once? ",
    content:
      "The Skillonit Scholarship can be applied for only once per applicant per academic year.",
  },
  {
    id: 9,
    title: "Is the Skillonit Scholarship renewable? ",
    content:
      "No, the scholarship is awarded for one academic year and is not renewable for subsequent years.",
  },
  {
    id: 10,
    title:
      "What happens if I do not meet the academic standards during the scholarship period?",
    content:
      "If a scholarship recipient fails to maintain the required academic standards, they may lose eligibility for continued scholarship support.",
  },
];

const Scholarship = () => {
  return (
    <div className="scholarship">
      <BreadCrumb pagename="Scholarship" cname="scholar-bread-top" />
      <section className="s-section-1">
        <div className="row w-100">
          <div className="col-lg-10 col-md-12 col-12">
            <h1 className="h-text-1">
              <span className="s-text-1">Skillonit </span>
              Scholarships <br className="break" />
              <span className="s-text-1"> Program:50% Discount for </span>
              <br className="break" />
              Rural
              <span className="s-text-1"> Students</span>
            </h1>
            <p className="p-text-1">
              Skillonit offers an exclusive 50% scholarship for rural students,
              helping you <br className="break t-break" />
              access top-tier IT courses at half the cost. Take this opportunity
              to learn <br className="break t-break" />
              and grow with practical, real-world skills{" "}
              that can shape your future.
            </p>
            <button
              className="btn-s-apply"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
            >
              Apply Now!!
            </button>
          </div>
          <div className="col-lg-2 col-md-4 col-12">
            <div className="scholar-bg-right">
              <img
                src={scholarshipbg}
                alt="scholarship"
                className="scholarship-bg-img tab-hide"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="s-section-2 s-section-2-margin">
        <h1 className="h-text-1">
          <span className="s-text-1">SkillonIT Scholarship Program:</span>{" "}
          <br className="break t-break" />
          Empowering
          <span className="s-text-1"> Future Innovators</span>
        </h1>
        <p className="p-text-1">
          The SkillonIT Scholarship Program provides deserving students with the
          opportunity to pursue their passion for IT and technology. Offering
          financial support and valuable resources, this program aims to help
          students achieve their educational goals and build a strong foundation
          for a successful career in IT.
        </p>
        <button
          className="btn-s-apply"
          data-bs-toggle="modal"
          data-bs-target="#signupModal"
        >
          Learn More
        </button>
      </section>
      <section className="s-section-2">
        <h1 className="h-text-1">
          Eligibility Criteria for <br className="break t-break" /> SkillonIT
          <span className="s-text-1"> Scholarship </span> Program
        </h1>

        <ul className="scholarship-ul">
          <li>
            To apply for the SkillonIT Scholarship Program, candidates must meet
            the following criteria:
          </li>
          <li>
            <span className="d-text"> Rural Background: </span>
            Applicants must be from a rural area. Proof of residence or a
            certificate from a local authority is required.
          </li>

          <li>
            <span className="d-text"> Academic Requirement: </span>
            Applicants must be high school graduates or currently pursuing
            education.
          </li>
          <li>
            <span className="d-text"> Financial Need (Optional): </span>
            If the scholarship is means-tested, applicants may need to provide
            income documentation or undergo a financial need assessment.
          </li>
          <li>
            <span className="d-text"> Interest in IT: </span>
            Applicants should demonstrate a genuine interest in pursuing a
            career in IT, which can be shown through prior learning, projects,
            or a statement of motivation.
          </li>
        </ul>

        <div className="s-section-2-inner">
          <h2 className="h-text-2">
            Supporting Documents:{" "}
            <span className="s-text-1"> Criteria for Application </span>
          </h2>

          <ul className="scholarship-ul">
            <li>
              To apply for the SkillonIT Scholarship Program, please ensure the
              following documents are submitted:
            </li>
            <li>
              <span className="d-text"> Completed Application Form – </span>
              Filled out with accurate and current details.
            </li>

            <li>
              <span className="d-text"> Proof of Enrollment – </span>A valid
              certificate or letter from your educational institution confirming
              enrollment, or a letter from your residential area VAO or any
              respective leader.
            </li>
            <li>
              <span className="d-text"> Academic Transcripts – </span>
              Official records of your grades and academic performance.
            </li>
            <li>
              <span className="d-text"> Personal Identification – </span>A
              government-issued ID (e.g., Aadhar, passport, voter id card).
            </li>
            <li>
              <span className="d-text"> Statement of Purpose – </span>A brief
              essay explaining your motivation to pursue a career in IT and your
              goals.
            </li>
            <li>
              <span className="d-text"> Recommendation Letters – </span>
              Two letters from professors or mentors supporting your
              application.
            </li>
          </ul>
          <button
            className="btn-s-apply"
            data-bs-toggle="modal"
            data-bs-target="#signupModal"
          >
            Check My Eligibility
          </button>
        </div>
        <div className="div-step-text">
          <img src={scholarpipe} alt="scholar-pipe" className="scholar-pipe-img mobile-hide" />
          <div className="div-s-1">
            <p className="p-text-3">
              Step 1: <span className="s-text-2">Check Eligibility</span>
            </p>
            <p className="p-text-3">
              Direct users to check if they meet the requirements.
            </p>
          </div>
          <div className="div-s-1">
            <p className="p-text-3">
              Step 2:{" "}
              <span className="s-text-2">Fill Out the Application Form</span>
            </p>
            <p className="p-text-3">
              Includes personal details, educational background, and why they
              want the scholarship.
            </p>
          </div>
          <div className="div-s-1">
            <p className="p-text-3">
              Step 3:{" "}
              <span className="s-text-2">Submit Supporting Documents</span>
            </p>
            <p className="p-text-3">
              Upload Space for proof of residence, academic records, financial
              proof, etc.
            </p>
          </div>
          <div className="div-s-1">
            <p className="p-text-3">
              Step 4:{" "}
              <span className="s-text-2">Write a Personal Statement</span>
            </p>
            <p className="p-text-3">
              Applicants explain their motivation, goals, and how the
              scholarship will help them.
            </p>
          </div>
          <div className="div-s-1">
            <p className="p-text-3">
              Step 5: <span className="s-text-2">Interview(Optional)</span>
            </p>
          </div>
        </div>


      </section>
      <div className="homepage">
        <h2 className="h-text-2">Success Stories with our Certifications</h2>
        <p className="center-p center-p-margin">
          Hear from our graduates who transformed their careers with Skillonit!{" "}
          <br className="break" />
          Discovering inspiring journey of students who mastered new skills,
          secured internships, and landed <br className="break" />
          their dream jobs through our programs. Their achievements reflect the
          power of our training <br className="break" />
          support!.
        </p>
        <SuccessStories />
      </div>
      <section className="s-section-2">
        <h1 className="h-text-1">
          Why <span className="s-text-1">Apply </span> for the{" "}
          <br className="break" />
          Skillonit
          <span className="s-text-1"> Scholarship ?</span>
        </h1>
        <p className="p-text-1">
          The Skillonit Scholarship offers an excellent opportunity for
          individuals eager to grow their knowledge and skills in the tech
          industry. With a focus on accessible education, this scholarship aims
          to support aspiring professionals in achieving their career goals.
        </p>
        <div className="div-bg-text-s">
          <div className="div-bg-text">
            <h2 className="h-text-3">
              <span className="h-text-3-span"> Financial Support: </span>
              Receive assistance to cover your educational expenses.
            </h2>
          </div>
          <div className="div-bg-text">
            <h2 className="h-text-3">
              <span className="h-text-3-span"> Skill Development: </span>
              Access courses that will enhance your technical expertise.
            </h2>
          </div>
          <div className="div-bg-text">
            <h2 className="h-text-3">
              <span className="h-text-3-span"> Career Advancement: </span>
              Increase your job opportunities with specialized knowledge.
            </h2>
          </div>
          <div className="div-bg-text">
            <h2 className="h-text-3">
              <span className="h-text-3-span"> Networking Opportunities: </span>
              Connect with industry professionals and peers.
            </h2>
          </div>
          <div className="div-bg-text">
            <h2 className="h-text-3">
              <span className="h-text-3-span">Exclusive Access: </span>
              Enjoy priority access to Skillonit’s events and resources.
            </h2>
          </div>
        </div>
        <button
          className="btn-s-apply"
          data-bs-toggle="modal"
          data-bs-target="#signupModal"
        >
          Apply Today
        </button>
      </section>
      <CommonFaq
        accordionData1={accordionData1}
        title="Frequently Asked Questions (FAQs)"
      />
    </div>
  );
};

export default Scholarship;
