import React from 'react'

const InputNumber = () => {
    return (
        <div className='w-full'>
            <label htmlFor="price" className="block w-full text-sm font-medium leading-6 text-gray-800 mb-1">
            Price
            </label>

            <div>
                <input
                    type="number"
                    name="price"
                    id="price"
                    className="block w-full rounded-md outline-none border-0 py-2 px-4 bg-slate-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    placeholder="0.00"
                />
            </div>
        </div>
    )
}

export default InputNumber