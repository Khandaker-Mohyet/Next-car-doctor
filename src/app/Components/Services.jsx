import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default async function Services() {
  // const res = await fetch("/services.json")
  const data = [
    {
        "_id": "635a0c0b64a6d231228942ae",
        "service_id": "04",
        "title": "Engine Oil Change",
        "img": "https://i.ibb.co/T2cpBd5/888.jpg",
        "price": "20.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        "_id": "635a0c0b64a6d231228942af",
        "service_id": "05",
        "title": "Battery Charge",
        "img": "https://i.ibb.co/ydCbDN3/5555.jpg",
        "price": "20.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        "_id": "635b591a1dafe382a9da8c96",
        "service_id": "01",
        "title": "Full car Repair",
        "img": "https://i.ibb.co/R6Z2nFM/55.jpg",
        "price": "200.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        "_id": "635b5afc1dafe382a9da8c98",
        "service_id": "02",
        "title": "Engine Repair",
        "img": "https://i.ibb.co/5MvmD2g/88.jpg",
        "price": "150.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        "_id": "635b5b691dafe382a9da8c99",
        "service_id": "03",
        "title": "Automatic Services",
        "img": "https://i.ibb.co/wh7t3N3/555.jpg",
        "price": "30.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        "_id": "635b5ba51dafe382a9da8c9a",
        "service_id": "06",
        "title": "Electrical System",
        "img": "https://i.ibb.co/KzCG8qr/8888.jpg",
        "price": "20.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    }
]
  
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