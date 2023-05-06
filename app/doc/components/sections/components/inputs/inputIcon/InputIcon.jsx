import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const InputIcon = () => {
    return (
        <div className='w-full'>
            <label htmlFor="search" className="block w-full text-sm font-medium leading-6 text-gray-800 mb-1">
                Search
            </label>

            <div className='relative'>
                <input
                    type="search"
                    name="search"
                    id="search"
                    className="block w-full rounded-md outline-none border-0 py-2 pl-7 pr-4 bg-slate-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    placeholder="Search..."
                />
                <div className="absolute inset-y-0 left-1 flex items-center">
                    <MagnifyingGlassIcon className='h-5 w-5 text-gray-800' />
                </div>
            </div>
        </div>
    )
}

export default InputIcon