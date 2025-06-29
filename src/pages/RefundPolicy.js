import React from "react";
import BreadCrumb from "../components/common/BreadCrumbs";

const RefundPolicy = () => {
    return (
        <section className="terms-condition">
            <BreadCrumb pagename="Refund Policy" cname="terms-bread-top" />
            <div className="terms-container ">
                <div className="terms-container-1">
                    <h1 className="term-text-head">Refund Policy</h1>
                    <p className="term-text-2">
                        At <span> Skillonit, </span> we are committed to providing
                        top-quality IT education and training. Our programs are designed to
                        empower learners with the skills needed to succeed in today’s
                        competitive tech industry. Before enrolling, we encourage all
                        students to carefully read our Refund Policy to understand our terms
                        and conditions.
                    </p>
                    <h1 className="term-text-1"> No Refund Policy </h1>
                    <p className="term-text-2">
                        At SkillonIT, we maintain a strict <span>No Refund Policy </span>{" "}
                        for all our courses, programs, and services. This policy applies to
                        all payments made for:
                    </p>
                    <ul className="term-ul">
                        <li>Course enrollments</li>
                        <li>Registration fees</li>
                        <li> Subscription plans</li>
                        <li>Any other educational services offered by SkillonIT</li>
                    </ul>

                    <p className="term-text-2">
                        Once a payment is made, it is considered final and non-refundable
                        under all circumstances, including but not limited to:
                    </p>

                    <ul className="term-ul">
                        <li> Change of mind after enrollment</li>
                        <li> Inability to attend classes (online or offline)</li>
                        <li> Dissatisfaction with course content or teaching methods</li>
                        <li>
                            {" "}
                            Personal reasons affecting participation or completion of the
                            course
                        </li>
                    </ul>


                    <h1 className="term-text-1"> Course Cancellation and Rescheduling </h1>
                    <p className="term-text-2">
                        SkillonIT reserves the right to cancel or reschedule any course due to unforeseen circumstances, including but not limited to low enrollment or technical issues.
                         In such cases, students will be notified promptly, and alternative arrangements will be provided. However, this does not constitute grounds for a refund.
                    </p>





                    <h1 className="term-text-1"> Acceptance of Policy </h1>
                    <p className="term-text-2">
                        By enrolling in any of our courses or programs, you acknowledge that
                        you have read, understood, and agreed to our{" "}
                        <span> No Refund Policy. </span>
                    </p>

                    <h1 className="term-text-1">Contact Us</h1>
                    <p className="term-text-2">
                        For any inquiries or further clarification regarding our Refund
                        Policy, please contact us at:
                    </p>
                    <p className="term-text-2 mb-0">
                        Skillonit Learning Hub Private Limited
                    </p>
                    <p className="term-text-4 ">
                        Chhatrapati Tower, Above Maratha Mahila Urban <br /> 3rd Floor,
                        Chikhali Road Buldhana, <br /> Buldana, 443001, India
                    </p>
                    <p className="term-text-4">
                        <span>Email: </span>{" "}
                        <a className="term-text-4" href="mailto:contact@skillonit.com">
                            contact@skillonit.com
                        </a>
                    </p>
                    <p className="term-text-4">
                        <span>Phone: </span> +91-7741007941
                    </p>

                    <p className="term-text-2">
                        <span>Note: </span> SkillonIT reserves the right to update or change this Refund Policy at any time. Any changes will be posted on this page with the revised date.


                    </p>
                </div>
            </div>
        </section>
    );
};

export default RefundPolicy;
