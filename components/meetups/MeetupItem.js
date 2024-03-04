
import Link from "next/link";

import MeetupItemDetails from "./MeetupItemDetails";


const MeetupItem = ({props}) =>{

    return(
        <div className="flex   justify-center items-center h-auto w-auto text-slate-400">
            <div className=" flex  flex-col items-center justify-center bg-slate-800  w-1/2 m-10 p-10">
            <img src={props.image} alt="image" width={500} height={500}/>
               <div className="my-5">{props.title}</div>
               <Link href={`meetups/${props.id}`}>
                <div className=" px-3 py-1 my-2 border-2 bg-gray-600">Details</div>
               </Link>
               </div>
               
        </div>
    )
}

export default MeetupItem;