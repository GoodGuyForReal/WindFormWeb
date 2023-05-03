import React from 'react'

const Intro = () => {
    return (
        <div className='Intro w-full'>
            <div className='intro_header'>
                <h1 className='text-4xl font-bold'>Introduction</h1>
                <p>Re-usable components built using Radix UI and Tailwind CSS.</p>
            </div>
            <hr />
            <div className='intro_main h-[3000px]'>
                <p>
                    This is NOT a component library. It's a collection of re-usable components that you can copy and paste into your apps.

                    What do you mean by not a component library?

                    I mean you do not install it as a dependency. It is not available or distributed via npm. I have no plans to publish it as an npm package (for now).

                    Pick the components you need. Copy and paste the code into your project and customize to your needs. The code is yours.

                    Use this as a reference to build your own component libraries.
                </p>
            </div>
        </div>
    )
}

export default Intro