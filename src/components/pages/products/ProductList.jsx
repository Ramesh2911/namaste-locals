import React, { useEffect, useState } from 'react';
import { API_GET_BUSINESS_LIST_BY_CATEGORY } from '../../../config/Api';
import { Link, useLocation } from 'react-router-dom';

const ProductList = (props) => {
   const location = useLocation();
   const { businessCategoryID, pincode } = location.state || {};
   const [businessList, setBusinessList] = useState([]);

   useEffect(() => {
      if (businessCategoryID && pincode) {
         businessListData();
      }
   }, [businessCategoryID, pincode]);


   const businessListData = () => {
      const payload = {
         businessCategoryIDs: String(businessCategoryID),
         pincode: String(pincode)
      };
      props
         .callRequest("POST", API_GET_BUSINESS_LIST_BY_CATEGORY, true, payload)
         .then(({ data }) => {
            setBusinessList(data?._BusinessList);
         })
         .catch((err) => {
            console.log(err);
         });
   };

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
                  <input type="text" className="site_search" onfocus="if(this.value=='Site Search'){this.value=''}"
                     onblur="if(this.value==''){this.value='Site Search'}" value="Site Search" />
                  <input className="site_search_btn" type="button" value="" />
               </div>
            </aside>
         </section>
         <section className="center highlightSecType1 mb-30">
            <figure><img src="./images/bookHotel-bg.jpg" alt="" /></figure>
            <aside>
               <a href="#">
                  <span>Search Compare</span>
                  <h2>Prices &amp; Book Hotels</h2>
                  <strong>Get Best Deals</strong>
               </a>
            </aside>
         </section>
         <section className="center mb-30">
            <ul className="breadcrumb">
               <li className="breadcrumb_item"><a href="#">Home</a></li>
               <li className="breadcrumb_item"><a href="#">Salons in Mira Bhayender</a></li>
               <li className="breadcrumb_item active" aria-current="page">Studio Unisex Salon</li>
            </ul>
         </section>
         <section className="center">
            <ul className="filter">
               <li><a href="#" className="topRated">Top Rated</a></li>
               <li><a href="#" className="nlVarified">NL Varified</a></li>
               <li><a href="#" className="deals">Deals</a></li>
               <li><a href="#" className="nlTrust">NL Trust</a></li>
               <li><a href="#" className="allFilter">All Filter</a></li>
               <li>
                  <select>
                     <option>Short By</option>
                     <option>d</option>
                     <option>d</option>
                     <option>d</option>
                  </select>
               </li>
            </ul>
         </section>


         <section class="center twoCol mb-30">
            <aside>
               <div>
                  {businessList.length > 0 ? (
                     businessList.map((business, index) => (
                        <div className="borderBox px-20 mb-30 productItem" key={index}>
                           <figure>
                              <img src={business.imageSrc || './images/card6.jpg'} alt={business.businessName} />
                           </figure>
                           <article>
                              <Link
                                 to={"/product-details"}
                                 key={business.advertisementID}
                                 state={{
                                    advertisementID: business.advertisementID
                                 }}
                              >
                                 <h3>{business.businessName}</h3>
                              </Link>
                              <div>
                                 <img src="./images/rating2.jpg" alt="Rating" />
                              </div>
                              <div>
                                 <span className="locationText">{business.landmark || 'Location not available'}</span>
                                 <span className="bulletText">{business.distance || 'N/A'} Km</span>
                              </div>
                              <div>
                                 <Link
                                    to={generateWhatsAppLink(business.whatsappNo)}
                                    className="chatBtn"
                                    target="_blank"
                                 >
                                    Chat
                                 </Link>
                                 <a href="#" className="shareBtn">Share</a>
                                 {/* <a href={`tel:${business.contactNumber || '#'}`} className="callBtn">Call Now</a> */}
                              </div>
                           </article>
                           <aside className="enquire_like">
                              <a href="#" className="likeBtn likeBtnActive">like</a>
                              <span className="bulletText">{business.enquiries || 0} People recently enquired</span>
                           </aside>
                        </div>
                     ))
                  ) : (
                     <p>No businesses found.</p>
                  )}
               </div>

               {/* <div class="borderBox px-20 mb-30 productItem">
                  <figure><img src="./images/card6.jpg" alt="" /></figure>
                  <article>
                     <h3>Studio Unisex Salon</h3>
                     <div><img src="./images/rating2.jpg" alt="" /></div>
                     <div><span class="locationText">Mira Bhayendar Road, Thane </span><span class="bulletText">2.5 Km</span></div>
                     <div><a href="#" class="callBtn">Call Now</a><a href="#" class="chatBtn">Chat</a><a href="#"
                        class="shareBtn">Share</a></div>
                  </article>
                  <aside class="enquire_like"><a href="#" class="likeBtn likeBtnActive">like</a><span class="bulletText">25 People recently enquired</span></aside>
               </div> */}
               <section className="highlightSecType1 mb-30">
                  <figure><img src="./images/gymBg.jpg" alt="" /></figure>
                  <aside>
                     <a href="#">
                        <span>Search Compare</span>
                        <h2>Prices & Book Gym</h2>
                        <strong>Get Best Deals</strong>
                     </a>
                  </aside>
               </section>
            </aside>
            <aside>
               <div className="cardType5 fullWidth">
                  <a href="#">
                     <img src="./images/pbImg1.jpg" className="transition" alt="" />
                     <div className="tl"><span>Dummy Text</span>Dummy Text </div>
                  </a>
               </div>
               <div className="cardType5 fullWidth">
                  <a href="#">
                     <img src="./images/pbImg2.jpg" className="transition" alt="" />
                     <div className="bl"><span>Dummy Text</span>Dummy Text </div>
                  </a>
               </div>
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
               | <a href="">Terms</a>
            </section>
         </footer>
      </>
   );
};

export default ProductList;;