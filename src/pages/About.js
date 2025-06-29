import React from "react";
import aboutimg from "../assets/images/about-banner.svg";
import visionImg from "../assets/images/mission-img.svg";
import missionImg from "../assets/images/vision-img.svg";
import CommonFaq from "../components/common/CommonFaq";
import BreadCrumb from "../components/common/BreadCrumbs";


const accordionData1 = [
  {
    id: 1,
    title: "What is SkillonIT? ",
    content:
      "SkillonIT is a leading EdTech platform based in Buldhana, Maharashtra, focused on providing world-class IT courses to students from rural areas. Our goal is to bridge the educational gap by making advanced IT education accessible to everyone. ",
  },
  {
    id: 2,
    title: "What types of courses does SkillonIT offer? ",
    content:
      "We offer a wide range of IT courses, including UI/UX design, Front end development, Backend development, Full stack development, Blockchain development, Mobile app development, Unity 3D development, data analytics, cybersecurity, web development, cloud computing, digital marketing, and more. Our courses are designed to meet the needs of students, professionals, and organizations. ",
  },
  {
    id: 3,
    title: "Who can enroll in SkillonIT courses?",
    content: "SkillonIT welcomes everyone, including:",
    description: [
      "Rural students looking to start a career in IT.",
      "Working professionals seeking to upgrade their skills.",
      "Corporates interested in training their workforce.",
    ],
  },
  {
    id: 4,
    title: "How can rural students benefit from SkillonIT? ",
    content: "Rural students benefit through: ",
    description: [
      "Access to high-quality IT courses at affordable prices. ",
      "A 50% scholarship program for eligible students. ",
      " Hands-on training and real-world projects to enhance learning.",
    ],
  },
  {
    id: 5,
    title: " What is the scholarship program offered by SkillonIT? ",
    content:
      "SkillonIT provides a 50% scholarship to students from rural backgrounds. This initiative ensures that financial barriers do not prevent talented students from accessing quality IT education. ",
  },
  {
    id: 6,
    title: "Does SkillonIT offer internship opportunities? ",
    content:
      "Yes, SkillonIT provides internship programs for students to gain practical experience in various IT fields like software development, mobile app creation, blockchain development, AI development, cybersecurity, and more. These internships are designed to help students prepare for real-world job challenges. ",
  },
  {
    id: 7,
    title: "What makes SkillonIT different from other EdTech platforms? ",
    content:
      "SkillonIT focuses on empowering rural students by providing affordable and accessible IT education. Our industry-aligned curriculum, scholarships, internship programs, and commitment to social impact set us apart from other platforms. ",
  },
  {
    id: 8,
    title: "Are the courses available online or offline? ",
    content:
      "Currently, SkillonIT offers offline courses at our center in Buldhana, Maharashtra, to provide hands-on learning experiences and personalized support. However, we are actively working on developing online course modules to make IT education accessible to a wider audience. Stay tuned for updates on our upcoming online programs! ",
  },
  {
    id: 9,
    title: "How does SkillonIT help professionals and corporate? ",
    content:
      "SkillonIT provides upskilling and reskilling programs for professionals to stay competitive in the job market. We also collaborate with companies to train their workforce, enhancing their employees’ productivity and knowledge. ",
  },
  {
    id: 10,
    title: " How does SkillonIT contribute to social responsibility? ",
    content: "SkillonIT is committed to uplifting rural communities by: ",
    description: [
      "Offering scholarships to financially challenged students. ",
      "Conducting free IT workshops and technology awareness programs.  ",
      " Collaborating with local organizations to promote education and skill development. ",
    ],
  },
  {
    id: 11,
    title: "How do I enroll in SkillonIT courses? ",
    content:
      "To enroll, visit our website, browse our course catalog, and register for the course of your choice. Our support team is also available to guide you through the enrollment process. ",
  },
  {
    id: 12,
    title: "Are SkillonIT courses industry-relevant? ",
    content:
      "Absolutely. Our courses are designed in collaboration with industry experts to ensure that students gain the skills and knowledge required to meet current and future industry demands. ",
  },
  {
    id: 13,
    title: "Can I learn at my own pace with SkillonIT? ",
    content:
      "Yes, SkillonIT provides self-paced learning options. Students can access recorded lectures and study materials, allowing them to learn at their convenience. ",
  },
  {
    id: 14,
    title: "What support does SkillonIT provide to enrolled students? ",
    content: "We offer: ",
    description: [
      " 24/7 access to course materials. ",
      "Expert mentorship and live Q&A sessions.  ",
      "Career guidance and placement support.",
    ],
  },

  {
    id: 15,
    title: "How does SkillonIT ensure quality education for rural students? ",
    content:
      "SkillonIT combines affordable fees, scholarships, and modern teaching methods to ensure rural students receive the same quality education as their urban counterparts. Our curriculum is regularly updated to reflect industry trends and requirements. ",
  },
];



