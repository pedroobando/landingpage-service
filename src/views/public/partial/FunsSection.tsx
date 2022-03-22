import React, { useEffect } from 'react';
import useWindDimensions from '../../../hooks/useWindDimensions';

const FunsSection = () => {
  const { width } = useWindDimensions();
  useEffect(() => {
    console.log(width);

    return () => {
      // second
    };
  }, [width]);

  return (
    <section className="fun-fact">
      <div className="box" data-aos={width < 900 ? 'fade-up' : ''}>
        <img src="images/fun-fact-icon-1.svg" alt="" />
        <div className="info">
          <h3>+6720</h3>
          <p>trabajos terminados</p>
        </div>
      </div>

      {/* <div className="box">
      <img src="images/fun-fact-icon-2.svg" alt="" />
      <div className="info">
        <h3>25</h3>
        <p>awards won</p>
      </div>
    </div> */}

      <div className="box" data-aos={width < 900 ? 'fade-up' : ''}>
        <img src="images/fun-fact-icon-3.svg" alt="" />
        <div className="info">
          <h3>+2688</h3>
          <p>clientes felices</p>
        </div>
      </div>

      <div className="box" data-aos={width < 900 ? 'fade-up' : ''}>
        <img src="images/fun-fact-icon-4.svg" alt="" />
        <div className="info">
          <h3>+/- 27</h3>
          <p>trabajos activos</p>
        </div>
      </div>
    </section>
  );
};

export default FunsSection;
