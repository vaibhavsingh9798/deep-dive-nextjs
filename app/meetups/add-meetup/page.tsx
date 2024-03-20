
import AddMeetup from "@/components/meetups/AddMeetup";
import React, { Fragment } from "react";
import {Meetup} from "@/app/lib/definitions"
import Head from "next/head";



export default function Meetups(){
   

    return(
        <Fragment>
            <Head>
            <title>Add </title>
                <meta name='description'  content={'add new meetup'} />
            </Head>
       <AddMeetup  />
       </Fragment>
    )
}
