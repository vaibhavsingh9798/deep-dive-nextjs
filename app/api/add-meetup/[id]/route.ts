import Meetup from '@/models/Meetup'
import { NextResponse } from 'next/server'
  
export const GET = async (request : Request, {params} : {params:{id:String}}) =>{
    console.log('id---',params.id)
   try{
     const meetup = await Meetup.findById(params.id)
     return new NextResponse(JSON.stringify(meetup),{status:200})
   }catch(err){
      return new NextResponse("Error during fect"+err,{status:500})
   }
}