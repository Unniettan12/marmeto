import Tweet from "./Tweet"
import tweetData from "./../tweetData.json"
import { useState } from "react";
import PageNav from "./PageNav";
import { useParams,useNavigate } from "react-router-dom";



const Page = () => {

const {id} = useParams();
console.log(id)
const navigate = useNavigate()

const handlePage = (value) => {
      navigate('/'+value)
    }

const dataRange = tweetData.slice((id-1)*10,id*10)

const [likes,setLikes] = useState([])

    return (
        <div className=" flex flex-col min-h-screen h-full w-full items-center justify-center bg-black font-roboto md:font-sans">
        {
      dataRange.map((tweet) => {
        return(
          <div className=" text-white text-md md:text-lg w-full md:w-[50%] pl-4 pr-4 border border-[#1D2022]">
            <Tweet tweetData={tweet} likes={likes} setLikes = {setLikes}/>
          </div>
        )
      })
    }

        <PageNav handlePage = {handlePage} />
        </div>
    )

}

export default Page