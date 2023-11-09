import { useState,useEffect } from 'react';
import {Collapse} from 'react-collapse';
import { useWindowWidth } from '@react-hook/window-size';
import {IoIosArrowUp} from "react-icons/io"
import {IoIosArrowDown} from "react-icons/io"

export default function Menu({title,items}) {

  const [isOpen,setIsOpen] = useState(true)
  const windowWidth = useWindowWidth();

  const toggleCollapse = () => {
    if (windowWidth <= 768) {
      setIsOpen(!isOpen)
    }
  }

  useEffect(() => {
    (windowWidth <= 768) ? setIsOpen(false) : setIsOpen(true)
  }, [windowWidth]);



  return (
    <section>
    <nav className="grid gap-y-2 md:gap-y-4">
    <h6 onClick={toggleCollapse} className="font-semibold text-md text-primary-brand-color flex items-center justify-between">
      {title}

      {windowWidth <= 768 &&
         <button className='w-6 h-6 rounded-lg grid place-items-center bg-primary-brand-color bg-opacity-10 text-primary-brand-color
          text-center'>
          <span className={`transition-all ${isOpen ? 'rotate-180' : ''}`}>
            <IoIosArrowDown size={14} />
          </span>
        </button> 
      }

      </h6>
  
    <Collapse isOpened={isOpen}>
      <nav>
        <ul className="grid gap-y-2 ">
            {items.map((item,index) => (
                <li key={index}>
                    <a className="text-sm hover:text-brand-color" href="#">
                    {item.title}
                    </a>
                </li>
            ))}
        </ul>
      </nav>
      </Collapse>
    </nav>
    </section>
  )
}
