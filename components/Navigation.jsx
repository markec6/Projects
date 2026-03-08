import React, { useState, useEffect } from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { ImMenu } from "react-icons/im";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';


function Navigation() {
    const NavLinks = ['Home', 'Contact', 'Shop', 'About']
    const [darkMode, setdarkMode] = useState(true)
    const [isMobile, setisMobile] = useState(true)

    function ChangeMode () {
        setdarkMode(!darkMode)
    }
    function toggle () {
        setisMobile(!isMobile) // state za nav-menu
    }


    useEffect(() => {
        if (darkMode) {  // ako je state true
            document.documentElement.classList.add('dark');  // dodaj calss dark
        } else {  // ako je false
            document.documentElement.classList.remove('dark'); // skini class
        }
    }, [darkMode]); // svaki put posle promene state, ponovi ovaj uslov

  return (
    <div className="fixed w-[100%] px-[10px] mx-auto bg-[var(--color-bg)] text-[var(--color-text)] ">
      <div className="h-[80px] max-w-7xl mx-auto px-4 flex justify-between items-center">
        <p className="text-[20px] font-bold">
          Imoodev
        </p>
        <div className="flex gap-[52px]">
          <div className="hidden md:flex gap-[52px]">
            <ul
              className={`flex gap-[20px] text-[#8E919A] text-[14px] font-semibold`}
            >
              {NavLinks.map((nav, index) => {
                return <Link key={index}>{nav}</Link>;
              })}
            </ul>
            <div className="flex">
              {darkMode ? (
                <MdOutlineDarkMode
                  onClick={ChangeMode}
                  className="size-[20px] text-white"
                />
              ) : (
                <MdDarkMode onClick={ChangeMode} className="size-[20px]" />
              )}
            </div>
          </div>

          <div className="size-[28px] md:hidden">
            <ImMenu onClick={toggle} className="size-[28px]" />
            {!isMobile && ( // ako je state true (obrnut), otvara se menu
              <div className="w-[100%] absolute bg-[#E8EDF5] top-[70px] z-20 right-0 left-0 ">
                 <ul
                      className={`flex flex-col py-[10px] text-center gap-[20px] text-[#8E919A] text-[14px] font-semibold`}
                    >
                      {NavLinks.map((nav, index) => {
                        return <Link key={index}>{nav}</Link>;
                      })}
                 </ul>

                <ImCross
                  onClick={toggle}
                  className="absolute top-[20px] right-[20px] text-[#0D1337]"
                />
                <div className="absolute top-[20px] left-[20px]">
                  {darkMode ? (
                    <MdOutlineDarkMode
                      onClick={ChangeMode}
                      className="size-[20px] text-[#0D1337]"
                    />
                  ) : (
                    <MdDarkMode onClick={ChangeMode} className="size-[20px]" />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation