import Logo from '../img/Logo.png'
import Button from './button'



export default function Navbar({openMenu, setOpenMenu}) {
    return(
        <>
            <div className="navbar">
                <div className="mx-auto relative">
                    <div className={`md:hidden bg-gradient-to-l from-white to-abumuda absolute w-full transition-all ease-in-out duration-500 ${openMenu ? 'left-0 top-14 z-20' : 'left-[-700px] top-14 z-20'} `}>
                    <div className="my-2">
                        <ul className='flex flex-col gap-2 justify-center items-center'>
                            <li className="hover:bg-primary w-full text-center text-blacktxt hover:text-white py-1" ><a href="#home" onClick={() => setOpenMenu(!openMenu)} className={`hamburger hamburger--elastic flex justify-center items-center md:hidden ${openMenu ? 'is-active' : ''}`}>Home</a></li>
                            <li className="hover:bg-primary w-full text-center text-blacktxt hover:text-white py-1"><a href="#features" onClick={() => setOpenMenu(!openMenu)} className={`hamburger hamburger--elastic flex justify-center items-center md:hidden ${openMenu ? 'is-active' : ''}`}>Features</a></li>
                            <li className="hover:bg-primary w-full text-center text-blacktxt hover:text-white py-1"><a href="#community" onClick={() => setOpenMenu(!openMenu)} className={`hamburger hamburger--elastic flex justify-center items-center md:hidden ${openMenu ? 'is-active' : ''}`}>Community</a></li>
                            <li className="hover:bg-primary w-full text-center text-blacktxt hover:text-white py-1"><a href="#blog" onClick={() => setOpenMenu(!openMenu)} className={`hamburger hamburger--elastic flex justify-center items-center md:hidden ${openMenu ? 'is-active' : ''}`}>Blog</a></li>
                            <li className="hover:bg-primary w-full text-center text-blacktxt hover:text-white py-1"><a href="#pricing" onClick={() => setOpenMenu(!openMenu)} className={`hamburger hamburger--elastic flex justify-center items-center md:hidden ${openMenu ? 'is-active' : ''}`}>Pricing</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="navbar-box md:fixed z-10 bg-silverbg bg-opacity-20 flex justify-between px-4 md:px-10 lg:px-24 py-4 w-full overflow-visible backdrop-filter backdrop-blur-sm">
                        {/* logo */}
                        <div className="logo flex justify-center items-center">
                            <img src={Logo} alt="" />
                        </div>
                        {/* menu */}
                        <div className='flex justify-center items-center md:gap-4 gap-2'>
                            <ul className='hidden gap-4 md:flex'>
                                <li><a href="#home" className='text-blacktxt hover:text-primary underline-grow transition-all ease-linear duration-300'>Home</a></li>
                                <li><a href="#features" className="text-blacktxt hover:text-primary underline-grow transition-all ease-linear duration-300">Features</a></li>
                                <li><a href="#community" className='text-blacktxt hover:text-primary underline-grow transition-all ease-linear duration-300'>Community</a></li>
                                <li><a href="#blog" className='text-blacktxt hover:text-primary underline-grow transition-all ease-linear duration-300'>Blog</a></li>
                                <li><a href="#pricing" className='text-blacktxt hover:text-primary underline-grow transition-all ease-linear duration-300'>Pricing</a></li>
                            </ul>
                            {/* button register */}
                            <Button title={"Register Now"} icon={'bi bi-arrow-right text-white ml-2 md:inline-block hidden'} style={'bg-gradient-to-l from-primary to-grad_primary p-1 md:p-2 rounded-md text-white text-center transition-all ease-in-out duration-300 hover:scale-95'}/>
                            {/* hamburger */}
                                <button id='burger' onClick={() => setOpenMenu(!openMenu)} className={`hamburger hamburger--elastic flex justify-center items-center md:hidden ${openMenu ? 'is-active' : ''}`} type="button">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}