import calcRange from "./calcRange"

const PageNav = ({handlePage}) => {
    const pages = calcRange()
    return(
    <div className="text-white py-4">
            {  
             pages.map((page,index) =>{
                return(
                    <button 
                    className="bg-[#1D9BF0] px-2 mx-1 border border-none rounded-sm"
                    key={index}
                    onClick={()=>handlePage(page)}>{page}</button>
                )
             })
            }
        </div>
    )

}

export default PageNav