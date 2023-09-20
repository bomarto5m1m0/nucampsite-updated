// import React, { useState, useEffect } from 'react';
// import { slides, auth } from './slideService';  

// const SlideViewer = () => {
//   const [slideData, setSlideData] = useState(null);

//   useEffect(() => {
//     const getSlidesData = async () => {
//       try {
//         const presentationId = 'g280f68f35c9_0_40'; // Replace with your presentation ID
//         const response = await slides.presentations.get({
//           auth,
//           presentationId
//         });
//         setSlideData(response.data);
//       } catch (error) {
//         console.error('Error fetching slides:', error);
//       }
//     };

//     getSlidesData();
//   }, []);

//   if (!slideData) return null;

//   return (
//     <div>
//       <h1>{slideData.title}</h1>
//       {slideData.slides.map((slide, index) => (
//         <div key={index}>
//           <h2>{slide.pageElements[0].shape.text}</h2>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SlideViewer;
