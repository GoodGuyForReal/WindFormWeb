import { popUpCloser } from '@/app/components/useCase/PopUpCloser';
import React, { useState, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const teamEm = [
    { empID: 1, value: 'Jane', label: 'Jane' },
    { empID: 2, value: 'Jason', label: 'Jason' },
    { empID: 3, value: 'Karen', label: 'Karen' },
];

const InputMultiSelect = () => {
    const [selectedOptions, setSelectedOptions] = useState([{ empID: 4, value: 'Kaven', label: 'Kaven' },]);
    const [team, setTeam] = useState(teamEm)
    const [isSelectOpen, setIsSelectOpen] = useState(false)
    const [searchitem, setSearchitem] = useState('')
    const wrapperRef = useRef(null);

    popUpCloser(wrapperRef, setIsSelectOpen);


    const handleRemovePrevArray = (memberID) => setTeam((current) =>
        current.filter((item) => item.empID !== memberID)
    );

    const handleSelect = (item) => {
        setSelectedOptions(current => [item, ...current])
        handleRemovePrevArray(item.empID)
        setSearchitem('')
    }

    const handleSelectRemove = (memberID) => {
        setTeam(current => [memberID, ...current])
        setSelectedOptions((current) => current.filter((item) => item.empID !== memberID.empID))
    }
    const search = searchitem !== '' ? team.filter(item => item.label.toLowerCase().includes(searchitem.trim().toLowerCase())) : team

    return (
        <div className='w-full'>
            <label htmlFor="person" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                Select team member
            </label>
            <div className="flex flex-col gap-2">
                <div
                    name="person"
                    id="person"
                    className="flex w-full rounded-md outline-none border-0 h-full min-h-[40px] py-2 px-2 bg-slate-50 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"

                >
                    <div className='team_main w-full flex flex-wrap items-center gap-2'>
                        {
                            selectedOptions.map((item, id) => (
                                <span
                                    key={id}
                                    className='py-1 px-3 flex items-center gap-2 font-medium text-sm rounded-full border border-gray-300 hover:bg-red-100 hover:border-red-300 duration-200 text-gray-800 cursor-default'
                                    onClick={() => handleSelectRemove(item)}
                                >
                                    {item.label}
                                    <XMarkIcon className='h-4 w-4 text-gray-800' />
                                </span>
                            ))
                        }
                        <input
                            type="text"
                            className='w-[50%] bg-transparent outline-none text-sm text-gray-800 p-1'
                            placeholder='Search...'
                            value={searchitem}
                            onChange={(e) => setSearchitem(e.target.value)}
                            onClick={() => setIsSelectOpen(true)}
                        />
                    </div>
                </div>
                <div className='relative w-full h-full'>
                    {isSelectOpen && team.length > 0 &&
                        <div ref={wrapperRef} className="absolute z-10 top-0 left-0 right-20 items-center drop-shadow-sm">
                            <div className='drop_down w-full border rounded-b-md'>
                                {search.map((option) => (
                                    <p
                                        onClick={() => handleSelect(option)}
                                        key={option.value}
                                        value={option.value}
                                        className='text-gray-800 w-full py-2 px-2 bg-slate-50 even:bg-slate-100/20 cursor-default truncate'
                                    >
                                        {option.label}
                                    </p>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default InputMultiSelect;
