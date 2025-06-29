import React, { useState } from "react";
import whatsapp from "../assets/images/career/wtsap.svg";
import mail from "../assets/images/mail.svg";
import telegram from "../assets/images/career/telegram.svg";
import careerbgimg from "../assets/images/career/careerbgcontact.svg";
import careerbanner from "../assets/images/career-banner.svg";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContactUsApi } from "../components/Helper/Redux/ReduxThunk/Homepage";
import Notiflix from "notiflix";
import { useDispatch } from "react-redux";
import ApplyJob from "../components/common/ApplyJob";
import CommonFaq from "../components/common/CommonFaq";
import BreadCrumb from "../components/common/BreadCrumbs";

const accordionData1 = [
  {
    id: 1,
    title: "  How can I apply for a job at Skillonit? ",
    content:
      "You can apply for a position at Skillonit by visiting our Careers page. Browse through our current openings and submit your updated resume/CV along with a cover letter or portfolio if required. ",
  },
  {
    id: 2,
    title: "What is the hiring process like at Skillonit?",
    content: "Our hiring process includes the following steps:",
    description: [
      "Application Submission",
      "Initial Screening",
      "Technical Interview/Assessment",
      " Personal Interview",
      "Offer & Negotiation ",
      " Onboarding",
    ],
    content1:
      " Each step helps us ensure you’re the right fit for the role and company culture.",
  },
  {
    id: 3,
    title: " Do you offer remote work opportunities?  ",
    content:
      "Yes, we offer flexible working hours and remote work options depending on the role. We understand the importance of work-life balance and provide options to suit various needs. ",
  },
  {
    id: 4,
    title: " How long does the hiring process take? ",
    content:
      "The hiring process typically takes about 2 to 3 weeks, depending on the number of interview rounds and assessments required. We will keep you informed at each step. ",
  },
  {
    id: 5,
    title: "What should I expect in the technical interview?  ",
    content:
      "In the technical interview, you’ll be asked to demonstrate your skills related to the position you applied for. This may involve coding exercises, problem-solving tasks, or discussions about your previous projects and technical expertise. ",
  },
  {
    id: 6,
    title: "  Do you offer any training or development programs? ",
    content:
      " Yes, at Skillonit, we provide continuous learning opportunities. We offer internal training programs, workshops, certifications, and mentorship to help you grow professionally and stay updated with the latest trends.",
  },
  {
    id: 7,
    title: "  What benefits do you offer to employees? ",
    content:
      "We offer a competitive salary, health and wellness benefits, paid leaves, career growth opportunities, flexible working hours, and employee recognition programs. Our focus is on ensuring our employees have a fulfilling and supportive work environment. ",
  },
  {
    id: 8,
    title: "  Is there room for career advancement at Skillonit? ",
    content:
      "Absolutely! At Skillonit, we prioritize internal promotions and offer ample opportunities for career growth. We believe in developing our employees’ potential through mentorship and leadership programs. ",
  },
  {
    id: 9,
    title: "How can I stay updated about new job openings?",
    content:
      'To stay updated on job openings, you can follow us on our social media profiles including <a href="https://www.facebook.com/skillonitlearninghub" target="_blank">Facebook</a>, <a href="https://x.com/skillonit" target="_blank">Twitter</a>, <a href="https://www.linkedin.com/company/skillonit-academy" target="_blank">LinkedIn</a>, and <a href="https://www.instagram.com/skillonit_/" target="_blank">Instagram</a>.',
  },
  {
    id: 10,
    title: " Will I be informed if I’m not selected for a position? ",
    content:
      ' Yes, we ensure transparency in our hiring process. If you are not selected for a position, you will receive a polite and professional notification from our HR team. We encourage you to apply for future opportunities that align with your skills and career goals.If you have any further questions or need more information, feel free to reach out to our HR team at <a href="mailto:hr@skillonit.com" target="_blank">hr@skillonit.com</a>. ',
  },
];

