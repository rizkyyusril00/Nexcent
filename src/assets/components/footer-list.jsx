

export default function FooterList({title, list1, list2, list3, list4, list5}){
    return(
        <>
            <div className="flex flex-col gap-4">
                <h2 className="text-white text-[22px]">{title}</h2>
                <div>
                    <ul className="text-white">
                        <li><a href="" className="hover:text-primary">{list1}</a></li>
                        <li><a href="" className="hover:text-primary">{list2}</a></li>
                        <li><a href="" className="hover:text-primary">{list3}</a></li>
                        <li><a href="" className="hover:text-primary">{list4}</a></li>
                        <li><a href="" className="hover:text-primary">{list5}</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}