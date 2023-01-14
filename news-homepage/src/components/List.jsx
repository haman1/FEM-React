import React from 'react'
import retro from '../images/image-retro-pcs.jpg'
import laptop from '../images/image-top-laptops.jpg'
import gaming from '../images/image-gaming-growth.jpg'

function List() {
  return (
    
        <div className='grid grid-cols-2 gap-6 lg:flex items-center justify-start '>
                <img src={retro} alt="" className='sm:w-28'/>
            
           
            <div className='leading-5'>
                <h2 className='text-3xl text-grayish-blue lg:text-2xl'>01</h2>
                <h3 className='font-extrabold text-Very-dark-blue  hover:text-red'>Reviving Retro PCs</h3>
                <p className='text-Dark-grayish-blue'>What happens when old PCs are given modern upgrades?</p>
            </div>
          
                <img src={laptop} alt="" className='sm:w-28' />
          

            <div className='leading-5'>
                <h2 className='text-3xl text-grayish-blue sm:text-2xl'>02</h2>
                <h3 className='font-extrabold text-Very-dark-blue hover:text-red'>Top 10 Laptops of 2022</h3>
                <p className='text-Dark-grayish-blue'>Our best picks for various needs and budgets.</p>
            </div>

                <img src={gaming} alt="" className='sm:w-28'/>
            

            <div className='leading-5'>
                <h2 className='text-3xl text-grayish-blue sm:text-2xl'>03</h2>
                <h3 className='font-extrabold text-Very-dark-blue hover:text-red'>The Growth of Gaming</h3>
                <p className='text-Dark-grayish-blue'>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
 
  )
}

export default List