import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BUSINESS_CATEGORY_LIST } from '../../../config/Api';


const Home = (props) => {
   const navigate = useNavigate();
   const [isNavOpen, setNavOpen] = useState(false);
   const [businessCategoryData, setBusinessCategoryData] = useState([]);
   const [showMore, setShowMore] = useState(false);

   const toggleNav = () => {
      setNavOpen(!isNavOpen);
   };

   useEffect(() => {
      fetchBusinessCategoryList();
   }, []);


   const fetchBusinessCategoryList = () => {
      props
         .callRequest("POST", API_BUSINESS_CATEGORY_LIST, true, null)
         .then(({ data }) => {
            setBusinessCategoryData(data?.categoryList?.children);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const categoriesToShow = showMore ? businessCategoryData : businessCategoryData.slice(0, 19);

   const iconClasses = ['iconPinkBg', 'iconYellowBg', 'iconSkyBg', 'iconGreenBg'];

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
         <div className="borderSec pt-0">
            <section className="center searchSec mb-30 pt-30">
               <aside>
                  <h2>Everything Near Mira Bhayendar Road</h2>
                  <div className="top_search">
                     <input type="text" className="site_search" onFocus="if(this.value=='Site Search'){this.value=''}" onBlur="if(this.value==''){this.value='Site Search'}" value="Site Search" />
                     <input className="site_search_btn" type="button" value="" />
                  </div>
               </aside>
               <aside className="downlodAppHolder">
                  <a className="downlodApp" href="#"><span>Downlod App</span><i>-</i></a>
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
            <section className="center highlightSecType2">
               <aside className="hst2Bg1">
                  <a href="">
                     <h2>Doctors</h2>
                     <span>Book Now</span>
                     <strong>Explore</strong></a>
               </aside>
               <aside className="hst2Bg2">
                  <a href="">
                     <h2>Repaire &amp; Services</h2>
                     <span>Get nearest vendor</span><strong>Explore</strong></a>
               </aside>
               <aside className="hst2Bg3">
                  <a href="">
                     <h2>Courier &amp; Services</h2>
                     <span>Get nearest vendor</span><strong>Explore</strong></a>
               </aside>
               <aside className="hst2Bg4">
                  <a href="">
                     <h2>Hospital</h2>
                     <span>Book Now</span><strong>Explore</strong></a>
               </aside>
            </section>
            <section className="center quickLinks">
               {categoriesToShow?.map((category, index) => (
                  <a href="#" key={category.businessCategoryID}>
                     <span className={iconClasses[index % iconClasses.length]}>
                        <img src={`http://staging.namastelocals.com/AppIcons/${category.categoryIcon}`} alt={category.categoryName} />
                     </span>
                     {category.categoryName}
                  </a>
               ))}
               <a href="#" onClick={() => setShowMore(!showMore)}>
                  <span className={showMore ? 'iconCloseBg' : 'iconMoreBg'}>
                     <img src={`./images/icon-${showMore ? 'cross' : 'more'}.png`} alt={showMore ? 'Less' : 'More'} />
                  </span>
                  {showMore ? 'Less' : 'More'}
               </a>
            </section>
         </div>
         <div className="borderSec">
            <section className="center">
               <h2 className="headingType1">Repair &amp; Services</h2>
               <ul className="slider mb-30 slick-initialized slick-slider">
                  <div aria-live="polite" className="slick-list draggable" tabIndex="0"><div className="slick-track" style={{ opacity: 1, width: '4896px', transform: 'translate3d(-1728px, 0px, 0px)' }}><li className="cardType1 slick-slide slick-cloned" data-slick-index="-5" aria-hidden="true" style={{ width: "258px" }}>
                     <figure>
                        <img src="./images/card3.jpg" alt="" />
                     </figure>
                     <div><h2>Bike Services</h2>
                        <a href="#">Enquire Now</a></div>
                  </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card4.jpg" alt="" />
                        </figure>
                        <div><h2>Computer Repair</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card1.jpg" alt="" />
                        </figure>
                        <div><h2>Security System Dealers</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card4.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card1.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide" data-slick-index="0" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/cardImg1.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType1 slick-slide slick-active" data-slick-index="1" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card2.jpg" alt="" />
                        </figure>
                        <div><h2>Car Services</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-active" data-slick-index="2" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card3.jpg" alt="" />
                        </figure>
                        <div><h2>Bike Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType1 slick-slide slick-active" data-slick-index="3" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card4.jpg" alt="" />
                        </figure>
                        <div><h2>Computer Repair</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-active" data-slick-index="4" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card1.jpg" alt="" />
                        </figure>
                        <div><h2>Security System Dealers</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-active" data-slick-index="5" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card4.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide" data-slick-index="6" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card1.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/cardImg1.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card2.jpg" alt="" />
                        </figure>
                        <div><h2>Car Services</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card3.jpg" alt="" />
                        </figure>
                        <div><h2>Bike Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card4.jpg" alt="" />
                        </figure>
                        <div><h2>Computer Repair</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card1.jpg" alt="" />
                        </figure>
                        <div><h2>Security System Dealers</h2>
                           <a href="#">Enquire Now</a></div>

                     </li></div></div>


                  <span href="" data-role="none"
                     className="ps_prev5" style={{ display: "block" }}>Previous</span><span href="" data-role="none" className="ps_next5" style={{ display: "block" }}>Next</span></ul>
            </section>
            <section className="center">
               <h2 className="headingType1">Daily Needs</h2>
               <ul className="slider mb-30 slick-initialized slick-slider">
                  <div aria-live="polite" className="slick-list draggable" tabIndex="0"><div className="slick-track" style={{ opacity: 1, width: "4896px", transform: "translate3d(-1440px, 0px, 0px)" }}><li className="cardType1 slick-slide slick-cloned" data-slick-index="-5" aria-hidden="true" style={{ width: "258px" }}>
                     <figure>
                        <img src="./images/dnThumb3.jpg" alt="" />
                     </figure>
                     <div><h2>Electrician</h2>
                        <a href="#">Enquire Now</a></div>
                  </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/dnThumb4.jpg" alt="" />
                        </figure>
                        <div><h2>Pest Control</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/dnThumb5.jpg" alt="" />
                        </figure>
                        <div><h2>Plumbing</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/dnThumb1.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/dnThumb2.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-active" data-slick-index="0" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/dnThumb1.jpg" alt="" />
                        </figure>
                        <div><h2>Grocery</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType1 slick-slide slick-active" data-slick-index="1" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/dnThumb2.jpg" alt="" />
                        </figure>
                        <div><h2>Movies</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-active" data-slick-index="2" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/dnThumb3.jpg" alt="" />
                        </figure>
                        <div><h2>Electrician</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType1 slick-slide slick-active" data-slick-index="3" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/dnThumb4.jpg" alt="" />
                        </figure>
                        <div><h2>Pest Control</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-active" data-slick-index="4" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/dnThumb5.jpg" alt="" />
                        </figure>
                        <div><h2>Plumbing</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide" data-slick-index="5" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/dnThumb1.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide" data-slick-index="6" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/dnThumb2.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/dnThumb1.jpg" alt="" />
                        </figure>
                        <div><h2>Grocery</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/dnThumb2.jpg" alt="" />
                        </figure>
                        <div><h2>Movies</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/dnThumb3.jpg" alt="" />
                        </figure>
                        <div><h2>Electrician</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/dnThumb4.jpg" alt="" />
                        </figure>
                        <div><h2>Pest Control</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/dnThumb5.jpg" alt="" />
                        </figure>
                        <div><h2>Plumbing</h2>
                           <a href="#">Enquire Now</a></div>

                     </li></div></div>

                  <span href="" data-role="none" className="ps_prev5" style={{ display: "block" }}>Previous</span><span href="" data-role="none" className="ps_next5" style={{ display: "block" }}>Next</span></ul></section>
            <section className="center">
               <h2 className="headingType1">Health &amp; Wellness</h2>
               <ul className="slider mb-30 slick-initialized slick-slider">
                  <div aria-live="polite" className="slick-list draggable" tabIndex="0"><div className="slick-track" style={{ opacity: 1, width: "4896px", transform: "translate3d(-1440px, 0px, 0px)" }}><li className="cardType1 slick-slide slick-cloned" data-slick-index="-5" aria-hidden="true" style={{ width: "258px" }}>
                     <figure>
                        <img src="./images/helthThumb3.jpg" alt="" />
                     </figure>
                     <div><h2>Salons</h2>
                        <a href="#">Enquire Now</a></div>
                  </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/helthThumb4.jpg" alt="" />
                        </figure>
                        <div><h2>Spa $ Massage</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/helthThumb5.jpg" alt="" />
                        </figure>
                        <div><h2>Yoga classNamees</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/helthThumb1.jpg" alt="" />
                        </figure>
                        <div><h2>Gym</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/helthThumb2.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-active" data-slick-index="0" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/helthThumb1.jpg" alt="" />
                        </figure>
                        <div><h2>Gym</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType1 slick-slide slick-active" data-slick-index="1" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/helthThumb2.jpg" alt="" />
                        </figure>
                        <div><h2>Beauty Parlours</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-active" data-slick-index="2" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/helthThumb3.jpg" alt="" />
                        </figure>
                        <div><h2>Salons</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType1 slick-slide slick-active" data-slick-index="3" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/helthThumb4.jpg" alt="" />
                        </figure>
                        <div><h2>Spa $ Massage</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-active" data-slick-index="4" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/helthThumb5.jpg" alt="" />
                        </figure>
                        <div><h2>Yoga classNamees</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide" data-slick-index="5" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/helthThumb1.jpg" alt="" />
                        </figure>
                        <div><h2>Gym</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide" data-slick-index="6" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/helthThumb2.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/helthThumb1.jpg" alt="" />
                        </figure>
                        <div><h2>Gym</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/helthThumb2.jpg" alt="" />
                        </figure>
                        <div><h2>Beauty Parlours</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/helthThumb3.jpg" alt="" />
                        </figure>
                        <div><h2>Salons</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/helthThumb4.jpg" alt="" />
                        </figure>
                        <div><h2>Spa $ Massage</h2>
                           <a href="#">Enquire Now</a></div>

                     </li><li className="cardType1 slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/helthThumb5.jpg" alt="" />
                        </figure>
                        <div><h2>Yoga classNamees</h2>
                           <a href="#">Enquire Now</a></div>

                     </li></div></div>
                  <span href="" data-role="none" className="ps_prev5" style={{ display: "block" }}>Previous</span><span href="" data-role="none" className="ps_next5" style={{ display: "block" }}>Next</span></ul></section>
         </div>
         <div className="borderSec">
            <section className="center">
               <h2 className="headingType1">Popular Searches</h2>
               <ul className="slider mb-30 slick-initialized slick-slider">
                  <div aria-live="polite" className="slick-list draggable" tabIndex="0"><div className="slick-track" style={{ opacity: 1, width: "5184px", transform: "translate3d(-2016px, 0px, 0px)" }}><li className="cardType2 slick-slide slick-cloned" data-slick-index="-5" aria-hidden="true" style={{ width: "258px" }}>
                     <figure>
                        <img src="./images/card7.jpg" alt="" />
                     </figure>
                     <div><h2>Ac Services</h2>
                        <a href="#">Enquire Now</a></div>
                  </li><li className="cardType2 slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card8.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType2 slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card5.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType2 slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card6.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType2 slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card7.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType2 slick-slide" data-slick-index="0" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/cardImg2.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType2 slick-slide" data-slick-index="1" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card5.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType2 slick-slide slick-active" data-slick-index="2" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card6.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType2 slick-slide slick-active" data-slick-index="3" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card7.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType2 slick-slide slick-active" data-slick-index="4" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card8.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType2 slick-slide slick-active" data-slick-index="5" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card5.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType2 slick-slide slick-active" data-slick-index="6" aria-hidden="false" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card6.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType2 slick-slide" data-slick-index="7" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card7.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType2 slick-slide slick-cloned" data-slick-index="8" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/cardImg2.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType2 slick-slide slick-cloned" data-slick-index="9" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card5.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType2 slick-slide slick-cloned" data-slick-index="10" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card6.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType2 slick-slide slick-cloned" data-slick-index="11" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card7.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li><li className="cardType2 slick-slide slick-cloned" data-slick-index="12" aria-hidden="true" style={{ width: "258px" }}>
                        <figure>
                           <img src="./images/card8.jpg" alt="" />
                        </figure>
                        <div><h2>Ac Services</h2>
                           <a href="#">Enquire Now</a></div>
                     </li></div></div>
                  <span href="" data-role="none" className="ps_prev5" style={{ display: "block" }}>Previous</span><span href="" data-role="none" className="ps_next5" style={{ display: "block" }}>Next</span></ul>
            </section>
            <section className="center mb-30">
               <h2 className="headingType1">Recently Activity</h2>
               <ul className="activity">
                  <li className="cardType3">
                     <div><aside><h2>Packers &amp; Movers Name</h2><span>Mira Bhayander Road</span></aside><a href="#" className="chatBtnRed">Chat</a></div>
                     <figure><img src="./images/cardImg3.jpg" alt="" /></figure>
                     <article>
                        <div className="customer">
                           <figure><img src="./images/customer.jpg" alt="" /></figure>
                           <aside><strong>Customer Name</strong><span>Write a review</span></aside></div>
                        <div className="rating"><img src="./images/rating.jpg" alt="" /></div>
                        <p>Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                           Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                           Dummy Text Dummy Text Dummy Text Dummy...</p>
                     </article>
                  </li>
                  <li className="cardType3">
                     <div><aside><h2>Packers &amp; Movers Name</h2><span>Mira Bhayander Road</span></aside><a href="#" className="chatBtnRed">Chat</a></div>
                     <figure><img src="./images/cardType3-1.jpg" alt="" /></figure>
                     <article>
                        <div className="customer">
                           <figure><img src="./images/customer.jpg" alt="" /></figure>
                           <aside><strong>Customer Name</strong><span>Write a review</span></aside></div>
                        <div className="rating"><img src="./images/rating.jpg" alt="" /></div>
                        <p>Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                           Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                           Dummy Text Dummy Text Dummy Text Dummy...</p>
                     </article>
                  </li>
                  <li className="cardType3">
                     <div><aside><h2>Packers &amp; Movers Name</h2><span>Mira Bhayander Road</span></aside><a href="#" className="chatBtnRed">Chat</a></div>
                     <figure><img src="./images/cardType3-2.jpg" alt="" /></figure>
                     <article>
                        <div className="customer">
                           <figure><img src="./images/customer.jpg" alt="" /></figure>
                           <aside><strong>Customer Name</strong><span>Write a review</span></aside></div>
                        <div className="rating"><img src="./images/rating.jpg" alt="" /></div>
                        <p>Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                           Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                           Dummy Text Dummy Text Dummy Text Dummy...</p>
                     </article>
                  </li>
                  <li className="cardType3">
                     <div><aside><h2>Packers &amp; Movers Name</h2><span>Mira Bhayander Road</span></aside><a href="#" className="chatBtnRed">Chat</a></div>
                     <figure><img src="./images/cardType3-3.jpg" alt="" /></figure>
                     <article>
                        <div className="customer">
                           <figure><img src="./images/customer.jpg" alt="" /></figure>
                           <aside><strong>Customer Name</strong><span>Write a review</span></aside></div>
                        <div className="rating"><img src="./images/rating.jpg" alt="" /></div>
                        <p>Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                           Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                           Dummy Text Dummy Text Dummy Text Dummy...</p>
                     </article>
                  </li>
                  <li className="cardType3">
                     <div><aside><h2>Packers &amp; Movers Name</h2><span>Mira Bhayander Road</span></aside><a href="#" className="chatBtnRed">Chat</a></div>
                     <figure><img src="./images/cardType3-4.jpg" alt="" /></figure>
                     <article>
                        <div className="customer">
                           <figure><img src="./images/customer.jpg" alt="" /></figure>
                           <aside><strong>Customer Name</strong><span>Write a review</span></aside></div>
                        <div className="rating"><img src="./images/rating.jpg" alt="" /></div>
                        <p>Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                           Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                           Dummy Text Dummy Text Dummy Text Dummy...</p>
                     </article>
                  </li>
                  <li className="cardType3">
                     <div><aside><h2>Packers &amp; Movers Name</h2><span>Mira Bhayander Road</span></aside><a href="#" className="chatBtnRed">Chat</a></div>
                     <figure><img src="./images/cardType3-5.jpg" alt="" /></figure>
                     <article>
                        <div className="customer">
                           <figure><img src="./images/customer.jpg" alt="" /></figure>
                           <aside><strong>Customer Name</strong><span>Write a review</span></aside></div>
                        <div className="rating"><img src="./images/rating.jpg" alt="" /></div>
                        <p>Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                           Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                           Dummy Text Dummy Text Dummy Text Dummy...</p>
                     </article>
                  </li>
               </ul>
               <div className="loadMore"><a href="#">Load More</a></div>
            </section>
            <section className="center mb-30">
               <h2 className="headingType1">heading</h2>
               <ul className="slider2 slick-initialized slick-slider">
                  <div aria-live="polite" className="slick-list draggable" tabIndex="0"><div className="slick-track" style={{ opacity: 1, width: "4800px", transform: "translate3d(-1440px, 0px, 0px)" }}><li className="cardType4 slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" style={{ width: "450px" }}>
                     <figure><img src="./images/cardType4-2.jpg" alt="" /></figure>
                     <article>
                        <p>Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                           Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                           Dummy Text Dummy Text Dummy Text Dummy...</p>

                        <a href="#" className="link_btn">Explore</a>
                     </article>
                  </li><li className="cardType4 slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style={{ width: "450px" }}>
                        <figure><img src="./images/cardType4-3.jpg" alt="" /></figure>
                        <article>
                           <p>Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                              Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                              Dummy Text Dummy Text Dummy Text Dummy...</p>

                           <a href="#" className="link_btn">Explore</a>
                        </article>
                     </li><li className="cardType4 slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style={{ width: "450px" }}>
                        <figure><img src="./images/cardType4-4.jpg" alt="" /></figure>
                        <article>
                           <p>Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                              Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                              Dummy Text Dummy Text Dummy Text Dummy...</p>

                           <a href="#" className="link_btn">Explore</a>
                        </article>
                     </li><li className="cardType4 slick-slide slick-active" data-slick-index="0" aria-hidden="false" style={{ width: "450px" }}>
                        <figure><img src="./images/cardType4-1.jpg" alt="" /></figure>
                        <article>
                           <p>Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                              Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                              Dummy Text Dummy Text Dummy Text Dummy...</p>

                           <a href="#" className="link_btn">Explore</a>
                        </article>
                     </li><li className="cardType4 slick-slide slick-active" data-slick-index="1" aria-hidden="false" style={{ width: "450px" }}>
                        <figure><img src="./images/cardType4-2.jpg" alt="" /></figure>
                        <article>
                           <p>Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                              Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                              Dummy Text Dummy Text Dummy Text Dummy...</p>

                           <a href="#" className="link_btn">Explore</a>
                        </article>
                     </li><li className="cardType4 slick-slide slick-active" data-slick-index="2" aria-hidden="false" style={{ width: "450px" }}>
                        <figure><img src="./images/cardType4-3.jpg" alt="" /></figure>
                        <article>
                           <p>Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                              Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                              Dummy Text Dummy Text Dummy Text Dummy...</p>

                           <a href="#" className="link_btn">Explore</a>
                        </article>
                     </li><li className="cardType4 slick-slide" data-slick-index="3" aria-hidden="true" style={{ width: "450px" }}>
                        <figure><img src="./images/cardType4-4.jpg" alt="" /></figure>
                        <article>
                           <p>Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                              Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                              Dummy Text Dummy Text Dummy Text Dummy...</p>

                           <a href="#" className="link_btn">Explore</a>
                        </article>
                     </li><li className="cardType4 slick-slide slick-cloned" data-slick-index="4" aria-hidden="true" style={{ width: "450px" }}>
                        <figure><img src="./images/cardType4-1.jpg" alt="" /></figure>
                        <article>
                           <p>Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                              Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                              Dummy Text Dummy Text Dummy Text Dummy...</p>

                           <a href="#" className="link_btn">Explore</a>
                        </article>
                     </li><li className="cardType4 slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" style={{ width: "450px" }}>
                        <figure><img src="./images/cardType4-2.jpg" alt="" /></figure>
                        <article>
                           <p>Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                              Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                              Dummy Text Dummy Text Dummy Text Dummy...</p>

                           <a href="#" className="link_btn">Explore</a>
                        </article>
                     </li><li className="cardType4 slick-slide slick-cloned" data-slick-index="6" aria-hidden="true" style={{ width: "450px" }}>
                        <figure><img src="./images/cardType4-3.jpg" alt="" /></figure>
                        <article>
                           <p>Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                              Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                              Dummy Text Dummy Text Dummy Text Dummy...</p>

                           <a href="#" className="link_btn">Explore</a>
                        </article>
                     </li></div></div>
                  <span href="" data-role="none" className="ps_prev5" style={{ display: "block" }}>Previous</span><span href="" data-role="none" className="ps_next5" style={{ display: "block" }}>Next</span></ul>
            </section>
            <section className="center mb-30">
               <h2 className="headingType1">Popular Brands</h2>
               <ul className="slider2 slick-initialized slick-slider">
                  <div aria-live="polite" className="slick-list draggable" tabIndex="0"><div className="slick-track" style={{ opacity: 1, width: "5280px", transform: "translate3d(-1440px, 0px, 0px)" }}><li className="cardType5 slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" style={{ width: "450px" }}><a href="#"><img src="./images/pbImg3.jpg" className="transition" alt="" /><div className="tr"><span>Dummy Text</span>Dummy Text </div></a></li><li className="cardType5 slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style={{ width: "450px" }}><a href="#"><img src="./images/pbImg2.jpg" className="transition" alt="" /><div className="br"><span>Dummy Text</span>Dummy Text </div></a></li><li className="cardType5 slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style={{ width: "450px" }}><a href="#"><img src="./images/pbImg3.jpg" className="transition" alt="" /><div className="br"><span>Dummy Text</span>Dummy Text </div></a></li><li className="cardType5 slick-slide slick-active" data-slick-index="0" aria-hidden="false" style={{ width: "450px" }}><a href="#"><img src="./images/pbImg1.jpg" className="transition" alt="" /><div className="tl"><span>Dummy Text</span>Dummy Text </div></a></li><li className="cardType5 slick-slide slick-active" data-slick-index="1" aria-hidden="false" style={{ width: "450px" }}><a href="#"><img src="./images/pbImg2.jpg" className="transition" alt="" /><div className="bl"><span>Dummy Text</span>Dummy Text </div></a></li><li className="cardType5 slick-slide slick-active" data-slick-index="2" aria-hidden="false" style={{ width: "450px" }}><a href="#"><img src="./images/pbImg3.jpg" className="transition" alt="" /><div className="tr"><span>Dummy Text</span>Dummy Text </div></a></li><li className="cardType5 slick-slide" data-slick-index="3" aria-hidden="true" style={{ width: "450px" }}><a href="#"><img src="./images/pbImg2.jpg" className="transition" alt="" /><div className="br"><span>Dummy Text</span>Dummy Text </div></a></li><li className="cardType5 slick-slide" data-slick-index="4" aria-hidden="true" style={{ width: "450px" }}><a href="#"><img src="./images/pbImg3.jpg" className="transition" alt="" /><div className="br"><span>Dummy Text</span>Dummy Text </div></a></li><li className="cardType5 slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" style={{ width: "450px" }}><a href="#"><img src="./images/pbImg1.jpg" className="transition" alt="" /><div className="tl"><span>Dummy Text</span>Dummy Text </div></a></li><li className="cardType5 slick-slide slick-cloned" data-slick-index="6" aria-hidden="true" style={{ width: "450px" }}><a href="#"><img src="./images/pbImg2.jpg" className="transition" alt="" /><div className="bl"><span>Dummy Text</span>Dummy Text </div></a></li><li className="cardType5 slick-slide slick-cloned" data-slick-index="7" aria-hidden="true" style={{ width: "450px" }}><a href="#"><img src="./images/pbImg3.jpg" className="transition" alt="" /><div className="tr"><span>Dummy Text</span>Dummy Text </div></a></li></div></div>
                  <span href="" data-role="none" className="ps_prev5" style={{ display: "block" }}>Previous</span><span href="" data-role="none" className="ps_next5" style={{ display: "block" }}>Next</span></ul>
            </section>
         </div>
         <div className="sMediaSec">
            <section className="center">
               <div className="sMedia">
                  <strong>Follow us on</strong>
                  <div>
                     <a href="#" className="facebook"><span>facebook</span></a>
                     <a href="#" className="imstaGram"><span>twitter</span></a>
                     <a href="#" className="lindin"><span>youtube</span></a>
                     <a href="#" className="imstaGram"><span>twitter</span></a>
                  </div>
               </div>
               <aside>
                  <a href="#"><img src="./images/google-play-store.png" alt="Google Play Store" /></a>
                  <a href="#"><img src="./images/app-store.png" alt="App Store" /></a>
               </aside>
            </section>
         </div>
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

export default Home;
