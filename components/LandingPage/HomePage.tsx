"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import WavyText from '../LandingPageTools/WavyText'

const HomePage = () => {
    return (
        <div className='flex flex-col items-center bg-clip-text'>
            <div className='mt-16 bg-gradient-to-r sm:text-[24px] text-[30px] font-extrabold uppercase leading-[24.2px] tracking-widest md:text-[26px] md:leading-[30px] lg:leading-[36px] bg-clip-text text-transparent from-[#cadd39] to-[#2dc75b] lg:text-[60px] h-[60px]'>
                Farm Smart
            </div>
            <h1 className='text-gray-900 text-[28px] font-extrabold leading-[34px] tracking-tight md:text-[40px] md:leading-[48px] lg:text-5xl lg:leading-[55px] w-full max-w-[740px] !whitespace-pre-line text-center mt-8'>
                <div className='flex items-center justify-center'>
                    Seeding
                    <span className='bg-gradient-to-r bg-clip-text text-transparent ml-2 from-[#d2d263] to-[#3ae242]'>
                        <WavyText text="Success," replay={true} />
                    </span>
                </div>
                <div className='flex items-center justify-center'>
                    Harvesting
                    <span className='bg-gradient-to-r bg-clip-text text-transparent ml-2 from-[#d2d263] to-[#3ae242] '>
                        <WavyText text="Tomorrow" replay={true} />
                    </span>
                </div>
            </h1>
        
            <div className='text-gray-800 max-w-[800px] text-[16px] leading-[22px] md:text-[19px] md:leading-[26px] lg:text-[24px] lg:leading-[36px] md:font-medium text-center mt-4 px-8'>
                Elevate your farm productivity with FarmSmart—precision farming delivering accurate predictions, user-friendly interface, real-time monitoring, and a commitment to sustainability.
            </div>

            <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ x: 0, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                }}
                className='mt-24 px-8'>
                <Image src={"/logo.jpg"} height={680} width={525} alt='homePage.png' className='rounded-3xl mb-4' />
            </motion.div>
            <div className='w-full bg-[#56872f] sm:h-[120px] h-fit py-4 flex items-center justify-around sm:flex-row flex-col'>
                <div className='text-white text-[25px] font-bold py-2'>Crop <span className='italic'>Returns</span></div>
                <div className='text-white text-[25px] font-bold py-2'>Cost per yield</div>
                <div className='text-white text-[25px] font-bold py-2'>Crop Availability</div>
                <div className='text-white text-[25px] font-bold italic py-2'>Yield</div>
                <div className='text-white text-[25px] font-bold py-2'>Crop guesser</div>
            </div>
        </div>
    )
}

export default HomePage