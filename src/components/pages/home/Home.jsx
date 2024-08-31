import React, { useEffect, useRef, useState, } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { API_BUSINESS_CATEGORY_LIST } from '../../../config/Api';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Home = (props) => {
   const navigate = useNavigate();
   const repairCarousel = useRef(null);
   const dailyCarousel = useRef(null);
   const healthCarousel = useRef(null);
   const popularSearchesCarousel = useRef(null);
   const headingCarousel = useRef(null);
   const popularBrandsCarousel = useRef(null);
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


   const items = [
      {
         imgSrc: './images/card3.jpg',
         title: 'Bike Services',
         link: '#'
      },
      {
         imgSrc: './images/card4.jpg',
         title: 'Computer Repair',
         link: '#'
      },
      {
         imgSrc: './images/card1.jpg',
         title: 'Security System Dealers',
         link: '#'
      },
      {
         imgSrc: './images/card4.jpg',
         title: 'Ac Services',
         link: '#'
      },
      {
         imgSrc: './images/card1.jpg',
         title: 'Ac Services',
         link: '#'
      },
      {
         imgSrc: './images/cardImg1.jpg',
         title: 'Ac Services',
         link: '#'
      },
      {
         imgSrc: './images/card2.jpg',
         title: 'Car Services',
         link: '#'
      }
   ];

   const renderItems = () =>
      items.map((item, index) => (
         <div className="cardType1" key={index}>
            <figure>
               <img src={item.imgSrc} alt={item.title} />
            </figure>
            <div>
               <h2>{item.title}</h2>
               <a href={item.link}>Enquire Now</a>
            </div>
         </div>
      ));

   const dailyItems = [
      {
         imgSrc: './images/dnThumb3.jpg',
         title: 'Electrician',
         link: '#'
      },
      {
         imgSrc: './images/dnThumb4.jpg',
         title: 'Pest Control',
         link: '#'
      },
      {
         imgSrc: './images/dnThumb5.jpg',
         title: 'Plumbing',
         link: '#'
      },
      {
         imgSrc: './images/dnThumb1.jpg',
         title: 'Ac Services',
         link: '#'
      },
      {
         imgSrc: './images/dnThumb2.jpg',
         title: 'Ac Services',
         link: '#'
      },
      {
         imgSrc: './images/dnThumb1.jpg',
         title: 'Grocery',
         link: '#'
      },
      {
         imgSrc: './images/dnThumb2.jpg',
         title: 'Movies',
         link: '#'
      },
      {
         imgSrc: './images/dnThumb3.jpg',
         title: 'Electrician',
         link: '#'
      },
      {
         imgSrc: './images/dnThumb3.jpg',
         title: 'Electrician',
         link: '#'
      },
      {
         imgSrc: './images/dnThumb4.jpg',
         title: 'Pest Control',
         link: '#'
      },
      {
         imgSrc: './images/dnThumb5.jpg',
         title: 'Plumbing',
         link: '#'
      },
      {
         imgSrc: './images/dnThumb1.jpg',
         title: 'Ac Services',
         link: '#'
      },
      {
         imgSrc: './images/dnThumb2.jpg',
         title: 'Ac Services',
         link: '#'
      },
      {
         imgSrc: './images/dnThumb1.jpg',
         title: 'Grocery',
         link: '#'
      },
      {
         imgSrc: './images/dnThumb2.jpg',
         title: 'Movies',
         link: '#'
      },
      {
         imgSrc: './images/dnThumb3.jpg',
         title: 'Electrician',
         link: '#'
      },
      {
         imgSrc: './images/dnThumb4.jpg',
         title: 'Plumbing',
         link: '#'
      },
   ];

   const dailyRenderItems = () =>
      dailyItems.map((item, index) => (
         <div className="cardType1" key={index}>
            <figure>
               <img src={item.imgSrc} alt={item.title} />
            </figure>
            <div>
               <h2>{item.title}</h2>
               <a href={item.link}>Enquire Now</a>
            </div>
         </div>
      ));

   const helthItems = [
      {
         imgSrc: './images/helthThumb3.jpg',
         title: 'Salons',
         link: '#'
      },
      {
         imgSrc: './images/helthThumb4.jpg',
         title: 'Spa $ Massage',
         link: '#'
      },
      {
         imgSrc: './images/helthThumb5.jpg',
         title: 'Yoga classNamees',
         link: '#'
      },
      {
         imgSrc: './images/helthThumb1.jpg',
         title: 'Gym',
         link: '#'
      },
      {
         imgSrc: './images/helthThumb2.jpg',
         title: 'Beauty Parlours',
         link: '#'
      },
      {
         imgSrc: './images/helthThumb3.jpg',
         title: 'Salons',
         link: '#'
      },
      {
         imgSrc: './images/helthThumb4.jpg',
         title: 'Spa $ Massage',
         link: '#'
      },
      {
         imgSrc: './images/helthThumb5.jpg',
         title: 'Yoga classNamees',
         link: '#'
      },
      {
         imgSrc: './images/helthThumb1.jpg',
         title: 'Gym',
         link: '#'
      },
   ];

   const helthRenderItems = () =>
      helthItems.map((item, index) => (
         <div className="cardType1" key={index}>
            <figure>
               <img src={item.imgSrc} alt={item.title} />
            </figure>
            <div>
               <h2>{item.title}</h2>
               <a href={item.link}>Enquire Now</a>
            </div>
         </div>
      ));

   const PopularSearchesItems = [
      {
         imgSrc: './images/card7.jpg',
         title: 'Ac Services',
         link: '#'
      },
      {
         imgSrc: './images/card8.jpg',
         title: 'Ac Services',
         link: '#'
      },
      {
         imgSrc: './images/card5.jpg',
         title: 'Ac Services',
         link: '#'
      },
      {
         imgSrc: './images/card6.jpg',
         title: 'Ac Services',
         link: '#'
      },
      {
         imgSrc: './images/card8.jpg',
         title: 'Ac Services',
         link: '#'
      },
      {
         imgSrc: './images/cardImg2.jpg',
         title: 'Ac Services',
         link: '#'
      },
      {
         imgSrc: './images/card7.jpg',
         title: 'Ac Services',
         link: '#'
      }
   ];

   const PopularSearchesRenderItems = () =>
      PopularSearchesItems.map((item, index) => (
         <div className="cardType2" key={index}>
            <figure>
               <img src={item.imgSrc} alt={item.title} />
            </figure>
            <div>
               <h2>{item.title}</h2>
               <a href={item.link}>Enquire Now</a>
            </div>
         </div>
      ));

   const headingItems = [
      {
         imgSrc: './images/cardType4-2.jpg',
         text: 'Dummy Text Dummy Text Dummy Text Dummy Text Dummy Dummy Text Dummy Text Dummy Text Dummy Text Dummy Dummy Text Dummy Text Dummy Text Dummy...',
         link: '#'
      },
      {
         imgSrc: './images/cardType4-3.jpg',
         text: 'Dummy Text Dummy Text Dummy Text Dummy Text Dummy Dummy Text Dummy Text Dummy Text Dummy Text Dummy Dummy Text Dummy Text Dummy Text Dummy...',
         link: '#'
      },
      {
         imgSrc: './images/cardType4-1.jpg',
         text: 'Dummy Text Dummy Text Dummy Text Dummy Text Dummy Dummy Text Dummy Text Dummy Text Dummy Text Dummy Dummy Text Dummy Text Dummy Text Dummy...',
         link: '#'
      },
      {
         imgSrc: './images/cardType4-4.jpg',
         text: 'Dummy Text Dummy Text Dummy Text Dummy Text Dummy Dummy Text Dummy Text Dummy Text Dummy Text Dummy Dummy Text Dummy Text Dummy Text Dummy...',
         link: '#'
      },
      {
         imgSrc: './images/cardType4-1.jpg',
         text: 'Dummy Text Dummy Text Dummy Text Dummy Text Dummy Dummy Text Dummy Text Dummy Text Dummy Text Dummy Dummy Text Dummy Text Dummy Text Dummy...',
         link: '#'
      }
   ];

   const headingRenderItems = () =>
      headingItems.map((item, index) => (
         <div className="cardType4" key={index}>
            <figure>
               <img src={item.imgSrc} alt={item.text} />
            </figure>
            <article>
               <p>{item.text}</p>
               <a href={item.link} className="link_btn">Explore</a>
            </article>
         </div>
      ));

   const popularBrandsItems = [
      {
         imgSrc: './images/pbImg1.jpg',
         altText: 'Image 1',
         divClass: 'tl',
         spanText: 'Dummy Text',
         description: 'Dummy Text'
      },
      {
         imgSrc: './images/pbImg2.jpg',
         altText: 'Image 2',
         divClass: 'bl',
         spanText: 'Dummy Text',
         description: 'Dummy Text'
      },
      {
         imgSrc: './images/pbImg3.jpg',
         altText: 'Image 3',
         divClass: 'tr',
         spanText: 'Dummy Text',
         description: 'Dummy Text'
      },
      {
         imgSrc: './images/pbImg2.jpg',
         altText: 'Image 2',
         divClass: 'bl',
         spanText: 'Dummy Text',
         description: 'Dummy Text'
      },
      {
         imgSrc: './images/pbImg3.jpg',
         altText: 'Image 3',
         divClass: 'tr',
         spanText: 'Dummy Text',
         description: 'Dummy Text'
      },
   ];

   const handleDragStart = (e) => e.preventDefault();

   const popularBrandsRenderItems = () =>
      popularBrandsItems.map((item, index) => (
         <div className="cardType5" key={index}>
            <a href="#">
               <img src={item.imgSrc} alt={item.altText} className="transition" onDragStart={handleDragStart} />
               <div className={item.divClass}>
                  <span>{item.spanText}</span>
                  {item.description}
               </div>
            </a>
         </div>
      ));


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
                     <input
                        type="text"
                        className="site_search"
                        //onFocus="if(this.value=='Site Search'){this.value=''}"
                        //onBlur="if(this.value==''){this.value='Site Search'}"
                        value="Site Search"
                     />
                     <input
                        className="site_search_btn"
                        type="button"
                        value="" />
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
                  <Link
                     to={category.children && category.children.length > 0 ? "/subProducts" : "/list-product"}
                     key={category.businessCategoryID}
                     state={{
                        businessCategoryID: category.businessCategoryID,
                        categoryName: category.categoryName,
                        pincode: "700001",
                        children: category.children
                     }}
                  >
                     <span className={iconClasses[index % iconClasses.length]}>
                        <img src={`http://staging.namastelocals.com/AppIcons/${category.categoryIcon}`} alt={category.categoryName} />
                     </span>
                     {category.categoryName}
                  </Link>
               ))}
               <Link to="#" onClick={() => setShowMore(!showMore)}>
                  <span className={showMore ? 'iconCloseBg' : 'iconMoreBg'}>
                     <img src={`./images/icon-${showMore ? 'cross' : 'more'}.png`} alt={showMore ? 'Less' : 'More'} />
                  </span>
                  {showMore ? 'Less' : 'More'}
               </Link>
            </section>
         </div>
         <div className="borderSec">
            <section className="center">
               <h2 className="headingType1">Repair &amp; Services</h2>
               <div className="slider mb-30">
                  <AliceCarousel
                     mouseTracking
                     disableDotsControls
                     disableButtonsControls
                     items={renderItems()}
                     ref={repairCarousel}
                     responsive={{
                        0: { items: 1 },
                        600: { items: 3 },
                        1024: { items: 5 },
                     }}
                  />
                  <button className="ps_prev5" onClick={() => repairCarousel.current.slidePrev()}>Previous</button>
                  <button className="ps_next5" onClick={() => repairCarousel.current.slideNext()}>Next</button>
               </div>
            </section>
            <section className="center">
               <h2 className="headingType1">Daily Needs</h2>
               <div className="slider mb-30">
                  <AliceCarousel
                     mouseTracking
                     disableDotsControls
                     disableButtonsControls
                     items={dailyRenderItems()}
                     ref={dailyCarousel}
                     responsive={{
                        0: { items: 1 },
                        600: { items: 3 },
                        1024: { items: 5 },
                     }}
                  />
                  <button className="ps_prev5" onClick={() => dailyCarousel.current.slidePrev()}>Previous</button>
                  <button className="ps_next5" onClick={() => dailyCarousel.current.slideNext()}>Next</button>
               </div>
            </section>
            <section className="center">
               <h2 className="headingType1">Health &amp; Wellness</h2>
               <div className="slider mb-30">
                  <AliceCarousel
                     mouseTracking
                     disableDotsControls
                     disableButtonsControls
                     items={helthRenderItems()}
                     ref={healthCarousel}
                     responsive={{
                        0: { items: 1 },
                        600: { items: 3 },
                        1024: { items: 5 },
                     }}
                  />
                  <button className="ps_prev5" onClick={() => healthCarousel.current.slidePrev()}>Previous</button>
                  <button className="ps_next5" onClick={() => healthCarousel.current.slideNext()}>Next</button>
               </div>
            </section>
         </div>
         <div className="borderSec">
            <section className="center">
               <h2 className="headingType1">Popular Searches</h2>
               <div className="slider mb-30">
                  <AliceCarousel
                     mouseTracking
                     disableDotsControls
                     disableButtonsControls
                     items={PopularSearchesRenderItems()}
                     ref={popularSearchesCarousel}
                     responsive={{
                        0: { items: 1 },
                        600: { items: 3 },
                        1024: { items: 5 },
                     }}
                  />
                  <button className="ps_prev5" onClick={() => popularSearchesCarousel.current.slidePrev()}>Previous</button>
                  <button className="ps_next5" onClick={() => popularSearchesCarousel.current.slideNext()}>Next</button>
               </div>
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
               <h2 className="headingType1">Heading</h2>
               <AliceCarousel
                  mouseTracking
                  disableDotsControls
                  disableButtonsControls
                  items={headingRenderItems()}
                  ref={headingCarousel}
                  responsive={{
                     0: { items: 1 },
                     1024: { items: 3 },
                  }}
               />
               <button className="ps_prev5" onClick={() => headingCarousel.current.slidePrev()}>Previous</button>
               <button className="ps_next5" onClick={() => headingCarousel.current.slideNext()}>Next</button>
            </section>
            <section className="center mb-30">
               <h2 className="headingType1">Popular Brands</h2>
               <AliceCarousel
                  mouseTracking
                  disableDotsControls
                  disableButtonsControls
                  items={popularBrandsRenderItems()}
                  ref={popularBrandsCarousel}
                  responsive={{
                     0: { items: 1 },
                     600: { items: 2 },
                     1024: { items: 3 },
                  }}
               />
               <button className="ps_prev5" onClick={() => popularBrandsCarousel.current.slidePrev()}>Previous</button>
               <button className="ps_next5" onClick={() => popularBrandsCarousel.current.slideNext()}>Next</button>
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
