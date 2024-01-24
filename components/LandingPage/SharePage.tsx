import React from 'react';
import { AiOutlineTool, AiOutlineShareAlt, AiOutlineInfoCircle } from 'react-icons/ai';

const SharePage = () => {
    return (
        <div className="mt-16">
            <div className="mb-4 px-4 text-center text-[28px] font-extrabold leading-8 text-gray-900 md:text-[40px] md:leading-[48px]">
                Save / Share your <span className="bg-gradient-to-r bg-clip-text text-transparent from-[#31ce34] to-[#2c8236]">Farm Insights</span>
            </div>
            <div className="mx-auto max-w-2xl px-4 text-center text-[16px] leading-6 text-gray-900 md:text-[20px] md:leading-8 ">
                Save or share your analyzed results for informed farming decisions
            </div>

            <div className="flex justify-center mt-10">
                <div className="flex flex-wrap justify-center sm:justify-around lg:w-10/12 xl:w-11/12">
                    <div className="relative border-2 z-10 flex transform-gpu cursor-pointer flex-col rounded-2xl bg-white p-4 shadow-lg gradient-border-2 lg:max-w-[325px] m-5 sm:w-[280px] lg:w-[300px] xl:w-[320px]">
                        <div className="h-[150px] w-full rounded object-cover flex justify-center items-center text-[#3182CE]">
                            <AiOutlineTool size={80} />
                        </div>
                        <div className="tracking-tight my-3 text-lg font-semibold leading-6 text-gray-800">Explore Farm Insights</div>
                        <div className="blue-link mb-5 text-base font-normal leading-[22px] text-gray-500">
                            Dive into detailed insights about your farm. Analyze tools, equipment, and crop patterns effortlessly.
                        </div>
                    </div>

                    <div className="relative border-2 z-10 flex transform-gpu cursor-pointer flex-col rounded-2xl bg-white p-4 shadow-lg gradient-border-2 lg:max-w-[325px] m-5 sm:w-[280px] lg:w-[300px] xl:w-[320px]">
                        <div className="h-[150px] w-full rounded object-cover flex justify-center items-center text-[#4BBF6B]">
                            <AiOutlineShareAlt size={80} />
                        </div>
                        <div className="tracking-tight my-3 text-lg font-semibold leading-6 text-gray-800">Share Farm Success</div>
                        <div className="blue-link mb-5 text-base font-normal leading-[22px] text-gray-500">
                            Celebrate your farming achievements. Share your insights with your farming community and inspire others.
                        </div>
                    </div>

                    <div className="relative border-2 z-10 flex transform-gpu cursor-pointer flex-col rounded-2xl bg-white p-4 shadow-lg gradient-border-2 lg:max-w-[325px] m-5 sm:w-[280px] lg:w-[300px] xl:w-[320px]">
                        <div className="h-[150px] w-full rounded object-cover flex justify-center items-center text-[#2C5282]">
                            <AiOutlineInfoCircle size={80} />
                        </div>
                        <div className="tracking-tight my-3 text-lg font-semibold leading-6 text-gray-800">Stay Informed Together</div>
                        <div className="mb-5 text-base font-normal leading-[22px] text-gray-500">
                            Share your farming journey and knowledge. Join a community of informed farmers to navigate the complexities of agriculture together.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SharePage;
 