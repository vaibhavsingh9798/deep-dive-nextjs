
import Meetup from '@/models/Meetup'
import  connectToDatabase from '../../../config/db'
import { NextResponse } from 'next/server'
  
export const GET = async (request : Request) =>{
   try{
     await  connectToDatabase()
     const meetups = await Meetup.find()
     return new NextResponse(JSON.stringify(meetups),{status:200})
   }catch(err){
      return new NextResponse("Error during fect"+err,{status:500})
   }
}

export async function  POST(requset : Request){
   try{
    let  meetup = await requset.json()
    let response = await Meetup.create(meetup)
    console.log('res',response)
    return new Response(JSON.stringify(response),{status:201})
   }catch(err){
    return new Response("Internal server error",{status:500})   
   }
}
    
