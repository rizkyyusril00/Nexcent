import PricingImage from "./pricing-image";
import Gambar17 from '../img/gambar17.jpg'
import Gambar19 from '../img/gambar19.jpg'
import Gambar20 from '../img/gambar20.jpg'



export default function Pricing(){
    return(
        <>
            <section>
                <div className="pricing">
                    <div className="mx-auto">
                        <div className="pricing-box px-4 md:px-10 lg:px-24">
                            <div className="text-center">
                                <h2 className="my-3 text-blacktxt text-[35px] font-bold">Caring is the new marketing</h2>
                                <p className='text-blacktxt text-[16px]'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See whos joining the community, read about how our community are increasing their membership income and lots more.</p>
                            </div>
                            <div className="inline md:flex gap-4 items-center justify-center my-4 flex-wrap">
                                <PricingImage img={Gambar17} title={"Creating Streamlined Safeguarding Processes with OneRen"} delay={"300"}/>
                                <PricingImage img={Gambar19} title={"What are your safeguarding responsibilities and how can you manage them?"} delay={"400"}/>
                                <PricingImage img={Gambar20} title={"Revamping the Membership Model with Triathlon Australia"} delay={"500"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}