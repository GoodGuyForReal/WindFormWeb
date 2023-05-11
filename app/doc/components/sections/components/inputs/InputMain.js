import DefaultInput from "./inputDefault/DefaultInput";
import InputDropdown from "./inputDropdown/InputDropdown";
import InputIcon from "./inputIcon/InputIcon";
import InputMultiSelect from "./inputMultiSelect/InputMultiSelect";
import InputEmailIsValid from "./inputValidError/InputEmailIsValid";
import InputPassword from "./inputPassword/InputPassword";
import InputUrl from "./inputUrl/InputUrl";
import InputHint from "./inputHint/InputHint";
import InputDropdownOutside from "./inputDropdownOutside/InputDropdownOutside";
import ToggleSwitch from "./toggleDefault/ToggleSwitch";
import ToggleWithLabel from "./toggleWithLabel/ToggleWithLabel";

export const InputMain = [
    {
        title: 'Inputs',
        subComponent: [
            {
                name: 'Default',
                component: <DefaultInput />,
                code: `
<div className='w-full'>
    <label htmlFor="name" className="block w-full text-sm font-medium leading-6 text-gray-800 mb-1">
        Name
    </label>
    <div>
    <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md outline-none border-0 py-2 px-4 bg-slate-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
            placeholder="Enter your name"
        />
    </div>
</div>
`,
            },
            {
                name: 'Valid Error',
                component: <InputEmailIsValid />,
                code: `
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
`,
            },
            {
                name: 'Info',
                component: <InputHint />,
                code: `
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
`,
            },
            {
                name: 'Input with dropdown Outside',
                component: <InputDropdownOutside />,
                code: `
<div className='w-full'>
    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
        Price
    </label>
    <div className='relative'>
        <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md outline-none border-0 py-2 pl-20 pr-4 bg-slate-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
            placeholder="0.00"
        />
        <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
                Currency
            </label>
            <select
                id="currency"
                name="currency"
                className="h-full rounded-md border-0 bg-transparent py-0 px-2 text-gray-500 sm:text-sm"
            >
                {
                    currency.map((item,id) =>(
                        <option key={id}>{item.name}</option>
                    ))
                }
            </select>
        </div>
    </div>
</div>
`,
            },
            {
                name: 'Input with dropdown',
                component: <InputDropdown />,
                code: `
<div className='w-full'>
    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
        Price
    </label>
    <div className='relative'>
        <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md outline-none border-0 py-2 pl-20 pr-4 bg-slate-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
            placeholder="0.00"
        />
        <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
                Currency
            </label>
            <select
                id="currency"
                name="currency"
                className="h-full rounded-md border-0 bg-transparent py-0 px-2 text-gray-500 sm:text-sm"
            >
                {
                    currency.map((item,id) =>(
                        <option key={id}>{item.name}</option>
                    ))
                }
            </select>
        </div>
    </div>
</div>
`,
            },
            {
                name: 'Search with icon',
                component: <InputIcon />,
                code: `
<div className='w-full'>
    <label htmlFor="search" className="block w-full text-sm font-medium leading-6 text-gray-800 mb-1">
        Search
    </label
    <div className='relative'>
        <input
            type="search"
            name="search"
            id="search"
            className="block w-full rounded-md outline-none border-0 py-2 pl-10 pr-4 bg-slate-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
            placeholder="Search..."
        />
        <div className="absolute inset-y-0 left-2 flex items-center">
            <MagnifyingGlassIcon className='h-5 w-5 text-gray-500' />
        </div>
    </div>
</div>
`,
            },
            {
                name: 'Password',
                component: <InputPassword />,
                code: `
                <div className='w-full'>
                <label htmlFor="password" className="block w-full text-sm font-medium leading-6 text-gray-800 mb-1">
                    Password
                </label>
    
                <div>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="block w-full rounded-md outline-none border-0 py-2 px-4 bg-slate-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        placeholder="Password"
                    />
                </div>
            </div>
`,
            },
            {
                name: 'URL',
                component: <InputUrl />,
                code: `
<div className='w-full'>
    <label htmlFor="url" className="block w-full text-sm font-medium leading-6 text-gray-800 mb-1">
        URL
    </label>
    <div className='flex'>
    <div className="w-fit px-3 rounded-l-md flex items-center border border-r-transparent border-gray-300 bg-gray-100">
            <label className='text-gray-800'>http://</label>
        </div>
        <input
            type="url"
            name="url"
            id="url"
            className="block w-full rounded-r-md outline-none border-0 py-2 pl-4 pr-4 bg-slate-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
            placeholder="yoursite.com"
        />
    </div>
</div>
`,
            },
            {
                name: 'Input Multi select',
                component: <InputMultiSelect />,
                code: `
import { popUpCloser } from '@/app/components/useCase/PopUpCloser';
import React, { useState, useRef, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const team = [
    { empID: 1, value: 'Jane', label: 'Jane' },
    { empID: 2, value: 'Jason', label: 'Jason' },
    { empID: 3, value: 'Karen', label: 'Karen' },
];

function popUpCloser(ref, setIsSelectOpen) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsSelectOpen(false)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const InputMultiSelect = () => {
    const [selectedOptions, setSelectedOptions] = useState([{ empID: 4, value: 'Kaven', label: 'Kaven' },]);
    const [isSelectOpen, setIsSelectOpen] = useState(false)
    const [searchitem, setSearchitem] = useState('')
    const wrapperRef = useRef(null);

    popUpCloser(wrapperRef, setIsSelectOpen);

    const handleSelect = (item) => {
        setSelectedOptions(current => [item, ...current])
    }

    const handleSelectRemove = (memberID) => setSelectedOptions((current) =>
        current.filter((item) => item.empID !== memberID)
    );

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
                    className="flex w-full rounded-md outline-none border-0 h-full min-h-[40px] py-2 px-2 bg-slate-50 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"

                >
                    <div className='team_main w-full flex flex-wrap items-center gap-2'>
                        {
                            selectedOptions.map((item, id) => (
                                <span
                                    key={id}
                                    className='py-1 px-3 flex items-center gap-2 font-medium text-sm rounded-full border border-gray-300 hover:bg-red-100 hover:border-red-300 duration-200 text-gray-800 cursor-default'
                                    onClick={() => handleSelectRemove(item.empID)}
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
                            onChange={(e) => setSearchitem(e.target.value)}
                            onClick={() => setIsSelectOpen(true)}
                        />
                    </div>
                </div>
                <div className='relative w-full h-full'>
                    {isSelectOpen &&
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
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default InputMultiSelect;      
`,
            },
            {
                name: 'Toggle Switch',
                component: <ToggleSwitch />,
                code: ``,
            },
            {
                name: 'Toggle With Label',
                component: <ToggleWithLabel />,
                code: ``,
            },
        ]
    }
];