import React from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'

const InputEmailIsValid = () => {
    return (
        <div className='w-full'>
            <div className='w-full flex items-center justify-between'>
                <label htmlFor="Email" className="block w-full text-sm font-medium leading-6 text-gray-800 mb-1">
                    Email
                </label>
                <ExclamationCircleIcon className='w-5 h-5 text-red-500' />
            </div>
            <div>
                <input
                    defaultValue='test@gil.com'
                    type="text"
                    name="Email"
                    id="errorEmail"
                    className="block w-full rounded-md outline-none border-0 py-2 px-4 bg-slate-50 text-red-900 ring-1 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                />
                <span className='text-red-500 text-sm mt-2'>Not a valid email address.</span>
            </div>
        </div>
    )
}

export default InputEmailIsValid