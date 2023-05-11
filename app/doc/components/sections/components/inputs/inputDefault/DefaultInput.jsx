import React from 'react'

const DefaultInput = () => {
    return (
        <div className='w-full'>
            <label htmlFor="Email" className="block w-full font-medium text-sm leading-6 text-gray-800 mb-1">
            Email
            </label>
            <div>
            <input
                    type="text"
                    name="Email"
                    id="Email"
                    className="block w-full rounded-md outline-none border-0 py-2 px-4 bg-slate-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                />
            </div>
        </div>
    )
}

export default DefaultInput