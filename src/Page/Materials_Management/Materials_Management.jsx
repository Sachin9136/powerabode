import React, { useState } from "react";

import {
  Column,
  Heading,
  Row,
  Span,
  Wraper,
  Button,
} from "../../components/ComponentsIndex";

import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import CommanBanner from "../../components/Banners/CommanBanner";
import Card_slider from "../../components/card_slider/card_slider";
import Img_Slider from "../../components/Img_Slider/Img_Slider";
import { Materials_Management_banner, Card_img, Bell, Injection, Ship, Category_1, CategoryStrategy_img, TenderingandOutsourcing, PostAwardContract } from "../../components/Img/ImportedImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About_us = () => {

  const [activeSlide, setActiveSlide] = useState(0);

  const setting = {
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 3,
      focusOnSelect: true,
      dots: true,
      arrow: false,
      infinite: true,
      speed: 500,
      
      beforeChange: (current, next) => setActiveSlide(next), // track active slide
      responsive: [
      {
          breakpoint: 768,
          settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
          },
      },
      {
          breakpoint: 1024,
          settings: {
          slidesToShow: 3, // Show 3 slides on larger screens
          },
      },
      ],
  };

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480, 
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

  return (
    <>
      <CommanBanner children={Materials_Management_banner} />

        <div className="px-4 md:px-20 my-10">
            <h2 className='text-center text-3xl font-bold text-[#29385E] mt-10'>Building and implementing Category & Contract Strategies</h2>
        </div>

        <div className="px-4 md:px-20 my-10">
          <div>
            <img className="w-full" src={Category_1} alt="" />
          </div>
          <div className="my-6">
            <h4 className="text-[#00ABB8] text-3xl font-normal text-end font-[Raleway]">Materials in the right place, at the right time            </h4>
          </div>
        </div>

        <div className="px-4 md:px-20">
            <h2 className='text-center text-3xl font-bold text-[#29385E]'>Our Scope</h2>
        </div>

        <div className="px-4 md:px-20">
            <Row>
                <div className="mt-10 block lg:flex justify-center gap-5">
                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">7 Step program
                            </h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">A transformational journey of your Materials Management. At pre-award or at post award stage, it is equally important for operational/ commercial performance. From cost to maintenance execution, it can be a Show Stopper.

</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Inventory Optimisation
                            </h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">Unlock cash and prevent it from getting locked again! Our inventory optimisation links your operational , integrated activity plan, contracts in ERP, materials availability, lead time, logistics plan, stocking level, inventory forecast, inventory management and management of change. powerabode sets up and implements your entire MM Optimisation.

</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">System & assurance
                            </h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">We built you a fully functional system, best practice based. How to operate materials management in the field including guidelines, processes, procedures, work instructions and forms.

</p>
                        </div>
                    </div>
                </div>
            </Row>
            <div className="">
              <h4 className="text-[#00ABB8] text-3xl font-normal text-end font-[Raleway] mt-2">Focus on Supply Chain Resilience              </h4>
            </div>
            <Row>
                <div className="mt-5 block lg:flex justify-center gap-5">
                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Data</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">From data clean up, to capturing, to analysis. MM is not just about a warehouse. Let us open the black box. It is actually very exciting!</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Expediting</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">Qualified experts and processes for expediting international complex projects.</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Training                            </h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">powerabode Academy is developing a set of training modules regarding MM for 2021. Sign up now to keep informed!</p>
                        </div>
                    </div>
                </div>
            </Row>

            <div className="">
              <h4 className="text-[#00ABB8] text-3xl font-normal text-end font-[Raleway] mt-2">What Covid learnings have you implemented?              </h4>
            </div>

        </div>

          
        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#29385E] font-Montserrat'>The Supply Chain by <span className="text-[#00ABB8]">SLA Services</span></h2>
        </div>

        <div className="px-4 md:px-20 my-10">
            <div className=" my-10">
                <Slider {...setting}>
                    <div>
                        <Img_Slider
                            image={CategoryStrategy_img}
                            isCenter={activeSlide === 0}
                        />
                    </div>
                    <div>
                        <Img_Slider
                            image={TenderingandOutsourcing}
                            isCenter={activeSlide === 1}
                        />
                    </div>
                    <div>
                        <Img_Slider
                            image={PostAwardContract}
                            isCenter={activeSlide === 2}
                        />
                    </div>
                    <div>
                        <Img_Slider
                            image={CategoryStrategy_img}
                            isCenter={activeSlide === 3}
                        />
                    </div>
                    <div>
                        <Img_Slider
                            image={PostAwardContract}
                            isCenter={activeSlide === 4}
                        />
                    </div>
                </Slider>
            </div>
        </div>

        <h3 className="text-center text-3xl font-[Raleway] my-5"><span className="text-[#1B3B64]">Tendering &</span> <span className="text-[#00ABB8]">Outsourcing</span></h3>
        <p className="text-center"  >Procurement is done in-house by most of our Clients.With involvement of our experts, tools and systems the results improve significantly.</p>


      <h2 className='text-center text-3xl font-bold text-[#29385E] mt-10'>Related Articles and Case Studies</h2>

      <div className="px-4 md:px-20 my-10">
        <Slider {...settings}>
          <div>
            <Card_slider
              image={Card_img}
              title="Drilling Cost Transformation"
              description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
            />
          </div>
          <div>
            <Card_slider
              image={Card_img}
              title="Drilling Cost Transformation"
              description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
            />
          </div>
          <div>
            <Card_slider
              image={Card_img}
              title="Drilling Cost Transformation"
              description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
            />
          </div>

          <div>
            <Card_slider
              image={Card_img}
              title="Drilling Cost Transformation"
              description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
            />
          </div>

          <div>
            <Card_slider
              image={Card_img}
              title="Drilling Cost Transformation"
              description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
            />
          </div>
        </Slider>
      </div>


      <Footer />
    </>
  );
};

export default About_us;