const accordionData = [
  {
    id: "collapseOne",
    title: "UI/UX Designer / Trainer",
    position: "UI/UX Designer / Trainer",
    description: [
      "Design intuitive and user-friendly interfaces.",
      "Conduct training sessions on UI/UX principles and tools like Figma, Adobe XD, and Sketch.",
      "Guide students in creating wireframes, prototypes, and design systems.",
    ],
    learn: [
      "Strong knowledge of UX research, design thinking, and user psychology.",
      "Expertise in design tools and front-end design principles.",
      "Strong communication and mentoring abilities.",
    ],
  },
  {
    id: "collapseTwo",
    title: "Graphic Designer / Trainer",
    position: "Graphic Designer / Trainer",
    description: [
      "Create engaging visuals for digital platforms.",
      "Train students on graphic design principles, tools, and branding techniques.",
      "Provide insights on typography, color theory, and creative strategies.",
    ],
    learn: [
      "Proficiency in Adobe Photoshop, Illustrator, and Canva.",
      "Strong creative and conceptual skills.",
      "Ability to explain design concepts clearly.",
    ],
  },
  {
    id: "collapseThree",
    title: "Front-End Developer / Trainer",
    position: "Front-End Developer / Trainer",
    description: [
      "Develop responsive and interactive web interfaces.",
      "Train students on HTML, CSS, JavaScript, and modern frameworks like React or Angular.",
      "Guide on best practices for UI development and performance optimization.",
    ],
    learn: [
      "Strong knowledge of front-end frameworks and tools.",
      "Experience with responsive and mobile-first design.",
      "Excellent teaching and coding skills.",
    ],
  },
  {
    id: "collapseFour",
    title: "Back-End Developer / Trainer",
    position: "Back-End Developer / Trainer",
    description: [
      "Develop and maintain server-side logic for applications.",
      "Train students on backend technologies such as Node.js, Python, PHP, or Java.",
      "Teach database management, API integration, and security best practices.",
    ],
    learn: [
      "Strong backend programming skills.",
      "Experience with databases (SQL, MongoDB, Firebase).",
      "Ability to simplify complex backend concepts for learners.",
    ],
  },
  {
    id: "collapseFive",
    title: "Full Stack Developer / Trainer",
    position: "Full Stack Developer / Trainer",
    description: [
      "Develop and manage both front-end and back-end of applications.",
      "Conduct training on full-stack technologies like MERN, MEAN, or LAMP stack.",
      "Guide students in building real-world web applications.",
    ],
    learn: [
      "Expertise in front-end and back-end technologies.",
      "Hands-on experience with APIs, cloud services, and DevOps.",
      "Strong problem-solving and mentorship skills.",
    ],
  },
  {
    id: "collapseSix",
    title: "Blockchain Developer / Trainer",
    position: "Blockchain Developer / Trainer",
    description: [
      "Develop and implement blockchain-based applications.",
      "Train students on blockchain fundamentals, smart contracts, and Web3 development.",
      "Guide in using Solidity, Ethereum, Hyperledger, and related technologies.",
    ],
    learn: [
      "Strong understanding of blockchain networks and cryptography.",
      "Experience with Solidity, Rust, and decentralized applications.",
      "Ability to teach blockchain concepts with practical examples.",
    ],
  },
  {
    id: "collapseSeven",
    title: "Flutter App Developer / Trainer",
    position: "Flutter App Developer / Trainer",
    description: [
      "Build and deploy cross-platform mobile applications.",
      "Train students on Flutter, Dart, and mobile app development best practices.",
      "Guide on UI/UX principles, Firebase integration, and performance optimization.",
    ],
    learn: [
      "Proficiency in Flutter and Dart.",
      "Experience with mobile app lifecycle and deployment processes.",
      "Strong presentation and mentoring skills.",
    ],
  },
  {
    id: "collapseEight",
    title: "Unity Game Developer / Trainer",
    position: "Unity Game Developer / Trainer",
    description: [
      "Develop immersive games using Unity.",
      "Train students on Unity, C#, and game development concepts.",
      "Provide hands-on experience in physics, animations, and game mechanics.",
    ],
    learn: [
      "Proficiency in Unity Engine and C#.",
      "Experience with AR/VR, multiplayer gaming, and optimization techniques.",
      "Ability to simplify game development concepts.",
    ],
  },
  {
    id: "collapseNine",
    title: "Digital Marketing Analyst / Trainer",
    position: "Digital Marketing Analyst / Trainer",
    description: [
      "Develop and execute AI-driven digital marketing strategies.",
      "Train students on SEO, SEM, PPC, social media marketing, and analytics.",
      "Provide insights on content marketing, lead generation, and conversion optimization.",
    ],
    learn: [
      "Strong knowledge of digital marketing tools (Keyword research, Google Analytics, Google Search Console, etc.).",
      "Experience with SEO, email marketing, and content strategy.",
      "Excellent communication and teaching skills.",
    ],
  },
];

