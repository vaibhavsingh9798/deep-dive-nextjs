import Link from "next/link";

const Navigation = () =>{

    return(
        <div className="flex  justify-between bg-red-800 p-4 my-2 font-bold text-xl">
            <Link href='/'>Developer Meetups</Link>
            <div>
                <div className="flex  justify-between ">
                <Link href={'/meetups'}>All Meetups</Link>
                <Link href={'/meetups/add-meetup'} className=" ml-4">Add New Meetup</Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation;