import React from 'react'
import { BanknotesIcon } from '@heroicons/react/24/outline'

const ButtonIcon = () => {
    return (
        <div>
            <button className='py-2 px-4 rounded-md bg-gray-800 text-slate-50 hover:bg-gray-800/80 duration-200  flex items-center gap-2'>
                <BanknotesIcon className=' h-5 w-5 text-slate-50' /> Pay in cash
            </button>
        </div>
    )
}

export default ButtonIcon