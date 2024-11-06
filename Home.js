import React from 'react'
import Navbar from './Navbar'
import { FaPlane,FaLock, FaHeadset,FaSearch,FaExternalLinkAlt,FaPinterestP,FaLinkedinIn,FaTwitter,FaInstagram, FaHeart,FaEnvelope, FaEye,FaStar,FaPhoneAlt, FaStarHalf, FaMapMarkedAlt,FaFacebookF,FaLink} from "react-icons/fa";
// Import Swiper styles
import { Swiper , SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Autoplay } from 'swiper/modules';

const Home = () => {
    const swiperOptionsOne = {
        breakpoints: {
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        }
        },
        loop:true,
    };

    const swiperOptionsTwo={
        breakpoints: {
            0:{
                slidesPerView: 1,
                spaceBetween:10,
            },
            450:{
                slidesPerView: 2,
                spaceBetween:10,
            },
            768:{
                slidesPerView: 3,
                spaceBetween:10,
            },
            1024:{
                slidesPerView: 4,
            },
        },
        loop:true,
        centeredSlides:true,
        spaceBetween:10,

    };

    const swiperOptionsThree={
      breakpoints: {
          0:{
              slidesPerView: 1,
              spaceBetween:10,
          },
          450:{
              slidesPerView: 2,
              spaceBetween:10,
          },
          768:{
              slidesPerView: 3,
              spaceBetween:10,
          },
          1024:{
              slidesPerView: 3,
          },
      },
      loop:true,
      centeredSlides:true,
      spaceBetween:10,

  };


    return (
        <div className='home-container'>
            <Navbar/>

            <section className='home'id='home'>
                <div className='row'>
                    <div className='content'>
                        <h3>Upto 55% OFF</h3>
                        <p>Get all your favourite books at Bookly!!
                            Enjoy exciting offers
                            Get home delivered
                        </p>
                        <a href="\#" className='btn'>Shop Now</a>
                    </div>

                    <div className='swiper'>
                    <Swiper
                        watchSlidesProgress={true}
                        slidesPerView={3}
                        autoplay={{
                            delay:9500,
                            disableOnInteraction:false,
                        }}
                        pagination={{
                          clickable: true,
                        }}
                        modules={[Autoplay]}
                        className="book-list"
                        {...swiperOptionsOne}
                    >
                        <a href="\#" className="swiper-slide">
                        <SwiperSlide><img src='image/book-1.jpg' alt=''/></SwiperSlide>
                        </a>
                        <a href="\#" className="swiper-slide">
                        <SwiperSlide><img src='image/book-2.jpg' alt=''/></SwiperSlide>
                        </a>
                        <a href="\#" className="swiper-slide">
                        <SwiperSlide><img src='image/book-3.jpg' alt=''/></SwiperSlide>
                        </a>
                        <a href="\#" className="swiper-slide">
                        <SwiperSlide><img src='image/book-4.jpg' alt=''/></SwiperSlide>
                        </a>
                        <a href="\#" className="swiper-slide">
                        <SwiperSlide><img src='image/book-5.jpg' alt=''/></SwiperSlide>
                        </a>
                        <a href="\#" className="swiper-slide">
                        <SwiperSlide><img src='image/book-6.jpg' alt=''/></SwiperSlide>
                        </a>
                    </Swiper>
                    

                    </div>

                </div>

            </section>

            <section className='icons-container'>
                <div className='icons'>
                    <i><FaPlane /></i>
                    <div className='content'>
                        <h3>Worldwide Shipping</h3>
                        <p>over payment $100</p>
                    </div>
                </div>
                <div className='icons'>
                    <i><FaLock /></i>
                    <div className='content'>
                        <h3>Privacy</h3>
                        <p>Your details safe with us</p>
                    </div>
                </div>
                <div className='icons'>
                    <i><FaHeadset /></i>
                    <div className='content'>
                        <h3>Audiobooks</h3>
                        <p>Get audiobooks for your purchased books</p>
                    </div>
                </div>
            </section>

            <section className='featured' id='featured'>
                <div className="heading"><span>featured books</span></div>
                <div className="swiper">

                    <Swiper
                       watchSlidesProgress={true}
                       autoplay={{
                       delay: 3500,
                       disableOnInteraction: false
                       }}
                       modules={[Autoplay]}
                       className="featured-slider"
                       {...swiperOptionsTwo}
                    >
                      <SwiperSlide>
                        <div className='box'>
                            <div className='icons'>
                                <a hredf='\#'><FaSearch /></a>
                                <a hredf='\#'><FaHeart /></a>
                                <a hredf='\#'><FaEye /></a>
                            </div>
                            <div className="image">
                              <img src="image/book-1.jpg" alt="" />
                            </div>
                            <div className="content">
                              <h3>featured book</h3>
                              <div className="price">$15.99 <span>$20.99</span></div>
                              <a href="#" className='btn'>add to cart</a>
                            </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className='box'>
                            <div className='icons'>
                                <a hredf='\#'><FaSearch /></a>
                                <a hredf='\#'><FaHeart /></a>
                                <a hredf='\#'><FaEye /></a>
                            </div>
                            <div className="image">
                              <img src="image/book-2.jpg" alt="" />
                            </div>
                            <div className="content">
                              <h3>featured book</h3>
                              <div className="price">$16.99 <span>$21.99</span></div>
                              <a href="#" className='btn'>add to cart</a>
                            </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className='box'>
                            <div className='icons'>
                                <a hredf='\#'><FaSearch /></a>
                                <a hredf='\#'><FaHeart /></a>
                                <a hredf='\#'><FaEye /></a>
                            </div>
                            <div className="image">
                              <img src="image/book-3.jpg" alt="" />
                            </div>
                            <div className="content">
                              <h3>featured book</h3>
                              <div className="price">$17.99 <span>$22.99</span></div>
                              <a href="#" className='btn'>add to cart</a>
                            </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className='box'>
                            <div className='icons'>
                                <a hredf='\#'><FaSearch /></a>
                                <a hredf='\#'><FaHeart /></a>
                                <a hredf='\#'><FaEye /></a>
                            </div>
                            <div className="image">
                              <img src="image/book-4.jpg" alt="" />
                            </div>
                            <div className="content">
                              <h3>featured book</h3>
                              <div className="price">$15.99 <span>$20.99</span></div>
                              <a href="#" className='btn'>add to cart</a>
                            </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className='box'>
                            <div className='icons'>
                                <a hredf='\#'><FaSearch /></a>
                                <a hredf='\#'><FaHeart /></a>
                                <a hredf='\#'><FaEye /></a>
                            </div>
                            <div className="image">
                              <img src="image/book-5.jpg" alt="" />
                            </div>
                            <div className="content">
                              <h3>featured book</h3>
                              <div className="price">$16.99 <span>$21.99</span></div>
                              <a href="#" className='btn'>add to cart</a>
                            </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className='box'>
                            <div className='icons'>
                                <a hredf='\#'><FaSearch /></a>
                                <a hredf='\#'><FaHeart /></a>
                                <a hredf='\#'><FaEye /></a>
                            </div>
                            <div className="image">
                              <img src="image/book-6.jpg" alt="" />
                            </div>
                            <div className="content">
                              <h3>featured book</h3>
                              <div className="price">$17.99 <span>$22.99</span></div>
                              <a href="#" className='btn'>add to cart</a>
                            </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className='box'>
                            <div className='icons'>
                                <a hredf='\#'><FaSearch /></a>
                                <a hredf='\#'><FaHeart /></a>
                                <a hredf='\#'><FaEye /></a>
                            </div>
                            <div className="image">
                              <img src="image/book-7.jpg" alt="" />
                            </div>
                            <div className="content">
                              <h3>featured book</h3>
                              <div className="price">$15.99 <span>$20.99</span></div>
                              <a href="#" className='btn'>add to cart</a>
                            </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className='box'>
                            <div className='icons'>
                                <a hredf='\#'><FaSearch /></a>
                                <a hredf='\#'><FaHeart /></a>
                                <a hredf='\#'><FaEye /></a>
                            </div>
                            <div className="image">
                              <img src="image/book-8.jpg" alt="" />
                            </div>
                            <div className="content">
                              <h3>featured book</h3>
                              <div className="price">$15.99 <span>$20.99</span></div>
                              <a href="#" className='btn'>add to cart</a>
                            </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className='box'>
                            <div className='icons'>
                                <a hredf='\#'><FaSearch /></a>
                                <a hredf='\#'><FaHeart /></a>
                                <a hredf='\#'><FaEye /></a>
                            </div>
                            <div className="image">
                              <img src="image/book-9.jpg" alt="" />
                            </div>
                            <div className="content">
                              <h3>featured book</h3>
                              <div className="price">$15.99 <span>$20.99</span></div>
                              <a href="#" className='btn'>add to cart</a>
                            </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className='box'>
                            <div className='icons'>
                                <a hredf='\#'><FaSearch /></a>
                                <a hredf='\#'><FaHeart /></a>
                                <a hredf='\#'><FaEye /></a>
                            </div>
                            <div className="image">
                              <img src="image/book-10.jpg" alt="" />
                            </div>
                            <div className="content">
                              <h3>featured book</h3>
                              <div className="price">$15.99 <span>$20.99</span></div>
                              <a href="#" className='btn'>add to cart</a>
                            </div>
                        </div>
                      </SwiperSlide>

                    </Swiper>

                </div>
            </section>

            <section className="newsletter">
                <form action="">
                    <h3>subscribe for latest update</h3>
                    <input type="email" placeholder='enter your email' className='box' />
                    <input type="submit" value="subscribe" className='btn' />
                </form>
            </section>

            <section className ="arrivals" id='arrivals'>
              <div className="heading"><span>new arrivals</span></div>
              <div className="swiper">
              <Swiper
                       watchSlidesProgress={true}
                       autoplay={{
                       delay: 3500,
                       disableOnInteraction: false
                       }}
                       modules={[Autoplay]}
                       className="arrivals-slider"
                       {...swiperOptionsThree}
              >
                <SwiperSlide>
                <a href="#" className='box'>
                    <div className="image">
                        <img src="image/book-1.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99 <span>$20.99</span></div>
                        <div className="stars">
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStarHalf /></i>
                        </div>
                    </div>
                 </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#" className='box'>
                    <div className="image">
                        <img src="image/book-2.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99 <span>$20.99</span></div>
                        <div className="stars">
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStarHalf /></i>
                        </div>
                    </div>
                 </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#" className='box'>
                    <div className="image">
                        <img src="image/book-3.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99 <span>$20.99</span></div>
                        <div className="stars">
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStarHalf /></i>
                        </div>
                    </div>
                 </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#" className='box'>
                    <div className="image">
                        <img src="image/book-4.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99 <span>$20.99</span></div>
                        <div className="stars">
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStarHalf /></i>
                        </div>
                    </div>
                 </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#" className='box'>
                    <div className="image">
                        <img src="image/book-5.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99 <span>$20.99</span></div>
                        <div className="stars">
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStarHalf /></i>
                        </div>
                    </div>
                 </a>
                </SwiperSlide>
                </Swiper>

              </div>

              <div className="swiper">
              <Swiper
                       watchSlidesProgress={true}
                       autoplay={{
                       delay: 3500,
                       disableOnInteraction: false
                       }}
                       modules={[Autoplay]}
                       className="arrivals-slider"
                       {...swiperOptionsThree}
              >
                <SwiperSlide>
                <a href="#" className='box'>
                    <div className="image">
                        <img src="image/book-1.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99 <span>$20.99</span></div>
                        <div className="stars">
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStarHalf /></i>
                        </div>
                    </div>
                 </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#" className='box'>
                    <div className="image">
                        <img src="image/book-2.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99 <span>$20.99</span></div>
                        <div className="stars">
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStarHalf /></i>
                        </div>
                    </div>
                 </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#" className='box'>
                    <div className="image">
                        <img src="image/book-3.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99 <span>$20.99</span></div>
                        <div className="stars">
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStarHalf /></i>
                        </div>
                    </div>
                 </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#" className='box'>
                    <div className="image">
                        <img src="image/book-4.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99 <span>$20.99</span></div>
                        <div className="stars">
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStarHalf /></i>
                        </div>
                    </div>
                 </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="#" className='box'>
                    <div className="image">
                        <img src="image/book-5.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h3>new arrivals</h3>
                        <div className="price">$15.99 <span>$20.99</span></div>
                        <div className="stars">
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStarHalf /></i>
                        </div>
                    </div>
                 </a>
                </SwiperSlide>
                </Swiper>

              </div>


            </section>

            <section className='deal'>
              <div className='content'>
                <h3>Deal of the Day</h3>
                <h1>upto 50% offers</h1>
                <p>
                  Get books at youe doorstep, order now!! Get exciting offers on prices
                </p>
                <a href="\#" className='btn'>Shop Now</a>

              </div>
              <div className='image'>
                <img src="image/deal-img.jpg" alt=""/>
              </div>

            </section>

            <section className="reviews" id="reviews">
                <h1 className='heading'><span>client's reviews</span></h1>
                <div className="swiper">
                <Swiper
                    watchSlidesProgress={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="reviews-slider"
                    {...swiperOptionsTwo}
                >
                    <SwiperSlide>
                       <div className="swiper-slide box">
                            <img src="image/pic-1.jpg" alt="" />
                            <h3>john deo</h3>
                            <p>
                              The book is amazing
                            </p>
                            <div className='stars'>
                              <i><FaStar/></i>
                              <i><FaStar/></i>
                              <i><FaStar/></i>
                              <i><FaStar/></i>
                              <i><FaStarHalf/></i>
                            </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                       <div className="swiper-slide box">
                            <img src="image/pic-4.jpg" alt="" />
                            <h3>Daisy Jones</h3>
                            <p>
                              great offers
                            </p>
                            <div className='stars'>
                              <i><FaStar/></i>
                              <i><FaStar/></i>
                              <i><FaStar/></i>
                              <i><FaStar/></i>
                              <i><FaStarHalf/></i>
                            </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                       <div className="swiper-slide box">
                            <img src="image/pic-2.jpg" alt="" />
                            <h3>Harry S.</h3>
                            <p>
                              Good Quality
                            </p>
                            <div className='stars'>
                              <i><FaStar/></i>
                              <i><FaStar/></i>
                              <i><FaStar/></i>
                              <i><FaStar/></i>
                              <i><FaStarHalf/></i>
                            </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                       <div className="swiper-slide box">
                            <img src="image/pic-5.jpg" alt="" />
                            <h3>Mary Claire</h3>
                            <p>
                              Great service
                            </p>
                            <div className='stars'>
                              <i><FaStar/></i>
                              <i><FaStar/></i>
                              <i><FaStar/></i>
                              <i><FaStar/></i>
                              <i><FaStarHalf/></i>
                            </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                       <div className="swiper-slide box">
                            <img src="image/pic-3.jpg" alt="" />
                            <h3>James</h3>
                            <p>
                              Great Collection
                            </p>
                            <div className='stars'>
                              <i><FaStar/></i>
                              <i><FaStar/></i>
                              <i><FaStar/></i>
                              <i><FaStar/></i>
                              <i><FaStarHalf/></i>
                            </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                       <div className="swiper-slide box">
                            <img src="image/pic-6.jpg" alt="" />
                            <h3>Anna Ray</h3>
                            <p>
                              The book is amazing
                            </p>
                            <div className='stars'>
                              <i><FaStar/></i>
                              <i><FaStar/></i>
                              <i><FaStar/></i>
                              <i><FaStar/></i>
                              <i><FaStarHalf/></i>
                            </div>
                  </div>
                  </SwiperSlide>
                  

                  </Swiper>
                  </div>
                </section>

                <section className="blogs" id="blogs">
                    <h1 className='heading'>our blogs</h1>
                    <div className="swiper">
                    <Swiper
                        watchSlidesProgress={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="blogs-slider"
                        {...swiperOptionsThree}
                        >
                    <SwiperSlide>
                       <div className="swiper-slide box">
                           <div className="image">
                               <img src="image/blog-1.jpg" alt="" />
                           </div>
                           <div className="content">
                               <h3>Favourite recommendations</h3>
                               <p>
                                Book recommendations based on the genre you like
                              </p>
                              <a herf="\#" className='btn'>Read More</a>
                           </div>
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="swiper-slide box">
                           <div className="image">
                               <img src="image/blog-2.jpg" alt="" />
                           </div>
                           <div className="content">
                               <h3>Self help books</h3>
                               <p>
                                This is about the self help books.
                              </p>
                              <a herf="\#" className='btn'>Read More</a>
                           </div>
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="swiper-slide box">
                           <div className="image">
                               <img src="image/blog-3.jpg" alt="" />
                           </div>
                           <div className="content">
                               <h3>Book Club</h3>
                               <p>
                                This is about the book clubs you can join
                              </p>
                              <a herf="\#" className='btn'>Read More</a>
                           </div>
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="swiper-slide box">
                           <div className="image">
                               <img src="image/blog-4.jpg" alt="" />
                           </div>
                           <div className="content">
                               <h3>Authours Center</h3>
                               <p>
                                This is for people who love writing
                              </p>
                              <a herf="\#" className='btn'>Read More</a>
                           </div>
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="swiper-slide box">
                           <div className="image">
                               <img src="image/blog-5.jpg" alt="" />
                           </div>
                           <div className="content">
                               <h3>Goodreads</h3>
                               <p>
                                This is about viral book recommendations
                              </p>
                              <a herf="\#" className='btn'>Read More</a>
                           </div>
                       </div>
                    </SwiperSlide>
                    </Swiper>
                    </div>
                 </section>

            <section className="footer">
              <div className='box-container'>
                <div className='box'>
                  <h3>Our Locations</h3>
                  <a href="\#"><i><FaMapMarkedAlt/></i>India</a>
                  <a href="\#"><i><FaMapMarkedAlt/></i>USA</a>
                  <a href="\#"><i><FaMapMarkedAlt/></i>Russia</a>
                  <a href="\#"><i><FaMapMarkedAlt/></i>Japan</a>
                  <a href="\#"><i><FaMapMarkedAlt/></i>France</a>
                  <a href="\#"><i><FaMapMarkedAlt/></i>Africa</a>
                </div>
                <div className='box'>
                  <h3>Quick Links</h3>
                  <a href="\#"><i><FaExternalLinkAlt/></i>home</a>
                  <a href="\#"><i><FaExternalLinkAlt/></i>featured</a>
                  <a href="\#"><i><FaExternalLinkAlt/></i>arrivals</a>
                  <a href="\#"><i><FaExternalLinkAlt/></i>blogs</a>
                </div>
                <div className='box'>
                  <h3>Extra Links</h3>
                  <a href="\#"><i><FaLink/></i>account info</a>
                  <a href="\#"><i><FaLink/></i>ordered items</a>
                  <a href="\#"><i><FaLink/></i>privacy policy</a>
                  <a href="\#"><i><FaLink/></i>payment method</a>
                  <a href="\#"><i><FaLink/></i>our services</a>
                </div>
                <div className='box'>
                  <h3>Contact Info</h3>
                  <a href="\#"><i><FaPhoneAlt/></i>+123-356-536</a>
                  <a href="\#"><i><FaPhoneAlt/></i>+123-356-547</a>
                  <a href="\#"><i><FaEnvelope/></i>mahek@gmail.com</a>
                  <img src='image/worldmap.jpg' alt='' className='map'/>
                  </div>
                  <div className="share">
                       <a href="\#"><i><FaFacebookF /></i></a>
                       <a href="#"><i><FaTwitter /></i></a>
                       <a href="#"><i><FaInstagram /></i></a>
                       <a href="#"><i><FaLinkedinIn /></i></a>
                       <a href="#"><i><FaPinterestP /></i></a>
                  </div>
                  <div className='credit'>Created By <span>Mahek, Soham, Kian </span>|All rights reserved|</div>
                  </div>
            </section>


        </div>
    )
}

export default Home
