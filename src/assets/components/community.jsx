import Achivement from "./achivementCommunity";
import Gambar13 from '../img/gambar13.png'
import Gambar14 from '../img/gambar14.png'
import Gambar15 from '../img/gambar15.png'
import Gambar16 from '../img/gambar16.png'


export default function Community(){
    return(
        <>
            <section id="community">
                <div className="community">
                    <div className="mx-auto">
                        <div className="community-box bg-silverbg my-10 px-4 md:px-10 lg:px-24">
                            <div className="inline md:flex gap-4 p-5 xl:p-24 2xl:p-10">
                                {/* box1 */}
                                <div className="w-full md:w-1/2 flex items-center justify-center text-center md:text-start mb-6 md:mb-0" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                                    <h2 className="text-[40px] md:text-[55px] leading-tight text-blacktxt">Helping a local <span className="text-primary">business reinvent itself</span></h2>
                                </div>
                                {/* box2 */}
                                <div className="w-full md:w-1/2 flex flex-col gap-10 justify-center items-center" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                                    {/* 1 */}
                                    <div className="flex justify-center items-center gap-12 md:gap-5 xl:gap-8 2xl:gap-14">
                                        <Achivement img={Gambar13} total={'2,245,341'} title={'Members'}/>
                                        <Achivement img={Gambar14} total={'46,328'} title={'Clubs'}/>
                                    </div>
                                    {/* 2 */}
                                    <div className="flex justify-center items-center gap-12 md:gap-5 xl:gap-10 2xl:gap-14">
                                        <Achivement img={Gambar15} total={'828,867'} title={'Event Bookings'}/>
                                        <Achivement img={Gambar16} total={'1,926,436'} title={'Payments'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="blog" className="flex invisible mb-0 md:mb-12">s</div>
            </section>
        </>
    )
}