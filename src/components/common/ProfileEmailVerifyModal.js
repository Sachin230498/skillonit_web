import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react'
import applyclose from "../../assets/images/applyclose.svg";
import PhoneInput from 'react-phone-input-2';

const ProfileEmailVerifyModal = ({ show, handleClose }) => {

    const [activeTab, setActiveTab] = useState("Email");


    return (
        <Modal show={show}
            onHide={handleClose}
            dialogClassName="profile-modal"
            backdropClassName="modal-backdrop"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <div className='profile-modal-body'>
                <div className='profile-modal-head'>
                    <h1 className='p-text-1'>Personal Details</h1>
                </div>
                <button
                    className="apply-close-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleClose}
                >
                    <img src={applyclose} alt="close" />
                </button>

                <div className='profile-verification-body'>
                    <div className='profile-tabs'>

                        <button
                            className={`profile-tab-btn ${activeTab === "Email" ? " profile-tab-btn-active" : ""}`}
                            onClick={() => setActiveTab("Email")}
                        >
                            Email
                        </button>
                        <button
                            className={`profile-tab-btn ${activeTab === "Mobile" ? "profile-tab-btn-active" : ""}`}
                            onClick={() => setActiveTab("Mobile")}
                        >
                            Mobile
                        </button>


                    </div>

                    <div className="profile-tabs-body">
                        {activeTab === "Email" &&
                            <div className="profile-tabs-body-content">
                                <div className="profile-modal-input">
                                    <label className="form-label">Email</label>
                                    <input type="text" className={`form-control `} placeholder='Email' />
                                </div>
                                <div className="profile-modal-input">
                                    <label className="form-label">Enter OTP</label>
                                    <input type="text" className={`form-control `} placeholder='Enter OTP' />
                                </div>

                                <button type="submit" className="btn-apply-profile">
                                    Verify
                                </button>
                            </div>



                        }


                        {activeTab === "Mobile" &&
                            <div className="profile-tabs-body-content">
                                <div className="profile-modal-input">

                                    <PhoneInput
                                        international
                                        defaultCountry="IN"
                                        className={`  form-label`}
                                        placeholder="Enter phone number"
                                        countryCallingCodeEditable={false}
                                        disabledCountrySelect
                                        countrySelectProps={{ style: { display: "none" }, showFlags: false }}
                                    />

                                </div>
                                <div className="profile-modal-input">
                                    <label className="form-label">Enter OTP</label>
                                    <input type="text" className={`form-control `} placeholder='Enter OTP' />
                                </div>

                                <button type="submit" className="btn-apply-profile">
                                    Verify
                                </button>
                            </div>



                        }

                    </div>

                </div>


            </div>
        </Modal>
    )
}

export default ProfileEmailVerifyModal