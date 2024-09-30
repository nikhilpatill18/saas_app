import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { Link as Ls } from 'react-scroll'


const Header = () => {
    const [hasScroll, sethasScroll] = useState(false)
    const [isOpen, setisOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            sethasScroll(window.scrollY > 32)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)

        }

    }, [])
    const NavLink = ({ title }) => (

        <Ls to={title} offset={-100} spy smooth activeClass='nav-active' className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4  max-lg:h5" onClick={() => setisOpen(false)}>
            {title}

        </Ls>
    )
    return (
        <header className={clsx('fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4', hasScroll && 'py-2 bg-black-100 backdrop-blur-[8px]')}>
            <div className='container flex h-14 items-center max-lg:px-5'>
                <a className='lg:hidden flex-1 cursor-pointer z-2'>
                    <img src="/images/xora.svg" alt="logo" width={155} height={55} />
                </a>
                <div className={clsx('w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0', isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none")}>
                    <div className=' max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4'>
                        <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
                            <ul className='flex max-lg:block max-lg:px-12'>
                                <li className='nav-li'>
                                    <NavLink title="features" />
                                    <div className='dot'></div>
                                    <NavLink title="pricing" />
                                </li>
                                <li className='nav-logo'>
                                    <Ls
                                        to="hero"
                                        offset={-100} spy="true" smooth="true" className={clsx("max-lg:hidden transition-transform duration-200 cursor-pointer")}
                                    >
                                        <img src="/images/xora.svg" alt="" />
                                    </Ls>
                                </li>
                                <li className='nav-li'>
                                    <NavLink title="faq" />
                                    <div className='dot'></div>
                                    <NavLink title="downlaod" />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <button className='lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full  flex justify-center items-center' onClick={() => setisOpen((prev) => !prev)}>
                    <img src={`/images/${isOpen ? "close" : "magic"}.svg `} alt="magic size-1/2 object-contain" /></button>
            </div>
        </header >
    )
}

export default Header
