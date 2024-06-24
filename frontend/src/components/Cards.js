import React, { useEffect } from 'react';
import { Carousel, initTWE } from 'tw-elements';

const Cards = () => {
    useEffect(() => {
        initTWE({ Carousel });
    }, []);

    return (
        <div>
            
            <div
                id="carouselDarkVariant"
                className="relative"
                data-twe-carousel-init
                data-twe-ride="carousel">
                <div
                    className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                    data-twe-carousel-indicators>
                    <button
                        data-twe-target="#carouselDarkVariant"
                        data-twe-slide-to="0"
                        data-twe-carousel-active
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-current="true"
                        aria-label="Slide 1"></button>
                    <button
                        data-twe-target="#carouselDarkVariant"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        data-twe-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button
                        data-twe-target="#carouselDarkVariant"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        data-twe-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button
                        data-twe-target="#carouselDarkVariant"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        data-twe-slide-to="3"
                        aria-label="Slide 4"></button>
                    <button
                        data-twe-target="#carouselDarkVariant"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        data-twe-slide-to="4"
                        aria-label="Slide 5"></button>
                    <button
                        data-twe-target="#carouselDarkVariant"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        data-twe-slide-to="5"
                        aria-label="Slide 6"></button>
                    <button
                        data-twe-target="#carouselDarkVariant"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        data-twe-slide-to="6"
                        aria-label="Slide 7"></button>
                </div>

                <div
                    className=" w-full overflow-hidden after:clear-both after:block after:content-['']">
                    <div
                        className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-twe-carousel-fade
                        data-twe-carousel-item
                        data-twe-carousel-active>
                        <img
                            src="https://th.bing.com/th/id/OIP.KEOAtei1GEAikymYiXBXAQHaEK?rs=1&pid=ImgDetMain"
                            className="card-image block w-full h-96 opacity-50"
                            alt="Motorbike Smoke" />
                        <div
                            className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-2xl font-extrabold">Listen from Top artist</h5>
                            <p className='text-xl'>
                                Listen from top artist like Arijit Singh,Shreya Ghosal...
                            </p>
                        </div>
                    </div>
                    <div
                        className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-twe-carousel-fade
                        data-twe-carousel-item>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
                            className="card-image block w-full h-96 opacity-50"
                            alt="Mountaintop" />
                        <div
                            className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-2xl font-extrabold">Listen Top hindi</h5>
                            <p className='text-xl'>
                                Listen to the top songs like Sajni,Rockstar...
                            </p>
                        </div>
                    </div>
                    <div
                        className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-twe-carousel-fade
                        data-twe-carousel-item>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
                            className="card-image block w-full h-96 opacity-50"
                            alt="Woman Reading a Book" />
                        <div
                            className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-2xl font-extrabold">Listen Albums</h5>
                            <p className='text-xl'>
                                Listen to the latest album BRAT,TIMELESS...
                            </p>
                        </div>
                    </div>
                    <div
                        className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-twe-carousel-fade
                        data-twe-carousel-item>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(30).webp"
                            className="card-image block w-full h-96 opacity-50"
                            alt="Reading a Book" />
                        <div
                            className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-2xl font-extrabold">Listen Pop</h5>
                            <p className='text-xl'>
                                Listen to the trending pop like Greedy, Houdini...
                            </p>
                        </div>
                    </div>
                    <div
                        className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-twe-carousel-fade
                        data-twe-carousel-item>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(25).webp"
                            className="card-image block w-full h-96 opacity-50"
                            alt="Woman Reading" />
                        <div
                            className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-2xl font-extrabold">Listen Bollywood Hits</h5>
                            <p className='text-xl'>
                                Listen to top Bollywood Hits such as Jugnu, Tum Tum
                            </p>
                        </div>
                    </div>
                    <div
                        className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-twe-carousel-fade
                        data-twe-carousel-item>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(20).webp"
                            className="card-image block w-full h-96 opacity-50"
                            alt="Mountain view" />
                        <div
                            className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-2xl font-extrabold">Listen Classical</h5>
                            <p className='text-xl'>
                                Listen to the top classical songs Lag Ja Gale, Sham mastani...
                            </p>
                        </div>
                    </div>
                    <div
                        className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-twe-carousel-fade
                        data-twe-carousel-item>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
                            className="card-image block w-full h-96 opacity-50"
                            alt="City lights" />
                        <div
                            className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-2xl font-extrabold">Single Artist</h5>
                            <p className='text-xl'>
                                Listen to the Artist's single like Husn, Baarishein...
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-twe-target="#carouselDarkVariant"
                    data-twe-slide="prev">
                    <span className="inline-block h-8 w-8 dark:grayscale">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </span>
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Previous</span>
                </button>
                <button
                    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-twe-target="#carouselDarkVariant"
                    data-twe-slide="next">
                    <span className="inline-block h-8 w-8 dark:grayscale">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Next</span>
                </button>
            </div>
        </div>
    );
}

export default Cards;
