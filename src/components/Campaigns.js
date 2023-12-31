import { useState,useEffect } from "react";
import Slider from "react-slick";
import Banners from "api/banner.json"
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"
export default function Campaigns() {


    function NextBtn({className,style,onClick} ) {
        return (
        <button className={` text-brand-color  absolute top-1/2 -right-6 -translate-y-1/2` } onClick={onClick} >
               <IoIosArrowForward className="text-brand-color" size={22} />
           
        </button>
        ) 
    }

    function PrevBtn({className,style,onClick}) {
        return (
            <button className={` text-brand-color absolute top-1/2 -left-6 -translate-y-1/2` } onClick={onClick} >
              <IoIosArrowBack className="text-brand-color" size={22} />
           </button>
        )
    }



  const [banners,setBanners] = useState([]);

  useEffect(() => {

    setBanners(Banners)

  },[]);


  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  };

    return (
        <div className="container mx-auto md:py-8 overflow-x-hidden">
            <h3 className="hidden md:block text-sm font-semibold mb-3">
               Kampanyalar
            </h3>
         <Slider className="-mx-2" {...settings}>
            {banners.length && banners.map((banner,index)=> (
                <div key={index} className="px-2" >
                    <img src={banner.image} alt="" className="md:rounded-lg" />
                </div>
            ))}
        </Slider>
        </div>
    )
}