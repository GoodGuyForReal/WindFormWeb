import DefaultInput from "./inputDefault/DefaultInput";
import InputDropdown from "./inputDropdown/InputDropdown";
import InputIcon from "./inputIcon/InputIcon";
import InputMultiSelect from "./inputMultiSelect/InputMultiSelect";
import InputNumber from "./inputNumber/InputNumber";
import InputPassword from "./inputPassword/InputPassword";
import InputUrl from "./inputUrl/InputUrl";

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
                name: 'Number',
                component: <InputNumber />,
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
                name: 'Input Multi select',
                component: <InputMultiSelect />,
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
        ]
    }
];