// import React, { useEffect, useState } from 'react';
// import { getAllEvents } from '../operations/eventApi'; // Adjust the import path as needed
// import { formatDate } from '../operations/formatDate';
// import { useNavigate } from 'react-router-dom';

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const fetchedEvents = await getAllEvents(); // Await the API call here
//         setEvents(fetchedEvents || []); // Ensure response is an array
//       } catch (error) {
//         console.error('Failed to fetch events:', error);
//         setEvents([]); // Set events to an empty array in case of error
//       }
//     };
//     fetchEvents();
//   }, []);

//   return (
//     <div className="p-8 w-10/12 mx-auto bg-black min-h-screen text-white flex flex-col items-center">
//       <div className="text-4xl font-bold mb-6">EVENTS</div>
//       {!events ? (
//         <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
//           <div className="spinner"></div>
//         </div>
//       ) : !events.length ? (
//         <p className="grid h-[10vh] w-full place-content-center text-gray-400">
//           No events available.
//         </p>
//       ) : (
//         <div className="overflow-x-auto bg-richblack-700 text-xl w-full mb-10">
//           {/* Headings */}
//           <div className="grid grid-cols-5 bg-gray-800 text-white rounded-t-lg p-4 border-b-2 border-gray-700">
//             <p className="col-span-2 font-semibold ml-40">Event Details</p>
//             <p className="col-span-1 text-center font-semibold">Event Date</p>
//             <p className="col-span-1 text-center font-semibold">Status</p>
//             <p className="col-span-1 text-center font-semibold">Creation Date</p>
//           </div>
//           {/* Event Rows */}
//           {events.map((event, i) => (
//             <div
//               className={`grid grid-cols-5 items-center border-b-4 border-pure-greys-200 p-4 hover:bg-richblack-900 transition duration-100 overflow-hidden
//                 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]`}
//               key={i}
//             >
//               <div
//                 className="col-span-2 flex cursor-pointer items-center gap-4"
//                 onClick={() => {
//                   navigate(`/event/${event._id}`);
//                 }}
//               >
//                 <img
//                   src={event.image}
//                   alt="event_img"
//                   className="h-28 w-28 rounded-lg object-cover mr-6"
//                 />
//                 <div className="flex flex-col gap-1">
//                   <p className="font-bold text-lg">{event.title}</p>
//                   <p className="text-sm text-gray-400">Type of Food: {event.typeOfFood}</p>
//                   <p className="text-sm text-gray-400">Location: {event.location}</p>
//                   <p className="text-sm text-gray-400">Quantity: {event.quantity}</p>
//                   <p className="text-sm text-gray-400">Contact: {event.contactDetails}</p>
//                 </div>
//               </div>
//               <div className="col-span-1 text-center text-sm">
//                 {formatDate(event.eventDate)}
//               </div>
//               <div className="col-span-1 text-center text-sm">
//                 <span
//                   className={`px-5 py-3 font-semibold rounded-full text-lg ${
//                     event.status === 'completed'
//                       ? 'bg-caribbeangreen-500 text-richblack-50'
//                       : 'bg-yellow-200 text-yellow-800'
//                   }`}
//                 >
//                   {event.status === 'completed' ? 'Completed' : 'Available'}
//                 </span>
//               </div>
//               <div className="col-span-1 text-center text-sm">
//                 {formatDate(event.createdAt)}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Events;

import React, { useEffect, useState } from 'react';
import { getAllEvents } from '../operations/eventApi';
import { formatDate } from '../operations/formatDate';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getAllEvents();
        setEvents(fetchedEvents || []);
      } catch (error) {
        console.error('Failed to fetch events:', error);
        setEvents([]);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="px-4 py-8 w-full max-w-7xl mx-auto bg-black min-h-screen text-white flex flex-col items-center">
      <div className="text-3xl md:text-4xl font-bold mb-6 text-center">EVENTS</div>

      {!events ? (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
          <div className="spinner"></div>
        </div>
      ) : !events.length ? (
        <p className="grid h-[10vh] w-full place-content-center text-gray-400 text-center">
          No events available.
        </p>
      ) : (
        <div className="w-full overflow-x-auto bg-richblack-700 text-base mb-10 rounded-md">
          {/* Headings */}
          <div className="hidden md:grid grid-cols-5 bg-gray-800 text-white rounded-t-lg p-4 border-b-2 border-gray-700 text-sm">
            <p className="col-span-2 font-semibold text-center">Event Details</p>
            <p className="col-span-1 text-center font-semibold">Event Date</p>
            <p className="col-span-1 text-center font-semibold">Status</p>
            <p className="col-span-1 text-center font-semibold">Creation Date</p>
          </div>

          {/* Event Rows */}
          {events.map((event, i) => (
            <div
              className="md:grid grid-cols-5 items-center border-b border-richblack-400 p-4 hover:bg-richblack-900 transition duration-150"
              key={i}
            >
              <div
                className="col-span-2 flex flex-col md:flex-row items-start md:items-center gap-4 cursor-pointer"
                onClick={() => navigate(`/event/${event._id}`)}
              >
                <img
                  src={event.image}
                  alt="event_img"
                  className="h-24 w-24 md:h-28 md:w-28 rounded-lg object-cover"
                />
                <div className="flex flex-col gap-1 text-sm">
                  <p className="font-bold text-base">{event.title}</p>
                  <p className="text-richblack-200">🍽️ Food: {event.typeOfFood}</p>
                  <p className="text-richblack-200">📍 Location: {event.location}</p>
                  <p className="text-richblack-200">📦 Quantity: {event.quantity}</p>
                  <p className="text-richblack-200">📞 Contact: {event.contactDetails}</p>
                </div>
              </div>

              <div className="col-span-1 text-center mt-4 md:mt-0 text-sm">
                {formatDate(event.eventDate)}
              </div>

              <div className="col-span-1 text-center mt-4 md:mt-0 text-sm">
                <span
                  className={`px-3 py-1.5 font-semibold rounded-full text-sm ${
                    event.status === 'completed'
                      ? 'bg-caribbeangreen-500 text-white'
                      : 'bg-yellow-200 text-yellow-800'
                  }`}
                >
                  {event.status === 'completed' ? 'Completed' : 'Available'}
                </span>
              </div>

              <div className="col-span-1 text-center mt-4 md:mt-0 text-sm">
                {formatDate(event.createdAt)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;

