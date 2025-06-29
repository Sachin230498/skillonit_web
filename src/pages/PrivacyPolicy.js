import React from "react";
import BreadCrumb from "../components/common/BreadCrumbs";

const PrivacyPolicy = () => {
    return (
        <section className="terms-condition">
            <BreadCrumb pagename="Privacy Policy" cname="terms-bread-top" />
            <div className="terms-container ">
                <div className="terms-container-1">
                    <h1 className="term-text-head">Privacy Policy</h1>
                    <p className="term-text-2">
                        Welcome to <span> Skillonit Learning Hub Private Limited </span>{" "}
                        ("Skillonit," "we," "our," or "us"). We are committed to protecting
                        your privacy and ensuring the security of your personal information.
                        This <span>  Privacy Policy </span> outlines how we collect, use, share, and protect
                        your information when you engage with our EdTech platform.
                    </p>
                    <h1 className="term-text-1"> Information We Collect</h1>
                    <p className="term-text-2">
                        We collect personal information to provide you with a seamless
                        learning experience. The types of personal information we may
                        collect include:
                    </p>
                    <ul className="term-ul">
                        <li>Full Name</li>
                        <li>Email Address</li>
                        <li>Education Level</li>
                        <li>State</li>
                        <li>City</li>
                        <li>Phone Number</li>
                        <li>Postal Code</li>
                    </ul>
                    <h1 className="term-text-1"> How We Use Your Information</h1>
                    <p className="term-text-2">Your personal information is used to:</p>
                    <ul className="term-ul">
                        <li>Provide and manage our educational programs and resources.</li>
                        <li>Email Address</li>
                        <li>
                            Communicate with you regarding your account, courses, and updates.
                        </li>
                        <li>Process transactions and send payment confirmations.</li>
                        <li>
                            Enhance our platform’s features and improve your learning
                            experience.
                        </li>
                        <li>Respond to your inquiries and provide customer support.</li>
                        <li>Send promotional materials and newsletters, if you opt-in.</li>
                    </ul>
                    <h1 className="term-text-1"> How We Share Your Information</h1>
                    <p className="term-text-2">
                        We do not sell or rent your personal information. However, we may
                        share your information with:
                    </p>
                    <ul className="term-ul">
                        <li>
                            <span className="span-li">Trusted Service Providers: </span>To
                            support our operations, such as payment processing and technical
                            support.
                        </li>
                        <li>
                            <span className="span-li">Legal Obligations: </span>To comply with
                            legal requirements, court orders, or governmental requests.
                        </li>
                        <li>
                            <span className="span-li">Business Transfers: </span> In case of
                            mergers, acquisitions, or asset sales, your information may be
                            transferred.
                        </li>
                    </ul>
                    <h1 className="term-text-1"> Data Security Measures</h1>
                    <p className="term-text-2">
                        We employ robust security measures to protect your personal
                        information, including:
                    </p>
                    <ul className="term-ul">
                        <li>
                            <span className="span-li">Encryption Technologies </span>to secure
                            data during transmission.
                        </li>
                        <li>
                            <span className="span-li">Access Controls </span>to limit
                            information access to authorized personnel only.
                        </li>
                        <li>
                            <span className="span-li">Regular Security Audits </span> to
                            identify and mitigate potential vulnerabilities.
                        </li>
                    </ul>
                    <h1 className="term-text-1"> Your Rights and Choices</h1>
                    <p className="term-text-2">You have the right to:</p>
                    <ul className="term-ul">
                        <li>
                            <span className="span-li">Access, Update, or Delete </span> your
                            personal information.
                        </li>
                        <li>
                            <span className="span-li">Opt-Out </span> of receiving promotional
                            communications.
                        </li>
                        <li>
                            <span className="span-li">Restrict or Object </span> to certain
                            data processing activities
                        </li>
                    </ul>
                    <p className="term-text-2">
                        You can exercise these rights by contacting us at the information
                        provided below.
                    </p>{" "}
                    <h1 className="term-text-1"> Updates to This Privacy Policy</h1>
                    <p className="term-text-2">
                        We may update this Privacy Policy periodically to reflect changes in
                        our practices. We encourage you to review this page regularly to
                        stay informed about how we are protecting your information.
                    </p>
                    <h1 className="term-text-1">Contact Information</h1>
                    <p className="term-text-2">
                        If you have any questions or concerns about this Privacy Policy or
                        our data practices, please contact us:
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
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
