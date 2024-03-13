import MeetupList from "@/components/meetups/MeetupList";
import {Meetup} from '@/app/lib/definitions'
async function fetchMeetups(){
    try{
    let data = await fetch('http://localhost:3000/api/add-meetup')
    let meetList = await data.json()
     return meetList
    }catch(err){
        console.log('something wrong with fetch data',err)
    }
}

export default  async function Meetups(){

    const meetups = await fetchMeetups();
    return(
        <MeetupList meetList={meetups} />
    )
}
