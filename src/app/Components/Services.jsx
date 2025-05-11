import DbConnect, { collectionNamesObj } from "@/lib/DbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";


export default async function Services() {
  // const res = await fetch("/services.json")
  const services = DbConnect(collectionNamesObj.services);
  const data = await services.find({}).toArray();
  console.log(data)
  
 
  
  return (
    <div className="grid grid-cols-12 w-11/12 mx-auto">
      {data.map(items => {
        return <div key={items._id} className="col-span-12 md:col-span-6 lg:col-span-4 mx-auto border-2 p-4 rounded-md mb-4 my-5">
          <Image className="" src={items.img} width={314} height={108} />
          <h1 className="text-2xl font-bold">{items.title}</h1>
          <div className="flex justify-between">
            <h3 className="font-semibold text-lg text-pink-500">Price : ${items.price}</h3>
            <Link href={`/details/${items._id}`}><FaArrowRight className="text-pink-500" /></Link>
          </div>
        </div>
      })}
    </div>
  )
}

// const  Services  = () => {
//   return (
//     <div>
//       This is service Layout
//     </div>
//   );
// };

// export default Services;