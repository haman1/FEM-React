import React from 'react'
import mobile from '../images/image-web-3-mobile.jpg'
import web from '../images/image-web-3-desktop.jpg'
function Header() {
  return (
    <div className='py-10 lg:grid grid-cols-3 gap-6 ' >
        <div className="main  col-span-2">
            <img src={mobile} alt=""  className='w-screen lg:hidden' />
            <img src={web} alt="" className='lg:block hidden' />

            <div className="text-content leading-5 lg:flex gap-2 items-center">
                <h1 className='font-bold text-5xl  py-6'>The Bright Future of Web 3.0?</h1>
                <div className="cta w-11/12 lg:py-8">
                    <p className='pb-6 text-Dark-grayish-blue'> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                        But is it really fulfilling its promise?
                    </p>
                    <button className='bg-red text-white font-bold py-2 px-4 hover:cursor-pointer hover:bg-Very-dark-blue'>Read More</button>
                </div>
              
            </div>
        </div>

        <div className="side bg-Very-dark-blue mt-14 p-4  lg:mt-0 ">
            
            <div>
                <h2 className='text-orange font-bold text-3xl font-weight: 900'>New</h2>
                <h3 className='text-white mt-4 font-bold '> Hydrogen VS Electric Cars</h3>
                <p className='text-grayish-blue mb-6 border-b py-2 font-thin'> Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>

            <div>
                <h3 className='text-white mt-4 font-bold'>The Downsides of AI Artistry</h3>
                <p className='text-grayish-blue mb-6 border-b py-2 font-thin'>What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            
            <div>
                <h3 className='text-white mt-4 font-bold'>Is VC Funding Drying Up?</h3>
                <p className='text-grayish-blue py-2 font-thin'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
            
            
        </div>

    </div>
  )
}

export default Header