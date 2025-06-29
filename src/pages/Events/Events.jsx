import { useEffect, useState } from 'react';
import EventCards from '../../components/common/EventCards/EventCards';
import Style from './Events.module.scss'
import BreadCrumb from '../../components/common/BreadCrumbs';
import GalleryImage from '../../components/common/GalleryImage/GalleryImage';
import GalleryVideo from '../../components/common/GalleryVideo/GalleryVideo';
import CommonFaq from '../../components/common/CommonFaq';
import BenifitCard from '../../components/common/BenifitCard/BenifitCard';
import { useDispatch } from 'react-redux';
import { GetAllKeySpeakersApi, GetAllWorkshopsApi, GetGalleryApi } from '../../components/Helper/Redux/ReduxThunk/Homepage';
import Notiflix from 'notiflix';

const accordionData1 = [
    {
        id: 1,
        title: "What does SkillonIT power Skillhouse?",
        content:
            "Skillhouse is an initiative by SkillonIT designed to provide focused IT workshops and training programs that empower students and beginners with industry-relevant skills.",
    },
    {
        id: 2,
        title: "How does SkillonIT support student career growth?",
        content:
            "SkillonIT offers expert-led training, skill development workshops, and certification programs that enhance technical and soft skills and prepare students for competitive job markets.",
    },
    {
        id: 3,
        title: "What topics are covered in the IT workshop?",
        content: "The workshop covers full-stack web development, mobile app development, blockchain basics, DevOps & cloud fundamentals, digital marketing, personality development, and spoken English.",
    },
    {
        id: 4,
        title: "Who can attend this workshop?",
        content: "The workshop is open to college students, ITI students, and beginners interested in building foundational IT skills.",
    },
    {
        id: 5,
        title: "How long is the workshop?",
        content:
            "It is a focused, one-day workshop designed to deliver intensive learning in a short time.",
    },
    {
        id: 6,
        title: "Is prior technical knowledge required?",
        content:
            "No prior experience is needed; the workshop is tailored for beginners and those new to IT.",
    },
    {
        id: 7,
        title: "Will I get a certificate after completion?",
        content:
            "Yes, all participants receive a certificate of completion to acknowledge their learning.",
    },
    {
        id: 8,
        title: "Are the sessions practical or theoretical?",
        content:
            "The workshop is primarily knowledge-based, providing industry insights and foundational concepts.",
    },
    {
        id: 9,
        title: "Who conducts the workshop?",
        content:
            "Expert mentors with industry experience from Skillhouse, powered by SkillonIT, lead the sessions.",
    },
    {
        id: 10,
        title: "How can this workshop benefit my career?",
        content: "It helps you understand current IT trends, develop essential skills, and improve communication, enhancing your employability and career prospects.",
    },
    {
        id: 11,
        title: "Does SkillonIT offer placement assistance after completing their programs?",
        content:
            "Yes, SkillonIT provides guidance and support to help students connect with potential employers and explore career opportunities after completing their training.",
    },
    {
        id: 12,
        title: "How frequently are new workshops conducted at Skillhouse?",
        content:
            "We organize workshops regularly throughout the year to keep learners updated with the latest industry trends and technologies.",
    },
];