const About = () => {
  return (
    <section className="about scholarship ">
      <BreadCrumb pagename="About" cname="about-bread-top" />
      <section className="s-section-1">
        <div className="row w-100">
          <div className="col-lg-10 col-md-12 col-12">
            <h1 className="h-text-1 mt-lg-5 mt-md-2 mt-1">
              <span className="s-text-1"> SkillonIT: </span>
              Empowering Rural <br className="t-break break" /> India with World-Class
              IT
              <br className="t-break break" />
              <span className="s-text-1"> Education </span>
            </h1>
            <p className="p-text-1">
              SkillonIT, headquartered in Buldhana, Maharashtra, is a leading
              <br className="break t-break" />
              EdTech platform committed to bridging the gap between rural
              communities and <br className="break t-break" /> quality IT
              education. By offering advanced courses tailored to the specific
              needs of <br className="break t-break" />
              students in rural areas, SkillonIT has become a beacon of hope for
              those aspiring to <br className="break t-break" /> build
              successful careers in the IT sector. The platform focuses on
              delivering accessible, <br className="break t-break" /> practical,
              and industry-relevant knowledge, ensuring tha no talent is left
              untapped due <br className="break t-break" />
              to geographical or financial constraints.
            </p>
          </div>
          <div className="col-lg-2 col-md-4 col-12 tab-hide mobile-hide">
            <div className="scholar-bg-right">
              <img
                src={aboutimg}
                alt="scholarship"
                className="scholarship-bg-img tab-hide"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="about-section-2">
        <div className="row g-2">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="card about-card">
              <div className="about-card-head">
                <img src={visionImg} alt="vision" className="about-card-img" />
              </div>
              <div className="about-card-body">
                <h2 className="about-text-1">Vision</h2>
                <p className="about-text-2">
                  At SkillonIT, our vision is to build a learning ecosystem that
                  not only educates but also inspires. We envision a future
                  where every rural student has the skills, confidence, and
                  knowledge required to excel in the global IT landscape. By
                  transforming the way IT education is delivered, SkillonIT
                  strives to make advanced learning opportunities accessible to
                  all, regardless of their location or background.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="card about-card">
              <div className="about-card-head-1">
                <img src={missionImg} alt="vision" className="about-card-img" />
              </div>
              <div className="about-card-body">
                <h2 className="about-text-1">Mission</h2>
                <p className="about-text-2">
                  Our mission is simple: to provide world-class IT education to
                  rural students and empower them to achieve their fullest
                  potential. We aim to create a platform where students can
                  access a wide range of IT courses, benefit from expert
                  mentorship, and gain the confidence to excel in the
                  competitive world of technology. SkillonIT is dedicated to
                  bridging the digital divide by creating opportunities for
                  students to thrive in the modern workforce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s-section-2">
        <div className="s-section-2-inner">
          <h2 className="h-text-2">
            Core
            <span className="s-text-1"> Principles </span>
          </h2>

          <ul className="scholarship-ul">
            <li>
              <span className="d-text">Accessibility: </span>
              We ensure that quality IT education is available to students in
              the most remote areas.
            </li>

            <li>
              <span className="d-text"> Innovation:</span>Constantly updating
              our curriculum to match the latest industry standards and trends.
            </li>
            <li>
              <span className="d-text"> Academic Transcripts – </span>
              Official records of your grades and academic performance.
            </li>
            <li>
              <span className="d-text"> Empowerment: </span> Equipping students
              with skills that can lead to better career opportunities.
            </li>
            <li>
              <span className="d-text"> Integrity:</span> Ensuring transparency
              and reliability in every aspect of our education system.
            </li>
            <li>
              <span className="d-text"> Inclusivity: </span>
              Creating an environment that is welcoming and supportive of
              students from all backgrounds.
            </li>
          </ul>
        </div>
      </section>

      <section className="s-section-2">
        <h1 className="h-text-1">
          What Does
          <span className="s-text-1"> SkillonIT </span> Stand For?
        </h1>

        <ul className="scholarship-ul">
          <li>
            {" "}
            The name
            <span className="d-text"> "SkillonIT" </span>
            reflects our core values and dedication to education:
          </li>
        </ul>

        <ul className="scholarship-ul">
          <li>
            <span className="d-text fw-bold">S – </span> Skills for Success:
            Focusing on essential IT skills for real-world success.
          </li>

          <li>
            <span className="d-text fw-bold">K – </span> Knowledge Sharing:
            Encouraging collaboration and mentorship.
          </li>
          <li>
            <span className="d-text fw-bold">I – </span> Innovation in Learning:
            Embracing modern tools and methodologies.
          </li>
          <li>
            <span className="d-text fw-bold">L – </span> Learning with
            Accessibility: Making education available to everyone.
          </li>
          <li>
            <span className="d-text fw-bold">L – </span> Lifelong Growth:
            Promoting continuous improvement and learning.
          </li>
          <li>
            <span className="d-text fw-bold">O – </span> Opportunities for All:
            Breaking barriers to provide equal opportunities.
          </li>
          <li>
            <span className="d-text fw-bold">N – </span>Nurturing Potential:
            Helping students realize their true potential.
          </li>
          <li>
            <span className="d-text fw-bold">I – </span> Inspiring Change:
            Transforming communities through education.
          </li>
          <li>
            <span className="d-text fw-bold">T – </span> Transforming Futures:
            Preparing students for rewarding careers.
          </li>
        </ul>
      </section>

      <section className="s-section-2">
        <h1 className="h-text-1">
          Key Benefits of
          <span className="s-text-1"> SkillonIT </span>
        </h1>

        <ul className="scholarship-ul">
          <li>
            <span className="d-text ">Comprehensive Learning Resources: </span>{" "}
            Students receive access to a wide range of courses that include
            coding, data analytics, cloud computing, and more.
          </li>

          <li>
            <span className="d-text  ">Flexible Learning Schedules: </span>{" "}
            Knowledge Sharing: Encouraging collaboration and mentorship.
          </li>
          <li>
            <span className="d-text  ">Industry-Expert Trainers: </span> Learn
            directly from experienced professionals who provide practical
            insights and mentorship.
          </li>
          <li>
            <span className="d-text  ">State-of-the-Art Tools: </span> The
            platform integrates modern technologies and interactive tools to
            make learning engaging and effective.
          </li>
        </ul>
      </section>

      <section className="s-section-2">
        <h1 className="h-text-1">
          Internships
          <span className="s-text-1"> Opportunity </span>
        </h1>

        <ul className="scholarship-ul">
          <li>
            SkillonIT provides students with hands-on internship opportunities
            to prepare them for real-world challenges. Our internship programs
            focus on equipping students with practical knowledge in areas such
            as software development, app creation, cybersecurity, and more.
            These internships help bridge the gap between theoretical knowledge
            and practical application, giving students an edge in the job
            market.
          </li>
        </ul>
      </section>

      <section className="s-section-2">
        <h1 className="h-text-1">Scholarships</h1>

        <ul className="scholarship-ul">
          <li>
            SkillonIT is dedicated to ensuring that financial challenges do not
            become a barrier to quality education. With this in mind, the
            platform offers a 50% scholarship program for students from rural
            areas. This initiative is a testament to our commitment to making IT
            education affordable and accessible, encouraging more students to
            pursue their dreams without financial stress.
          </li>
        </ul>
      </section>

      <section className="s-section-2 careers">
        <h1 className="h-text-1">
          Social
          <span className="s-text-1"> Impact </span>
        </h1>

        <ul className="scholarship-ul">
          <li>
            {" "}
            At
            <span className="d-text"> "SkillonIT" </span>
            we believe in giving back to the community. Our social
            responsibility initiatives include:
          </li>
        </ul>

        <div className="careers-ul-div">
          <ul className="careers-ul">
            <li>
              Conducting free IT workshops in schools and colleges to spread
              awareness.
            </li>
            <li>
              Organizing technology drives to provide free learning materials
              and resources.
            </li>
            <li>
              Partnering with local organizations to bring technology closer to
              underserved communities. These efforts aim to create a lasting
              impact by uplifting rural areas through education and technology.
            </li>
          </ul>
        </div>
      </section>

      <section className="s-section-2">
        <h1 className="h-text-1">
          Empowering Rural
          <span className="s-text-1"> Students </span>
        </h1>

        <ul className="scholarship-ul">
          <li>
            SkillonIT is transforming the educational landscape by offering
            rural students access to IT courses that match international
            standards. The platform equips students with essential skills such
            as programming, web development, cloud technologies, and digital
            marketing. This focus on real-world knowledge ensures that students
            from rural backgrounds can confidently compete with their urban
            counterparts and seize opportunities in the tech industry.
          </li>
        </ul>
      </section>

      <section className="s-section-2">
        <h1 className="h-text-1">
          How
          <span className="s-text-1"> SkillonIT </span>
          Supports Students, <br className="break t-break" /> Professionals, and
          Corporates
        </h1>

        <ul className="scholarship-ul">
          <li>
            <span className="d-text ">For Students: </span> SkillonIT provides
            interactive and engaging courses that prepare students for IT
            careers. The platform focuses on fundamental and advanced skills to
            ensure a strong foundation.
          </li>

          <li>
            <span className="d-text  ">For Professionals: </span> Those looking
            to upskill or reskill can benefit from specialized training programs
            that keep them updated on the latest IT trends and tools.
          </li>
          <li>
            <span className="d-text  ">For Corporates: </span> SkillonIT
            collaborates with organizations to offer workforce training programs
            that enhance employee skills and improve productivity.
          </li>
        </ul>
      </section>

      <CommonFaq
        accordionData1={accordionData1}
        title="Frequently Asked Questions (FAQs)"
      />
    </section>
  );
};

export default About;
