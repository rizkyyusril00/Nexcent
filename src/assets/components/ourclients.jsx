import CardOurclients from "./cardOurclients";
import Iconclients from "./iconclients";
import Gambar8 from '../img/gambar8.png'
import Gambar9 from '../img/gambar9.png'
import Gambar10 from '../img/gambar10.png'
import Gambar12 from '../img/gambar12.png'
import Button from "./button";

export default function Ourclients(){
    return(
        <>
            <section>
                <div className="ourclients">
                    <div className="mx-auto">
                        <div className="ourclients-box px-4 md:px-10 lg:px-24">
                                <div className="text-center">
                                    <h2 className="my-3 text-blacktxt text-[30px] font-bold" data-aos="fade-down" data-aos-delay="100" data-aos-duration="400" data-aos-easing="linear">Our Clients</h2>
                                    <p className='text-blacktxt text-[16px]'>We have been working with some Fortune 500+ clients</p>
                                </div>
                                <Iconclients />
                                <div className="text-center my-10">
                                    <h2 className="my-3 text-blacktxt text-[30px] font-bold"  data-aos="fade-down" data-aos-delay="350" data-aos-duration="400" data-aos-easing="linear">Manage your entire community in a single system</h2>
                                    <p className='text-blacktxt text-[16px]'>Who is Nextcent suitable for?</p>
                                </div>
                                <div className="inline md:flex gap-4 justify-evenly">
                                    <CardOurclients img={Gambar8} title={'Membership Organisations'} delay={"300"}/>
                                    <CardOurclients img={Gambar9} title={'National Associations'} delay={"400"}/>
                                    <CardOurclients img={Gambar10} title={'Clubs And Groups'} delay={"500"}/>
                                </div>
                                <div className="inline md:flex gap-3 md:mt-2 xl:mt-0">
                                    {/* box1 */}
                                    <div className="w-full md:w-1/2">
                                        <div className=" h-full flex justify-center items-center" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000"> 
                                            <img src={Gambar12} alt="" className="w-[300px] md:w-[500px] h-[300px] md:h-[450px]"/>    
                                        </div>
                                    </div>
                                    {/* box2 */}
                                    <div className='w-1/2 inline md:flex md:justify-center  md:flex-col mt-12' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                                        <h2 className='text-[40px] md:text-[55px] leading-tight text-blacktxt'>The unseen of spending three years at Pixelgrade</h2>
                                        <p className='text-[18px] md:text-[20px] my-4 text-blacktxt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quod a deleniti minima temporibus! Nihil, voluptas dolores quidem ad modi autem maxime, repellat ratione dolorum sequi optio totam, a animi et blanditiis consectetur quia iusto tempora eius voluptatum impedit. Officia aliquid error impedit perferendis consequatur ut cumque dolore dignissimos voluptatum.</p>
                                        <div className="!flex !items-start !justify-start">
                                            <Button title={"Learn More"} icon={''} style={'bg-primary p-1 md:p-2 rounded-md text-white text-center w-24 transition-all ease-in-out duration-300 hover:scale-95'}/>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div id="community" className="flex invisible mb-0 md:mb-20">s</div>
            </section>
        </>
    )
}