const Events = () => {
    const [activeTab, setActiveTab] = useState('upcoming');
    const [galleryTab, setGalleryTab] = useState('image');
    const [counters, setCounters] = useState({
        attendees: 0,
        mentors: 0,
        workshops: 0,
        colleges: 0,
    });
    const [speakerData, setSpeakerData] = useState([]);
    const [eventData, setEventData] = useState([]);
    const [galleryData, setGalleryData] = useState([]);
    const dispatch = useDispatch();

    const GetAllKeySpeakersData = async () => {
        try {
            await dispatch(
                GetAllKeySpeakersApi((resp) => {
                    if (resp.status) {
                        setSpeakerData(resp?.data);
                    } else {
                        Notiflix.Notify.failure(resp.message);
                    }
                })
            );
        } catch (error) {
            Notiflix.Notify.failure(error);
        }
    };

    useEffect(() => {
        GetAllKeySpeakersData();
    }, []);

    const GetAllWorkshopsData = async () => {
        let params = {
            type: activeTab,
        };
        try {
            await dispatch(
                GetAllWorkshopsApi(params, (resp) => {
                    if (resp.status) {
                        setEventData(resp?.data);
                    } else {
                        setEventData([])
                    }
                })
            );
        } catch (error) {
            Notiflix.Notify.failure(error);
        }
    };

    useEffect(() => {
        GetAllWorkshopsData();
    }, [activeTab]);

    const GetGalleryData = async () => {
        let params = {
            type: galleryTab,
        };
        try {
            await dispatch(
                GetGalleryApi(params, (resp) => {
                    if (resp.status) {
                        setGalleryData(resp?.data);
                    } else {
                        setGalleryData([]);
                    }
                })
            );
        } catch (error) {
            Notiflix.Notify.failure(error);
        }
    };

    useEffect(() => {
        GetGalleryData();
    }, [galleryTab]);

    const targetValues = {
        attendees: 800,
        mentors: 10,
        workshops: 10,
        colleges: 15,
    };

    useEffect(() => {
        const duration = 2000;
        const incrementTime = 20;

        const animateCounter = (key, target) => {
            const increment = target / (duration / incrementTime);
            let current = 0;

            const interval = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(interval);
                }
                setCounters((prev) => ({
                    ...prev,
                    [key]: Math.floor(current),
                }));
            }, incrementTime);
        };

        animateCounter('attendees', targetValues.attendees);
        animateCounter('mentors', targetValues.mentors);
        animateCounter('workshops', targetValues.workshops);
        animateCounter('colleges', targetValues.colleges);
    }, []);


    const scrollToSection = () => {
        const section = document.getElementById('events-section');
        if (section) {
            const offset = 100;
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: sectionPosition - offset, behavior: 'smooth' });
        }
    };

    return (
        <main className={`event-page ${Style.events}`}>
            <BreadCrumb pagename="Workshops" />
            <section className={Style.events_banner}>
                <video className={Style.event_banner_video} playsInline autoPlay loop muted preload="none">
                    <source src="https://skillimage.s3.ap-south-1.amazonaws.com/event-homepage-video.mp4" type="video/mp4" />
                </video>
                <div className={Style.events_banner_text}>
                    <p className={Style.p_text_1}>SKILLONIT</p>
                    <h1 className={Style.h_text_1}>
                        Unlock Your Potential
                        <br className='break' /> With Skillhouse
                    </h1>
                    <div className={Style.events_banner_buttons}>
                        <button onClick={() => scrollToSection()}>Explore Events</button>
                    </div>
                </div>
                <div className={Style.events_banner_counts}>
                    <div className={Style.counts_inner}>
                        <span className={Style.counter}>{counters.attendees.toLocaleString()}+</span>
                        <p>Attendees</p>
                    </div>
                    <div className={Style.counts_inner}>
                        <span className={Style.counter}>{counters.mentors}+</span>
                        <p>Mentors</p>
                    </div>
                    <div className={Style.counts_inner}>
                        <span className={Style.counter}>{counters.workshops}+</span>
                        <p>Workshops</p>
                    </div>
                    <div className={Style.counts_inner}>
                        <span className={Style.counter}>{counters.colleges}+</span>
                        <p>Colleges</p>
                    </div>
                </div>
            </section>
            <section className={Style.events_about}>
                <div className={Style.events_about_text}>
                    <span>Skillonit</span>
                    <h2>
                        Skillhouse by SkillonIT: One-Day Workshops
                        <br className='break' /> for the Next-Gen Workforce
                    </h2>
                    <p>
                        Skillhouse, powered by SkillonIT, conducts dynamic 1-day IT workshops for college students, ITI trainees, and aspiring professionals across various backgrounds. Guided by expert industry mentors, these workshops cover a wide range of high-demand domains including Full Stack Web Development, Mobile App Development, Digital Marketing, Blockchain, DevOps & Cloud, Personality Development, and Spoken English. Each session is hands-on, career-focused, and designed to offer real-world exposure, helping participants gain practical skills and clarity in their tech journey. Skillhouse is committed to empowering rural and semi-urban talent with quality IT education, making them future-ready in today’s competitive digital world.
                    </p>
                </div>
            </section>
            <section className={Style.events_benifits}>
                <div className={Style.events_benifits_text}>
                    <h2>Unlock Key IT Skills with Our Intensive Workshop</h2>
                    <p>
                        Gain essential industry insights, explore multiple tech domains, and enhance your communication skills—all in just one day. This workshop equips you with the knowledge and confidence
                        to advance your IT career and stand out in a competitive market.
                    </p>
                </div>
                <BenifitCard />
            </section>
            <section className={Style.events_section_2} id="events-section">
                <h2 className={Style.h_text_2}>IT Workshops</h2>
                <div className={Style.events_tab_section}>
                    <div className={Style.events_tab_head}>
                        <button
                            className={`${Style.tab_button} ${activeTab === 'upcoming' ? Style.active : ''}`}
                            onClick={() => setActiveTab('upcoming')}
                        >
                            Upcoming
                        </button>
                        <button
                            className={`${Style.tab_button} ${activeTab === 'completed' ? Style.active : ''}`}
                            onClick={() => setActiveTab('completed')}
                        >
                            Completed
                        </button>
                    </div>
                    <div className={Style.events_tab_content_wrapper}>
                        <div className={Style.events_tab_content}>
                            <EventCards filteredEvents={eventData} activeTab={activeTab} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={Style.event_key_speaker}>
                <h2 className={Style.h_text_2}>Meet Our Speakers</h2>
                <div className={Style.key_speaker_grid}>
                    <div className="row g-4 justify-content-center">
                        {speakerData.map((data, index) => (
                            <div className="col-md-4 col-lg-3 col-12" key={index}>
                                <div className={Style.key_speaker_grid_card}>
                                    <img
                                        src={data.image}
                                        alt={data.name}
                                        title={data.name}
                                        name={data.name}
                                        width={380}
                                        height={378}
                                    />
                                    <div className={Style.key_speaker_grid_card_text}>
                                        <p>{data.name}</p>
                                        <span>{data.designation}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className={Style.event_gallery}>
                <h2 className={Style.h_text_2}>Recap</h2>
                <div className={Style.event_gallery_tab}>
                    <div className={Style.event_gallery_tab_head}>
                        <button
                            className={`${Style.tab_button} ${galleryTab === 'image' ? Style.active : ''}`}
                            onClick={() => setGalleryTab('image')}
                        >
                            Image
                        </button>
                        <button
                            className={`${Style.tab_button} ${galleryTab === 'video' ? Style.active : ''}`}
                            onClick={() => setGalleryTab('video')}
                        >
                            Video
                        </button>
                    </div>
                    <div className={Style.event_gallery_tab_content_wrapper}>
                        <div className={Style.event_gallery_tab_content}>
                            {galleryTab === 'image' && <GalleryImage galleryData={galleryData} />}
                            {galleryTab === 'video' && <GalleryVideo galleryData={galleryData} />}
                        </div>
                    </div>
                </div>
            </section>
            <CommonFaq accordionData1={accordionData1} title="Frequently Asked Questions (FAQs)" />
        </main>
    );
};

export default Events;