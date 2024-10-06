import React, { useState } from 'react'
import clsx from 'clsx'

const Faqitems = ({ key, faq, index }) => {
    const [activeId, setactiveId] = useState(null)
    const active = activeId === faq.id
    return (
        <div className='realtive z-2 mb-16'>
            <div className='group relative  flex cursor-pointer items-center justify-between gap-10 px-7' onClick={() => {
                setactiveId(activeId === faq.id ? null : faq.id)
            }} >
                <div className='flex-1'>
                    <div className='small-compact mb-1.5 text-p3 max-lg:hidden'>
                        {index < 10 ? "0" : ""}{index}
                    </div>
                    <div className={clsx('h6 text-p4  transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center', active && '  max-lg:text-p1')
                    }>
                        {
                            faq.question
                        }
                    </div>
                </div>
                <div className={clsx('faq-icon flex relative size-12 items-center justify-center  rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4', active && 'after:rotate-0 before:bg-p1 after:bg-p1')}>
                    <div className='g4  size-11/12 rounded-full shadow-300' />

                </div>

            </div>
        </div>
    )
}

export default Faqitems
