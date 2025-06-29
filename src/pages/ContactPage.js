import React from 'react'
import ContactUs from '../components/layout/ContactUs'
import BreadCrumb from '../components/common/BreadCrumbs'

const ContactPage = () => {
    return (
        <div className='homepage'>
            <BreadCrumb pagename="Contact us" />

            <ContactUs />

        </div>
    )
}

export default ContactPage