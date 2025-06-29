import React from 'react'
import Style from './BenifitCard.module.scss'
import cardImg from '../../../assets/images/benifit-card-img.svg'

const benifitCardData = [
    {
        title: "Real-Time Industry Exposure",
        description: "Gain practical experience working with current technologies under the guidance of active industry professionals. This direct exposure bridges the gap between theory and real-world application.",
    },
    {
        title: "Diverse Skill Coverage",
        description: "Explore multiple in-demand domains like web development, mobile apps, blockchain, DevOps, and digital marketing. This comprehensive approach equips you with versatile skills for today’s tech landscape.",
    },
    {
        title: "Career-Oriented Learning",
        description: "Workshops are designed to align with market needs, ensuring you acquire skills that enhance your job prospects. Prepare yourself to meet industry expectations confidently.",
    },
    {
        title: "Expert Mentor Guidance",
        description: "Learn directly from experienced mentors who provide valuable insights, personalized coaching, and advice for career growth. Benefit from their knowledge and network.",
    },
    {
        title: "Soft Skills Enhancement",
        description: "Strengthen essential communication skills, spoken English, and personality traits. These abilities are crucial to stand out and succeed in professional environments.",
    },
    {
        title: "Certificate of Participation",
        description: "Receive a recognized certificate upon completion, validating your skills and dedication. This certificate adds value to your academic and professional credentials.",
    },
    {
        title: "Networking Opportunities",
        description: "Engage with fellow learners, mentors, and industry experts to build meaningful connections. Networking can open doors to internships, jobs, and collaborations.",
    },
    {
        title: "Flexible Learning Format",
        description: "Our intensive 1-day workshops maximize learning without disrupting your schedule. Perfect for students and professionals seeking quick yet effective upskilling.",
    },
    {
        title: "Empowerment for All Levels",
        description: "Whether you are a beginner or have prior experience, our workshops are designed to build confidence and advance your capabilities at every stage.",
    },
]

const BenifitCard = () => {
    return (
        <div className={Style.benifit_card_wrapper}>
            <div className='row w-100 g-4'>
                {benifitCardData.map((d, index) => (
                    <div className='col-md-6 col-lg-4 col-12' key={index}>
                        <div className={Style.benifit_card}>
                            <div className={Style.benifit_card_head}>
                                <h3>{d.title}</h3>
                                <img src={cardImg} alt="Benifit Card" title="Benifit Card" name="Benifit Card" width={40} height={45} />
                            </div>
                            <p>{d.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BenifitCard