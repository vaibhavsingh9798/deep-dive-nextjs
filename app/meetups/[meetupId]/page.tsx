
import MeetupItemDetails from "@/components/meetups/MeetupItemDetails"
import meetups from '@/app/lib/meetup-list'
import { redirect } from "next/navigation";

export default function MeetupDetails({params}:{params:{meetupId:any}}){

    let id  = params.meetupId;
    const item = meetups.filter((meetup) => meetup.id == id)
     
    if(!item.length){
       redirect('/meetups')
    }
    return(
        <MeetupItemDetails  meetup={item[0]}/>
    )
}


