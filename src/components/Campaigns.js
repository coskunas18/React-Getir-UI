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
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />
  };

    return (
        <div className="container mx-auto py-8">
            <h3 className="text-sm font-semibold mb-3">
               Kampanyalar
            </h3>
         <Slider className="-mx-2" {...settings}>
            {banners.length && banners.map((banner,index)=> (
                <div key={index} className="px-2" >
                    <img src={banner.image} alt="" className="rounded-lg" />
                </div>
            ))}
        </Slider>
        </div>
    )
}