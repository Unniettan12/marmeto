import calcRange from "./calcRange"

const PageNav = ({handlePage,id}) => {
    const pages = calcRange()
    return(
    <div className="text-white py-4">
            {  
             pages.map((page,index) =>{
                console.log(index+1,parseInt(id))
                if(index+1===parseInt(id))
                return(
                    <button 
                    disabled
                    className="bg-black px-2 mx-1 border border-slate-700 rounded-sm"
                    key={index}
                    onClick={()=>handlePage(page)}>{page}</button>
                )
                else
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