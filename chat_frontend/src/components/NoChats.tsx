import React, { useState, useEffect, useRef } from 'react'

const NoChats = () => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [isSuccessSliderVisible, setSuccessSliderVisible] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const successRef = useRef<HTMLDivElement>(null);


    const handleButtonClick = () => {
        setModalOpen(true);
    };

    const handleFormSubmit = () => {
        // Simulate form submission logic
        setModalOpen(false);
        setSuccessSliderVisible(true);
    };

    const handleCloseSuccessSlider = () => {
        setSuccessSliderVisible(false);
    };

    const handleOverlayClick = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setModalOpen(false);
        }
    };

    const handleSuccessOverlayClick = (event: MouseEvent) => {
        if (successRef.current && !successRef.current.contains(event.target as Node)) {
            setSuccessSliderVisible(false);
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('mousedown', handleOverlayClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOverlayClick);
        };
    }, [isModalOpen]);

    useEffect(() => {
        if (isSuccessSliderVisible) {
            document.addEventListener('mousedown', handleSuccessOverlayClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleSuccessOverlayClick);
        };
    }, [isSuccessSliderVisible]);


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className='flex flex-col items-center'>
                <img src="/message-circle-chat-big.svg" alt="chat icon" />
                <h4 className='text-gray-600 text-center mt-4'>No Chats</h4>
                <p className='text-gray-600 text-center max-w-[308px] mb-8'>You have not received or send anyone a message</p>
            </div>
            <button onClick={handleButtonClick} className="flex bg-primary text-white px-8 py-4 rounded">
                <img src="/Plus.svg" alt="plus icon" />
                <span>Add a person</span>
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-opacity-50 bg-black flex items-center justify-center">
                    <div ref={modalRef} className="bg-white p-8 pb-12 rounded">
                        <h2 className="text-2xl mb-4 text-gray-500">Invite a Person</h2>
                        <form action="">
                            <label className='text-gray-600 mb-4' htmlFor="email">Email Address</label>
                            <input placeholder='E.g john@gmail.com' type="email" name="email" id="email" className="border border-gray-300 rounded p-2 w-full mb-4 bg-gray-100 mt-2" />

                            <label className='text-gray-600 mb-4' htmlFor="name">Name(Optional)</label>
                            <input placeholder='E.g john' type="text" name="name" id="name" className="border border-gray-300 rounded p-2 w-full mb-4 bg-gray-100 mt-2" />

                            <div className='flex gap-4'>
                                <button className='bg-white text-gray-600 px-4 py-2 rounded-md mt-6 w-full border border-grey '>Cancel</button>
                                <button onClick={handleFormSubmit} className="bg-primary text-white px-4 py-2 rounded-md mt-6 w-full">
                                    Submit
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            )}

            {/* Success Slider */}
            {isSuccessSliderVisible && (

                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter"></div>
                    <div ref={successRef} className="fixed top-[100px] right-[30px] bg-white bg-opacity-90 text-black p-4 rounded-md shadow-lg">
                        Form submitted successfully!
                        <button onClick={handleCloseSuccessSlider} className="ml-4">
                            Close
                        </button>
                    </div>
                </>

            )}
        </div>

    )
}


export default NoChats