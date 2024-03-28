

export default function Button({title, icon, style}){
    return(
        <>
            <div className={style}>
                <a href="" className='text-[14px]'>{title}<i className={icon}></i></a>
            </div>
        </>
    )
}