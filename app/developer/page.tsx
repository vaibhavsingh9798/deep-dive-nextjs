import "@/app/globals.css";
import developerList from "../lib/placeholder-data";
import Link from "next/link";

export default function Developer(){

    return(
        <div className=" flex justify-center  bg-slate-600">
          
             <ul>
             <div className=" flex   justify-center flex-col">
             <h1 className=" font-semibold text-2xl my-10">Developer list</h1>
                {developerList.map((devleoper)=>{
                    return(
                            
                            <li key={devleoper.id}>
                                <Link href={`developer/${devleoper.id}`}>
                                <div className="flex my-5">
                                <div className=" font-medium ">{devleoper.name}</div>
                                <div className=" font-medium ml-4">{devleoper.role}</div>
                                </div>
                                </Link>
                            </li>
                         
                    )
                })}
                   </div>
             </ul>
        </div>
    )
}