import React from 'react'
import { BanknotesIcon } from '@heroicons/react/24/outline'

const ButtonIcon = () => {
    return (
        <div>
            <button className='py-2 px-4 rounded-md bg-light-lightbg text-dark-darkbg hover:bg-light-lightbg/90 duration-200  flex items-center gap-2'>
                <BanknotesIcon className=' h-5 w-5' /> Pay in cash
            </button>
        </div>
    )
}

export default ButtonIcon