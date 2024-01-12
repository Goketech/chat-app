import React from 'react'

const TopNav = () => {
    const sideNavWidth = `${(window.innerWidth * 1) / 6}px`;
    return (
        <div className='flex fixed left-72 top-0 right-0 gap-4 p-4 pr-10 justify-between bg-white border-b border-gray-100'>
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Search for house"
                    className="w-full px-4 py-2 border border-r-0 rounded-l-md focus:outline-none"
                />
                <div className="flex items-center">
                    <span className="px-4">|</span>
                </div>
                <input
                    type="text"
                    placeholder="Location"
                    className="w-full px-4 py-2 border border-l-0 rounded-r-md focus:outline-none"
                />
            </div>
            <div className='flex gap-4'>
                <div className='rounded-2xl p-2 border border-gray-300 bg-transparent'>
                    <img src="/notification.svg" alt="notification-icon" />
                </div>
                <div className='flex border border-gray-300 bg-transparent p-2 rounded-lg gap-2 items-center'>
                    <img src="/profile.png" alt="profile-icon" />
                    <p>John Doe</p>
                    <img src="/arrow-down.svg" alt="arrow-icon" />
                </div>
            </div>

        </div>
    )
}

export default TopNav