import React from 'react'

export function Hero() {
    return (
        <div className="hero_section min-h-screen w-full h-full">
            <div className="mx-auto w-full py-32">
                <div className="relative isolate overflow-hidden px-6 pt-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:text-left">
                        <h2 className="text-3xl font-medium text-gray-800 sm:text-5xl">
                            <span className='text-gray-500'>Fully customizable</span>
                            <br />
                            Start using our app today.
                        </h2>
                        <p className="mt-6 font-medium text-xl leading-8 text-gray-800">
                            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
                        </p>

                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <button className='py-3 px-6 rounded-md bg-gray-800 text-slate-50 hover:bg-gray-800/80 duration-200'>Go to docs →</button>
                            <button className='py-3 px-6 rounded-md border border-gray-400 text-gray-800 hover:bg-gray-800 hover:text-slate-50 duration-200'>Learn More</button>
                        </div>


                    </div>

                    <div className="relative mt-16 h-80 lg:mt-8">
                        <img
                            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                            alt="App screenshot"
                            width={1824}
                            height={1080}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
