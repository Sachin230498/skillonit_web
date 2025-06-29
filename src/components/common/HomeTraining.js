import React from 'react'
import './HomeTraining.css'
import progressCardImage from '../../assets/images/home/progress-card-img.svg';
import watermarkImage from '../../assets/images/home/watermark.svg';
import skillimg from '../../assets/images/home/skillimg.svg';
import ctaImg from '../../assets/images/home/cta-btn-img.svg';
import { Link } from 'react-router-dom';

const HomeTraining = () => {
    return (
        <div className='home-training'>
            <div className='home-training-head'>
                <h2 className='h-text-2'>
                    IT Software <span className='s-text-1'>Training Institute</span><br className='break' />
                </h2>
                <span className='s-text-2'>in Buldhana, Maharashtra</span>
                <p className='p-text-1'>
                    Buldhana is emerging as a hub of aspiring tech professionals, and we are here to bridge the gap between ambition and<br className='break' />
                    expertise. Our software training institute in Buldhana is committed to equipping learners with the latest IT skills, ensuring<br className='break' />
                    they stay ahead in the digital age. With a focus on quality education, expert guidance, and career growth, we empower<br className='break' />
                    individuals to thrive in the ever-evolving tech landscape.
                </p>
            </div>
            <div className='home-training-body'>
                <div className='row g-md-4 g-5 gx-md-5 gx-0 justify-content-between align-items-start'>
                    <div className='col-md-6 col-lg-5 col-12 mt-0 mt-lg-4'>
                        <div className='progress-card'>
                            <div className='progress-card-img'>
                                <img src={watermarkImage} width={209} height={250} className='progress-card-img-1' alt='Watermark_Image' />
                                <img src={progressCardImage} width={489} height={323} className='progress-card-img-2' alt='Watermark_Image' />
                            </div>
                            <div className='progress-card-bars'>
                                <div className='progress-bar-group'>
                                    <span className="progress-label">Available Jobs</span>
                                    <div className='progress-bar-group-body'>
                                        <div className="progress-bar">
                                            <div className="progress-fill available-jobs"></div>
                                        </div>
                                        <span className="progress-percentage">75%</span>
                                    </div>
                                </div>
                                <div className='progress-bar-group'>
                                    <span className="progress-label">Match rate</span>
                                    <div className='progress-bar-group-body'>
                                        <div className="progress-bar">
                                            <div className="progress-fill match-rate"></div>
                                        </div>
                                        <span className="progress-percentage">93%</span>
                                    </div>
                                </div>
                                <div className='progress-bar-group'>
                                    <span className="progress-label">Success apply</span>
                                    <div className='progress-bar-group-body'>
                                        <div className="progress-bar">
                                            <div className="progress-fill success-apply"></div>
                                        </div>
                                        <span className="progress-percentage">98%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6 col-12 mt-md-0'>
                        <div className='progress-content'>
                            <div className='progress-content-head'>
                                <h3 className='h-text-3 m-0'>
                                    Who Can <span className='s-text-3'>Apply?</span>
                                </h3>
                                <img src={skillimg} width={104} height={118} alt='Logo' />
                            </div>
                            <div className='progress-content-body'>
                                <div className='progress-content-body-card'>
                                    <span className='s-text-4'>Students</span>
                                    <div className='content'>
                                        <p>Learn IT skills that open doors to a brighter future.</p>
                                        <Link to="/courses" className='cta-btn'>
                                            <img src={ctaImg} width={35} height={35} alt='CTA_Button_Image' />
                                        </Link>
                                    </div>
                                </div>
                                <div className='progress-content-body-card'>
                                    <span className='s-text-4'>Professionals</span>
                                    <div className='content'>
                                        <p>Upgrade your IT expertise to stay ahead in your career.</p>
                                        <Link to="/courses" className='cta-btn'>
                                            <img src={ctaImg} width={35} height={35} alt='CTA_Button_Image' />
                                        </Link>
                                    </div>
                                </div>
                                <div className='progress-content-body-card'>
                                    <span className='s-text-4'>Corporates</span>
                                    <div className='content'>
                                        <p>Equip your teams with skills that drive growth and innovation.</p>
                                        <Link to="/courses" className='cta-btn'>
                                            <img src={ctaImg} width={35} height={35} alt='CTA_Button_Image' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTraining