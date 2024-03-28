
export default function Achivement({img, total, title}){
    return(
        <>
            <div className="hidden md:flex gap-4 md:w-[145px] md:h-[48px] xl:w-[188px] xl:h-[64px]">
                <div className='w-12 h-12 xl:w-16 xl:h-16 2xl:flex 2xl:gap-2'>
                    <img src={img} alt="" className='w-full h-full object-cover'/>
                    <div className='hidden 2xl:flex flex-col justify-center'>
                        <h2 className='text-[16px] xl:text-[20px]'>{total}</h2>
                        <p className='text-[12px] xl:text-[16px]'>{title}</p>
                    </div>   
                </div>
                <div className='md:flex 2xl:hidden flex-col justify-center'>
                    <h2 className='text-[16px] xl:text-[20px]'>{total}</h2>
                    <p className='text-[12px] xl:text-[16px]'>{title}</p>
                </div>
            </div>

            <div className="flex md:hidden items-center justify-center">
                <div className="w-[81px] h-[90px] ">
                    <div className="flex items-center justify-center flex-col">
                        <div className="w-12 h-12">
                            <img src={img} alt="" className='w-full h-full object-cover'/>
                        </div>
                        <div className="text-center">
                            <h2 className='text-[16px] xl:text-[20px]'>{total}</h2>
                            <p className='text-[12px] xl:text-[16px]'>{title}</p>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}