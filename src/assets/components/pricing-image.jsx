import Button from "./button";

export default function PricingImage({img, title, delay}) {
    return(
        <>
            <div className="flex items-center justify-center gap-4 my-4 md:my-0 " data-aos="flip-down" data-aos-delay={delay} data-aos-duration="1000" data-aos-easing="ease-out-cubic">
                <div className='w-[256px] h-[256px] rounded-md relative flex items-center justify-center'>
                    <img src={img} alt="" className='w-full h-3/4 object-cover rounded-md absolute top-0'/>
                    <div className='text-center absolute bottom-1 shadow-sm shadow-black bg-white w-3/4 rounded-md p-2 transition-all ease-in-out duration-300 hover:scale-105'>
                        <h2 className='text-blacktxt text-[16px] mb-2'>{title}</h2>
                        <div className='flex justify-center items-center'>
                        <Button title={"Read More"} icon={'bi bi-arrow-right ml-2'} style={'p-1 md:p-2 rounded-[3px] text-primary text-center w-full'}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}