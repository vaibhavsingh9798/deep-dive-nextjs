import MeetupList from "@/components/meetups/MeetupList";
import meetups from '@/app/lib/meetup-list'
import {Meetup} from '@/app/lib/definitions'

export default function Meetups(){
    return(
        <MeetupList meetList={meetups} />
    )
}
