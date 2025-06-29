import { Link } from 'react-router-dom';
import Style from './EventCards.module.scss';
import { BsArrowUpRightCircle } from 'react-icons/bs';

const EventCards = ({ filteredEvents = [], activeTab }) => {
    if (!filteredEvents || !Array.isArray(filteredEvents) || filteredEvents.length === 0) {
        const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

        return <div className={Style.no_workshops}>No {capitalize(activeTab)} Workshops Found</div>;
    }

    return (
        <div className="row g-4">
            {filteredEvents.map((event) => (
                <div key={event._id} className="col-md-6 col-lg-4 col-12">
                    <div className={Style.event_card}>
                        <Link to={`/workshops${event.event_url}`} reloadDocument className={Style.event_card_img}>
                            <img
                                src={event.event_og_image || 'https://placehold.co/600x400'}
                                alt={event.event_image_alt_title || 'Event Image'}
                                title={event.event_image_alt_title || 'Event Image'}
                                name={event.event_image_alt_title || 'Event Image'}
                                width={1200}
                                height={600}
                            />
                        </Link>
                        <div className={Style.event_card_text}>
                            <h4 className={Style.h_text_4}>{event.event_title || 'Untitled Event'}</h4>
                            <Link to={`/workshops${event.event_url}`} reloadDocument className={Style.cta_btn}>
                                <BsArrowUpRightCircle />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventCards;