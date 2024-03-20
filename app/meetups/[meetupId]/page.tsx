
import MeetupItemDetails from "@/components/meetups/MeetupItemDetails"
import Head from "next/head";
import { redirect } from "next/navigation";
import { Fragment } from "react";

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
        <Fragment>
            <Head>
                <title>{item[0].title}</title>
                <meta name='description'  content={item[0].description} />
            </Head>
        <MeetupItemDetails  meetup={item[0]}/>
        </Fragment>
    )
}


