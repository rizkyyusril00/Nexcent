
export default function CardOurclients({title, img, delay}){
    return(
        <>
            <div className='flex flex-col p-2 bg-slate-50 shadow-blacktxt items-center justify-center shadow-[10px_10px_5px_-10px] mb-2 md:mb-0' data-aos="flip-up" data-aos-delay={delay} data-aos-duration="1000" data-aos-easing="ease-out-cubic">
                {/* icon */}
                <div className="w-14 h-14 rounded-br-[50%] rounded-bl-md rounded-tl-[50%] rounded-tr-md flex justify-center items-center bg-primary transition-all ease-in-out duration-300 hover:scale-95">       
                    <img src={img} alt="" />
                </div>
                <div className='text-center'>
                    <h2 className='font-bold text-blacktxt text-[30px] leading-tight my-2'>{title}</h2>
                </div>
                <div className='text-center'>
                    <p className='text-[14px] text-blacktxt mb-2'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
        </>
    )
}