import React from 'react'

const InputDropdown = () => {


    const country = [
        { code: '+1' },
        { code: '+49' },
        { code: '+44' },
        { code: '+90' },
    ]


    return (
        <div className='w-full'>
            <label htmlFor="tel" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                Phone Number
            </label>
            <div className='relative'>
                <input
                    type="tel"
                    name="tel"
                    id="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}"
                    className="block w-full rounded-md outline-none border-0 py-2 pl-16 pr-4 bg-slate-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    placeholder="000-000-000"
                />
                <div className="absolute inset-y-0 left-0 flex items-center">
                    <select
                        id="currency"
                        name="currency"
                        className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-0 text-gray-500 sm:text-sm"
                    >
                        {
                            country.map((item,id) =>(
                                <option key={id}>{item.code}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}

export default InputDropdown