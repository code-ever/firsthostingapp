import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center bg-gray-200 shadow-lg h-20'>
            <div className='flex justify-between items-center px-2 w-full'>
                <div>logo</div>
                <div className=' flex gap-x-3'>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Header