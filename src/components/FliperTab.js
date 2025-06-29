import React from 'react'




const ServiceItem = ({ service }) => (
    <div className='stack-image-div'>
        <div className='service-box'>
            <div className='service-icon'>
                <div className='front-content'>
                    <img src={service.src} alt={service.alt} />
                </div>
            </div>
            <div className='service-content'>
                <span className='s-text-8'>{service.label}</span>
            </div>
        </div>
    </div>
);

const TabPane = ({ id, services, isActive }) => (
    <div className={`tab-pane fade w-100 h-100 ${isActive ? 'show active' : ''}`} id={id} role="tabpanel" aria-labelledby={`${id}-tab`}>
        <div className='stack-row'>
            <div className='stack-flex-box'>
                {services.map(service => <ServiceItem key={service.label} service={service} />)}
            </div>
        </div>
    </div>
);

const Stack = ({ tabServices }) => {
    const tabs = Object.keys(tabServices);
    return (
        <div className='stack more-w-stack'>
            <div className='stack-desktop'>
                <div className='stack-navbar'>
                    <ul className="nav nav-pills px-lg-5 px-md-3 px-2 justify-content-between gap-lg-0 gap-md-0 gap-2" id="pills-tab" role="tablist">
                        {tabs.map((tab, index) => (
                            <li className="nav-item" role="presentation" key={tab}>
                                <button
                                    className={`nav-link-stack ${index === 0 ? 'active' : ''}`}
                                    id={`${tab.toLowerCase().replace(/\s+/g, '-')}-tab`}
                                    data-bs-toggle="pill"
                                    data-bs-target={`#${tab.toLowerCase().replace(/\s+/g, '-')}`}
                                    type="button"
                                    role="tab"
                                    aria-controls={tab.toLowerCase().replace(/\s+/g, '-')}
                                    aria-selected={tab === 'UI UX'}
                                >
                                    {tab}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="stack-body">
                    <div className="tab-content w-100 h-100" id="pills-tabContent">
                        {tabs.map((tab, index) => (
                            <TabPane
                                key={tab}
                                id={tab.toLowerCase().replace(/\s+/g, '-')}
                                services={tabServices[tab]}
                                isActive={index === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stack