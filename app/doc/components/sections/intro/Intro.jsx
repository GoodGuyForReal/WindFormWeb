import React from 'react'

const Intro = () => {
    return (
        <div className='Intro w-full flex flex-col items-start gap-5'>

            <div className='intro flex flex-col gap-5'>
                <div className='intro_header'>
                    <h1 className='text-5xl font-bold mb-4'>Introduction</h1>
                    <p className='text-light-secondary text-lg'>This is a re-usable and costimazible components based on forms. Built with Tailwind CSS.</p>
                </div>
                <hr className='border-light-secondary' />
                <div className='intro_main'>
                    <p className='leading-[160%] text-lg'>
                        This is a collection of reusable components that are not meant to be installed as a dependency or distributed through npm, so it is not considered a component library in the traditional sense.
                        <br />
                        <br />
                        You can choose the specific components that you need and copy and paste their code into your own projects, then make any necessary customizations to fit your requirements.
                        <br />
                        <br />
                        This means you have full control over the code and can use it as a reference to build your own component library.
                    </p>
                </div>
            </div>

            <button className='text-white border rounded-md border-light-secondary py-2 px-6 hover:bg-light-lightbg hover:text-dark-secondary duration-200 font-medium'>How to use</button>

        </div>
    )
}

export default Intro