import React, { useEffect, useState } from 'react';
import { API_GET_BUSINESS_DETAILS } from '../../../config/Api';
import { Link, useLocation } from 'react-router-dom';

const ProductDetails = (props) => {
   const location = useLocation();
   const { advertisementID } = location.state || {};
   const [detailsData, setDetailsData] = useState({});


   useEffect(() => {
      if (advertisementID) {
         businessDetails();
      }
   }, [advertisementID]);

   const businessDetails = () => {
      const payload = {
         advertisementID: String(advertisementID),
      };
      props
         .callRequest("POST", API_GET_BUSINESS_DETAILS, true, payload)
         .then(({ data }) => {
            setDetailsData(data);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const { advertisements = {}, categories = {}, imgList = [] } = detailsData;

   const generateWhatsAppLink = (whatsappNo) => {
      return `https://wa.me/${whatsappNo}`;
   };


   return (
      <>
         <div>
            <header>
               <section className="center"><a href="http://" className="logo"><img src="./images/namastelocal-logo.png"
                  alt="Namastelocal" title="Namastelocal" /></a>
                  <span className="mobNavTriger" id="mobNavTriger">Menu</span>
                  <nav id="nav" className="transition">
                     <div className="langDropdown">
                        <button className="langDropbtn">Select Language</button>
                        <div className="langDropdown-content">
                           <a href="#">English</a>
                           <a href="#">Spanish</a>
                           <a href="#">French</a>
                           <a href="#">German</a>
                        </div>
                     </div>

                     <div className="navLink"><a href="http://">Advertise</a></div>
                     <div className="navLink"><a href="http://">List Your Business</a></div>

                     <div className="notificationHolder">
                        <div className="notification"><span>10</span></div>
                        <div className="notificationListHolder customScroll transition">
                           <ul className="noti_list">
                              <li><a href="#" className="command"><em>Lorem ipsum dolor sit amet, consectetur
                                 adipiscing<i>20 April 2017</i></em></a></li>
                              <li><a href="#" className="like"><em>Lorem ipsum dolor sit amet, consectetur adipiscing<i>20
                                 April 2017</i></em></a></li>
                              <li><a href="#" className="command"><em>Lorem ipsum dolor sit amet, consectetur
                                 adipiscing<i>20 April 2017</i></em></a></li>
                              <li><a href="#" className="like"><em>Lorem ipsum dolor sit amet, consectetur adipiscing<i>20
                                 April 2017</i></em></a></li>
                              <li><a href="#" className="command"><em>Lorem ipsum dolor sit amet, consectetur
                                 adipiscing<i>20 April 2017</i></em></a></li>
                           </ul>
                        </div>
                     </div>
                     <input type="button" className="btnType1" value="Login / signup" />
                  </nav>
               </section>
            </header>
         </div>
         <section className="center searchSec mb-30 pt-30">
            <aside>
               <h2>Everything Near Mira Bhayendar Road</h2>
               <div className="top_search">
                  <input type="text" className="site_search" onFocus="if(this.value=='Site Search'){this.value=''}"
                     onBlur="if(this.value==''){this.value='Site Search'}" value="Site Search" />
                  <input className="site_search_btn" type="button" value="" />
               </div>
            </aside>
         </section>
         <section className="center mb-30">
            <ul className="breadcrumb">
               <li className="breadcrumb_item"><a href="#">Home</a></li>
               <li className="breadcrumb_item"><a href="#">Salons in Mira Bhayender</a></li>
               <li className="breadcrumb_item active" aria-current="page">Studio Unisex Salon</li>
            </ul>
         </section>
         <section className="center borderBox px-20 mb-30 productItem">
            <figure>
               <img src="./images/card6.jpg" alt="" />
            </figure>
            <article>
               <h3>{advertisements.businessName || 'Business Name'}</h3>
               <div>
                  <img src="./images/rating2.jpg" alt="" />
               </div>
               <div>
                  <span className="locationText">{advertisements.streetName || 'Location'}</span>
                  <span className="bulletText">Available
                     Until {advertisements.endTime || 'Time'}
                  </span>
               </div>
               <div>
                  <span className="bulletText">
                     25 People recently enquired
                  </span>
               </div>
               <div>
                  <Link
                     to={generateWhatsAppLink(advertisements.whatsappNo)}
                     className="chatBtn"
                     target="_blank"
                  >
                     Chat
                  </Link>
                  <a href="#"
                     className="shareBtn">Share</a>
                  <a href="#" className="addPhotoBtn">Add photo</a>
               </div>
            </article>
            <aside>
               <a href="#" className="redBtn">Enquire Now</a>
               <a href="#" className="redBtn">Book Now</a>
            </aside>
         </section>

         <section className="center twoCol mb-30">
            <aside className="borderBox">
               <div className="borderSec" style={{ paddingLeft: '30px' }}>
                  <h2 className="headingType2">Photo</h2>
                  <ul className="photoSlider mb-20">
                     {imgList.map((img, index) => (
                        <li className="photoSlide" key={index}>
                           <img src={`${advertisements.fileUrl}/${img.imageName}`} alt="" />
                        </li>
                     ))}
                  </ul>
                  <a href="#" className="redBtn">Upload Photo</a>
               </div>
               <div className="borderSec px-30">
                  <h2 className="headingType2">Timing</h2>
                  <ul className="timing">
                     {advertisements.businessWorkingDays && advertisements.startTime && advertisements.endTime && (
                        <>
                           <li><strong>Mon</strong><span>{advertisements.startTime} - {advertisements.endTime}</span></li>
                           <li><strong>Tue - Sun</strong><span>{advertisements.startTime} - {advertisements.endTime}</span></li>
                        </>
                     )}
                  </ul>
               </div>
               <div className="borderSec px-30">
                  <ul className="features">
                     <li>
                        <h3 className="headingType2">Services</h3>
                        {/* Add dynamic services here if available */}
                     </li>
                     <li>
                        <h3 className="headingType2">Gender</h3>
                        <span>Male</span><span>Female</span>
                     </li>
                     <li>
                        <h3 className="headingType2">Amenities</h3>
                        <span>Air Conditioned</span><span>Wifi</span>
                     </li>
                     <li>
                        <h3 className="headingType2">Mode of Payment</h3>
                        <span>Net Banking</span><span>Visa/Master Card</span>
                     </li>
                  </ul>
                  <div className="contentCenter"><a href="#" className="redBtn2">Load more</a></div>
               </div>
               <div className="borderSec px-30">
                  <div className="mb-20">
                     <h2 className="headingType2" style={{ marginBottom: '0' }}>Question & Answers</h2>
                     <span>Would you like to ask a question?</span>
                  </div>
                  <a href="#" className="redBtn2">Load more</a>
               </div>

               <div className="borderLessBox">
                  <h2 className="headingType2">Review & Rating</h2><img src="./images/rating2.jpg" alt="" />
               </div>
               <div className="borderLessBox">
                  <h2 className="headingType2">Start a review</h2><img src="./images/starRating.png" alt="" />
               </div>
               <div className="borderLessBox">
                  <h2 className="headingType2">Recent rating trend</h2><img src="./images/starRating2.png" alt="" />
               </div>
               <div className="borderLessBox">
                  <h2 className="headingType2">User Reviews</h2>
                  <div className="reviewFilter"><a href="#" className="btnType2">Relevent</a><a href="#" className="btnType2">Latest</a><a href="#" className="btnType2">High to Low</a></div>
               </div>
               <div className="reviewList">
                  {/* Render reviews dynamically if available */}
               </div>
            </aside>

            <aside className="borderBox px-20">
               <h2 className="headingType2">Address</h2>
               <div className="reviewText">
                  {advertisements.buildingName}, {advertisements.streetName}, {advertisements.city}, {advertisements.state} {advertisements.pincode}
               </div>
               <ul className="addressLink">
                  <li><a href="#" className="addressBtn_1">Get Direction</a></li>
                  <li><a href="#" className="addressBtn_2">Send Enquiry by Email</a></li>
                  <li><a href="#" className="addressBtn_3">Get info via SMS/Email</a></li>
                  <li><a href="#" className="addressBtn_4">Share this</a></li>
                  <li><a href="#" className="addressBtn_5">Tap to rate</a></li>
                  <li><a href="#" className="addressBtn_6">Visit Our Website</a></li>
               </ul>
            </aside>
         </section>
         <footer>
            <div className="borderSec mb-30">
               <section className="center footer1">
                  <aside>
                     <h3>Quicks Links</h3>
                     <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Business Badge</a></li>
                        <li><a href="#">Advertise</a></li>
                        <li><a href="#">What's New</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Media</a></li>
                        <li><a href="#">We're hiring</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Customer Care</a></li>
                        <li><a href="#">Free Listing</a></li>
                        <li><a href="#">NL Collection</a></li>
                        <li><a href="#">Report a Bug</a></li>
                        <li><a href="#">Client Succe</a></li>
                        <li><a href="#">B2B Sitemap</a></li>
                        <li><a href="#">Sitemap</a></li>
                     </ul>
                  </aside>
                  <aside>
                     <h3>NamasteLocal Vertical</h3>
                     <ul>
                        <li><a href="#">B2B</a></li>
                        <li><a href="#">Real estate</a></li>
                        <li><a href="#">Food</a></li>
                        <li><a href="#">Doctor</a></li>
                        <li><a href="#">Beauty</a></li>
                        <li><a href="#">Coaching</a></li>
                        <li><a href="#">Interior Design</a></li>
                        <li><a href="#">Courier Service</a></li>
                        <li><a href="#">Travel</a></li>
                        <li><a href="#">AC Repair</a></li>
                        <li><a href="#">Car Service</a></li>
                        <li><a href="#">Restaurants</a></li>
                     </ul>
                  </aside>
               </section>
            </div>
            <section className="center footer2"> <span>Copyrights 2024. All Rights Reserved.</span> | <a href="">Privacy</a>
               | <a href="">Terms</a></section>
         </footer>
      </>
   );
};

export default ProductDetails;
