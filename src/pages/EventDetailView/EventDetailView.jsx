import Style from './EventDetailView.module.scss'
import BreadCrumb from '../../components/common/BreadCrumbs';
import { useParams } from 'react-router-dom';
import EventRegisterForm from '../../components/common/EventRegisterForm/EventRegisterForm';
import { IoLocationSharp } from 'react-icons/io5';
import EventRegisterModal from '../../components/common/EventRegisterModal/EventRegisterModal';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetSingleWorkshopApi } from '../../components/Helper/Redux/ReduxThunk/Homepage';
import Notiflix from 'notiflix';
import { FaClock } from 'react-icons/fa6';
import BlogFaq from '../../components/common/BlogFaq';
import GalleryImage from '../../components/common/GalleryImage/GalleryImage';
import GalleryVideo from '../../components/common/GalleryVideo/GalleryVideo';

const formatDateWithOrdinal = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return (
        <>
            {day} {month} {year}
        </>
    );
};

const formatTimeTo12Hour = (time) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const period = hour >= 12 ? 'PM' : 'AM';
    const adjustedHour = hour % 12 || 12;
    return `${adjustedHour}:${minutes} ${period}`;
};

const extractMonthAndDay = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
    return { month, day };
};

const EventDetailView = () => {
    const { workshopTitle } = useParams();
    const [eventRegisterModal, setEventRegisterModal] = useState(false);
    const [workshopData, setWorkshopData] = useState([]);
    const dispatch = useDispatch();
    const [galleryTab, setGalleryTab] = useState('image');
    const [galleryImgData, setGalleryImgData] = useState([]);
    const [galleryVideoData, setGalleryVideoData] = useState([]);

    const toggleEventRegisterModal = (isOpen) => setEventRegisterModal(isOpen);

    const GetSingleWorkshopData = async () => {
        let params = {
            url: `/${workshopTitle}`
        }
        try {
            await dispatch(GetSingleWorkshopApi(params, (resp => {
                if (resp.status) {
                    setWorkshopData(resp?.data);
                    setGalleryImgData(resp?.data?.event_images);
                    setGalleryVideoData(resp?.data?.enriched_event_videos);
                } else {
                    setWorkshopData([]);
                    setGalleryImgData([]);
                    setGalleryVideoData([]);
                }
            })))
        } catch (error) {
            Notiflix.Notify.failure(error);
        }
    }

    useEffect(() => {
        GetSingleWorkshopData();
    }, [workshopTitle])

    // const API_KEY = 'AIzaSyAvaBLcd3BXnaRDkYsG3xb0v7jytJD3GR4';

    // const mapSrc = workshopData?.latitude && workshopData?.longitude
    //     ? `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${workshopData.latitude},${workshopData.longitude}&zoom=15`
    //     : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.7179580151346!2d76.191160875863!3d20.51778510513125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bda1d005f7b8cc3%3A0x8c36565e89364cca!2sSkillonIT%20Learning%20Hub%20Private%20Limited!5e0!3m2!1sen!2sin!4v1748862048207!5m2!1sen!2sin';

    const scrollToSection = () => {
        const section = document.getElementById("events-section");
        if (section) {
            const offset = 50;
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: sectionPosition - offset, behavior: "smooth" });
        }
    };

    const scrollToGallery = () => {
        const section = document.getElementById("gallery-section");
        if (section) {
            const offset = 50;
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: sectionPosition - offset, behavior: "smooth" });
        }
    };

    const { month, day } = workshopData.event_date
        ? extractMonthAndDay(workshopData.event_date)
        : { month: 'MAY', day: '31' };

    const formattedStartTime = workshopData.event_start_time
        ? formatTimeTo12Hour(workshopData.event_start_time)
        : '10:00 AM';
    const formattedEndTime = workshopData.event_end_time
        ? formatTimeTo12Hour(workshopData.event_end_time)
        : '01:00 PM';

    return (
        <main className={`event-detail-view-page ${Style.event_detail_view}`}>
            <BreadCrumb pagename="Workshops" nextpagename={workshopData?.breadcrumb_title} />
            <section className={Style.event_detail_view_banner}>
                <div className={Style.event_detail_view_banner_text}>
                    <p className={Style.p_text_1}>SKILLONIT</p>
                    <h1 className={Style.h_text_1}>{workshopData.event_title}</h1>
                    <div className={Style.banner_date_time}>
                        <div className={Style.banner_date_group}>
                            <div className={Style.cal}>
                                <div className={Style.cal_head}>{month}</div>
                                <div className={Style.cal_body}>{day}</div>
                            </div>
                            <p className={Style.p_text_2}>
                                {workshopData.event_date ? formatDateWithOrdinal(workshopData.event_date) : 'May 22nd, 2025'}
                            </p>
                        </div>

                        <div className={Style.banner_date_group}>
                            <FaClock className={Style.icon} />
                            <p className={Style.p_text_2}>{formattedStartTime} to {formattedEndTime}</p>
                        </div>
                    </div>
                    <div className={Style.banner_text_group}>
                        <IoLocationSharp className={Style.icon} />
                        <p className={Style.p_text_2}>{workshopData.event_location}</p>
                    </div>
                    {workshopData?.event_category === "Completed" ? (
                        <div className={Style.event_detail_view_banner_buttons}>
                            <button onClick={() => scrollToGallery()}>View Gallery</button>
                        </div>
                    ) : (
                        <div className={Style.event_detail_view_banner_buttons}>
                            <button onClick={() => toggleEventRegisterModal(true)}>Register Now</button>
                            <button onClick={() => scrollToSection()}>View Agenda</button>
                        </div>
                    )}
                </div>
            </section>
            <section className={Style.event_detail_view_section} id='events-section'>
                <h2 className={Style.h_text_2}>Agenda</h2>
                <div
                    className={Style.event_content}
                    dangerouslySetInnerHTML={{
                        __html: workshopData?.event_text,
                    }} />
            </section>
            <section className={Style.event_detail_view_key_speaker}>
                <h2 className={Style.h_text_2}>Meet Our Speakers</h2>
                <div className={Style.key_speaker_grid}>
                    <div className='row g-4 justify-content-center'>
                        {workshopData?.keyspeakers?.map((data, index) => (
                            <div className='col-md-6 col-lg-3 col-12' key={index}>
                                <div className={Style.key_speaker_grid_card}>
                                    <img src={data.image} alt={data.name} title={data.name} name={data.name} width={380} height={378} />
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
            <>
                {workshopData?.event_category === "Completed" && (
                    <section className={Style.event_gallery} id='gallery-section'>
                        <h2 className={Style.h_text_2}>Gallery</h2>
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
                                    {galleryTab === 'image' && <GalleryImage galleryData={galleryImgData} />}
                                    {galleryTab === 'video' && <GalleryVideo galleryData={galleryVideoData} />}
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </>
            <>
                {workshopData?.event_category === "Upcoming" && (
                    <section className={Style.event_register_form_div}>
                        <h2 className={Style.h_text_2}>IT Workshop – Student Registration Form</h2>
                        <EventRegisterForm workshopTitle={workshopTitle} />
                    </section>
                )}
            </>
            {/* <section className={Style.event_map_div}>
                <iframe
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    className={Style.event_map}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section> */}
            <BlogFaq
                blogFaqs={workshopData?.faqs}
                title="Frequently Asked Questions (FAQs)"
            />
            <EventRegisterModal show={eventRegisterModal} handleClose={() => toggleEventRegisterModal(false)} workshopTitle={workshopTitle} />
        </main >
    )
}

export default EventDetailView