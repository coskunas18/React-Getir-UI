import Menu from "./ui/Menu"
import {BsFacebook} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {CiGlobe} from "react-icons/ci"


export default function Footer() {

    const menus = [
        {
            title:'Getir\'i Keşfedin',
            items:[
                {
                    title:'Hakkımızda'
                },
                {
                    title:'Kariyer'
                },
                {
                    title:'İletişim'
                },
                {
                    title:'COVID-19 Duyuru'
                },
                {
                    title:'Sosyal Sorumluluk Projeleri'
                },
            ]

        },
        {
            title:'Yardıma mı ihtiyacınız var?',
            items:[
                {
                    title:'Sıkça Sorulan Sorular'
                },
                {
                    title:'Kişisel Verilerin Korunması'
                },
                {
                    title:'Gizlilik Politikası'
                },
                {
                    title:'Kullanım Koşulları'
                },
                {
                    title:'Çerez Politikası'
                },
                {
                    title:'İşlem Rehberi'
                },
            ]

        },
        {
            title:'İş Ortağımız Olun',
            items:[
                {
                    title:'Bayimiz Olun'
                },
                {
                    title:'Deponuzu Kiralayın'
                },
                {
                    title:'GetirYemek Restoranı Olun'
                },
                {
                    title:'GetirÇarşı İşletmesi Olun'
                },
                {
                    title:'Zincir Restoranlar'
                },
            ]

        },
        
    ]

    return (
        <div className="bg-white mt-10">
           <div className="container mx-auto px-4 md:px-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-6 pt-5 md:pt-10">
                <section>
                    <nav className="grid gap-y-4">
                    <h6 className="font-semibold text-md text-primary-brand-color">Getir'i indirin!</h6>
                    <a href="#">
                     <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"/>
                  </a>
                  <a href="#">
                    <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"/>
                  </a>
                  <a href="#">
                    <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"/>
                  </a>
                    </nav>
                </section>
                {menus.map((menu,index) => (
                    <Menu title={menu.title} items={menu.items} />
                ))}
            </div>
            <div className="flex flex-col gap-y-4 md:flex-row justify-between items-center border-t border-gray-100 mt-6 pt-6 mb-4">
                <div className=" flex gap-10">
                    &copy; 2023 Getir
                    <a href="#" className="text-primary-brand-color">
                        Bilgi Toplumu Hizmetleri
                    </a>
                </div>
                <nav className="flex gap-x-4 text-gray-600 ">
                    <a href="#">
                    <BsFacebook size={25} />
                    </a>
                    <a href="#">
                    <AiOutlineTwitter size={25} />
                    </a>
                    <a href="#">
                    <AiOutlineInstagram  size={25}/>
                    </a>
                    <div className="border flex items-center justify-center rounded pl-3 pr-3">
                    <a href="#">
                    <CiGlobe size={20} />
                    </a>
                    <p>Türkçe (TR)</p> 
                    </div>
  
                </nav>
            </div>
           </div>
        </div>
    )
}