import MeetupItem from "./MeetupItem";
const MeetupList = (props) =>{

    return(
        <div>
        {props.meetList.map((meetup) => (
            <MeetupItem key={meetup._id} props={meetup}/>
        ))}
        </div>
    )
}

export default MeetupList;