import React from 'react';

import { Heropic} from '../assets/img/hero-img.svg';

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" data-aos="fade-in">
          <div className="order-2 md:order-1 flex flex-col justify-center text-center md:text-start">
            <h2>Empowering SME's and farmers through access to financial services <span></span></h2>
            <p>Join us in revolutionizing financial inclusion for rural African communities</p>
            <div className="flex justify-center md:justify-start">
              <a href="#about" className="btn-get-started">Get Started</a>
              <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video flex items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img src={Heropic} alt="" className="img-fluid" data-aos="zoom-out" data-aos-delay="100" />
          </div>
        </div>
      </div>

      <div className="icon-boxes relative">
        <div className="container relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
            <div className="col-span-1 md:col-span-2" data-aos="fade-up" data-aos-delay="100">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-gem"></i></div>
                <h4 className="title"><a href="" className="stretched-link">Value Prop</a></h4>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-gem"></i></div>
                <h4 className="title"><a href="" className="stretched-link">Value Prop</a></h4>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2" data-aos="fade-up" data-aos-delay="300">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-gem"></i></div>
                <h4 className="title"><a href="" className="stretched-link">Value Prop</a></h4>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2" data-aos="fade-up" data-aos-delay="500">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-gem"></i></div>
                <h4 className="title"><a href="" className="stretched-link">Value Prop</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
