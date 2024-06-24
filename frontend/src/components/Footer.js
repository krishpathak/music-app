import React from 'react'
import { FaCompactDisc } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
<footer class="bg-black rounded-lg shadow dark:bg-gray-900">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <div><FaCompactDisc className='disc text-orange-300 h-14 w-14 mx-3' /></div>
                <h1 className="h1title text-orange-300 py-2 from-inherit mx-2 text-4xl">Musicify</h1>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li className='flex items-center rounded-md w-26 h-10 hover:bg-orange-300 text-orange-300 hover:text-black me-4 '>
                    <a href="#" class="me-4 md:me-6 self-center mx-4">Instagram</a>
                </li>
                <li className='flex items-center rounded-md w-26 h-10 hover:bg-orange-300 text-orange-300 hover:text-black me-4 '>
                    <a href="#" class="me-4 md:me-6 self-center mx-4">Github</a>
                </li>
                <li className='flex items-center rounded-md w-26 h-10 hover:bg-orange-300 text-orange-300 hover:text-black me-4 '>
                    <a href="#" class="me-4 md:me-6 self-center mx-4">Privacy Policy</a>
                </li>
                <li className='flex items-center rounded-md w-26 h-10 hover:bg-orange-300 text-orange-300 hover:text-black me-4 '>
                    <a href="#" class="me-4 md:me-6 self-center mx-4">About Us</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Musicify™</a>. All Rights Reserved.</span>
    </div>
</footer>


    </div>
  )
}

export default Footer