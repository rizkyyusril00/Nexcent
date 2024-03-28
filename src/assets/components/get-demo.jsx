import Button from './button'


export default function Getdemo(){
    return(
        <>
            <section>
                <div className="getdemo w">
                    <div className="mx-auto">
                        <div className="getdemo-box bg-silverbg px-4 md:px-10 lg:px-24">
                            <div className='flex flex-col justify-center items-center md:p-10 xl:p-[86px] text-center'>
                                <h2 className='my-5 text-blacktxt text-[40px] md:text-[50px] font-bold'>Pellentesque suscipit fringilla libero eu.</h2>
                                <Button title={"Get A Demo"} icon={'bi bi-arrow-right ml-2'} style={'bg-primary p-1 md:p-2 rounded-md text-white w-1/2 md:w-[114px] text-center text-[16px] transition-all ease-in-out duration-300 hover:scale-95'}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}