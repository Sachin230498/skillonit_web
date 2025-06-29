import React from 'react';
import Style from './VideoModal.module.scss';
import { Modal } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5';
import ReactPlayer from 'react-player';

const VideoModal = ({ show, handleClose, videoUrl, title }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            size="md"
            dialogClassName={`video-modal ${Style.video_modal}`}
        >
            <Modal.Body>
                <div className={Style.video_modal_wrapper}>
                    <div className={Style.video_modal_body}>
                        <button className={Style.close_btn} onClick={handleClose}>
                            <IoClose />
                        </button>
                        {videoUrl ? (
                            <ReactPlayer
                                url={videoUrl}
                                width="100%"
                                height="100%"
                                controls={true}
                                playing={show}
                            />
                        ) : (
                            <p className={Style.error_text}>No valid video URL provided</p>
                        )}
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default VideoModal;