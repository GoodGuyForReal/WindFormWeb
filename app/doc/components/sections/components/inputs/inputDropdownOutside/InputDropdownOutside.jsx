import React from 'react'

const InputDropdownOutside = () => {
    const category = [
        { label: 'All' },
        { label: 'Shirt' },
        { label: 'Blazers' },
        { label: 'Tops' },
        { label: 'Suits' },
    ]

    return (
        <div className='w-full'>
            <label htmlFor="tel" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                Category
            </label>
            <div className='flex'>
                <div className='rounded-l-md outline-none border py-2 px-2 bg-slate-50 border-gray-300'>
                    <select
                        id="currency"
                        name="currency"
                        className="h-full rounded-md border-0 bg-transparent text-gray-500 sm:text-sm "
                    >
                        {
                            category.map((item, id) => (
                                <option key={id}>{item.label}</option>
                            ))
                        }
                    </select>
                </div>
                <input
                    type="text"
                    name="category"
                    id="category"
                    className="block w-full rounded-r-md outline-none border-0 py-2 px-4 bg-slate-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    placeholder="Search..."
                />

            </div>
        </div>
    )
}

export default InputDropdownOutside