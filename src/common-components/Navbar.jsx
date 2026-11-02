import { Coffee, X, Menu, Phone } from 'lucide-react'
import { useState } from 'react'
import { BRAND, NAVBAR } from '../data/data'

const Navbar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false)
    const closeMenu = () => (
        setisMenuOpen(false)
    )
    return (
        <nav className='w-full bg-[#F8F0E3] px-5 md:px-10 py-5 lg:px-16'>
            <div className='max-w-7xl flex items-center mx-auto justify-between'>

                {/*logo brandname */}
                <a href="/" className='flex items-center gap-2'>
                    <Coffee size={28} className="text-[#3F634E]" />

                    <div>
                        <h2 className='text-xl md:text-2xl font-bold text-[#3F634E]'>{BRAND.name}</h2>
                        <p className='text-[10px] tracking-[3px] uppercase'>{BRAND.tagline}</p>
                    </div>
                </a>

                {/*Desktop Navigation */}
                <div className='hidden lg:flex items-center gap-8 justify-center'>
                    {NAVBAR.links.map((item) => (
                        <a key={item.id}
                            href={item.link}
                            className='text-[#292923] font-mono text-lg hover:text-[#60602c] hover:underline underline-offset-4 transition-colors duration-600 '>{item.name}</a>
                    ))}

                    <a href="#contact" className='hidden md:inline-block rounded-full bg-[#3F634E] text-white px-3 py-2 hover:bg-green-800'>
                        Book a Table
                    </a>
                    <a href="tel:+8383071661" className=' flex items-center justify-center gap-1 rounded-full bg-red-600 px-5 py-2 text-center text-white'>   <Phone size={15} /> Call Us</a>
                </div>

                {/*Mobile menu button */}
                <button onClick={() => setisMenuOpen(!isMenuOpen)}
                    className='lg:hidden text-[#3F634E]'
                    aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
                    aria-expanded={isMenuOpen} >

                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/*Mobile menu Navigation */}
            {isMenuOpen && (
                <div className='lg:hidden flex flex-col font-mono gap-5 mt-5 pt-5 border-t border-[#C2CDBC] '>
                    {NAVBAR.links.map((item) => (
                        <a key={item.id}
                            href={item.link}
                            onClick={closeMenu}
                            className='hover:bg-green-800 hover:p-1.5 hover:rounded-xl hover:text-white hover:text-center'
                        >
                            {item.name}
                        </a>
                    ))}

                    <button onClick={closeMenu} className='rounded-2xl text-white bg-[#3F634E] py-2 cursor-pointer hover:bg-green-800'>Book a Table</button>
                    <a href="tel:+8383071661" className='flex items-center justify-center gap-1 rounded-2xl bg-red-600 py-2 text-center text-white'><Phone size={15} />Call Us</a>
                </div>)}
        </nav>
    )
}

export default Navbar