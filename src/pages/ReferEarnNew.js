import React from "react";
import mail from "../assets/images/ReferEarn/mail.svg";
import fb from "../assets/images/ReferEarn/fb.svg";
import twitter from "../assets/images/ReferEarn/twitter.svg";
import wapp from "../assets/images/ReferEarn/wapp.svg";
import linkedin from "../assets/images/ReferEarn/linkedin.svg";
import CommonFaq from "../components/common/CommonFaq";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/common/BreadCrumbs";
import Notiflix from "notiflix";
import { useUserContext } from "../components/Helper/UserContext";

const accordionData1 = [
  {
    id: 1,
    title: "Is there a limit to how many people I can refer?",
    content:
      "No, you can refer as many people as you want and earn rewards for each successful enrollment.",
  },
  {
    id: 2,
    title: "How will I receive my referral rewards?",
    content:
      "Rewards are credited to your Skillonit account and can be used for future courses or special offers.",
  },
  {
    id: 3,
    title: "What happens if my friend cancels their enrollment?",
    content:
      "If a referred user cancels their enrollment, the referral reward will not be credited.",
  },
  {
    id: 4,
    title: "Can I track my referrals?",
    content:
      "Yes, you can monitor your referrals and rewards through your Skillonit dashboard.",
  },
];

