import SpinIcon from '@/app/components/assets/customIcons/SpinIcon'
import React from 'react'

const ButtonLoading = () => {
    return (
        <>
            <button className='py-2 px-4 rounded-md bg-gray-800 text-slate-50 flex items-center gap-2'>
                <SpinIcon /> Loading...</button>
        </>
    )
}

export default ButtonLoading