import React from 'react';

const Header = (props) => {
   return (
      <div>
         <header>
            <section className="center"><a href="http://" className="logo"><img src="./images/namastelocal-logo.png" alt="Namastelocal" title="Namastelocal" /></a>
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

                  <div className="navLink"><a href="http://" >Advertise</a></div>
                  <div className="navLink"><a href="http://">List Your Business</a></div>

                  <div className="notificationHolder">
                     <div className="notification"><span>10</span></div>
                     <div className="notificationListHolder customScroll transition">
                        <ul className="noti_list">
                           <li><a href="#" className="command"><em>Lorem ipsum dolor sit amet, consectetur adipiscing<i>20 April 2017</i></em></a></li>
                           <li><a href="#" className="like"><em>Lorem ipsum dolor sit amet, consectetur adipiscing<i>20 April 2017</i></em></a></li>
                           <li><a href="#" className="command"><em>Lorem ipsum dolor sit amet, consectetur adipiscing<i>20 April 2017</i></em></a></li>
                           <li><a href="#" className="like"><em>Lorem ipsum dolor sit amet, consectetur adipiscing<i>20 April 2017</i></em></a></li>
                           <li><a href="#" className="command"><em>Lorem ipsum dolor sit amet, consectetur adipiscing<i>20 April 2017</i></em></a></li>
                        </ul>
                     </div>
                  </div>
                  <input type="button" className="btnType1" value="Login / signup" />
               </nav>
            </section>
         </header>
      </div>
   );
};

export default Header;