import React from "react";
import scholarshipbg from "../assets/images/scholarshipbg.svg";
import CommonFaq from "../components/common/CommonFaq";
import BreadCrumb from "../components/common/BreadCrumbs";

const accordionData1 = [
  {
    id: 1,
    title: "Who can apply for the Skillonit Internship Program? ",
    content:
      "Students, recent graduates, and professionals looking to gain industry experience in technology and digital domains can apply.",
  },
  {
    id: 2,
    title: "Is the internship paid or unpaid?  ",
    content:
      "The nature of the internship (paid or unpaid) depends on the role and project requirements. Details will be provided during the selection process. ",
  },
  {
    id: 3,
    title: "How long does the internship program last?  ",
    content:
      "The duration varies based on the internship role, typically ranging from 8 to 12 weeks. ",
  },
  {
    id: 4,
    title: "Will I receive a certificate after completing the internship?  ",
    content:
      "Yes, interns who successfully complete the program will receive a certification recognizing their contributions and skills gained. ",
  },
  {
    id: 5,
    title: "Can this internship lead to a full-time job opportunity? ",
    content:
      "High-performing interns may be considered for full-time roles or receive job placement support. ",
  },
];

const Internship = () => {
  return (
    <div className="scholarship internship">
      <BreadCrumb pagename="Internship" cname="internship-bread-top" />
      <section className="s-section-1">
        <div className="row w-100">
          <div className="col-lg-10 col-md-12 col-12">
            <h1 className="h-text-1">
              <span className="s-text-1">Skillonit </span>
              Internship Program <br className="break" />
              <span className="s-text-1"> Kickstart </span>
              Your
              <span className="s-text-1"> Career </span>
            </h1>
            <p className="p-text-1">
              Join Skillonit's Internship Program and gain real-world experience
              to boost <br className="break t-break" /> your career. Work on exciting
              projects, enhance your skills, and connect with
              <br className="break t-break" />
              industry professionals. This opportunity is perfect for those
              ready to contribute <br className="break t-break" />
              and grow in a dynamic environment.
            </p>
            <div className="intern-btn-row">
              <button className="btn-student" style={{ cursor: "not-allowed" }}>For Students</button>
              <button
                className="btn-user btn-student"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                For New Users
              </button>
            </div>
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

      <section className="s-section-2">
        <h1 className="h-text-1">
          {" "}
          What’s Included in the Skillonit <br className="break t-break" />
          <span className="s-text-1"> Internship </span> Program?
        </h1>

        <ul className="scholarship-ul">
          <li>
            <span className="d-text"> Hands-on Project Experience: </span>
            Interns work on real-world projects that help them develop practical
            skills and industry knowledge.
          </li>

          <li>
            <span className="d-text"> Mentorship from Experts: </span>
            Guidance from experienced professionals to enhance learning and
            career growth.
          </li>
          <li>
            <span className="d-text"> Skill Development Workshops: </span>
            Training sessions covering industry-relevant skills, tools, and
            technologies.
          </li>
          <li>
            <span className="d-text"> Networking Opportunities: </span>
            Connect with industry experts, peers, and potential employers to
            build a strong professional network.
          </li>
          <li>
            <span className="d-text"> Resume and Portfolio Building: </span>
            Support in creating a strong resume and portfolio to boost job
            prospects.
          </li>
          <li>
            <span className="d-text"> Performance-Based Certifications: </span>
            Interns receive certificates based on their performance and
            contributions during the program.
          </li>
          <li>
            <span className="d-text">
              {" "}
              Career Guidance and Placement Support:{" "}
            </span>
            Insights on career paths, interview preparation, and job placement
            assistance.
          </li>
        </ul>
      </section>

      <section className="s-section-2">
        <h1 className="h-text-1">
          How Does the Skillonit
          <span className="s-text-1"> Internship </span>
          <br className="break t-break" />
          Program Benefit Students?
        </h1>

        <ul className="scholarship-ul">
          <li>
            <span className="d-text"> Practical Industry Exposure: </span>
            Students gain hands-on experience by working on real projects,
            helping them understand industry standards and workflows.
          </li>

          <li>
            <span className="d-text"> Skill Enhancement: </span>
            The program focuses on developing technical and soft skills through
            workshops, mentorship, and hands-on assignments.
          </li>
          <li>
            <span className="d-text"> Professional Networking: </span>
            Interns get the opportunity to connect with industry professionals,
            expanding their career prospects.
          </li>
          <li>
            <span className="d-text"> Resume and Portfolio Boost: </span>
            Internship experience adds value to a student’s resume and
            portfolio, making them stand out in job applications.
          </li>
          <li>
            <span className="d-text"> Mentorship and Career Guidance: </span>
            Experts provide guidance on career paths, interview techniques, and
            industry best practices.
          </li>
          <li>
            <span className="d-text"> Certification and Recognition: </span>
            Students receive an internship completion certificate, which
            enhances their credibility in the job market.
          </li>
          <li>
            <span className="d-text"> Job Placement Support: </span>
            High-performing interns may receive job offers or referrals,
            increasing their chances of securing full-time positions.
          </li>
        </ul>
      </section>

      <section className="s-section-2">
        <h1 className="h-text-1">
          How to Apply for the Skillonit
          <br className="break t-break" />
          <span className="s-text-1"> Internship </span>
          Program?
        </h1>

        <ul className="scholarship-ul">
          <li>
            <span className="d-text"> Check Eligibility Criteria: </span>
            Review the program requirements to ensure you meet the
            qualifications for the internship.
          </li>

          <li>
            <span className="d-text"> Visit the Official Website: </span>
            Go to the Skillonit website or the designated application portal to
            access the internship details.
          </li>
          <li>
            <span className="d-text"> Fill Out the Application Form: </span>
            Provide accurate personal details, educational background, and
            relevant skills in the online application form.
          </li>
          <li>
            <span className="d-text"> Upload Required Documents: </span>
            Submit your resume, portfolio (if applicable), and any other
            necessary documents.
          </li>
          <li>
            <span className="d-text"> Complete the Assessment: </span>
            Some internship roles may include an online test or assignment to
            evaluate your skills.
          </li>
          <li>
            <span className="d-text"> Attend the Interview: </span>
            Shortlisted candidates will be invited for an interview with the
            recruitment team or project mentors.
          </li>
          <li>
            <span className="d-text"> Receive Confirmation: </span>
            Successful candidates will get an official confirmation along with
            internship details, start date, and next steps.
          </li>
        </ul>
      </section>

      <section className="s-section-2">
        <h1 className="h-text-1">
          What Sets the Skillonit
          <br className="break t-break" />
          <span className="s-text-1"> Internship </span>
          Apart from Others?
        </h1>

        <ul className="scholarship-ul">
          <li>
            <span className="d-text"> Real-World Project Experience: </span>
            Interns work on industry-relevant projects, gaining practical
            knowledge that goes beyond theoretical learning.
          </li>

          <li>
            <span className="d-text"> Expert Mentorship: </span>
            Receive guidance from experienced professionals who provide insights
            into industry best practices and career growth.
          </li>
          <li>
            <span className="d-text"> Comprehensive Skill Development: </span>
            The program covers both technical and soft skills, preparing interns
            for real work environments.
          </li>
          <li>
            <span className="d-text"> Performance-Based Recognition: </span>
            Interns are evaluated based on their contributions and receive
            certifications that add value to their resumes.
          </li>
          <li>
            <span className="d-text">
              {" "}
              Networking and Career Opportunities:{" "}
            </span>
            Interns get a chance to connect with industry leaders, increasing
            their chances of future employment.
          </li>
          <li>
            <span className="d-text"> Placement Support: </span>
            High-performing interns may receive job placement assistance or
            recommendations within the industry.
          </li>
        </ul>
      </section>

      <section className="s-section-2">
        <h1 className="h-text-1">
          What Skills Can You Learn During
          <br className="break t-break" /> the Skillonit
          <span className="s-text-1"> Internship </span>
        </h1>

        <p className="p-text-1">
          Gain hands-on experience in industry-relevant technologies and develop
          practical skills to boost your career prospects.
        </p>

        <ul className="scholarship-ul">
          <li>
            <span className="d-text"> UI/UX Design: </span>
            Learn user research, wireframing, prototyping, and design principles
            to create intuitive digital experiences.
          </li>

          <li>
            <span className="d-text"> Front-End Development: </span>
            Master HTML, CSS, JavaScript, and modern frameworks to build
            responsive and interactive user interfaces.
          </li>
          <li>
            <span className="d-text"> Back-End Development: </span>
            Develop server-side applications, work with databases, and manage
            APIs for seamless functionality.
          </li>
          <li>
            <span className="d-text"> Full Stack Development: </span>
            Combine front-end and back-end skills to build complete web
            applications with robust performance.
          </li>
          <li>
            <span className="d-text"> Mobile App Development: </span>
            Create Android and iOS applications using frameworks like React
            Native and Flutter.
          </li>
          <li>
            <span className="d-text"> Blockchain Development: </span>
            Understand smart contracts, decentralized applications (DApps), and
            blockchain architecture.
          </li>
          <li>
            <span className="d-text"> Unity 3D Development: </span>
            Build immersive gaming and AR/VR experiences with Unity and C#.
          </li>
          <li>
            <span className="d-text"> Digital Marketing: </span>
            Learn SEO, social media strategies, content marketing, and analytics
            to drive online growth.
          </li>
        </ul>
      </section>

      <CommonFaq
        accordionData1={accordionData1}
        title="Frequently Asked Questions (FAQs)"
      />
    </div>
  );
};

export default Internship;
