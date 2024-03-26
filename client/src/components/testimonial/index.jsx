import React, { useEffect } from 'react';

const Testimonial = () => {
  // useEffect(() => {
  //   const slider = tns({
  //     autoplay: true,
  //     autoplayButtonOutput: false,
  //     mouseDrag: true,
  //     gutter: 0,
  //     container: ".testimonial-one-active",
  //     center: true,
  //     nav: true,
  //     controls: false,
  //     speed: 400,
  //     controlsText: [
  //       '<i class="lni lni-arrow-left-circle"></i>',
  //       '<i class="lni lni-arrow-right-circle"></i>',
  //     ],
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       992: {
  //         items: 2,
  //       },
  //       1200: {
  //         items: 3,
  //       },
  //     },
  //   });

  //   // Destroy the slider when component unmounts
  //   return () => {
  //     slider.destroy();
  //   };
  // }, []);

  return (

    <section className="testimonial-one">
      <div className="section-title-seven">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title align-center">
                <span> Testimonial </span>
                <h2 className="fw-bold">What People Says</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="testimonial-one-wrapper">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-12">
              <div className="row testimonial-one-active">
                {/* Testimonial items */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