const schema = yup.object().shape({
  firstName: yup.string().matches(/^(?!\s*$).+/, "First Name is required").required("First Name is required"),
  lastName: yup.string().matches(/^(?!\s*$).+/, "Last Name is required").required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  mobileNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  course: yup.string().matches(/^(?!\s*$).+/, "Course of interest is required").required("Course of interest is required"),
  mode: yup.string().matches(/^(?!\s*$).+/, "Preferred mode of learning is required").required("Preferred mode of learning is required"),
  message: yup.string().matches(/^(?!\s*$).+/, "Please enter your  message").required("Please enter your  message"),
});

const Careers = () => {
  const [activeId, setActiveId] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState("");

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const handleApplyJobClick = (position) => {
    setSelectedPosition(position);
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    let params = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      mobileNumber: data.mobileNumber,
      course: data.course,
      interest: data?.mode,
      message: data?.message,
      type: "careerContactUs",
    };

    await dispatch(
      ContactUsApi(params, (resp) => {
        if (resp.status === true) {
          Notiflix.Notify.success("Success");
          reset({
            firstName: "",
            lastName: "",
            email: "",
            mobileNumber: "",
            course: "",
            mode: "",
            message: "",
          });
        } else {
          Notiflix.Notify.failure(resp?.message);
        }
      })
    );
  };

  const handleNavigation = (e, section) => {
    e.preventDefault();

    window.requestAnimationFrame(() => {
      const targetSection = document.getElementById(section);
      if (targetSection) {
        const navbarHeight = 100;
        const targetPosition = targetSection.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "auto",
        });
      }
    });
  };

  return (
    <div className="scholarship careers">
      <BreadCrumb pagename="Careers" cname="careers-bread-top" />
      <section className="s-section-1">
        <div className="row g-3 w-100">
          <div className="col-lg-8 col-md-12 col-12">
            <h1 className="h-text-1">
              Build Your
              <span className="s-text-1"> Future</span> <br className="break t-break" />
              With
              <span className="s-text-1"> Skillonit </span>
            </h1>
            <p className="p-text-1">
              Join Skillonit, a leading EdTech platform, and be part of
              <br className="break t-break" />
              a team shaping the future of learning. Explore exciting
              <br className="break t-break" />
              career opportunities, grow your skills, and make an impact
              <br className="break t-break" /> in the education industry.
            </p>

            <button
              className="btn-s-apply"
              onClick={(e) => handleNavigation(e, "explore")}
            >
              {" "}
              Explore Open Roles
            </button>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="scholar-bg-right-1 ">
              <img
                src={careerbanner}
                alt="scholarship"
                className="scholarship-bg-img-1 mobile-hide tab-hide"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="c-section-4" id="explore">
        <h1 className="h-text-1 text-center">
          Explore Current Job Opportunities
        </h1>

        <p className="career-p">
          Skillonit is looking for passionate professionals to join our team as
          trainers and industry experts. If you have expertise in your field and{" "}
          <br className="break t-break" />a passion for mentoring, explore our
          exciting opportunities below.
        </p>
        <div className="accordion" id="accordionExample">
          {accordionData.map(({ id, title, description, learn, position }) => (
            <div className="accordion-item" key={id}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${activeId === id ? "" : "collapsed"
                    }`}
                  type="button"
                  onClick={() => toggleAccordion(id)}
                  aria-expanded={activeId === id}
                  aria-controls={id}
                >
                  <div className="accordion-btn-in">
                    <p className="accord-text-1">{title}</p>
                  </div>
                </button>
              </h2>
              <div
                id={id}
                className={`accordion-collapse collapse ${activeId === id ? "show" : ""
                  }`}
              >
                <div className="accordion-body">
                  <div className="accord-body-head">
                    <button
                      className="btn-join"
                      data-bs-toggle="modal"
                      data-bs-target="#applyModal"
                      onClick={() => handleApplyJobClick(position)}
                    >
                      Apply Job
                    </button>
                  </div>

                  <p className="p-desc">Responsibilities:</p>
                  <ul className="p-accord-content">
                    {description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <p className="p-desc">Skills Required:</p>
                  <ul className="p-accord-content">
                    {learn.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="s-section-2">
        <h1 className="h-text-1">
          Why
          <span className="s-text-1"> Work </span> with Us?
        </h1>

        <ul className="scholarship-ul">
          <li>
            At Skillonit, we believe in fostering a dynamic and growth-oriented
            work environment where innovation meets education. Whether you're an
            industry expert or an aspiring trainer, joining our team means being
            part of a forward-thinking EdTech platform that values
            knowledge-sharing, career development, and impactful learning
            experiences.
          </li>
        </ul>

        <div className="s-section-2-inner">
          <h2 className="h-text-2">
            What Makes
            <span className="s-text-1"> Skillonit </span> a Great Place to Work?
          </h2>

          <ul className="scholarship-ul">
            <li>
              <span className="d-text"> Professional Growth: </span>
              Expand your expertise by working with the latest technologies and
              industry trends.
            </li>

            <li>
              <span className="d-text">
                {" "}
                Mentorship & Teaching Opportunities:{" "}
              </span>
              Inspire the next generation of tech professionals while enhancing
              your own skills.
            </li>
            <li>
              <span className="d-text"> Collaborative Culture: </span>
              Work alongside passionate experts in a supportive and innovative
              workspace.
            </li>
            <li>
              <span className="d-text"> Competitive Compensation: </span>
              We value talent and ensure fair compensation with
              performance-based incentives.
            </li>
            <li>
              <span className="d-text"> Flexible Work Environment: </span>
              Enjoy remote work options and a healthy work-life balance.
            </li>
            <li>
              <span className="d-text"> Real-World Impact: </span>
              Contribute to an EdTech platform that transforms learning
              experiences and career paths.
            </li>

            <li>
              Join Skillonit and be part of a team that's shaping the future of
              education and technology!
            </li>
          </ul>
        </div>
      </section>

      <section className="s-section-2">
        <h1 className="h-text-1">
          Our
          <span className="s-text-1"> Work </span> Culture
        </h1>

        <ul className="scholarship-ul">
          <li>
            At Skillonit, we thrive on a culture of innovation, collaboration,
            and continuous learning. We believe that a positive and inclusive
            work environment fuels creativity and drives meaningful impact.
          </li>
        </ul>

        <div className="s-section-2-inner">
          <h2 className="h-text-2">
            What Defines Our
            <span className="s-text-1"> Culture? </span>
          </h2>

          <ul className="scholarship-ul">
            <li>
              <span className="d-text"> Knowledge-Driven Environment: </span>
              We encourage curiosity and continuous learning, ensuring our team
              stays ahead in the ever-evolving tech industry.
            </li>

            <li>
              <span className="d-text"> Collaborative Spirit: </span>
              Teamwork is at the core of what we do. We value open
              communication, idea-sharing, and mutual respect.
            </li>
            <li>
              <span className="d-text"> Growth & Development: </span>
              We support professional and personal development through
              mentorship, upskilling, and industry exposure.
            </li>
            <li>
              <span className="d-text"> Innovation & Creativity: </span>
              We embrace new ideas and creative solutions to make learning more
              engaging and impactful.
            </li>
            <li>
              <span className="d-text"> Work-Life Balance: </span>A flexible
              work structure ensures a healthy balance between professional and
              personal commitments.
            </li>

            <li>
              Join Skillonit, where passion meets purpose, and every
              contribution makes a difference!
            </li>
          </ul>
        </div>
      </section>

      <div className="career-common-accordion">
        <CommonFaq
          accordionData1={accordionData1}
          title="Frequently Asked Questions (FAQs)"
        />
      </div>

      <section className="c-section-5">
        <h2 className="g-text-1">Get in touch</h2>
        <p className="g-text-2">
          Get customized solutions, professional guidance,{" "}
          <br className="break" />
          and accurate estimates.
        </p>
        <div className="c-social-div">
          <a href="https://wa.me/7741007941" target="_blank" rel="noreferrer" className="social-link-career">
            <img src={whatsapp} alt="whatsapp" className="social-w-img" />
            <p className="social-text">Whatsapp</p>
          </a>
          <a href="mailto:contact@skillonit.com" target="_blank" rel="noreferrer" className="social-link-career">
            <img src={mail} alt="whatsapp" width={50} height={50} className="social-w-img" />
            <p className="social-text">Email</p>
          </a>
          <a
            href="https://t.me/skillonit_ceo"
            target="_blank"
            rel="noreferrer"
            className="social-link-career"
          >
            <img src={telegram} alt="whatsapp" className="social-w-img" />
            <p className="social-text">Telegram</p>
          </a>
        </div>
      </section>
      <section className="c-section-6">
        <img src={careerbgimg} alt="career" className="career-contact-bg" />
        <div className="row ">
          <div className="col-lg-5 col-md-2 col-0"></div>
          <div className="col-lg-7 col-md-10 col-12">
            <div className="career-form-div">
              <h2 className="g-text-1">Get in touch</h2>

              <p className="g-text-2">
                Reach our We'll get in touch within 24 hours
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSubmit(onSubmit)();
                    }
                  }}
                >
                  <div className="row g-2 mt-3">
                    <div className="col-lg-6 col-md-6 col-12">
                      <label className="form-label">First Name</label>
                      <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                          <input
                            type="text"
                            className="form-control"
                            {...field}
                          />
                        )}
                      />
                      {errors.firstName && (
                        <p className="error-message text-danger">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <label className="form-label">Last Name</label>
                      <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                          <input
                            type="text"
                            className="form-control"
                            {...field}
                          />
                        )}
                      />
                      {errors.lastName && (
                        <p className="error-message text-danger">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>

                    <div className="col-lg-12 col-md-12 col-12">
                      <label className="form-label">Email Address</label>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <input
                            type="email"
                            className="form-control"
                            {...field}
                          />
                        )}
                      />
                      {errors.email && (
                        <p className="error-message text-danger">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="col-lg-12 col-md-12 col-12">
                      <label className="form-label">Phone Number</label>
                      <Controller
                        name="mobileNumber"
                        control={control}
                        render={({ field }) => (
                          <input
                            type="text"
                            className="form-control"
                            {...field}
                          />
                        )}
                      />
                      {errors.mobileNumber && (
                        <p className="error-message text-danger">
                          {errors.mobileNumber.message}
                        </p>
                      )}
                    </div>

                    <div className="col-lg-12 col-md-12 col-12">
                      <label className="form-label">Course of Interest</label>
                      <Controller
                        name="course"
                        control={control}
                        render={({ field }) => (
                          <input
                            type="text"
                            className="form-control"
                            {...field}
                          />
                        )}
                      />
                      {errors.course && (
                        <p className="error-message text-danger">
                          {errors.course.message}
                        </p>
                      )}
                    </div>

                    <div className="col-lg-12 col-md-12 col-12">
                      <label className="form-label">
                        Preferred Mode Of Learning
                      </label>
                      <Controller
                        name="mode"
                        control={control}
                        render={({ field }) => (
                          <input
                            type="text"
                            className="form-control"
                            {...field}
                          />
                        )}
                      />
                      {errors.mode && (
                        <p className="error-message text-danger">
                          {errors.mode.message}
                        </p>
                      )}
                    </div>

                    <div className="col-lg-12 col-md-12 col-12">
                      <label className="form-label">Your Message</label>
                      <Controller
                        name="message"
                        control={control}
                        render={({ field }) => (
                          <textarea
                            className="form-control query-form-control"
                            rows="4"
                            {...field}
                          />
                        )}
                      />
                      {errors.message && (
                        <p className="error-message text-danger">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="form-btn-div">
                        <button type="submit" className="btn-send">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </p>
            </div>
          </div>
        </div>
      </section>
      <ApplyJob position={selectedPosition} />
    </div>
  );
};

export default Careers;