const ReferEarnNew = ({ isLogin }) => {
  const { userDetails } = useUserContext();
  return (
    <div className="refer-earn scholarship">
      <BreadCrumb pagename="Refer and Earn" tname="text-white" tstyle={{ color: "#FFF" }} cname="refer-bread-top" />
      <section className="refer-banner">
        <div className="gradient-div" />
        <div className="banner-content ">
          <h3 className="banner-head">
            Earn Big with Every Referral
            <br className="banner-break" /> Refer & Earn Big Rewards
          </h3>


          {!isLogin ? (
            <>

              <p className="banner-text-p">
                Skillonit is a leading EdTech platform committed to providing high-quality learning <br className="break t-break" />
                experiences. With the Skillonit Referral Program, you can share the benefits of our   <br className="break t-break" /> platform
                with your friends and earn exciting rewards. It’s our way of appreciating those <br className="break t-break" />  who help expand our learning community.
              </p>


              <Link to="/signin" className="sign-btn-refer">
                <button className="btn-login-refer">Sign in Now</button>
              </Link>
            </>

          ) : (
            <div className="copy-section">
              <h4 className="banner-copy-content">Your Referral Link:</h4>
              <div className="input-group mb-3 mt-2 ig-div">
                <input
                  type="text"
                  className="form-control banner-input"
                  value={`https://www.skillonit.com/signup/${userDetails?.referralCode}`}
                  readOnly
                />
                <button
                  className="copy-btn"
                  type="button"
                  id="button-addon2"
                  onClick={() => {
                    navigator.clipboard.writeText(`https://www.skillonit.com/signup/${userDetails?.referralCode}`);
                    Notiflix.Notify.success("Referral link copied!");
                  }}
                >
                  Copy
                </button>
              </div>

              <div className="share-div">
                <h4 className="banner-copy-content">Share it On:</h4>
                <div className="banner-social">
                  <a
                    href={`mailto:?subject=Join%20me%20on%20Skillonit!&body=Here%20is%20my%20referral%20link:%20https://www.skillonit.com/signup/${userDetails?.referralCode}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={mail} alt="mail" width={27.341} height={27.341} className="mail-icon" />
                  </a>

                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://www.skillonit.com/signup/${userDetails?.referralCode}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={fb} alt="fb" width={26.341} height={26.341} />
                  </a>

                  <a
                    href={`https://twitter.com/intent/tweet?text=Join%20me%20on%20Skillonit!%20https://www.skillonit.com/signup/${userDetails?.referralCode}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={twitter} alt="twitter" width={20.341} height={20.341} />
                  </a>

                  <a
                    href={`https://api.whatsapp.com/send?text=Join%20me%20on%20Skillonit!%20https://www.skillonit.com/signup/${userDetails?.referralCode}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={wapp} alt="whatsapp" width={23.341} height={23.341} />
                  </a>

                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.skillonit.com/signup/${userDetails?.referralCode}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedin} alt="linkedin" width={23.341} height={23.341} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="refer-banner-down" />
      </section>
      
      <div className="refer-content-section">
        <div className="careers">
          <section className="s-section-2">
            <h1 className="h-text-1">
              {" "}
              How Does It
              <span className="s-text-1"> Work? </span>
            </h1>

            <ul className="scholarship-ul">
              <li>
                <span className="d-text">Sign Up & Verify – </span> Register on
                Skillonit with your email and confirm your account via the
                activation link.
              </li>

              <li>
                <span className="d-text">Access Your Referral Link – </span>{" "}
                Navigate to the referral page from the left menu and find your
                unique invite link.
              </li>
              <li>
                <span className="d-text">Share & Invite – </span> Send your
                referral link to friends and family to spread the word.
              </li>
              <li>
                <span className="d-text">Track Your Referrals – </span> Every
                verified sign-up through your link gets counted on the
                scoreboard.
              </li>
              <li>
                <span className="d-text">Redeem Rewards – </span> Once you hit
                the required referral count, claim exclusive rewards.
              </li>
            </ul>
          </section>

          <section className="s-section-2">
            <h1 className="h-text-1">
              Who Can
              <span className="s-text-1"> Participate? </span>
            </h1>
            <div className="s-section-2-inner">
              <ul className="scholarship-ul">
                <li>
                  <span className="d-text">
                    The referral program is open to:
                  </span>
                </li>
              </ul>

              <div className="careers-ul-div">
                <ul className="careers-ul">
                  <li>Existing Skillonit users</li>
                  <li>Students looking to enhance their skills</li>
                  <li>
                    Professionals interested in recommending high-quality
                    courses{" "}
                  </li>
                  <li>
                    Anyone who believes in the power of education and wants to
                    share it with others{" "}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="s-section-2">
            <h1 className="h-text-1">
              Rewards and
              <span className="s-text-1"> Benefits </span>
            </h1>
            <div className="s-section-2-inner">
              <ul className="scholarship-ul">
                <li>
                  <span className="d-text">
                    By referring friends to Skillonit, you can enjoy:
                  </span>
                </li>
              </ul>

              <div className="careers-ul-div">
                <ul className="careers-ul">
                  <li>Cashback or discounts on future courses</li>
                  <li>Exclusive access to premium learning materials</li>
                  <li>Special bonuses for top referrers</li>
                  <li>Recognition within the Skillonit community </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="s-section-2">
            <h1 className="h-text-1">
              Steps to
              <span className="s-text-1"> Refer and Earn </span>
            </h1>
            <div className="s-section-2-inner">
              <ul className="scholarship-ul">
                <li>
                  <span className="d-text">
                    Step 1: Sign in to Your Skillonit Account
                  </span>
                </li>
              </ul>

              <div className="careers-ul-div">
                <ul className="careers-ul">
                  <li>
                    Log in to your account and navigate to the referral section.
                  </li>
                </ul>
              </div>

              <ul className="scholarship-ul">
                <li>
                  <span className="d-text">
                    Step 2: Get Your Unique Referral Link
                  </span>
                </li>
              </ul>

              <div className="careers-ul-div">
                <ul className="careers-ul">
                  <li>
                    Copy your personal referral link, which you can share with
                    friends.
                  </li>
                </ul>
              </div>

              <ul className="scholarship-ul">
                <li>
                  <span className="d-text">Step 3: Invite Your Friends</span>
                </li>
              </ul>

              <div className="careers-ul-div">
                <ul className="careers-ul">
                  <li>
                    Share the link via social media, email, or direct messaging.
                  </li>
                </ul>
              </div>

              <ul className="scholarship-ul">
                <li>
                  <span className="d-text">Step 4: Earn Rewards</span>
                </li>
              </ul>

              <div className="careers-ul-div">
                <ul className="careers-ul">
                  <li>
                    Once your friend enrolls in a course, you receive your
                    reward instantly.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="s-section-2">
            <h1 className="h-text-1">
              Terms and
              <span className="s-text-1"> Conditions </span>
            </h1>
            <div className="s-section-2-inner">
              <div className="careers-ul-div">
                <ul className="careers-ul">
                  <li>The referred user must be a new Skillonit member.</li>
                  <li>
                    Rewards are applicable only when the referred user
                    successfully enrolls.
                  </li>
                  <li>Referral rewards cannot be exchanged for cash.</li>
                  <li>
                    Skillonit reserves the right to modify or terminate the
                    program at any time.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      <CommonFaq
        accordionData1={accordionData1}
        title="Frequently Asked Questions (FAQs)"
      />

      {!isLogin && (
        <div className="refer-content-section">
          <div className="careers">
            <section className="s-section-2">
              <h1 className="h-text-1">
                {" "}
                Get Started
                <span className="s-text-1"> Today </span>
              </h1>

              <ul className="scholarship-ul">
                <li>
                  Start sharing the power of education with your network and
                  earn exciting rewards along the way. Log in to your Skillonit
                  account and begin referring today!
                </li>
              </ul>

              <Link to="/signin">
                <button className="btn-login-refer">Sign in Now</button>
              </Link>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferEarnNew;
