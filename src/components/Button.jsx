import React from 'react'
import clsx from 'clsx'
import { Marker } from './Marker'

const Button = ({ icon, children, href, containerClassName, onClick, markerFill }) => {
    const Inner = () => (
        <>
            <span className='relative flex  items-center min-h-[60px] rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden px-4 g4'>
                <span className='absolute -left-[-1px]' >
                    <Marker markerFill={markerFill} />
                </span>
                {icon && (
                    <img src={icon} alt="" className='size-10  mr-5 object-contain z-10' />
                )}
                <span className='relative z-2 font-poppins base-bold  test-p1 uppercase'>{children}</span>
            </span>
            <span className='glow-before  glow-after' />

        </>
    )
    return href ? (
        <a href={href} className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group', containerClassName)}><Inner /></a>
    ) :
        (
            <button className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group ', containerClassName)} onClick={onClick}><Inner /></button >
        )
}

export default Button
