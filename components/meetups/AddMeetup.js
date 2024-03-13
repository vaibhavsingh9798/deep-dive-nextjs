"use client"
import { useState } from "react";

 const AddMeetup = ()=>{
    const [meetupInfo,setMeetupInfo] = useState({title:'',image:'',address:''})

    const handleChange = (e) =>{
      const {name,value} = e.target;
      setMeetupInfo(prevState => ({...prevState,[name]:value}))
    }

    const handleSubmit = async (e)=>{
         e.preventDefault();
         try{
          let response = await fetch('http://localhost:3000/api/add-meetup',{
            method:'POST',
            body: JSON.stringify(meetupInfo),
            headers:{'Content-Type':'application/json'}

          })

          console.log('m',meetupInfo)
          setMeetupInfo({title:'',image:'',address:''})

          console.log('add meet res',response)
         }catch(err){
             console.error('something wrong with add data')
         }
    }

    return(
        <div className=" flex justify-center  text-slate-300">
            <div className=" mt-10">
                <h2 className=" text-center font-bold text-2xl  mb-20">Add New Meetup</h2>
                <form onSubmit={handleSubmit}>
                       <div className="my-7">
                        <label className="mr-10">Title</label>
                        <input type="text" name='title' value={meetupInfo.title} onChange={handleChange} className="  w-80 p-1 text-black"/>
                       </div>
                       <div className="my-7">
                        <label className="mr-7">Image</label>
                        <input type="text"  name='image' value={meetupInfo.image} onChange={handleChange} className="  w-80 p-1 text-black"/>
                       </div>
                       <div className="my-7">
                        <label className="mr-5">Address</label>
                        <input type="text"  name='address' value={meetupInfo.address} onChange={handleChange} className="  w-80 p-1 text-black"/>
                       </div>
                       <div className="flex justify-center mt-8 ">
                       <button type="submit" className=" bg-blue-500 px-4 py-2 font-medium">Add</button>
                       </div>
                </form>
            </div>
        </div>
    )
}
 
export default AddMeetup;