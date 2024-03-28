import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./button";
import Gambar1 from "../img/gambar1.png"

function SliderHero() {
    var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false
    };
    return (
        <div className="slider-container overflow-hidden">
        <Slider {...settings}>
            {/* 1 */}
            <div className="inline-block md:!flex gap-4 bg-silverbg py-4 px-4 md:px-10 lg:px-24 md:h-screen">
                {/* box1 */}
                <div className="w-full md:w-1/2 flex-col my-5 md:my-[105px] xl:mb-40 xl:mt-52">
                    <h1 className="text-[40px] md:text-[55px] mb-4 leading-tight text-blacktxt">Lessons and insights <span className="text-primary">from 8 years</span></h1>
                    <p className="text-[18px] md:text-[20px] mb-4 text-blacktxt">Where to grow your business as a photographer: site or social media?</p>
                    <div>
                        {/* button */}
                        <Button title={"Register"} icon={''} style={'bg-primary p-1 md:p-2 rounded-md text-white text-center w-24 transition-all ease-in-out duration-300 hover:scale-95'}/>
                    </div>
                </div>
                {/* box2 */}
                <div className="w-full md:w-1/2 my-5 md:my-24 xl:my-40">
                    <div className="flex justify-center md:justify-end items-center"> 
                        <img src={Gambar1} alt="" className="w-[350px] h-[350px]"/>    
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className="inline-block md:!flex gap-4 bg-silverbg py-4 px-4 md:px-10 lg:px-24 md:h-screen">
                {/* box1 */}
                <div className="w-full md:w-1/2 my-5 md:my-[105px] xl:mb-40 xl:mt-52 order-2">
                    <h1 className="text-[40px] md:text-[55px] mb-4 leading-tight text-blacktxt text-center md:text-end">Lessons and insights <span className="text-primary">from 8 years</span></h1>
                    <p className="text-[18px] md:text-[20px] mb-4 text-blacktxt text-center md:text-end">Where to grow your business as a photographer: site or social media?</p>
                    <div className="md:flex md:justify-end md:items-end flex items-center justify-center">
                        {/* button */}
                        <Button title={"Register"} icon={''} style={'bg-primary p-1 md:p-2 rounded-md text-white text-center w-24 transition-all ease-in-out duration-300 hover:scale-95'}/>
                    </div>
                </div>
                {/* box2 */}
                <div className="w-full md:w-1/2 my-5 md:my-24 xl:my-40 order-1">
                    <div className="flex justify-center md:justify-start items-center"> 
                        <img src={Gambar1} alt="" className="w-[350px] h-[350px]"/>    
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className="inline-block md:!flex gap-4 bg-silverbg py-4 px-4 md:px-10 lg:px-24 md:h-screen">
                {/* box1 */}
                <div className="w-full md:w-1/2 flex-col my-5 md:my-[105px] xl:mb-40 xl:mt-52">
                    <h1 className="text-[40px] md:text-[55px] mb-4 leading-tight text-blacktxt">Lessons and insights <span className="text-primary">from 8 years</span></h1>
                    <p className="text-[18px] md:text-[20px] mb-4 text-blacktxt">Where to grow your business as a photographer: site or social media?</p>
                    <div>
                        {/* button */}
                        <Button title={"Register"} icon={''} style={'bg-primary p-1 md:p-2 rounded-md text-white text-center w-24 transition-all ease-in-out duration-300 hover:scale-95'}/>
                    </div>
                </div>
                {/* box2 */}
                <div className="w-full md:w-1/2 my-5 md:my-24 xl:my-40">
                    <div className="flex justify-center md:justify-end items-center"> 
                        <img src={Gambar1} alt="" className="w-[350px] h-[350px]"/>    
                    </div>
                </div>
            </div>
        </Slider>
        </div>
    );
}

export default SliderHero;
