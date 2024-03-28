import Logo2 from '../img/Logo2.png'
import Gambar21 from '../img/gambar21.png'
import Gambar22 from '../img/gambar22.png'
import Gambar23 from '../img/gambar23.png'
import Gambar24 from '../img/gambar24.png'
import FooterList from './footer-list'
import IconFooter from './icon-fotter'

export default function Footer() {
    return(
        <>
            <section className='mt-5 md:mt-0'>
                <div className="footer">
                    <div className="mx-auto">
                        <div className="footer-box bg-blacktxt py-10 px-4 md:px-10 lg:px-24">
                            {/* md & more */}
                            <div className='md:inline hidden' >
                                <div className='hidden xl:flex xl:justify-between gap-8'>
                                    {/* box 1 */}
                                    <div className="w-full xl:w-2/5 xl:flex xl:flex-col gap-4">
                                        {/* logo */}
                                        <div className='flex flex-col items-center xl:inline-block text-center relative'>
                                            <img src={Logo2} alt="" className='hidden xl:flex'/>
                                            <div className='mb-10 xl:hidden'></div>
                                        </div>
                                        {/* text */}
                                        <div className='text-white hidden xl:flex flex-col gap-2 text-[18px]'>
                                            <h2>Copyright © 2020 Landify UI Kit.</h2>
                                            <h2>All rights reserved</h2>
                                        </div>
                                        {/* icon */}
                                        <div className='xl:flex gap-4 my-4 justify-center items-center xl:justify-start hidden'>
                                            <IconFooter img={Gambar21}/>
                                            <IconFooter img={Gambar22}/>
                                            <IconFooter img={Gambar23}/>
                                            <IconFooter img={Gambar24}/>
                                        </div>
                                    </div>
                                    {/* box 2 */}
                                    <div className="w-full xl:w-3/5 xl:flex justify-around gap-6">
                                        <div className='hidden xl:flex'>
                                            <FooterList title={"Company"} list1={"About us"} list2={"Blog"} list3={"Contact Us"} list4={"Pricing"} list5={"Testimonials"}/>
                                        </div>
                                        <div className='hidden xl:flex'>
                                            <FooterList title={"Support"} list1={"Help center"} list2={"Terms of service"} list3={"Legal"} list4={"Privacy policy"} list5={"Status"}/>
                                        </div>
                                        <div className="text-white text-center xl:text-start text-[22px]">
                                            <h2 className='hidden xl:flex'>Stay up to date</h2>
                                            <div className="my-4 relative flex items-center justify-center">
                                                <input type="text" placeholder="Your Email Address" className="py-2 pr-10 px-2 rounded-md text-white w-full bg-Lgrey bg-opacity-60 hidden xl:flex" />
                                                <i className="bi bi-send absolute top-0 right-0 mt-2 mr-2 xl:inline-block hidden"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* mobile */}
                            <div className='inline xl:hidden'>
                                <div className='flex flex-col items-center gap-3 justify-center'>
                                    <img src={Logo2} alt="" className='mr-5'/>
                                    <div className='text-white text-center flex-col gap-2 text-[18px] ml-1'>
                                        <h2>Copyright © 2020 Landify UI Kit.</h2>
                                        <h2>All rights reserved</h2>
                                        <div className='flex gap-4 my-4 justify-center items-center xl:justify-start'>
                                            <IconFooter img={Gambar21}/>
                                            <IconFooter img={Gambar22}/>
                                            <IconFooter img={Gambar23}/>
                                            <IconFooter img={Gambar24}/>
                                        </div>
                                        <div className='text-white text-center xl:text-start text-[22px]'>
                                            <h2 className='my-2'>Stay up to date</h2>
                                            <div className="relative">
                                                <input type="text" placeholder="Your Email Address" className="text-white bg-Lgrey bg-opacity-60 py-2 px-4 w-full pr-10 rounded-md text-center focus:text-start" />
                                                <p><i className="bi bi-send text-white absolute top-0 right-0 mt-2 mr-3"></i></p>
                                            </div>
                                            <div className='mt-4 text-center text-[11px]'>
                                                    <ul className="text-white flex justify-center gap-4">
                                                        <li><a href="" className='hover:text-primary'>Abbout Us</a></li>
                                                        <li><a href="" className='hover:text-primary'>Blog</a></li>
                                                        <li><a href="" className='hover:text-primary'>Contact Us</a></li>
                                                        <li><a href="" className='hover:text-primary'>Pricing</a></li>
                                                        <li><a href="" className='hover:text-primary'>Testimonials</a></li>
                                                    </ul>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}