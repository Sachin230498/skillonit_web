import React, { useState, useRef, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Style from './PopupFormModal.module.scss';
import { FaSortDown } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { PopupFormApi } from '../../Helper/Redux/ReduxThunk/Homepage';
import Notiflix from 'notiflix';
import placeholderImg from '../../../assets/images/skillonit-popup-logo.svg'

const useOutsideClick = (callback) => {
    const ref = useRef();

    useEffect(() => {
        const handleClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [callback]);

    return ref;
};

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),
    email: Yup.string()
        .required('Email is required')
        .email('Invalid email format'),
    phone: Yup.string()
        .required('Phone number is required')
        .matches(/^[6-9]\d{9}$/, 'Phone number must be exactly 10 digits and start with 6, 7, 8, or 9')
        .length(10, 'Phone number must be exactly 10 digits'),
    course: Yup.string()
        .required('Please select a course')
});

const PopupFormModal = ({ show, handleClose }) => {
    const [dropdown, setDropdown] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState('Course You Are Interested In');
    const dispatch = useDispatch();

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            course: ''
        }
    });

    const dropdownRef = useOutsideClick(() => setDropdown(false));

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    const handleCourseSelect = (course, field) => {
        field.onChange(course);
        setSelectedCourse(course);
        setDropdown(false);
    };

    const onSubmit = async (data) => {
        let params = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            course: data.course
        }
        try {
            await dispatch(PopupFormApi(params, (resp => {
                if (resp.status) {
                    Notiflix.Notify.success(resp.message);
                    reset();
                    setSelectedCourse('Course You Are Interested In');
                    handleClose();
                } else {
                    Notiflix.Notify.failure(resp.message);
                }
            })))
        } catch (error) {
            Notiflix.Notify.failure(error)
        }

    };

    useEffect(() => {
        if (!show) {
            reset();
            setSelectedCourse('Course You Are Interested In');
        }
    }, [show, reset]);

    const courseOptions = [
        'UI/UX Design',
        'Full Stack Web Development',
        'Mobile App Development',
        'Blockchain Development',
        'Artificial Intelligence',
        'DevOps & Cloud Computing',
        'Cybersecurity',
        'Data Analytics',
        'Digital Marketing',
        'Personality Development',
        'Computer Basics',
        'Spoken English'
    ];

    return (
        <Modal show={show} onHide={handleClose} centered dialogClassName={`popup-form-modal ${Style.popup_modal_form}`}>
            <Modal.Body>
                <div className={Style.popup_modal_form_wrapper}>
                    <div className='row'>
                        <div className='col-md-6 col-lg-7 col-12 g-0 mobile-hide'>
                            <div className={Style.popup_modal_form_left}>
                                <img src="/popup-banner-img.svg" alt="Popup_Left_Banner_Image" name="Popup_Left_Banner_Image" title="Popup_Left_Banner_Image" width={454} height={587} />
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-5 col-12'>
                            <div className={Style.popup_modal_form_right}>
                                <img src={placeholderImg} className={Style.placeholder_image} alt="Skillonit Logo" name="Skillonit Logo" title="Skillonit Logo" width={372} height={402} />
                                <button className={Style.close_btn} onClick={handleClose}><IoClose /></button>
                                <span className={Style.s_text_1}>
                                    Ready to Upskill<br className='break' />{" "}
                                    with Skillonit?
                                </span>
                                <p className={Style.p_text_1}>
                                    Enter your contact information and select your course of interest. We’ll be in touch soon to help you get started.
                                </p>
                                <form onSubmit={handleSubmit(onSubmit)} className={Style.popup_modal_form_right_form}>
                                    <div className={Style.custom_input_group}>
                                        <Controller
                                            name="name"
                                            control={control}
                                            render={({ field }) => (
                                                <input
                                                    type="text"
                                                    placeholder="Your Name"
                                                    {...field}
                                                    className={errors.name ? Style.error_input : ''}
                                                />
                                            )}
                                        />
                                    </div>
                                    <div className={Style.custom_input_group}>
                                        <Controller
                                            name="email"
                                            control={control}
                                            render={({ field }) => (
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    {...field}
                                                    className={errors.email ? Style.error_input : ''}
                                                />
                                            )}
                                        />
                                    </div>
                                    <div className={Style.custom_phone_input_group}>
                                        <div className={`${Style.custom_phone_input} ${errors.phone ? Style.error_input : ''}`}>
                                            <span>+91</span>
                                            <Controller
                                                name="phone"
                                                control={control}
                                                render={({ field }) => (
                                                    <input
                                                        type="text"
                                                        placeholder="Phone"
                                                        maxLength="10"
                                                        {...field}
                                                        className={errors.phone ? Style.error_input : ''}
                                                        onKeyPress={(e) => {
                                                            const charCode = e.which ? e.which : e.keyCode;
                                                            if (charCode < 48 || charCode > 57) {
                                                                e.preventDefault();
                                                            }
                                                        }}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <div className={Style.custom_dropdown} ref={dropdownRef}>
                                        <Controller
                                            name="course"
                                            control={control}
                                            render={({ field }) => (
                                                <>
                                                    <button
                                                        type="button"
                                                        className={`${Style.custom_dropdown_btn} ${errors.course ? Style.error_input : ''}`}
                                                        onClick={toggleDropdown}
                                                    >
                                                        {selectedCourse}
                                                        <FaSortDown className={`${Style.icon} ${dropdown ? Style.rotate : ""}`} />
                                                    </button>
                                                    {dropdown && (
                                                        <div className={Style.custom_dropdown_menu}>
                                                            {courseOptions.map((course) => (
                                                                <button
                                                                    key={course}
                                                                    type="button"
                                                                    className={Style.custom_dropdown_menu_item}
                                                                    onClick={() => handleCourseSelect(course, field)}
                                                                >
                                                                    {course}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className={Style.form_footer}>
                                        <p className={Style.p_text_2}>* Your information is 100% confidential.</p>
                                        <button type="submit" className={Style.submit_btn}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default PopupFormModal;