import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {

    const settings = {
        dots:false,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className="relative h-[500px]">
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
                <h4 className="text-primary-brand-color text-center font-semibold">Giriş yap veya kayıt ol</h4>
            </div>
        </div>
      </div>
    )

}
