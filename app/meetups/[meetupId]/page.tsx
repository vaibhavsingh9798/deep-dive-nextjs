
import MeetupItemDetails from "@/components/meetups/MeetupItemDetails"
import meetups from '@/app/lib/meetup-list'
export default function MeetupDetails({params}:{params:{meetupId:String}}){

    const id  = params.meetupId;
    const item = meetups.filter((meetup) => meetup.id == id)
    return(
        <MeetupItemDetails  meetup={item[0]}/>
    )
}

