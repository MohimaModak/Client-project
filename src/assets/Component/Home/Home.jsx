import React from 'react'
import '../Home/Home.css'
import logo from "../../Gallery/logo.png"
import photo1 from "../../Gallery/One.jpg"
import photo2 from "../../Gallery/Two.jpeg"
import photo3 from "../../Gallery/Three.jpeg"
import photo4 from "../../Gallery/Four.jpg"
import photo5 from "../../Gallery/Five.jpg"
import photo6 from "../../Gallery/BookCover.jpeg"
import photo7 from "../../Gallery/contact.png"
import photo8 from "../../Gallery/Cloud.png"
import photo9 from "../../Gallery/bag3.png"
import photo10 from "../../Gallery/me2.png"
import photo11 from "../../Gallery/ConsertBg.png"
import photo12 from "../../Gallery/bookbus.png"
import { FaYoutube, FaInstagram, FaEnvelope } from "react-icons/fa";



export default function Home() {
  return (
    <div className='relative w-full'>
      <div className='bg-gradient-to-tr from-lime-400 via-lime-50 to-lime-300 bgSize h-full relative'>
        {/* logo section */}
        <div>
          <div className=' h-20 lg:h-28 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-blue-400 to-blue-600 rounded-b-full border-b-8 border-yellow-300 relative'>
            <div className='relative flex justify-center items-center'>
            </div>
            <div className='absolute inset-0 flex justify-center '>
              <img src={logo} className='w-40 h-40 md:w-56 md:h-56 p-0.5 shadow-2xl shadow-gray-500 border-4 border-white rounded-full bg-white' />
            </div>
          </div>


          <div className='flex justify-center items-center mt-16 lg:mt-28 p-16'>
            <div className='lg:flex justify-center items-center lg:gap-5'>

              {/* Image 1 */}
              <div className='border-8 border-yellow-300 rounded-lg'>
                <a href="https://www.feiyr.com/x/BUKK5" target="_blank" rel="noopener noreferrer">
                  <img
                    src={photo1}
                    className='w-[330px] h-[280px] sm:w-[400px] sm:h-[300px] md:w-[450px] md:h-[350px] lg:w-[600px] lg:h-[500px] rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:origin-border'
                  />
                </a>
              </div>

              {/* Image 2 */}
              <div>
                <div className='pt-5 lg:pt-0 flex justify-center items-center md:block lg:block'>

                  <a href="https://www.feiyr.com/x/BU68Y" target="_blank" rel="noopener noreferrer">
                    <img
                      src={photo2}
                      className='w-64 h-40 lg:w-80 lg:h-60 border-8 border-blue-400 rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:origin-border lg:mb-5'
                    />
                  </a></div>

                {/* Image 3 */}

                <div className='pt-5 lg:pt-0 lg:mt-0'>
                  <a href="https://www.feiyr.com/x/BTKBA" target="_blank" rel="noopener noreferrer">
                    <img
                      src={photo3}
                      className='w-64 h-40 lg:w-80 lg:h-60 border-8 border-blue-400 rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:origin-border'
                    />
                  </a></div>


              </div>

              {/* Image 4 */}
              <div className='pt-5 lg:pt-0 flex justify-center gap-3  lg:mt-0 lg:block'>
                <a href="https://www.feiyr.com/x/BUAUB" target="_blank" rel="noopener noreferrer">
                  <img
                    src={photo4}
                    className='w-40 h-28 lg:w-80 lg:h-60 border-8 border-blue-400 rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:origin-border lg:mb-5'
                  />
                </a>

                {/* Image 5 */}
                <a href="https://www.feiyr.com/x/BUC6X" target="_blank" rel="noopener noreferrer">
                  <img
                    src={photo5}
                    className='w-40 h-28 lg:w-80 lg:h-60 border-8 border-blue-400 rounded-lg transform transition duration-300 ease-in-out hover:scale-110 hover:origin-border'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500  bgSize relative border-t-4 border-b-4 border-dotted border-x-white'>
          <div className='flex justify-center items-center '>
            <img src={photo9} className='animate-spin-slow hidden lg:block' />
            <img src={photo9} className='animate-spin-slow' />
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl border-text '>Books</h1>
            <img src={photo9} className='animate-spin-slow' />
            <img src={photo9} className='animate-spin-slow hidden lg:block' />
          </div>
        </div>
      </div>

      {/* Book */}
      <div>
        <div className='flex justify-center items-center flex-col space-y-6 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 p-8 rounded-lg shadow-lg relative'>
          <h2 className='text-3xl sm:text-4xl font-bold childish-text text-center text-blue-500'>
            "The Magic Begins Here!"
          </h2>
          <p className='text-center text-lg sm:text-xl text-blue-500'>
            "Join us on a fantastic journey through stories filled with fun characters and unforgettable adventures. Click the cover to explore!"
          </p>
          <div className='flex justify-center items-center'>
            <div className='lg:flex justify-center items-center lg:gap-10'>
              <a
                href="https://www.amazon.de/Anton-M%C3%A4rchenmond-Janosch-Walte/dp/3000762876/ref=asc_df_3000762876?mcid=e49af351bf41304fa2860c4838549fd8&th=1&psc=1&tag=googshopde-21&linkCode=df0&hvadid=696990059247&hvpos=&hvnetw=g&hvrand=6827749296160767048&hvpone=&hvptwo=&hvqmt=&hvdev=m&hvdvcmdl=&hvlocint=&hvlocphy=9044208&hvtargid=pla-2246251412610&psc=1&gad_source=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className='relative group'>
                  <img
                    src={photo6}
                    alt="Book Cover"
                    className='w-96 h-100 border-8 border-blue-400 rounded-lg transform transition duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl'
                  />
                  {/* Optional: Add an icon or floating stars for decoration */}
                  <div className='absolute inset-0 flex justify-center items-center '>
                    <span className='text-xl rounded-3xl text-blue-400 bg-white px-5 py-2 font-semibold'>Explore Now</span>
                  </div>

                </div>
              </a>

              <div className='flex justify-center'>
                <img src={photo12} className='w-64' />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500  bgSize relative border-t-4 border-b-4 border-dotted border-x-white'>
        <div className='flex justify-center items-center '>
          <img src={photo9} className='animate-spin-slow hidden lg:block' />
          <img src={photo9} className='animate-spin-slow' />
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl border-text '>Contact</h1>
          <img src={photo9} className='animate-spin-slow' />
          <img src={photo9} className='animate-spin-slow hidden lg:block' />
        </div>
      </div>

      {/* Contact  */}
      <div>
        <div>
          <div className='bg-gradient-to-tr from-lime-400 via-lime-50 to-lime-300 bgSize relative'>
            <div className='p-5'>
              <div className="relative">
                {/* Image Container */}
                <div className='hidden lg:flex lg:justify-evenly items-center'>

                  <div>
                    <h1 className='contact-text text-6xl '>Contact</h1>

                    <h1 className='text-green-500 text-xl pointer-events-auto text-center py-5'> Email: info@buzibu.de</h1>
                    <div className='flex justify-center space-x-3'>
                      <a href="https://youtube.com/@papajanosch" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className='text-red-500 w-10 h-10' />
                      </a>
                      <a href="https://www.instagram.com/papajanosch?" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='text-pink-500 w-10 h-10' />
                      </a>

                    </div>


                  </div>


                  <div className=''>
                    <img src={photo7} className='w-200px sm:[w-350px] md:w-[600px] lg:w-[800px]' />
                  </div>

                </div>
              </div>

            </div>


            <div className='bg-gradient-to-tr from-lime-400 via-lime-50 to-lime-300 h-full bgSize block lg:hidden p-5'>

              <div className='flex justify-center items-center'>
                <img src={photo7} className='w-200px sm:[w-350px] md:w-[600px] lg:w-[800px]' />
              </div>

              <div>
                <h1 className='contact-text text-5xl text-center sm:text-3xl md:text-4xl lg:text-6xl py-3 lg:py-14'>Contact</h1>

                <h1 className='text-green-500 text-xl pointer-events-auto text-center'> Email: info@buzibu.de</h1>
                <div className='flex justify-center space-x-3'>
                  <a href="https://youtube.com/@papajanosch" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className='text-red-500 w-10 h-10' />
                  </a>
                  <a href="https://www.instagram.com/papajanosch?" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className='text-pink-500 w-10 h-10' />
                  </a>

                </div>

                <div>

                </div>

              </div>
            </div>
          </div>
        </div>

        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500  bgSize relative border-t-4 border-b-4 border-dotted border-x-white'>
          <div className='flex justify-center items-center '>
            <img src={photo9} className='animate-spin-slow hidden lg:block' />
            <img src={photo9} className='animate-spin-slow' />
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl border-text '>Consert</h1>
            <img src={photo9} className='animate-spin-slow' />
            <img src={photo9} className='animate-spin-slow hidden lg:block' />
          </div>
        </div>
      </div>


      {/* section 1 */}
      <div>
        <div className='bg-lime-100 bgSize p-10'>
          <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center shadow-xl shadow-gray-400 w-max'>
              <img src={photo11} className='rounded-lg' />
            </div>
          </div>
          <div className='text-center '>

            <p className='contact-text text-2xl lg:text-4xl p-5 lg:p-10'>🐾🎶 Animal Concert 🎶🐾</p>

            <p className='text-lime-500 font-normal'>Get ready for a wild musical adventure! 🎵 Sing along as animals create a jungle jam! Click to hear the lion's roar, monkey's beats, and bird's melody! 🦁🐵🦜</p>
          </div>


        </div>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500  bgSize relative border-t-4 border-b-4 border-dotted border-x-white'>
          <div className='flex justify-center items-center '>
            <img src={photo9} className='animate-spin-slow hidden lg:block' />
            <img src={photo9} className='animate-spin-slow' />
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl border-text hidden md:block'>Science</h1>
            <img src={photo9} className='animate-spin-slow' />
            <img src={photo9} className='animate-spin-slow ' />
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-blue-100 to-blue-100 w-full h-max relative">

        <div className='py-10'>
          <h2 className='border-text text-2xl lg:text-4xl text-center uppercase font-bold'>Science and Space</h2>
          <div className="brain relative flex justify-center items-center pt-10">
            <div>
              {/* 1st */}
              <h1 className="w-80 h-80 rounded-full  bg-gradient-to-tr from-pink-200 via-orange-200 to-blue-200 relative">
                <div className="absolute inset-0 flex">
                  <span className="w-20 h-20 shadow-2xl shadow-slate-400 rounded-full bg-gradient-to-tr from-yellow-200 via-orange-100 to-pink-200"></span>
                </div>

                {/* 2nd */}
                <div className='absolute inset-0 flex justify-center items-center'>
                  <h1 className="w-60 h-60 rounded-full shadow-2xl shadow-slate-400 bg-gradient-to-tr from-emerald-200 via-yellow-100 to-orange-200 relative">
                    <div className="absolute inset-0 flex ">
                      <span className="w-16 h-16 shadow-2xl shadow-slate-600 rounded-full bg-gradient-to-tr from-red-100 via-pink-50 to-blue-200"></span>
                    </div>

                    <div className='absolute inset-0 flex justify-center items-center'>
                      <h1 className="w-32 h-32 rounded-full shadow-2xl shadow-slate-400 bg-gradient-to-tr from-yellow-200 via-orange-100 to-orange-200 relative">
                        <div className="absolute inset-0 flex ">
                          <span className="w-10 h-10 shadow-2xl shadow-slate-600 rounded-full bg-gradient-to-tr from-blue-300 via-yellow-100 to-green-300"></span>
                        </div>
                      </h1>
                    </div>
                  </h1>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* footer  */}
      <div className='bg-sky-100 relative  h-screen'>
        <div className=''>
          <div>
            <div className='flex '>
              <img src={photo8} className='block md:hidden lg:hidden' />
            </div>
          </div>
          <div className='absolute lg:flex justify-center items-center inset-0 p-10'>

            <div className='flex justify-center items-center relative'>
              <div>
                <h1 className='absolute top-20 sm:top-24 md:top-20 lg:top-36 footer-text text-2xl md:text-3xl lg:text-4xl'>Auf ins <br /> Abenteuer!</h1>
                <img src={photo10} className='w-96 lg:w-[600px]' />
              </div>
            </div>
            <div>
              <a href="https://youtube.com/@papajanosch" target="_blank" rel="noopener noreferrer">
                <FaYoutube className='text-red-600 w-24 h-20 sm:w-32 sm:h-28 md:w-40 md:h-36 lg:w-44 lg:h-40' />
              </a>
              <h1 className='footer-text text-4xl text-center'>Contact</h1>
              <div className='flex justify-center pt-5 items-center space-x-4'>
                <h1 className='text-xl text-blue-500 flex justify-center items-center gap-2'><FaEnvelope className='text-blue-500 w-10 h-10' /> info@buzibu.de</h1>

                <div className='flex justify-center space-x-3'>

                  <a href="https://www.instagram.com/papajanosch?" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className='text-pink-500 w-10 h-10' />
                  </a>
                </div>
              </div>
              <p className="mt-4  text-blue-500  text-center p-5 text-2xl">
                © 2025 KiddoBeats. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

