import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

const InputPassword = () => {
    const [isPasswordHide, setIsPasswordHide] = useState(true)

    return (
        <div className='w-full'>
            <label htmlFor="password" className="block w-full text-sm font-medium leading-6 text-gray-800 mb-1">
                Password
            </label>

            <div className='relative'>
                <input
                    type={isPasswordHide ? "password" : "text"}
                    name="password"
                    id="password"
                    className="block w-full rounded-md outline-none border-0 py-2 px-4 bg-slate-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    placeholder="Password"
                />

                <div className="absolute inset-y-0 right-3 flex items-center"
                    onClick={() => setIsPasswordHide(isPasswordHide ? false : true)}
                >
                    {isPasswordHide ?
                        <EyeSlashIcon
                            className='h-5 w-5 text-gray-500'
                        /> :
                        <EyeIcon
                            className='h-5 w-5 text-gray-500'
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default InputPassword