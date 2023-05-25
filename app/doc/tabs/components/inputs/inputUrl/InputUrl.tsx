import React from 'react'

const InputUrl = () => {
    return (
        <div className='w-full'>
            <label htmlFor="url" className="block w-full text-sm font-medium leading-6 text-gray-800 mb-1">
                URL
            </label>
            <div className='flex'>
            <div className="w-fit px-3 rounded-l-md flex items-center border border-r-transparent border-gray-300 bg-gray-100">
                    <label className='text-gray-800'>http://</label>
                </div>
                <input
                    type="url"
                    name="url"
                    id="url"
                    className="block w-full rounded-r-md outline-none border-0 py-2 pl-4 pr-4 bg-slate-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    placeholder="yoursite.com"
                />
            </div>
        </div>
    )
}

export default InputUrl