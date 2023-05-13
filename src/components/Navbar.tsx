import { useState } from 'react'
import { avatar, basket, logo, menu, close } from '../assets'
import { navItems } from '../data'
function Navbar() {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)
    return (
        <header className='flex justify-between border-b py-5 lg:py-0'>
            <div className='flex gap-8 flex-row items-center'>
                <div className='flex flex-row gap-2 items-center'>
                    <img onClick={toggle} src={menu} alt="menu" className='block lg:hidden' />
                    <img src={logo} alt="logo" className='' />
                </div>
                <nav className="hidden lg:flex gap-8 flex-row ">
                    {navItems.map((item, i) => (
                        <a className='py-10 text-dark-grayish-blue font-medium hover:border-b-4 border-b-4 border-b-transparent hover:border-orange-color' key={i} href="">{item}</a>
                    ))}
                </nav>
            </div>
            {open && (
                <div className='lg:hidden duration-300 flex absolute top-0 left-0 w-full h-screen bg-black-opac bg-opacity-[75%]'>
                    <div className='bg-white w-[70%] flex flex-col gap-10 h-screen px-8 py-6'>
                        <img onClick={toggle} src={close} className='h-8 w-8' alt="" />
                        <div className='flex flex-col gap-8'>
                            {navItems.map((item, i) => (
                                <a className='text-black text-xl font-medium' key={i} href="">{item}</a>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className='flex flex-row gap-6 lg:gap-8 items-center'>
                <img src={basket} alt="basket" />
                <img src={avatar} className='w-12 h-12' alt="avatar" />
            </div>
        </header>
    )
}

export default Navbar
