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
import Cards_with_bg from "../../components/Cards/Cards_with_bg";
import Img_Slider from "../../components/Img_Slider/Img_Slider";
import {
  Tendering_Outsourcing_banner,
  SLA_bg,
  Bell,
  Injection,
  Ship,
  Tendering_outsourcing_points,
  CategoryStrategy_img,
  TenderingandOutsourcing,
  PostAwardContract,
  OUTSOURCINGIN,
  Check,
  SLA_tag_White,
  Dna_img,
  Google,
  Mountains,
} from "../../components/Img/ImportedImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About_us = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const setting = {
    centerMode: true,
    centerPadding: "0",
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

  const cardsContent = [
    {
      image: Google,
      title: "The synergy of local content development",
      description:
        "NOC’s have a close connect to the economic development of their country. Our services empower and progress the commercial control on Capex and Opex, but also weave in local content. NOC’s are supported on their journey to become independent operators. We have strong...",
      link: "blog-articles-business-cases/local-content-development",
    },
    {
      image: Mountains,
      title: "The art of the deal",
      description:
        "Tendering and outsourcing are where a big impact is created for future performance. Call it the art of the deal. One of our SLA service...",
      link: "blog-articles-business-cases/the-art-of-the-deal-outsourcing-supply-chain",
    },
    {
      image: Dna_img,
      title: "How the DNA of your procurement department sets its performance",
      description:
        "Is your function led by operations? By finance? Projects? Legal? They bring their DNA. We transform it to one driven by commercial DNA, getting cost and value efficiency...",
      link: "blog-articles-business-cases/Performance-dna-procurement-supplychain-department",
    },
  ];

  return (
    <>
      <CommanBanner
        children={Tendering_Outsourcing_banner}
        heading="Tendering & Outsourcing"
        subheading="Procurement is done in-house by most of our Clients. With involvement of our experts, tools and systems the results improve significantly. Also beyond any tender we offer services that help making things ‘work’. Our focus is always to progress on the Road to Cost Leadership.

"
      />

      <div className="px-4 md:px-20 my-10">
        <div
          className="bg-cover bg-center w-full rounded-none md:rounded-xl px-1 py-5 md:p-6"
          style={{ backgroundImage: `url(${Tendering_outsourcing_points})` }}
        >
          <div>
            <div>
              <img src={SLA_tag_White} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full lg:w-6/12 px-3 mt-5 md:mt-5">
                <div className="p-5 bg-[#1d345ec9] rounded-xl">
                  <h2 className="text-3xl font-medium text-white mt-6 mb-3">
                    The Result
                  </h2>
                  <ul>
                    <li className="text-xl font-medium text-white my-4 flex gap-3">
                      <img src={Check} alt="" /> Evaluation Models designed for
                      best match
                    </li>
                    <li className="text-xl font-medium text-white my-4 flex gap-3">
                      <img src={Check} alt="" /> Savings by applying our Cost
                      Intelligence philosophy
                    </li>
                    <li className="text-xl font-medium text-white my-4 flex gap-3">
                      <img src={Check} alt="" /> Remuneration model stimulating
                      business delivery & pay for performance
                    </li>
                    <li className="text-xl font-medium text-white my-4 flex gap-3">
                      <img src={Check} alt="" /> Effective tools to drive
                      performance & bank savings
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-end">
              <h3 className="text-2xl md:text-4xl font-semibold md:font-medium text-white mt-6 mb-3">
                Tendering & Outsourcing
              </h3>
            </div>
          </div>
        </div>
        {/* <h2 className="text-center text-3xl font-bold text-[#29385E] mt-10">
          Building and implementing Category & Contract Strategies
        </h2> */}
      </div>

      {/* <div className="px-4 md:px-20">
        <Row>
          <div className="my-10 block lg:flex justify-center gap-5">
            <div className="w-full lg:2/6 shadow-lg rounded-lg px-8 pb-12 pt-5 mb-6 border-2 border-black">
              <div className="my-10 flex justify-center">
                <img src={Bell} alt="" />
              </div>
              <div>
                <p className="text-center text-medium font-medium">
                  Post Covid we realised that some risks are real and some risks
                  are new
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 shadow-lg rounded-lg px-8 pb-12 pt-5 mb-6 border-2 border-black">
              <div className="my-10 flex justify-center">
                <img src={Injection} alt="" />
              </div>
              <div>
                <p className="text-center text-medium font-medium">
                  Covid 19 impact requires us to reassess our Category
                  Strategies
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 shadow-lg rounded-lg px-8 pb-12 pt-5 mb-6 border-2 border-black">
              <div className="my-10 flex justify-center">
                <img src={Ship} alt="" />
              </div>
              <div>
                <p className="text-center text-medium font-medium">
                  New energies require new Strategy. Energy transition is not
                  about copying the traditional supply chain.
                </p>
              </div>
            </div>
          </div>
        </Row>
      </div> */}

      <div className="px-4 md:px-20 my-10">
        <div className="my-6">
          <h4 className="text-[#00ABB8] text-3xl font-normal text-end">
            From a winning strategy to delivery{" "}
          </h4>
        </div>
      </div>

      <div className="px-4 md:px-20">
        <h2 className="text-3xl font-bold text-[#29385E]">
          Our Scope :
        </h2>
      </div>

      <div className="px-4 md:px-20">
        <Row>
          <div className="mt-10 block lg:flex justify-center gap-5">
            <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Contract Manual{" "}
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  Many are unaware of this tool. We compose a contract manual
                  for key stakeholders who use the contract. A Contract manual
                  gives them key information fit for their purpose. And you keep
                  certain elements confidential.
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Tender models{" "}
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  Depending on your business objective, the right choice of
                  tender model gives you maximum value; it unlock market
                  collaboration, a low price, and introduce latest technology.
                  We rejuvenate your outsourcing using novel models.
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Evaluation models{" "}
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  Success or failure of a contract can often be traced back to
                  the evaluation model. Well-defined it can select the right
                  contractor to deliver key business performance. We built your
                  evaluation models.
                </p>
              </div>
            </div>
          </div>
        </Row>
        <div className="">
          <h4 className="text-[#00ABB8] text-2xl font-normal text-end mt-2">
            What drives the right behaviour?{" "}
          </h4>
        </div>
        <Row>
          <div className="mt-5 block lg:flex justify-center gap-5">
            <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Scope of Work{" "}
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  A new tender with an old scope. This often happens. Let our
                  experts write your scope. Our strict parameters guarantee a
                  compliant scope aligned with your business plan.
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 px-4 py-8 mb-6 ">
              <img src={OUTSOURCINGIN} alt="" />
            </div>

            <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Remuneration models{" "}
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  One of our key capabilities is to pair the right remuneration
                  to drive contract performance. A remuneration model based on
                  wrong drivers makes a contract ill perform. Invite our
                  expertise, boost your contract performance!
                </p>
              </div>
            </div>
          </div>
        </Row>

        <div className="">
          <h4 className="text-[#00ABB8] text-2xl font-normal text-end  mt-2">
            In 22% of contract renewals, the old scope of work is used!{" "}
          </h4>
        </div>
      </div>

      <div className="px-4 md:px-20 mt-20">
        <h2 className="text-4xl font-medium text-[#29385E] font-Montserrat">
          The Supply Chain by{" "}
          <span className="text-[#00ABB8]">SLA Services</span>
        </h2>
      </div>

      <Img_Slider />

      <div>
        {/* <h1 className="text-center text-3xl font-bold mb-6">
          Custom Page with Dynamic Cards
        </h1> */}
        {/* Render the Cards component with dynamic content */}
        <Cards_with_bg background={SLA_bg} cardsContent={cardsContent} />
      </div>

      <Footer />
    </>
  );
};

export default About_us;
