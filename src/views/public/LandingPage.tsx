import { useContext, useEffect } from 'react';
import { MainContext } from '../../context/MainProvider';
import GallerySection from './partial/GallerySection';

import AOS from 'aos';
import 'aos/dist/aos.css';

export const LandingPage = () => {
  const { doScroll } = useContext(MainContext);

  useEffect(() => {
    AOS.init();
    window.addEventListener('scroll', handleScrollPage);
    return () => {
      window.removeEventListener('scroll', handleScrollPage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScrollPage = (): void => {
    doScroll(window.scrollY);
  };

  return (
    <>
      <section className="home" id="home">
        <div className="image" data-aos="fade-right">
          <img src="images/home-img.svg" alt="" />
        </div>

        <div className="content">
          <h3>Why fix it yourself? Leave it to the pros.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit incidunt aspernatur,
            perspiciatis accusamus illum quam!
          </p>
          <a href="#about" className="btn">
            get started
          </a>
        </div>
      </section>

      <section className="fun-fact" data-aos="fade-up">
        <div className="box">
          <img src="images/fun-fact-icon-1.svg" alt="" />
          <div className="info">
            <h3>2890</h3>
            <p>repairs done</p>
          </div>
        </div>

        <div className="box">
          <img src="images/fun-fact-icon-2.svg" alt="" />
          <div className="info">
            <h3>25</h3>
            <p>awards won</p>
          </div>
        </div>

        <div className="box">
          <img src="images/fun-fact-icon-3.svg" alt="" />
          <div className="info">
            <h3>3585</h3>
            <p>happy clients</p>
          </div>
        </div>

        <div className="box">
          <img src="images/fun-fact-icon-4.svg" alt="" />
          <div className="info">
            <h3>45</h3>
            <p>active workers</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="content">
          <h3>best quality Repair services</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim laboriosam quidem eaque,
            ex qui fugit velit veniam veritatis a nostrum amet perspiciatis pariatur ducimus ipsam
            officiis quae cumque maiores voluptates!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus iste ab eos ea
            rerum obcaecati illo ex recusandae expedita aspernatur?
          </p>
          <a href="#services" className="btn">
            read more
          </a>
        </div>

        <div className="image">
          <img src="images/about-img.svg" alt="" />
        </div>
      </section>

      <section className="services" id="services">
        <h1 className="heading">
          our <span>services</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src="images/service-1.svg" alt="" />
            <h3>computer repair</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p>
          </div>

          <div className="box">
            <img src="images/service-2.svg" alt="" />
            <h3>laptop repair</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p>
          </div>

          <div className="box">
            <img src="images/service-3.svg" alt="" />
            <h3>smartphone repair</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p>
          </div>

          <div className="box">
            <img src="images/service-4.svg" alt="" />
            <h3>game console repair</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p>
          </div>

          <div className="box">
            <img src="images/service-5.svg" alt="" />
            <h3>multi media repair</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p>
          </div>

          <div className="box">
            <img src="images/service-6.svg" alt="" />
            <h3>smartwatch repair</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p>
          </div>
        </div>
      </section>

      <GallerySection />

      <section className="facilities">
        <h1 className="heading">
          why <span>choose us?</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src="images/why-choose-icon-1.svg" alt="" />
            <h3>24/7 support</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet illum eum
              cumque tempore. Quo nobis mollitia quis libero ipsa?
            </p>
          </div>

          <div className="box">
            <img src="images/why-choose-icon-2.svg" alt="" />
            <h3>quality service</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet illum eum
              cumque tempore. Quo nobis mollitia quis libero ipsa?
            </p>
          </div>

          <div className="box">
            <img src="images/why-choose-icon-3.svg" alt="" />
            <h3>quick repair</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat eveniet illum eum
              cumque tempore. Quo nobis mollitia quis libero ipsa?
            </p>
          </div>
        </div>
      </section>

      <section className="team" id="team">
        <h1 className="heading">
          our expert <span>team</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img src="images/team-1.jpg" alt="" />
            <div className="content">
              <h3>john deo</h3>
              <p>electronic expert</p>
              <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
              </div>
            </div>
          </div>

          <div className="box">
            <img src="images/team-2.jpg" alt="" />
            <div className="content">
              <h3>john deo</h3>
              <p>electronic expert</p>
              <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
              </div>
            </div>
          </div>

          <div className="box">
            <img src="images/team-3.jpg" alt="" />
            <div className="content">
              <h3>john deo</h3>
              <p>electronic expert</p>
              <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
              </div>
            </div>
          </div>

          <div className="box">
            <img src="images/team-4.jpg" alt="" />
            <div className="content">
              <h3>john deo</h3>
              <p>electronic expert</p>
              <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews" id="reviews">
        <h1 className="heading">
          clients <span>reviews</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="text">
              <i className="fas fa-quote-right"></i>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi animi alias
                consequatur sint doloribus illo vitae mollitia, iusto excepturi nobis.
              </p>
            </div>
            <div className="user">
              <img src="images/pic-1.png" alt="" />
              <h3>john deo</h3>
            </div>
          </div>

          <div className="box">
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="text">
              <i className="fas fa-quote-right"></i>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi animi alias
                consequatur sint doloribus illo vitae mollitia, iusto excepturi nobis.
              </p>
            </div>
            <div className="user">
              <img src="images/pic-2.png" alt="" />
              <h3>john deo</h3>
            </div>
          </div>

          <div className="box">
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="text">
              <i className="fas fa-quote-right"></i>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi animi alias
                consequatur sint doloribus illo vitae mollitia, iusto excepturi nobis.
              </p>
            </div>
            <div className="user">
              <img src="images/pic-3.png" alt="" />
              <h3>john deo</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h1 className="heading">
          <span>contact</span> us
        </h1>

        <div className="row">
          <form action="">
            <h3>get in touch</h3>
            <div className="inputBox">
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
            </div>
            <div className="inputBox">
              <input type="number" placeholder="phone" />
              <input type="text" placeholder="subject" />
            </div>
            <textarea name="" placeholder="message" id="" cols={30} rows={3}></textarea>
            <input type="submit" value="send message" className="btn" />
          </form>
        </div>
      </section>

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <a className="link" href="#home">
              <i className="fas fa-angle-right"></i> home
            </a>
            <a className="link" href="#about">
              <i className="fas fa-angle-right"></i> about
            </a>
            <a className="link" href="#services">
              <i className="fas fa-angle-right"></i> services
            </a>
            <a className="link" href="#gallery">
              <i className="fas fa-angle-right"></i> gallery
            </a>
            <a className="link" href="#team">
              <i className="fas fa-angle-right"></i> team
            </a>
            <a className="link" href="#reviews">
              <i className="fas fa-angle-right"></i> reviews
            </a>
            <a className="link" href="#contact">
              <i className="fas fa-angle-right"></i> contact
            </a>
          </div>

          <div className="box">
            <h3>opening hours</h3>
            <p>
              <span>monday :</span> 10:00am to 00:09pm
            </p>
            <p>
              <span>tuesday :</span> 10:00am to 00:09pm
            </p>
            <p>
              <span>wednesday :</span> 10:00am to 00:09pm
            </p>
            <p>
              <span>thursday :</span> 10:00am to 00:09pm
            </p>
            <p>
              <span>friday :</span> 10:00am to 00:09pm
            </p>
            <p>
              <span>saturday :</span> 10:00am to 00:09pm
            </p>
            <p>
              <span>sunday :</span> closed
            </p>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="#" className="link">
              <i className="fas fa-phone"></i> +123-456-7890
            </a>
            <a href="#" className="link">
              <i className="fas fa-phone"></i> +111-222-3333
            </a>
            <a href="#" className="link">
              <i className="fas fa-envelope"></i> shaikhanas@gmail.com
            </a>
            <a href="#" className="link">
              <i className="fas fa-map"></i> mumbai, india - 400104
            </a>
          </div>

          <div className="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <form action="">
              <input type="email" name="" placeholder="enter your email" id="" className="email" />
              <input type="submit" value="subscribe" className="btn" />
            </form>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
        </div>

        <div className="credit">
          created by <span>mr. web designer</span> | all rights reserved!
        </div>
      </section>
    </>
  );
};
