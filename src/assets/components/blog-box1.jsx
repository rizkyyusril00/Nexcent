import Gambar11 from '../img/gambar11.png'
import Button from "./button";


export default function BlogBox1(){
    return(
        <>
            <div className="inline md:flex gap-3 md:mt-2 xl:mt-0 overflow-hidden">
                {/* box1 */}
                <div className="w-full md:w-1/2" data-aos="fade-up" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-duration="700" data-aos-delay="100">
                    <div className=" h-full flex justify-center items-center"> 
                        <img src={Gambar11} alt="" className="w-[300px] md:w-[500px] h-[300px] md:h-[450px]"/>    
                    </div>
                </div>
                {/* box2 */}
                <div className='w-1/2 inline md:flex md:justify-center  md:flex-col mt-12' data-aos="fade-down" data-aos-offset="500" data-aos-easing="ease-in-sine" data-aos-duration="700">
                    <h2 className='text-[40px] md:text-[55px] mt-4 leading-tight text-blacktxt'>How to design your site footer like we did</h2>
                    <p className='text-[18px] md:text-[20px] my-4 text-blacktxt'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida</p>
                    <div className="!flex !items-start !justify-start">
                        <Button title={"Learn More"} icon={''} style={'bg-primary p-1 md:p-2 rounded-md text-white text-center w-24 transition-all ease-in-out duration-300 hover:scale-95'}/>
                    </div>
                </div>
            </div>
        </>
    )
}