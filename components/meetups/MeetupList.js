import MeetupItem from "./MeetupItem";
const MeetupList = (props) =>{

    return(
        <div>
        {props.meetList.map((meetup) => (
            <MeetupItem key={meetup.id} props={meetup}/>
        ))}
        </div>
    )
}

export default MeetupList;