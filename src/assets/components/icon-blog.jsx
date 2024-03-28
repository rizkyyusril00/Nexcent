import Gambar3 from '../img/gambar3.png'
import Gambar4 from '../img/gambar4.png'
import Gambar5 from '../img/gambar5.png'
import Gambar6 from '../img/gambar6.png'
import Gambar7 from '../img/gambar7.png'
import Button from "./button";


export default function Iconblog(){
    return(
        <>  
            <div className='flex items-start justify-center md:justify-start my-5 flex-wrap gap-2 xl:gap-4 2xl:gap-10'>
                <img src={Gambar6} alt="" className='w-[50px] h-[50px]'/>
                <img src={Gambar4} alt="" className='w-[50px] h-[50px]'/>
                <img src={Gambar3} alt="" className='w-[50px] h-[50px]'/>
                <img src={Gambar5} alt="" className='w-[50px] h-[50px]'/>
                <img src={Gambar7} alt="" className='w-[50px] h-[50px]'/>
                <div>
                    {/* button */}
                    <Button title={"Meet all customers"} icon={'bi bi-arrow-right ml-2'} style={'p-1 md:p-2 rounded-[3px] text-primary text-center w-26 text-[16px] transition-all ease-in-out duration-300 hover:scale-95'}/>
                </div>                               
            </div>
        </>
    )
}