// import React from "react"
// import {BiSolidChat} from "react-icons/bi"
// import {BsGlobeCentralSouthAsia} from "react-icons/bs"
// import {IoCallSharp} from "react-icons/io5"
// import ContactUsForm from "../Components/Common/ContactUsForm";
// import Footer from "../Components/Common/Footer";

// const ContactUs = () => {
//   return (
//     <div className="mt-[80px]">
//         {/* section-1 */}
//         <div className="mx-auto w-11/12 max-w-maxContent flex justify-center gap-10 mb-20">
//             <div className="bg-richblack-800 text-richblack-100 pl-8 pr-20 py-8 max-h-[375px]">
//                 {/* icon section */}
//                 <div className="flex flex-col gap-8">
//                     <div className="flex items-start gap-5 ">
//                         <BiSolidChat className="mt-1 text-lg"/>
//                         <div>
//                             <h1 className="text-lg font-semibold">Chat on us</h1>
//                             <p className="text-sm">Our friendly team is here to help.</p>
//                             <button className="text-sm">@FeedForward.org</button>
//                         </div>
//                     </div>

//                     <div className="flex items-start gap-5">
//                         <BsGlobeCentralSouthAsia className="mt-1 text-lg"/>
//                         <div>
//                             <h1 className="text-lg font-semibold">Visit Us</h1>
//                             <p className="text-sm">Come and say hello at our office HQ.</p>
//                             <button className="text-sm">Here is the location/ address</button>
//                         </div>
//                     </div>

//                     <div className="flex items-start gap-5">
//                         <IoCallSharp className="mt-1 text-lg"/>
//                         <div>
//                             <h1 className="text-lg font-semibold">Call Us</h1>
//                             <p className="text-sm">Mon - Fri From 8am to 5pm</p>
//                             <button className="text-sm">+123 456 7890</button>
//                         </div>
//                     </div>
//                 </div>


//             </div>

//             {/* form */}
//             <div className="w-[500px] ml-5">
//             <h1 className="text-3xl text-richblack-5 font-bold">Got an Idea? Let's Collaborate</h1>
//             <p className="text-sm text-richblack-500 mt-1 mb-5">Share your vision and let us know how we can bring it to life together.</p>

//                 <ContactUsForm/>
//             </div>
//         </div>

//         {/* section-2 */}
//         <Footer/>
      
//     </div>
//   )
// };

// export default ContactUs;
import React from "react"
import { BiSolidChat } from "react-icons/bi"
import { BsGlobeCentralSouthAsia } from "react-icons/bs"
import { IoCallSharp } from "react-icons/io5"
import ContactUsForm from "../Components/Common/ContactUsForm"
import Footer from "../Components/Common/Footer"

const ContactUs = () => {
  return (
    <div className="mt-[80px] px-4">
      {/* Section 1 */}
      <div className="mx-auto w-full max-w-maxContent flex flex-col-reverse gap-10 md:flex-row md:justify-between md:gap-12 mb-20">
        {/* Contact Info Section */}
        <div className="bg-richblack-800 text-richblack-100 p-6 md:p-8 rounded-lg w-full md:max-w-[450px]">
          <div className="flex flex-col gap-8">
            {/* Chat */}
            <div className="flex items-start gap-4">
              <BiSolidChat className="mt-1 text-lg" />
              <div>
                <h1 className="text-lg font-semibold">Chat with us</h1>
                <p className="text-sm">Our friendly team is here to help.</p>
                <button className="text-sm">@FeedForward.org</button>
              </div>
            </div>

            {/* Visit */}
            <div className="flex items-start gap-4">
              <BsGlobeCentralSouthAsia className="mt-1 text-lg" />
              <div>
                <h1 className="text-lg font-semibold">Visit Us</h1>
                <p className="text-sm">Come and say hello at our office HQ.</p>
                <button className="text-sm">Here is the location/address</button>
              </div>
            </div>

            {/* Call */}
            <div className="flex items-start gap-4">
              <IoCallSharp className="mt-1 text-lg" />
              <div>
                <h1 className="text-lg font-semibold">Call Us</h1>
                <p className="text-sm">Mon - Fri from 8am to 5pm</p>
                <button className="text-sm">+123 456 7890</button>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:max-w-[500px]">
          <h1 className="text-2xl md:text-3xl text-richblack-5 font-bold">
            Got an Idea? Let's Collaborate
          </h1>
          <p className="text-sm text-richblack-500 mt-1 mb-5">
            Share your vision and let us know how we can bring it to life together.
          </p>
          <ContactUsForm />
        </div>
      </div>

      {/* Section 2 */}
      <Footer />
    </div>
  )
}

export default ContactUs
