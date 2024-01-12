import React from 'react'

const SideNav = () => {
  return (

        <div className='h-full w-72 fixed top-0 left-0 bottom-0 bg-blue-900 p-4 flex flex-col items-center'>
            <img src="/home-w.svg" alt="home" />
            <div className="flex-grow mt-4 flex flex-col justify-between w-full">
                <div className='bg-primary rounded p-2 mb-2 flex items-center gap-2'>
                    <img src="./message-circle-chat.svg" alt="message-icon" />
                    <span className='text-white'>Messages</span>
                </div>
                <div className="bg-white rounded p-2 text-red-500 flex items-center justify-center gap-2">
                    <img src="./logout.svg" alt="logout-icon" />
                    <span>Log out</span>
                </div>
            </div>
        </div>
  )
}

export default SideNav