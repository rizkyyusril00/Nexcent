import Gambar2 from '../img/gambar2.png'
import Gambar3 from '../img/gambar3.png'
import Gambar4 from '../img/gambar4.png'
import Gambar5 from '../img/gambar5.png'
import Gambar6 from '../img/gambar6.png'
import Gambar7 from '../img/gambar7.png'

export default function Iconclients(){
    return(
        <>  
            <div className='hidden items-start justify-center md:justify-between my-10 flex-wrap gap-3 md:flex overflow-hidden'>
                <img src={Gambar2} alt="" className='w-[50px] h-[50px]' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="500"/>
                <img src={Gambar3} alt="" className='w-[50px] h-[50px]' data-aos="fade-down" data-aos-delay="100" data-aos-duration="400" data-aos-easing="linear"/>
                <img src={Gambar4} alt="" className='w-[50px] h-[50px]' data-aos="fade-down" data-aos-delay="100" data-aos-duration="400" data-aos-easing="linear"/>
                <img src={Gambar5} alt="" className='w-[50px] h-[50px]' data-aos="fade-down" data-aos-delay="100" data-aos-duration="400" data-aos-easing="linear"/>
                <img src={Gambar6} alt="" className='w-[50px] h-[50px]' data-aos="fade-down" data-aos-delay="100" data-aos-duration="400" data-aos-easing="linear"/>
                <img src={Gambar7} alt="" className='w-[50px] h-[50px]' data-aos="fade-down" data-aos-delay="100" data-aos-duration="400" data-aos-easing="linear"/>
                <img src={Gambar2} alt="" className='w-[50px] h-[50px]' data-aos="fade-down" data-aos-delay="100" data-aos-duration="400" data-aos-easing="linear"/>
                <img src={Gambar4} alt="" className='w-[50px] h-[50px]' data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="500"/>
            </div>

            {/* mobile */}
            <div className='flex items-start justify-center md:justify-between my-10 flex-wrap gap-3 md:hidden'>
                <img src={Gambar2} alt="" className='w-[50px] h-[50px]' data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="400"/>
                <img src={Gambar3} alt="" className='w-[50px] h-[50px]' data-aos="fade-down" data-aos-delay="100" data-aos-duration="400" data-aos-easing="linear"/>
                <img src={Gambar4} alt="" className='w-[50px] h-[50px]' data-aos="fade-down" data-aos-delay="100" data-aos-duration="400" data-aos-easing="linear"/>
                <img src={Gambar5} alt="" className='w-[50px] h-[50px]' data-aos="fade-down" data-aos-delay="100" data-aos-duration="400" data-aos-easing="linear"/>
                <img src={Gambar6} alt="" className='w-[50px] h-[50px]' data-aos="fade-up" data-aos-delay="100" data-aos-duration="400" data-aos-easing="linear"/>
                <img src={Gambar7} alt="" className='w-[50px] h-[50px]' data-aos="fade-up" data-aos-delay="100" data-aos-duration="400" data-aos-easing="linear"/>
                <img src={Gambar2} alt="" className='w-[50px] h-[50px]' data-aos="fade-up" data-aos-delay="100" data-aos-duration="400" data-aos-easing="linear"/>
                <img src={Gambar4} alt="" className='w-[50px] h-[50px]' data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="400"/>
            </div>
        </>
    )
}