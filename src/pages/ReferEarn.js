import React from "react";
import mail from "../assets/images/ReferEarn/mail.svg";
import fb from "../assets/images/ReferEarn/fb.svg";
import twitter from "../assets/images/ReferEarn/twitter.svg";
import wapp from "../assets/images/ReferEarn/wapp.svg";
import linkedin from "../assets/images/ReferEarn/linkedin.svg";
import linegraph from "../assets/images/ReferEarn/referline.svg";
import signup from "../assets/images/ReferEarn/refer-signup.svg";
import share from "../assets/images/ReferEarn/refershare.svg";
import win from "../assets/images/ReferEarn/referwin.svg";
import refersec2 from "../assets/images/ReferEarn/refersec2.svg";
import CommonFaq from "../components/common/CommonFaq";

const accordionData1 = [
  {
    id: 1,
    title: "Is there a limit to how many people I can refer?",
    content: "No, you can refer as many people as you want and earn rewards for each successful enrollment.",
  },
  {
    id: 2,
    title: "How will I receive my referral rewards?",
    content: "Rewards are credited to your Skillonit account and can be used for future courses or special offers.",
  },
  {
    id: 3,
    title: "What happens if my friend cancels their enrollment?",
    content: "If a referred user cancels their enrollment, the referral reward will not be credited.",
  },
  {
    id: 4,
    title: "Can I track my referrals?",
    content: "Yes, you can monitor your referrals and rewards through your Skillonit dashboard.",
  },
]

const ReferEarn = () => {
  return (
    <div className="refer-earn">
      <section className="refer-banner">
        <div className="gradient-div" />
        <div className="banner-content ">
          <h3 className="banner-head">
            Earn Big with Every Referral
            <br className="banner-break" /> Refer & Earn Big Rewards
          </h3>
          <div className="copy-section">
            <h4 className="banner-copy-content">Your Referral Link:</h4>
            <div className="input-group mb-3 mt-2 ig-div">
              <input
                type="text"
                className="form-control banner-input"
                placeholder="https://www.skillonit.com/signup/78C02656"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button className="copy-btn" type="button" id="button-addon2">
                copy
              </button>
            </div>
            <div className="share-div">
              <h4 className="banner-copy-content">Share it On:</h4>
              <div className="banner-social">
                <a href=" " target="_blank">
                  <img
                    src={mail}
                    alt="mail"
                    width={27.341}
                    height={27.341}
                    className="mail-icon"
                  />
                </a>
                <a
                  href=" "
                  target="_blank"
                >
                  <img src={fb} alt="fb" width={26.341} height={26.341} />
                </a>
                <a href=" " target="_blank">
                  <img
                    src={twitter}
                    alt="twitter"
                    width={20.341}
                    height={20.341}
                  />
                </a>
                <a href=" " target="_blank">
                  <img src={wapp} alt="whatsapp" width={23.341} height={23.341} />
                </a>
                <a
                  href=" "
                  target="_blank"
                >
                  <img
                    src={linkedin}
                    alt="linkedin"
                    width={23.341}
                    height={23.341}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="refer-banner-down" />
      </section>
      <section className="refer-sec-2 ">
        <img
          src={linegraph}
          alt="line"
          className="refer-line mobile-hide tab-hide"
        />
        <div>
          <img
            src={refersec2}
            alt="refericon"
            className="top-icon mobile-hide tab-hide"
          />
        </div>
        <div className="line-content-div ">
          <div className="line-content1 ">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12 ">
                <img src={signup} alt="refer sign" width={200} height={200} />
              </div>
              <div className="col-lg-8 col-md-8 col-12 line-content-text">
                <h4 className="h-text-4">Sign Up & Verify</h4>
                <p className="p-text-1">
                  Register on Skillonit with your email and confirm your account
                  via the activation link.
                </p>
              </div>
            </div>
          </div>
          <div className="line-content2 ">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <img src={share} alt="refer share" width={200} height={200} />
              </div>
              <div className="col-lg-8 col-md-8 col-12 line-content-text">
                <h4 className="h-text-4">Access Your Referral Link</h4>
                <p className="p-text-1">
                  Navigate to the referral page from the left menu and find your
                  unique invite link.
                </p>
              </div>
            </div>
          </div>

          <div className="line-content3  ">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <img src={win} alt="refer share" width={200} height={200} />
              </div>
              <div className="col-lg-8 col-md-8 col-12 line-content-text-win">
                <h4 className="h-text-4">Share & Invite</h4>
                <p className="p-text-1">
                  Send your referral link to friends and family to spread the
                  word.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="refer-sec-3  ">
        <div className="sec-3-align">
          <div className="refer-tabs">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active refer-tabs-name"
                  id="pills-students-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-students"
                  type="button"
                  role="tab"
                  aria-controls="pills-students"
                  aria-selected="true"
                >
                  For Students
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link refer-tabs-name"
                  id="pills-professionals-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-professionals"
                  type="button"
                  role="tab"
                  aria-controls="pills-professionals"
                  aria-selected="false"
                >
                  For Professionals
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-students"
            role="tabpanel"
            aria-labelledby="pills-students-tab"
            tabIndex="0"
          >
            <div className="tab-content">
              <h4 className="h-text-4">
                1 Verified Student registration <br className="break" />= 1
                Verified Referral
              </h4>
              <p className="p-text-2">
                More Verified Referrals = Multiple Rewards
              </p>
            </div>
            <div className="show-number">
              <div className="row show-number-row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card show-number-card">
                    <div className="card-body">
                      <p>Number of Email Verified Signups</p>
                      <h4 className="h-text-4">0</h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card show-number-card">
                    <div className="card-body">
                      <p>Number of Email Verified Signups</p>
                      <h4 className="h-text-4">0</h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card show-number-card">
                    <div className="card-body">
                      <p>Number of Email Verified Signups</p>
                      <h4 className="h-text-4">0</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="h-text-4 pg-referral">Student Referral Program</h4>
            <p className="p-text-2">Registration Fees = Free</p>

            <div className="show-number">
              <div className="row show-number-row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card show-number-card fee-card">
                    <div className="card-body"></div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card show-number-card fee-card">
                    <div className="card-body"></div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card show-number-card fee-card">
                    <div className="card-body"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="show-number">
              <div className="row show-number-row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card show-number-card fee-card">
                    <div className="card-body"></div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card show-number-card fee-card">
                    <div className="card-body"></div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card show-number-card fee-card">
                    <div className="card-body"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="show-number">
              <div className="row show-number-row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card show-number-card fee-card">
                    <div className="card-body"></div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card show-number-card fee-card">
                    <div className="card-body"></div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="card show-number-card fee-card">
                    <div className="card-body"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-professionals"
            role="tabpanel"
            aria-labelledby="pills-professionals-tab"
            tabIndex="0"
          ></div>
        </div>
      </section>
      <CommonFaq
        accordionData1={accordionData1}
        title="Find answer to common questions"
      />
    </div>
  );
};

export default ReferEarn;
