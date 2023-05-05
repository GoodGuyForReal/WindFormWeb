import SpinIcon from '@/app/components/assets/customIcons/SpinIcon'
import React from 'react'

const ButtonLoading = () => {
    return (
        <>
            <button className='py-2 px-4 rounded-md bg-light-lightbg text-dark-darkbg flex items-center gap-2'>
                <SpinIcon /> Loadoing...</button>
        </>
    )
}

export default ButtonLoading