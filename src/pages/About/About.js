import React from 'react'
import firstImage from "../../assets/firstImage.jpg";
import secondImage from "../../assets/qiqiglobal_1697220038_3212837002465628634_27840667923.jpg";
import thirdImage from "../../assets/qiqiglobal_1697785215_3217578051852152263_27840667923.jpg";
import fourthImage from "../../assets/qiqiglobal_1688065827_3136045917093885589_27840667923.jpg";
import fifthImage from "../../assets/qiqiglobal_1702578406_3257786256321562337_27840667923.jpg";
import Parallax from "../../hooks/Parallax";

export default function About() {
  return (
    <div className="py-20 relative">
      <div className="text-3xl pt-[10rem] pb-16 px-16 w-[90%] max-md:text-2xl">
        QiQi is not just a hair care brand; it's a philosophy. Born out of a passion for redefining beauty standards,
        QiQi is committed to delivering transformative, quality hair care experiences. Our products are crafted with
        love, backed by science, and designed to enhance the natural beauty of your hair.
      </div>
      <div
        className="z-[2] grid grid-rows-1 grid-cols-3 gap-12 pt-24 px-16 max-md:grid-rows-3 max-md:grid-cols-1 max-md:mt-10">
        <div>
          <h4 className="text-xl font-bold max-md:w-full max-md:text-lg">
            OUR MISSION
          </h4>
          <p className="mt-4 max-md:w-full">
            Our mission is to empower people with total control to transform their hair without compromise: no harmful
            ingredients, no outdated processes, no ineffective formulas and no limits.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold max-md:w-full max-md:text-lg">
            OUR BELIEFS
          </h4>
          <p className="mt-4 max-md:w-full">
            We believe that hair is a work of art. It’s the most personal form of self-expression. To feel comfortable
            in your hair isn’t enough; we’re here to help you embrace the wild, quirky, and sexy parts of your
            self-image with products designed to bring out your inner masterpiece.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold max-md:w-full max-md:text-lg">
            WHAT WE DO
          </h4>
          <p className="mt-4 max-md:w-full">
            Qiqi is hair control. We create salon-grade hair control and care products that harness ground-breaking
            science, ingredients and proprietary manufacturing processes to deliver exceptional lasting performance.
          </p>
        </div>
      </div>
      
      <div className="overflow-hidden z-[1] mt-12 h-[700px]">
        <Parallax imageSrc={firstImage} className="w-full object-cover"/>
      </div>
      
      <div className="bg-white">
        <div className="text-3xl py-32 px-16 max-md:text-2xl">
          At QiQi, quality is non-negotiable. Our products undergo rigorous testing to ensure they meet the highest
          standards of excellence. We prioritize the use of natural, safe ingredients, and our commitment to quality
          assurance is a testament to our dedication to your hair's well-being.
        </div>
        
        <div className="overflow-hidden z-[1] mt-12 h-[700px] grid grid-cols-2 grid-rows-1 gap-8 justify-between w-full max-md:gap-4 max-md:h-[400px] max-md:mt-10">
          <Parallax imageSrc={secondImage} className="h-full w-full"/>
          <Parallax imageSrc={thirdImage} className="h-full w-full"/>
        </div>
        
        <div className="text-slate-50 text-3xl pt-24 pr-16 ml-auto w-[70%] mix-blend-difference max-md:text-2xl">
          QiQi invites you to elevate your hair care journey. Rediscover the joy
          of healthy, vibrant hair with our premium products that cater to your
          unique needs. Join us in celebrating the beauty of diversity, and let
          your hair shine with QiQi – because you deserve nothing but the best.
        </div>
        
        <div className="flex justify-between items-end max-md:flex-wrap">
          <img loading="lazy" src={fourthImage}
               className="h-[700px] w-[50%] mr-16 object-cover mt-[-8rem] max-md:w-full max-md:h-[600px]"
               alt='main background'/>
          <img loading="lazy"
               src='https://drive.google.com/uc?id=1ORazpsj6gfNf2JRr1yRDqRxgV1wmUY68'
               className="object-cover object-center h-[500px] mt-8 ml-16 max-md:w-full"
               alt="gif"/>
        </div>
        
        <div className="text-3xl py-32 px-16 max-md:text-2xl">
          At QiQi, we stand out by combining the best of nature and science to create a unique fusion of hair care
          excellence. Our commitment to innovation, quality ingredients, and celebrating individual beauty sets us
          apart.
          QiQi is not just a brand; it's a lifestyle that encourages you to shine from the inside out.
        </div>
        
        <div className="overflow-hidden z-[1] w-[40%] h-[500px] ml-auto mr-16 max-md:mt-10">
          <Parallax imageSrc={fifthImage} className="object-cover"/>
        </div>
        
        <div
          className="text-2xl font-light pt-16 px-16 max-md:text-xl">
          Experience the QiQi difference – where beauty meets innovation.
          <br/>
          Connect with us on social media
        </div>
      </div>
    </div>
  )
}
