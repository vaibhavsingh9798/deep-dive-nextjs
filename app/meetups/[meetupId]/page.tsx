
import MeetupItemDetails from "@/components/meetups/MeetupItemDetails"
import { redirect } from "next/navigation";

async function findItem(id:String){
    try{
     let response = await fetch(`http://localhost:3000/api/add-meetup/${id}`)
     let data = await response.json()
     return data;
    }catch(err){
        console.log(err)
    }
}
export default async function MeetupDetails({params}:{params:{meetupId:any}}){

    let id  = params.meetupId;
    const item = await findItem(id) || []
      console.log('item...',item)
    if(!item.length){
       redirect('/meetups')
    }
    return(
        <MeetupItemDetails  meetup={item[0]}/>
    )
}


