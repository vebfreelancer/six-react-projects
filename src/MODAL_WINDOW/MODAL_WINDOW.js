import React, { useState } from 'react';
import './style.scss';

const Modal = ({ open, setOpen, children }) => {

    const closeModal = target => {
        if (target.closest('.modal-close') || target.classList.contains('modal-hidden-content')){
            setOpen(null);
            setTimeout(function() {
                document.body.style.overflow = 'auto';
                document.body.style.paddingRight = '';
            }, 500);
        }
    };

    return (
        <div onClick={(e) => closeModal(e.target)} className={`modal-backdrop ${open ? 'show' : ''}`}>
            <div className='modal-hidden-content'>
                <div className="modal-widow">
                    <div onClick={(e) => closeModal(e.target)} className='modal-close'>
                        <svg viewBox="0 0 200 200">
                            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                        </svg>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
};

export const MODAL_WINDOW = () => {
    const [open, setOpen] = useState(null);

    const openModal = () => {
        document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
        document.body.style.overflow = 'hidden';
        setOpen(true);
    };

    return (
        <section className='modal section-padding'>
            <div className='modal-container container'>
                <div className='modal-visible-content'>
                    <h2 className='modal-title top-title'>Animated modal window</h2>
                    <div className="modal-wrapper">
                        <button className="open-modal-btn" onClick={openModal}>✨ Open window</button>
                        {
                            // Conditional render
                            // open && <Modal />

                            // By class
                            <Modal open={open} setOpen={setOpen}>
                                <img src="/assets/giphy.gif" alt='' />
                            </Modal>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};