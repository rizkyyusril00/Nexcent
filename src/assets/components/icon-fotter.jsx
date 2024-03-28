

export default function IconFooter({img}){
    return(
        <>
            <div className=" flex gap-4">
                <div className="flex justify-center items-center bg-Lgrey bg-opacity-15 w-10 h-10 rounded-[50%] transition-all ease-in-out duration-300 hover:scale-105">
                    <img src={img} alt="" className="w-4 h-4 object-cover"/>
                </div>
            </div>
        </>
    )
}