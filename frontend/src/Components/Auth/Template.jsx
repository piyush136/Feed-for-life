// import { FcGoogle } from "react-icons/fc"
// import { useSelector } from "react-redux"

// import frameImg from "../../assets/frame.jpg"
// import LoginForm from "./LoginPage"
// import SignupForm from "./SignupPage"

// function Template({ title, description1, description2, image, formType }) {
//   const { loading } = useSelector((state) => state.auth)

//   return (
//     <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
//       {loading ? (
//         <div className="spinner"></div>
//       ) : (
//         <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
//           <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
//             <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
//               {title}
//             </h1>
//             <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
//               <span className="text-richblack-100">{description1}</span>{" "}
//               <span className="font-edu-sa font-bold italic text-blue-100">
//                 {description2}
//               </span>
//             </p>
//             {formType === "signup" ? <SignupForm /> : <LoginForm />}
//           </div>
//           <div className={`relative mx-auto w-11/12  md:mx-0 ${formType==="signup"?"mt-32":"mt-10"}`}>
//             <img
//               src={frameImg}
//               alt="Pattern"
//               width={504}
//               height={504}
//               loading="lazy"
//               className="absolute -top-15 right-8 z-10"
//             />
//             <img
//               src={image}
//               alt="Students"
//               width={558}
//               height={504}
//               loading="lazy"
//               className="absolute -top-12 right-20 z-10"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Template
import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"

import frameImg from "../../assets/frame.jpg"
import LoginForm from "./LoginPage"
import SignupForm from "./SignupPage"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center px-4">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-full max-w-[1200px] flex-col-reverse justify-between gap-y-10 py-10 md:flex-row md:gap-x-12">
          {/* Left side - Text + Form */}
          <div className="w-full max-w-[450px]">
            <h1 className="text-3xl font-semibold text-richblack-5 leading-snug">
              {title}
            </h1>
            <p className="mt-4 text-lg text-richblack-100 leading-relaxed">
              {description1}{" "}
              <span className="font-edu-sa font-bold italic text-blue-100">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>

          {/* Right side - Images */}
          <div className="relative w-full max-w-[500px] flex justify-center items-center">
            {/* Frame Image */}
            <img
              src={frameImg}
              alt="Frame"
              loading="lazy"
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-[500px] z-0"
            />
            {/* Foreground Image */}
            <img
              src={image}
              alt="Main"
              loading="lazy"
              className="relative z-10 w-[85%] max-w-[480px] mt-10 md:mt-0"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Template
