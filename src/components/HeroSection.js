import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
import {BsFacebook} from "react-icons/bs"

export default function HeroSection() {

    const [selected, setSelected] = useState("TR");

    const phones = {
      US:'+1',
      DE:'+50',
      TR:'+90',
      IT:'+7',
      IN:'+15'
    }



    const settings = {
        dots:false,
        infinite: true,
        speed: 600,
        arrows:false,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 3500,
        cssEase:'linear'
      };

    return (
        <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10 ">
        <Slider {...settings}>
          <div>
           <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"/>
          </div>
          <div>
            <img className="w-full h-[500px] object-cover"  src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" />
          </div>
          <div>
             <img className="w-full h-[500px] object-cover"  src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" />
          </div>
        </Slider>
        <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
            <div>
                <img data-testid="main-image" src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
                <h3 className="font-semibold mt-8 text-4xl text-white">Dakikalar içinde <br/>
                     kapınızda</h3>
            </div>
            <div className="w-[400px] rounded-lg bg-gray-50 p-6">
                <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giriş yap veya kayıt ol</h4>
                <div className="grid gap-y-3">
                <div className="flex gap-x-2">
                <ReactFlagsSelect
                     countries={Object.keys(phones)}
                     customLabels={phones}
                     onSelect={code => setSelected(code)}
                     selected={selected}
                     className="flag-select"
                 />
                  <label className="flex-1 relative group">
                    <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors
                     group-hover:border-primary-brand-color outline-none focus:border-primary-brand-color peer text-sm pt-2"/>
                     <span className="absolute top-0 left-0 h-full px-4 flex items-center
                      text-sm text-gray-700 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs
                      peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs ">
                        Telefon Numarası</span>
                  </label>
               </div>
               <div>
                  <button className="bg-brand-yellow h-12 rounded-md flex items-center justify-center w-full text-sm 
                  font-semibold text-primary-brand-color hover:bg-primary-brand-color hover:text-brand-yellow">
                    Telefon numarası ile devam et
                  </button>
                  <hr className="bg-gray-300 my-2 h-[1px]" />
                  <button className="bg-blue-100 h-12 rounded-md flex items-center justify-center w-full text-sm 
                  font-semibold text-blue-700 text-opacity-80 px-4 hover:bg-blue-700 hover:text-white">
                    <BsFacebook size={24} />
                    <span className="mx-auto">
                      Facebook ile devam et
                    </span>
                  </button>
               </div>
                </div>

            </div>
        </div>
      </div>
    )

}
