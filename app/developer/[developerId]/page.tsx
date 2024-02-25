import devList from "../../lib/placeholder-data"
import { Developer } from "@/app/lib/definitions";
import NotFound from "../not-found"

export default function ProfileDetails({params} : {params:{developerId: Number}}){
    let devId = params.developerId;
    let listLength : Number = devList.length;
    let valid : Boolean = devId < listLength
      

    let developer : Developer= devList.filter((dev) => dev.id == devId)[0]
    return(
        <>
     
     { valid ? <div className=" flex justify-center m-10 font-medium "> 
           {developer.name} is a {developer.role}
        </div>  : <NotFound/> }
        </> 
    )
}