import Gambar18 from '../img/gambar18.svg'
import Iconblog from "./icon-blog";

export default function BlogBox2(){
    return(
        <>
            <div className="inline md:flex gap-3 md:mt-2 xl:mt-0 overflow-hidden">
                {/* box1 */}
                <div className="w-full md:w-1/2" data-aos="fade-up-right" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-duration="700">
                    <img src={Gambar18} alt="" className='w-[300px] md:w-full h-[300px] md:h-full'/>
                </div>
                {/* box2 */}
                <div className='w-1/2 inline md:flex md:justify-center  md:flex-col mt-5' data-aos="fade-up-left" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-duration="700">
                    <p className='text-[18px] md:text-[20px] mb-4 text-blacktxt'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida</p>
                    <div className='flex flex-col gap-1'>
                        <h2 className='text-primary text-[18px] md:text-[20px]'>Tim Smith</h2>
                        <p>British Dragon Boat Racing Association</p>
                    </div>              
                    {/* icon */}
                    <Iconblog />
                </div>
            </div>
        </>
    )
}
{/* <img src={Gambar17} alt="" className="w-[300px] md:w-full h-[300px] md:h-full"/>     */}
