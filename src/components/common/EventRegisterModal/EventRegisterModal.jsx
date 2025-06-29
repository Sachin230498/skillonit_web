import React, { useState, useEffect, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { EventRegisterFormApi } from '../../Helper/Redux/ReduxThunk/Homepage';
import Notiflix from 'notiflix';
import Style from './EventRegisterModal.module.scss';
import { IoClose } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa6';

const schema = yup.object({
    fullName: yup.string().required('Full Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    whatsappNumber: yup
        .string()
        .matches(/^[0-9]{10}$/, 'WhatsApp Number must be 10 digits')
        .required('WhatsApp Number is required'),
    gender: yup.string().required('Gender is required'),
    city: yup.string().required('Current City is required'),
    institutionName: yup.string().required('Institution Name is required'),
    institutionType: yup.string().required('Institution Type is required'),
    department: yup.string().required('Department is required'),
    yearOfStudy: yup.string().required('Year of Study is required'),
    topics: yup
        .array()
        .min(1, 'At least one topic must be selected')
        .required('At least one topic is required'),
    hearAbout: yup.string().required('This field is required'),
    certificate: yup.string().required('This field is required'),
    agreement: yup
        .boolean()
        .oneOf([true], 'You must agree to attend the workshop')
        .required('Agreement is required'),
}).required();

const EventRegisterModal = ({ show, handleClose, workshopTitle }) => {
    const [dropdown, setDropdown] = useState(false);
    const dispatch = useDispatch();
    const dropdownRef = useRef(null);

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            fullName: '',
            email: '',
            whatsappNumber: '',
            gender: '',
            city: '',
            institutionName: '',
            institutionType: '',
            department: '',
            yearOfStudy: '',
            topics: [],
            hearAbout: '',
            certificate: '',
            agreement: false,
            expectations: '',
        },
    });

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setDropdown(!dropdown);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const onSubmit = async (data) => {
        let params = {
            ...data,
            event_from: workshopTitle,
        };
        try {
            await dispatch(EventRegisterFormApi(params, (resp) => {
                if (resp.status) {
                    Notiflix.Notify.success(resp.message);
                    handleClose();
                } else {
                    Notiflix.Notify.failure(resp.message);
                }
            }));
        } catch (error) {
            Notiflix.Notify.failure(error.message || 'An error occurred');
        } finally {
            reset({
                fullName: '',
                email: '',
                whatsappNumber: '',
                gender: '',
                city: '',
                institutionName: '',
                institutionType: '',
                department: '',
                yearOfStudy: '',
                topics: [],
                hearAbout: '',
                certificate: '',
                agreement: false,
                expectations: '',
            });
        }
    };

    const topicOptions = [
        'UI/UX Design',
        'Full Stack Web Development',
        'Mobile App Development',
        'Blockchain',
        'Unity 3D Game Development',
        'Cybersecurity',
        'DevOps & Cloud',
        'Digital Marketing',
        'Personality Development',
        'Spoken English',
    ];

    return (
        <Modal
            show={show}
            onHide={handleClose}
            dialogClassName={`event-register-modal ${Style.event_register_modal}`}
            centered
            size="lg"
        >
            <Modal.Body>
                <div className={Style.event_register_modal_wrapper}>
                    <div className={Style.event_register_modal_head}>
                        <h2 className={Style.head_text}>IT Workshop – Student Registration Form</h2>
                        <button className={Style.close_btn} onClick={handleClose}>
                            <IoClose />
                        </button>
                    </div>
                    <div className={Style.event_register_modal_body}>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                            <div className="row g-lg-3 g-4  justify-content-center">
                                <div className="col-lg-4 col-12">
                                    <div className={Style.custom_input_group}>
                                        <label htmlFor="fullName">Full Name</label>
                                        <Controller
                                            name="fullName"
                                            control={control}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    type="text"
                                                    placeholder="Enter Full Name"
                                                    className={`${Style.custom_form_control} ${errors.fullName ? Style.is_invalid : ''}`}
                                                />
                                            )}
                                        />
                                        {errors.fullName && (
                                            <span className={Style.error}>{errors.fullName.message}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className={Style.custom_input_group}>
                                        <label htmlFor="email">Email Address</label>
                                        <Controller
                                            name="email"
                                            control={control}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    type="email"
                                                    placeholder="Enter Email Address"
                                                    className={`${Style.custom_form_control} ${errors.email ? Style.is_invalid : ''}`}
                                                />
                                            )}
                                        />
                                        {errors.email && (
                                            <span className={Style.error}>{errors.email.message}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className={Style.custom_input_group}>
                                        <label htmlFor="whatsappNumber">WhatsApp Number</label>
                                        <Controller
                                            name="whatsappNumber"
                                            control={control}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    type="text"
                                                    placeholder="Enter WhatsApp Number"
                                                    className={`${Style.custom_form_control} ${errors.whatsappNumber ? Style.is_invalid : ''}`}
                                                />
                                            )}
                                        />
                                        {errors.whatsappNumber && (
                                            <span className={Style.error}>{errors.whatsappNumber.message}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className={Style.custom_input_group}>
                                        <label>Gender</label>
                                        <div className={Style.custom_form_check}>
                                            <Controller
                                                name="gender"
                                                control={control}
                                                render={({ field }) => (
                                                    <>
                                                        <div className="form-check">
                                                            <input
                                                                className={`form-check-input ${errors.gender ? Style.is_invalid : ''}`}
                                                                type="radio"
                                                                value="Male"
                                                                id="radioDefault1"
                                                                checked={field.value === 'Male'}
                                                                onChange={() => field.onChange('Male')}
                                                            />
                                                            <label className="form-check-label" htmlFor="radioDefault1">
                                                                Male
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className={`form-check-input ${errors.gender ? Style.is_invalid : ''}`}
                                                                type="radio"
                                                                value="Female"
                                                                id="radioDefault2"
                                                                checked={field.value === 'Female'}
                                                                onChange={() => field.onChange('Female')}
                                                            />
                                                            <label className="form-check-label" htmlFor="radioDefault2">
                                                                Female
                                                            </label>
                                                        </div>
                                                    </>
                                                )}
                                            />
                                            {errors.gender && (
                                                <span className={Style.error_text}>{errors.gender.message}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className={Style.custom_input_group}>
                                        <label htmlFor="city">Your Current City</label>
                                        <Controller
                                            name="city"
                                            control={control}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    type="text"
                                                    placeholder="Enter Current City"
                                                    className={`${Style.custom_form_control} ${errors.city ? Style.is_invalid : ''}`}
                                                />
                                            )}
                                        />
                                        {errors.city && (
                                            <span className={Style.error}>{errors.city.message}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className={Style.custom_input_group}>
                                        <label htmlFor="institutionName">Institution Name</label>
                                        <Controller
                                            name="institutionName"
                                            control={control}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    type="text"
                                                    placeholder="Enter Institution Name"
                                                    className={`${Style.custom_form_control} ${errors.institutionName ? Style.is_invalid : ''}`}
                                                />
                                            )}
                                        />
                                        {errors.institutionName && (
                                            <span className={Style.error}>{errors.institutionName.message}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className={Style.custom_input_group}>
                                        <label htmlFor="institutionType">Institution Type</label>
                                        <Controller
                                            name="institutionType"
                                            control={control}
                                            render={({ field }) => (
                                                <select
                                                    {...field}
                                                    className={`form-select ${Style.custom_form_control} ${Style.custom_select} ${errors.institutionType ? Style.is_invalid : ''}`}
                                                    aria-label="Institution Type"
                                                >
                                                    <option value="" className="d-none">
                                                        Select Institution Type
                                                    </option>
                                                    <option value="College">College</option>
                                                    <option value="ITI">ITI</option>
                                                    <option value="Training Institute">Training Institute</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            )}
                                        />
                                        {errors.institutionType && (
                                            <span className={Style.error}>{errors.institutionType.message}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className={Style.custom_input_group}>
                                        <label htmlFor="department">Department</label>
                                        <Controller
                                            name="department"
                                            control={control}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    type="text"
                                                    placeholder="Enter Department"
                                                    className={`${Style.custom_form_control} ${errors.department ? Style.is_invalid : ''}`}
                                                />
                                            )}
                                        />
                                        {errors.department && (
                                            <span className={Style.error}>{errors.department.message}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className={Style.custom_input_group}>
                                        <label htmlFor="yearOfStudy">Year of Study</label>
                                        <Controller
                                            name="yearOfStudy"
                                            control={control}
                                            render={({ field }) => (
                                                <select
                                                    {...field}
                                                    className={`form-select ${Style.custom_form_control} ${Style.custom_select} ${errors.yearOfStudy ? Style.is_invalid : ''}`}
                                                    aria-label="Year of Study"
                                                >
                                                    <option value="" className="d-none">
                                                        Select Year of Study
                                                    </option>
                                                    <option value="1st Year">1st Year</option>
                                                    <option value="2nd Year">2nd Year</option>
                                                    <option value="3rd Year">3rd Year</option>
                                                    <option value="Final Year">Final Year</option>
                                                </select>
                                            )}
                                        />
                                        {errors.yearOfStudy && (
                                            <span className={Style.error}>{errors.yearOfStudy.message}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className={Style.custom_input_group}>
                                        <label>Which topic interests you most at the IT workshop?</label>
                                        <div className={Style.custom_dropdown} ref={dropdownRef}>
                                            <button
                                                type="button"
                                                className={`${Style.custom_dropdown_btn} ${errors.topics ? Style.is_invalid : ''}`}
                                                onClick={toggleDropdown}
                                            >
                                                Select Interest
                                                <FaChevronDown className={Style.icon} />
                                            </button>
                                            {dropdown && (
                                                <div className={Style.custom_dropdown_menu}>
                                                    <Controller
                                                        name="topics"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <>
                                                                {topicOptions.map((topic, index) => (
                                                                    <div
                                                                        className={`form-check ${Style.custom_dropdown_menu_item}`}
                                                                        key={topic}
                                                                    >
                                                                        <input
                                                                            className={`form-check-input ${errors.topics ? Style.is_invalid : ''}`}
                                                                            type="checkbox"
                                                                            value={topic}
                                                                            id={`checkDefault${index}`}
                                                                            checked={field.value.includes(topic)}
                                                                            onChange={(e) => {
                                                                                const updatedTopics = e.target.checked
                                                                                    ? [...field.value, topic]
                                                                                    : field.value.filter((t) => t !== topic);
                                                                                field.onChange(updatedTopics);
                                                                            }}
                                                                        />
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor={`checkDefault${index}`}
                                                                        >
                                                                            {topic}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </>
                                                        )}
                                                    />
                                                </div>
                                            )}
                                            {errors.topics && (
                                                <span className={Style.error}>{errors.topics.message}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className={Style.custom_input_group}>
                                        <label htmlFor="hearAbout">How did you hear about this workshop?</label>
                                        <Controller
                                            name="hearAbout"
                                            control={control}
                                            render={({ field }) => (
                                                <select
                                                    {...field}
                                                    className={`form-select ${Style.custom_form_control} ${Style.custom_select} ${errors.hearAbout ? Style.is_invalid : ''}`}
                                                    aria-label="Hear About"
                                                >
                                                    <option value="" className="d-none">
                                                        Select an option
                                                    </option>
                                                    <option value="Faculty">Faculty</option>
                                                    <option value="WhatsApp Group">WhatsApp Group</option>
                                                    <option value="Friends">Friends</option>
                                                    <option value="Poster">Poster</option>
                                                    <option value="Social Media">Social Media</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            )}
                                        />
                                        {errors.hearAbout && (
                                            <span className={Style.error}>{errors.hearAbout.message}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className={Style.custom_input_group}>
                                        <label>Do you require a participation certificate?</label>
                                        <div className={Style.custom_form_check}>
                                            <Controller
                                                name="certificate"
                                                control={control}
                                                render={({ field }) => (
                                                    <>
                                                        <div className="form-check">
                                                            <input
                                                                className={`form-check-input ${errors.certificate ? Style.is_invalid : ''}`}
                                                                type="radio"
                                                                value="Yes"
                                                                id="radioDefault3"
                                                                checked={field.value === 'Yes'}
                                                                onChange={() => field.onChange('Yes')}
                                                            />
                                                            <label className="form-check-label" htmlFor="radioDefault3">
                                                                Yes
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className={`form-check-input ${errors.certificate ? Style.is_invalid : ''}`}
                                                                type="radio"
                                                                value="No"
                                                                id="radioDefault4"
                                                                checked={field.value === 'No'}
                                                                onChange={() => field.onChange('No')}
                                                            />
                                                            <label className="form-check-label" htmlFor="radioDefault4">
                                                                No
                                                            </label>
                                                        </div>
                                                    </>
                                                )}
                                            />
                                            {errors.certificate && (
                                                <span className={Style.error_text}>{errors.certificate.message}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className={Style.custom_input_group}>
                                        <label htmlFor="expectations">What do you expect to learn from this workshop?</label>
                                        <Controller
                                            name="expectations"
                                            control={control}
                                            render={({ field }) => (
                                                <textarea
                                                    {...field}
                                                    className={Style.custom_textarea}
                                                    placeholder="Enter your expectations (optional)"
                                                />
                                            )}
                                        />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className='d-flex flex-lg-row flex-column justify-content-between align-items-center'>
                                        <div className={Style.custom_input_group}>
                                            <div className={Style.custom_form_check}>
                                                <Controller
                                                    name="agreement"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <div className="form-check">
                                                            <input
                                                                className={`form-check-input ${errors.agreement ? Style.is_invalid : ''}`}
                                                                type="checkbox"
                                                                id="checkDefaultdec"
                                                                checked={field.value}
                                                                onChange={(e) => field.onChange(e.target.checked)}
                                                            />
                                                            <label className="form-check-label" htmlFor="checkDefaultdec">
                                                                I confirm that the above information is accurate and I agree to attend the 1-day IT workshop conducted by Skillonit.
                                                            </label>
                                                        </div>
                                                    )}
                                                />
                                                {errors.agreement && (
                                                    <span className={Style.error_text}>{errors.agreement.message}</span>
                                                )}
                                            </div>
                                        </div>
                                        <button type="submit" className={Style.submit_btn}>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <button type="submit" className={Style.submit_btn}>
                                Submit
                            </button> */}
                        </form>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default EventRegisterModal;