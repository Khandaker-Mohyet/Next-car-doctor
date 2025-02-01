
// export default function page () {
//   return (
//     <div> this is details page</div>
//   )
// }

import Image from "next/image";

const page = ({ params }) => {
  return (
    <div>
      <section className="flex justify-center">
        <figure className=" relative">
          <Image
            src="/assets/images/checkout/checkout.png"
            width={1180}
            height={600}
            alt="Banner"
          />
          <div className="transparent-layer absolute w-full h-full border border-red-500 top-0">
            <div className="w-full overlay-bg h-full text-2xl flex items-center">
              <div>
                <div className="text-white  pl-10 font-bold ">Service details</div>
              </div>
            </div>
          </div>
        </figure>
      </section>
      <p>{params.id}</p>
      service details page
    </div>
  );
};

export default page;