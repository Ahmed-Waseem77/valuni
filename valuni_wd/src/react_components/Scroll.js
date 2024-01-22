// In Scroll.js
import React, { Component } from 'react';
import { CourseBoxArray } from './CourseBoxArray';

class Scroll extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className='scroll-container'>
        <CourseBoxArray data={data} /> {/* Pass the fetched data to CourseBoxArray component */}
      </div>
    );
  }
}

export { Scroll };


// import React, { Component } from 'react';
// import Ratings from '../resources/VAL-STAR_FULL.svg'; 
// import './CourseBoxes.css';

// class CourseBoxes extends React.Component {
//   render() {
//     return (
//       <div className='Container'> 
        
//       <div className='flex'>
//         <div className='CourseBox' id='CourseBox'>
//           <h1 className='CourseTitle' id='CourseTitle'>CSCE XXXX</h1>
//           <div className='RatingDetails' id='RatingDetails'> 
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//           </div>
        
//           <h2 className='ProfDetails' id='ProfDetails'>Prof. Last Name, First Name </h2>
//           <div className='RatingDetails' id='RatingDetails'> 
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//           </div>
//         </div>
//       </div>

//       <div className='flex'>
//         <div className='CourseBox' id='CourseBox'>
//           <h1 className='CourseTitle' id='CourseTitle'>CSCE XXXX</h1>
//           <div className='RatingDetails' id='RatingDetails'> 
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//           </div>
        
//           <h2 className='ProfDetails' id='ProfDetails'>Prof. Last Name, First Name </h2>
//           <div className='RatingDetails' id='RatingDetails'> 
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//           </div>
//         </div>
//       </div>

//       <div className='flex'>
//         <div className='CourseBox' id='CourseBox'>
//           <h1 className='CourseTitle' id='CourseTitle'>CSCE XXXX</h1>
//           <div className='RatingDetails' id='RatingDetails'> 
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//           </div>
        
//           <h2 className='ProfDetails' id='ProfDetails'>Prof. Last Name, First Name </h2>
//           <div className='RatingDetails' id='RatingDetails'> 
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//           </div>
//         </div>
//       </div>

//       <div className='flex'>
//         <div className='CourseBox' id='CourseBox'>
//           <h1 className='CourseTitle' id='CourseTitle'>CSCE XXXX</h1>
//           <div className='RatingDetails' id='RatingDetails'> 
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//           </div>
        
//           <h2 className='ProfDetails' id='ProfDetails'>Prof. Last Name, First Name </h2>
//           <div className='RatingDetails' id='RatingDetails'> 
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//             <img src={Ratings} className="Stars" alt="Stars" />  
//           </div>
//         </div>
//       </div>
//     </div>
//     )
//   }
// }

// export { CourseBoxes };
