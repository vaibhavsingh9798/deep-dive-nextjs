
const MeetupItemDetails = ({meetup}) =>{
    return(
        <div className=" flex justify-center items-center h-screen text-slate-200">
            <div className="flex flex-col justify-center items-center">
                     <div><img src={meetup.image} width={500} height={500} /></div>
                     <div className=" font-bold text-2xl my-2 ">{meetup.title}</div>
                     <div className=" font-bold text-2xl my-1 ">{meetup.address}</div>
            </div>
          
        </div>
    )
}

export default MeetupItemDetails;