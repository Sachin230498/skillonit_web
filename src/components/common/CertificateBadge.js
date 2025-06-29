import React, { useState, useRef } from 'react'
import badgeimg from "../../assets/images/badge.svg"
import cSearch from "../../assets/images/CSearch.svg"
import Cdate from "../../assets/images/certificateCalender.svg"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import btnclose from "../../assets/images/verifyclose.svg"


const CertificateBadge = () => {

    const dateInputRef = useRef(null);
    const [selectedDate, setSelectedDate] = useState(''); 
    const [isVisible, setIsVisible] = useState(false);


    const openDatePicker = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker(); 
        }
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value); 
    };
    const toggleCertificateDiv = () => {
        setIsVisible((prev) => !prev);
    };



    return (
        <div className='certificate-position '>
            {/* <div className='certificate-badge'>
                <div className="tooltip-container-badge">
                    <button
                        className='btn-badge'
                        onClick={toggleCertificateDiv}
                    >
                        <img src={badgeimg} alt='badge' className='badge-img' />
                    </button>
                    <div className="tooltip" onClick={toggleCertificateDiv} >Click to verify certificate</div>
                </div>

            </div> */}
            <div className={`certificate-div  `}>
                <button className='btn-verify-close' onClick={toggleCertificateDiv}>
                    <img src={btnclose} alt='close' />
                </button>
                <div className='cerificate-right'>
                    <h6 className='c-text-1'>Verify Your Certificate</h6>
                    <div className="input-group">
                        <input
                            type="date"
                            ref={dateInputRef}
                            className="form-control"
                            style={{ display: 'none' }}
                            onChange={handleDateChange}
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Date of Birth"
                            value={selectedDate}
                            readOnly
                        />
                        <span className="input-group-text" id="addon-wrapping">
                            <button className="btn-date" onClick={openDatePicker}>
                                <img src={Cdate} alt="calendar" className="c-calendar-img" />
                            </button>
                        </span>
                    </div>
                    <div className="input-group ">
                        <input type="text" className="form-control " placeholder="Enter User ID/Certificate  Serial Number" aria-label="Username" aria-describedby="addon-wrapping" />
                        <span className="input-group-text" id="addon-wrapping">
                            <img src={cSearch} alt='search' className='c-search-img' />
                        </span>
                    </div>
                    <button className='btn-contactus'>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CertificateBadge
