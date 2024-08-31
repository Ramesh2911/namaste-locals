import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SubProducts = (props) => {
   const navigate = useNavigate();
   const location = useLocation();
   const { children } = location.state || { children: [] };
   const [isNavOpen, setNavOpen] = useState(false);
   const toggleNav = () => {
      setNavOpen(!isNavOpen);
   };

   const iconclassNamees = ['iconPinkBg', 'iconYellowBg', 'iconSkyBg', 'iconGreenBg'];

   return (
      <>
         <div>
            <header>
               <section className="center">
                  <a href="http://" className="logo">
                     <img src="./images/namastelocal-logo.png" alt="Namastelocal" title="Namastelocal" />
                  </a>
                  <span className="mobNavTriger" id="mobNavTriger" onClick={toggleNav}>
                     Menu
                  </span>
                  <nav id="nav" className={`transition ${isNavOpen ? 'open' : ''}`}>
                     <div className="langDropdown">
                        <button className="langDropbtn">Select Language</button>
                        <div className="langDropdown-content">
                           <a href="#">English</a>
                           <a href="#">Spanish</a>
                           <a href="#">French</a>
                           <a href="#">German</a>
                        </div>
                     </div>

                     <div className="navLink">
                        <a href="http://">Advertise</a>
                     </div>
                     <div className="navLink">
                        <a href="http://">List Your Business</a>
                     </div>

                     <div className="notificationHolder">
                        <div className="notification">
                           <span>10</span>
                        </div>
                        <div className="notificationListHolder customScroll transition">
                           <ul className="noti_list">
                              <li>
                                 <a href="#" className="command">
                                    <em>
                                       Lorem ipsum dolor sit amet, consectetur adipiscing
                                       <i>20 April 2017</i>
                                    </em>
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="like">
                                    <em>
                                       Lorem ipsum dolor sit amet, consectetur adipiscing
                                       <i>20 April 2017</i>
                                    </em>
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="command">
                                    <em>
                                       Lorem ipsum dolor sit amet, consectetur adipiscing
                                       <i>20 April 2017</i>
                                    </em>
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="like">
                                    <em>
                                       Lorem ipsum dolor sit amet, consectetur adipiscing
                                       <i>20 April 2017</i>
                                    </em>
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="command">
                                    <em>
                                       Lorem ipsum dolor sit amet, consectetur adipiscing
                                       <i>20 April 2017</i>
                                    </em>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <input
                        type="button"
                        className="btnType1"
                        value="Login / Signup"
                        onClick={() => navigate('/login')}
                     />
                  </nav>
               </section>
            </header>
         </div>
         <section className="center searchSec mb-30 pt-30">
            <aside>
               <h2>Everything Near Mira Bhayendar Road</h2>
               <div className="top_search">
                  <input type="text" className="site_search" onFocus="if(this.value=='Site Search'){this.value=''}"
                     onblur="if(this.value==''){this.value='Site Search'}" value="Site Search" />
                  <input className="site_search_btn" type="button" value="" />
               </div>
            </aside>
         </section>
         <section className="center banner mb-30">
            <img src="./images/banner.jpg" alt="" />
         </section>
         <section className="center  mb-30">
            <div className="top_search">
               <input type="text" className="site_search" onFocus="if(this.value=='Site Search'){this.value=''}" onblur="if(this.value==''){this.value='Site Search'}" value="Site Search" />
            </div>
         </section>
         <section className="center quickLinks mb-30">
            {children?.map((child, index) => {
               return (
                  <Link
                     to={"/list-product"}
                     key={child.businessCategoryID}
                     state={{
                        businessCategoryID: child.businessCategoryID,
                        pincode: "700001",
                     }}
                  >
                     <span className={iconclassNamees[index % iconclassNamees.length]}>
                        <img
                           src={`http://staging.namastelocals.com/AppIcons/${child.categoryIcon}`}
                           alt={child.categoryName}
                        />
                     </span>
                     {child.categoryName}
                  </Link>
               );
            })}


            <a href="#"><span className="iconPinkBg"><img src="./images/icon-more.png" alt="" /></span>more</a>
         </section>
         <div>
            <footer>
               <div className="borderSec mb-30">
                  <section className="center footer1">
                     <aside>
                        <h3>Quick Links</h3>
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
                           <li><a href="#">Client Success</a></li>
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
               <section className="center footer2">
                  <span>Copyrights 2024. All Rights Reserved.</span> |
                  <a href="#">Privacy</a> |
                  <a href="#">Terms</a>
               </section>
            </footer>
         </div>
      </>
   );
};

export default SubProducts;
