import DefaultInput from "./inputDefault/DefaultInput";
import InputDropdown from "./inputDropdown/InputDropdown";
import InputIcon from "./inputIcon/InputIcon";
import InputPassword from "./inputPassword/InputPassword";

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
                name: '*Search with icon',
                component: <InputIcon />,
                code: `
<div className='w-full'>
    <label htmlFor="email" className="block w-full text-sm font-medium leading-6 text-gray-800 mb-1">
        Email
    </label>
    <div>
        <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md outline-none border-0 py-2 px-4 bg-slate-50 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
            placeholder="Enter your email"
        />
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
        ]
    }
];