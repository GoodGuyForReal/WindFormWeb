import { popUpCloser } from '@/app/components/useCase/PopUpCloser';
import React, { useState, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const team = [
    { value: 'Kaven', label: 'Kaven' },
    { value: 'Jane', label: 'Jane' },
    { value: 'Jason', label: 'Jason' },
    { value: 'Karen', label: 'Karen' },
];

const InputMultiSelect = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isSelectOpen, setIsSelectOpen] = useState(false)
    const [searchitem, setSearchitem] = useState('')
    const wrapperRef = useRef(null);

    popUpCloser(wrapperRef, setIsSelectOpen);

    const handleSelect = (item) => setSelectedOptions(current => [item, ...current])

    const handleSelectRemove = (memberID) => team.filter(item => item !== memberID)

    const search = searchitem.trim() !== ''
        ?
        team.filter(item => item.label.toLowerCase().includes(searchitem.toLowerCase()))
        :
        team

    return (
        <div className='w-full'>
            <label htmlFor="person" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                Select team member
            </label>
            <div className="flex flex-col gap-2">
                <div
                    name="person"
                    id="person"
                    className="flex  w-full rounded-md outline-none border-0 h-full min-h-[40px] py-2 px-2 bg-slate-50 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                    onClick={() => setIsSelectOpen(true)}
                >
                    <div className='team_main flex flex-wrap gap-2'>
                        {
                            selectedOptions.map((item, id) => (
                                <span
                                    key={id}
                                    className='py-1 px-3 flex items-center gap-2 font-medium text-sm rounded-full border border-gray-300 hover:bg-slate-100 text-gray-800 '
                                    onClick={() => handleSelectRemove(id)}
                                >
                                    {item}
                                    <XMarkIcon className='h-4 w-4 text-gray-800' />
                                </span>
                            ))
                        }
                    </div>
                </div>
                <div className='relative w-full h-full'>
                    {isSelectOpen &&
                        <div ref={wrapperRef} className="absolute z-10 top-0 left-0 right-20 items-center drop-shadow-sm">
                            <input
                                type="text"
                                className='w-full py-2 px-4 bg-slate-100/20 border text-sm text-gray-800 rounded-t-md '
                                placeholder='Search person'
                                onChange={(e) => setSearchitem(e.target.value)}
                            />
                            <div className='drop_down w-full border rounded-b-md'>
                                {search.map((option) => (
                                    <p
                                        onClick={() => handleSelect(option.value)}
                                        key={option.value}
                                        value={option.value}
                                        className='text-gray-800 w-full py-2 px-2 bg-slate-50 even:bg-slate-100/20'
                                    >
                                        {option.label}
                                    </p>
                                ))}
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default InputMultiSelect;
