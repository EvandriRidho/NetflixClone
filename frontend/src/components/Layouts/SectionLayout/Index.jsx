import React from 'react'

const SectionLayout = ({ children }) => {
    return (
        <section className='bg-black relative w-full text-white'>
            <div className='grid sm:grid-cols-2 items-center justify-center p-8 gap-8 text-center sm:text-left'>
                {children}
            </div>
            <div className='bg-stone-900 w-full h-3 absolute top-0 left-0'></div>
        </section>
    )
}

export default SectionLayout