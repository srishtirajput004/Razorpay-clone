import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from "./images/razorpaylogo.png"
import flag from "./images/indian-flag.png"
import razor from "./images/razorpay.jpg"
import endimg from "./images/lower-image.jpeg"
import dotted from "./images/dotted_image.avif"
import curlec from "./images/curlec.avif"
import payment from "./images/payment-icon.jpg"
import razo from "./images/Razorpay-Startup-Story.jpg"
import zigzag from "./images/images-3.jpeg"
import bgimage from "./images/bgimage.jpg"
import xicon from "./images/xicon.png"
import graylines from "./images/graylines.jpg"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* navbar */}
      <nav class="bg-blue-950">
            <div class="relative w-[1080px] mx-auto flex items-center justify-between">
              <a href="/" class="cursor-pointer py-7 pr-7">
              <img src={logo}  alt="logo" width="125px" height="30px"/>
              </a>
              <ul class="flex space-x-6">
                <li class="text-white font-medium py-7 hover:text-blue-400 cursor-pointer
                  transition-all duration-200 realtive group">
                  <a href="#" class="inline-block relative">Payments
                  <div class="absolute bottom-0 left-0 w-full h-1 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></div>
                  </a>
                </li>
                <li class="text-white font-medium py-7 hover:text-blue-400 cursor-pointer
                  transition-all duration-200 realtive group">
                  <a href="#" class="inline-block relative">Banking
                  <div class="absolute bottom-0 left-0 w-full h-1 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></div>
                  </a>
                </li>
                <li class="text-white font-medium py-7 hover:text-blue-400 cursor-pointer
                  transition-all duration-200 realtive group">
                  <a href="#" class="inline-block relative">Corporate Card
                  </a>
                </li>
                <li class="text-white font-medium py-7 hover:text-blue-400 cursor-pointer
                  transition-all duration-200 realtive group">
                  <a href="#" class="inline-block relative">Payroll
                  </a>
                </li>
                <li class="text-white font-medium py-7 hover:text-blue-400 cursor-pointer
                  transition-all duration-200 realtive group">
                  <a href="#" class="inline-block relative">Resources
                  <div class="absolute bottom-0 left-0 w-full h-1 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></div>
                  </a>
                </li>
                <li class="text-white font-medium py-7 hover:text-blue-400 cursor-pointer
                  transition-all duration-200 realtive group">
                  <a href="#" class="inline-block relative">Support
                  <div class="absolute bottom-0 left-0 w-full h-1 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></div>
                  </a>
                </li>
                <li class="text-white font-medium py-7 hover:text-blue-400 cursor-pointer
                  transition-all duration-200 realtive group">
                  <a href="#" class="inline-block relative">Pricing
                  <div class="absolute bottom-0 left-0 w-full h-1 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></div>
                  </a>
                </li>
              </ul>
              <div class="flex space-x-6">
                <img src={flag} alt="Iflag" width="28px" height="20px" />
                <button class="py-3 px-5 text-white border-blue-400 border rounded-sm text-sm font-bold">Log in</button>
                <button class="py-3 px-4 font-bold rounded-sm text-sm bg-white text-blue-400 border hover:text-blue-600 transition-all duration-200">Sign Up</button>
              </div>
            </div>
      </nav>
      {/* hero section */}
      <section class="relative bg-blue-950">
        <div class="w-10/12 max-w-[1080px] flex flex-row justify-between items-center mx-auto">
          <div class="text-white  space-y-6">
            <h1 class="font-medium font-bold text-[40px] leading-[1.2]">Power your finance , grow your business</h1>
            <div class="w-6 h-1 bg-green-300"></div>
            <p class="font-medium text-[18px] leading-7 opacity-75">Accept payments from customers. Automate payouts to vendors and employees. Never run out of working capital.</p>
            <button class="py-4 px-3  bg-blue-400 font-medium rounded-md font-bold hover:bg-blue-600 transition-all duration-200">Sign Up Now</button>
          </div>
          <img src={razor} alt="image" class="w-full max-w-[680px]" />
        </div>
        <div class="w-[103%] absolute left-0 right-0">
          <img src={endimg} alt="image" class="h-[80px] w-full"/>
        </div>
      </section>
      {/* feature section */}
      <section class="relative mt-[190px] overflow-hidden">
        <img src={dotted} alt="image" loading='lazy' width="233" height="167"class="absolute
        -top-[8rem] left-[5rem] inline-block -z-10"/>
        <img src={dotted} alt="image" loading='lazy' width="233" height="167" class="absolute top-[3rem] 
        right-0 inline-block"/>
        <div class="relative w-11/12 max-w-[1080px] mx-auto pt-4">
          {/* heading */}
          <h2 class="font-high text-center text-2xl leading-[1.2] font-extrabold">Accept Payments with Razorpay Payment Suite</h2>
          <div class="w-6 h-1 bg-green-300 mx-auto mt-4 mb-6"></div>
          {/* content */}
          <div class="w-full min-h-[520px] bg-white flex rounded-md relative p-10 py-12 border">
            {/* left */}
            <div class="flex flex-col justify-between w-full gap-6">
              <h3 class="font-high text-[28px] leading-10 font-bold max-w-[500px]">Supercharge your business with the all-powerful <span class="text-blue-600">Payment Gateway</span></h3>
              <ul class="space-y-2">
                <li class="font-medium flex flex-row items-center space-x-2">
                  <i class="fas fa-check" style={{color:"green", fontSize:"24px"}}></i>
                  <span>100+ Payment Methods</span>
                </li>
                <li class="font-medium flex flex-row items-center space-x-2">
                   <i class="fas fa-check" style={{color:"green", fontSize:"24px"}}></i>
                  <span>Industry Leading Success Rate</span>
                </li>
                <li class="font-medium flex flex-row items-center space-x-2">
                   <i class="fas fa-check" style={{color:"green", fontSize:"24px"}}></i>
                  <span>Superior Checkout Experience</span>
                </li>
                <li class="font-medium flex flex-row items-center space-x-2">
                   <i class="fas fa-check" style={{color:"green", fontSize:"24px"}}></i>
                  <span>Easy to Integrate</span>
                </li>
                <li class="font-medium flex flex-row items-center space-x-2">
                   <i class="fas fa-check" style={{color:"green", fontSize:"24px"}}></i>
                  <span>Instants Settlements from day 1</span>
                </li>
                <li class="font-medium flex flex-row items-center space-x-2">
                   <i class="fas fa-check" style={{color:"green", fontSize:"24px"}}></i>
                  <span>In-Depth Reporting and Insights </span>
                </li>
              </ul>
              {/* for button and link */}
              <div class="flex flex-row items-center gap-4">
                <button class="flex flex-row items-center bg-blue-700 text-white w-fit rounded-md py-[14px] px-[18px] font-medium font-bold
                 hover:bg-blue-500 transition-all duration-200">Sign Up Now<svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                 <path d="M5 12h14M13 5l7 7-7 7" />
               </svg>
               </button>
                <div class="flex items-center cursor-pointer group">
                  <a href="/" class="font-medium font-bold text-blue-700 group-hover:text-gray-500 transition-all duration-200">Know More</a>
                  {/* icons */}
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:text-gray-500">
                  <text x="0" y="20" fontSize="24" fill="blue">{'>'}</text>
                  </svg>

                </div>
              </div>
            </div>
            <img src={curlec} alt="image" class="max-w-[600px] absolute right-0 bottom-20"/>
          </div>
          <div class="w-full grid grid-cols-3 gap-4 mt-10">
          {/* box-1 */}
          <div class="w-full min-h-[15rem] cursor-pointer ">
            <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  
             <rect x="0" y="0" width="100%" height="100%" rx="16" ry="16" fill="white" />

  
             <circle cx="341" cy="40" r="24" fill="#3478F6"  />
  
  
             <path d="M344 36 L356 36 L356 48" stroke="white" stroke-width="2" fill="none" />
             <line x1="344" y1="48" x2="356" y2="36" stroke="white" stroke-width="2" />

  
             <text x="20" y="50" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#0a0a23">
               Payment Links
             </text>

 
             <text x="20" y="80" font-family="Arial, sans-serif" font-size="14" fill="#6c757d">
               Create, Copy &amp; Collect With Payment
             </text>
             <text x="20" y="100" font-family="Arial, sans-serif" font-size="14" fill="#6c757d">
               Button. Collect one time or subscription
             </text>
             <text x="20" y="120" font-family="Arial, sans-serif" font-size="14" fill="#6c757d">
               payments &amp; more
             </text>

  
             <text x="20" y="160" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#3478F6">
               Know More
             </text>
             <polyline points="105,155 112,160 105,165" fill="none" stroke="#3478F6" stroke-width="2" />
              </svg>
            </div>
            {/* box-2 */}
            <div class="w-full min-h-[15rem] cursor-pointer">
            <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  
             <rect x="0" y="0" width="100%" height="100%" rx="16" ry="16" fill="white" />

  
             <circle cx="341" cy="40" r="24" fill="#3478F6" />
  
  
             <path d="M344 36 L356 36 L356 48" stroke="white" stroke-width="2" fill="none" />
             <line x1="344" y1="48" x2="356" y2="36" stroke="white" stroke-width="2" />

  
             <text x="20" y="50" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#0a0a23">
               Payment Pages
             </text>

 
             <text x="20" y="80" font-family="Arial, sans-serif" font-size="14" fill="#6c757d">
               Create, Copy &amp; Collect With Payment
             </text>
             <text x="20" y="100" font-family="Arial, sans-serif" font-size="14" fill="#6c757d">
               Button. Collect one time or subscription
             </text>
             <text x="20" y="120" font-family="Arial, sans-serif" font-size="14" fill="#6c757d">
               payments &amp; more
             </text>

  
             <text x="20" y="160" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#3478F6">
               Know More
             </text>
             <polyline points="105,155 112,160 105,165" fill="none" stroke="#3478F6" stroke-width="2" />
              </svg>
            </div>
            {/* box-3 */}
            <div class="w-full min-h-[15rem] cursor-pointer">
            <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  
             <rect x="0" y="0" width="100%" height="100%" rx="16" ry="16" fill="white" />

  
             <circle cx="341" cy="40" r="24" fill="#3478F6" />
  
  
             <path d="M344 36 L356 36 L356 48" stroke="white" stroke-width="2" fill="none" />
             <line x1="344" y1="48" x2="356" y2="36" stroke="white" stroke-width="2" />

  
             <text x="20" y="50" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#0a0a23">
               Payment Buttons
             </text>

 
             <text x="20" y="80" font-family="Arial, sans-serif" font-size="14" fill="#6c757d">
               Create, Copy &amp; Collect With Payment
             </text>
             <text x="20" y="100" font-family="Arial, sans-serif" font-size="14" fill="#6c757d">
               Button. Collect one time or subscription
             </text>
             <text x="20" y="120" font-family="Arial, sans-serif" font-size="14" fill="#6c757d">
               payments &amp; more
             </text>

  
             <text x="20" y="160" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#3478F6">
               Know More
             </text>
             <polyline points="105,155 112,160 105,165" fill="none" stroke="#3478F6" stroke-width="2" />
              </svg>
            </div>
            {/* box-4 */}
            <div class="w-full min-h-[15rem] cursor-pointer">
            <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  
             <rect x="0" y="0" width="100%" height="100%" rx="16" ry="16" fill="white" />

  
             <circle cx="341" cy="40" r="24" fill="#3478F6" />
  
  
             <path d="M344 36 L356 36 L356 48" stroke="white" stroke-width="2" fill="none" />
             <line x1="344" y1="48" x2="356" y2="36" stroke="white" stroke-width="2" />

  
             <text x="20" y="50" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#0a0a23">
               Subscriptions
             </text>

 
             <text x="20" y="80" font-family="Arial, sans-serif" font-size="14" fill="#6c757d">
               Create, Copy &amp; Collect With Payment
             </text>
             <text x="20" y="100" font-family="Arial, sans-serif" font-size="14" fill="#6c757d">
               Button. Collect one time or subscription
             </text>
             <text x="20" y="120" font-family="Arial, sans-serif" font-size="14" fill="#6c757d">
               payments &amp; more
             </text>

  
             <text x="20" y="160" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#3478F6">
               Know More
             </text>
             <polyline points="105,155 112,160 105,165" fill="none" stroke="#3478F6" stroke-width="2" />
              </svg>
            </div>
            {/* box-5 */}
            <div class="w-full min-h-[15rem] cursor-pointer">
            <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  
             <rect x="0" y="0" width="100%" height="100%" rx="16" ry="16" fill="white" />

  
             <circle cx="341" cy="40" r="24" fill="#3478F6" />
  
  
             <path d="M344 36 L356 36 L356 48" stroke="white" stroke-width="2" fill="none" />
             <line x1="344" y1="48" x2="356" y2="36" stroke="white" stroke-width="2" />

  
             <text x="20" y="50" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#0a0a23">
               Route
             </text>

 
             <text x="20" y="80" font-family="Arial, sans-serif" font-size="14" fill="#6c757d">
               Create, Copy &amp; Collect With Payment
             </text>
             <text x="20" y="100" font-family="Arial, sans-serif" font-size="14" fill="#6c757d">
               Button. Collect one time or subscription
             </text>
             <text x="20" y="120" font-family="Arial, sans-serif" font-size="14" fill="#6c757d">
               payments &amp; more
             </text>

  
             <text x="20" y="160" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#3478F6">
               Know More
             </text>
             <polyline points="105,155 112,160 105,165" fill="none" stroke="#3478F6" stroke-width="2" />
              </svg>
            </div>
            {/* box-6 */}
            <div class="w-full min-h-[15rem] cursor-pointer">
            <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  
             <rect x="0" y="0" width="100%" height="100%" rx="16" ry="16" fill="white" />

  
             <circle cx="341" cy="40" r="24" fill="#3478F6" />
  
  
             <path d="M344 36 L356 36 L356 48" stroke="white" stroke-width="2" fill="none" />
             <line x1="344" y1="48" x2="356" y2="36" stroke="white" stroke-width="2" />

  
             <text x="20" y="50" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#0a0a23">
               Smart Collect
             </text>

 
             <text x="20" y="80" font-family="Arial, sans-serif" font-size="14" fill="#6c757d">
               Create, Copy &amp; Collect With Payment
             </text>
             <text x="20" y="100" font-family="Arial, sans-serif" font-size="14" fill="#6c757d">
               Button. Collect one time or subscription
             </text>
             <text x="20" y="120" font-family="Arial, sans-serif" font-size="14" fill="#6c757d">
               payments &amp; more
             </text>

  
             <text x="20" y="160" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#3478F6">
               Know More
             </text>
             <polyline points="105,155 112,160 105,165" fill="none" stroke="#3478F6" stroke-width="2" />
              </svg>
            </div>
        </div>
        </div>
        
      </section>
      {/* feature section 2 */}
      <section class="bg-blue-950 text-white pt-[3rem] pb-[50px] mt-14">
        <div class="w-10/12 max-w-[1080px] pt-4 mx-auto relative ">
          <h2 class="font-high text-center text-2xl leading-[1.2] font-extrabold">Explore Razorpay Business Banking</h2>
          <div class="bg-green-300 w-6 h-1 mx-auto mt-4 mb-20"></div>

          {/* feature box */}
          <div class="w-full min-h-[440px] flex flex-row relative">
            {/* <img src={zigzag} alt="image" loading="lazy" class="absolute -left-[170px] w-[200px]"/>
            <img src={zigzag} alt="image" loading="lazy" class="absolute -right-[170px] bottom-[50px] w-[270px]" /> */}

            {/* content box */}
            <div class="w-full min-h-[520px] flex rounded-md relative p-10 py-12 border border-gray-500 border-opacity-30">
            {/* left */}
            <div class="flex flex-col justify-between w-full gap-6 h-full items-start">
              <h3 class="font-high text-[28px] leading-10 font-bold max-w-[500px]">Manage your company's finances With
                <img src={razo} alt="image" loading='lazy' width="168px" height="32px" class="inline"/> <span class="text-green-400">Business Banking</span></h3>
              <ul class="space-y-2">
                <li class="font-medium flex flex-row items-center space-x-2">
                  <i class="fas fa-check" style={{color:"green", fontSize:"24px"}}></i>
                  <span>Open a fully digital current account</span>
                </li>
                <li class="font-medium flex flex-row items-center space-x-2">
                   <i class="fas fa-check" style={{color:"green", fontSize:"24px"}}></i>
                  <span>Automate payables & compliment payments</span>
                </li>
                <li class="font-medium flex flex-row items-center space-x-2">
                   <i class="fas fa-check" style={{color:"green", fontSize:"24px"}}></i>
                  <span>Simplify and track spends with Corporate cards</span>
                </li>
                <li class="font-medium flex flex-row items-center space-x-2">
                   <i class="fas fa-check" style={{color:"green", fontSize:"24px"}}></i>
                  <span>View financial insights at a glance</span>
                </li>
              </ul>
              {/* for button and link */}
              <div class="flex flex-row items-center gap-4">
                <button class=" relative bg-blue-500 text-white flex items-center justify-start
                 py-[14px] px-[18px] md:pr-[90px] rounded-md font-medium font-bold
                 hover:bg-blue-300 transition-all duration-200">Sign Up
                 <div class="w-12 h-[60px] bg-green-400 absolute right-6 skew-x-[20deg] flex justify-center items-center">
                      <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" class="-skew-x-[20deg]">
                 <path d="M5 12h14M13 5l7 7-7 7" /></svg>
                 </div>
               </button>
                <div class="flex items-center cursor-pointer group">
                  <a href="/" class="font-high font-bold text-blue-200 group-hover:text-blue-300 transition-all duration-200">Know More</a>
                  {/* icons */}
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2 group-hover:text-gray-500 font-bold font-high">
                  <text x="0" y="20" fontSize="24" fill="lightblue">{'>'}</text>
                  </svg>

                </div>
              </div>
            </div>
            <img src={razor} alt="image" width="540px" class="max-w-[800px] absolute right-6 bottom-8" loading='lazy'/>
          </div>
          </div>
          
        </div>
        {/* card section */}
          <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 my-14 px-4">

            {/* box-1 */}
            <div class="w-full min-h-[15rem] cursor-pointer bg-white rounded-xl shadow-md p-4">
            <svg className="w-full h-auto" viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="100%" height="100%" rx="16" ry="16" fill="white" />

    <circle cx="320" cy="40" r="24" fill="#3478F6" />

    <path d="M323 36 L335 36 L335 48" stroke="white" strokeWidth="2" fill="none" />
    <line x1="323" y1="48" x2="335" y2="36" stroke="white" strokeWidth="2" />

    <text x="20" y="50" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#0a0a23">
      Current Account
    </text>

    <text x="20" y="80" fontFamily="Arial, sans-serif" fontSize="14" fill="#6c757d">
      Create, Copy &amp; Collect With Payment
    </text>
    <text x="20" y="100" fontFamily="Arial, sans-serif" fontSize="14" fill="#6c757d">
      Button. Collect one time or subscription
    </text>
    <text x="20" y="120" fontFamily="Arial, sans-serif" fontSize="14" fill="#6c757d">
      payments &amp; more
    </text>

    <text x="20" y="160" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#3478F6">
      See More
    </text>
    <polyline points="105,155 112,160 105,165" fill="none" stroke="#3478F6" strokeWidth="2" />
  </svg>
            </div>
             {/* box-2 */}
            <div class="w-full min-h-[15rem] cursor-pointer bg-white rounded-xl shadow-md p-4">
            <svg className="w-full h-auto" viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="100%" height="100%" rx="16" ry="16" fill="white" />

    <circle cx="320" cy="40" r="24" fill="#3478F6" />

    <path d="M323 36 L335 36 L335 48" stroke="white" strokeWidth="2" fill="none" />
    <line x1="323" y1="48" x2="335" y2="36" stroke="white" strokeWidth="2" />

    <text x="20" y="50" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#0a0a23">
      Capital & Credits
    </text>

    <text x="20" y="80" fontFamily="Arial, sans-serif" fontSize="14" fill="#6c757d">
      Create, Copy &amp; Collect With Payment
    </text>
    <text x="20" y="100" fontFamily="Arial, sans-serif" fontSize="14" fill="#6c757d">
      Button. Collect one time or subscription
    </text>
    <text x="20" y="120" fontFamily="Arial, sans-serif" fontSize="14" fill="#6c757d">
      payments &amp; more
    </text>

    <text x="20" y="160" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#3478F6">
      See More
    </text>
    <polyline points="105,155 112,160 105,165" fill="none" stroke="#3478F6" strokeWidth="2" />
  </svg>
            </div>
            {/* box-3 */}
           <div class="w-full min-h-[15rem] cursor-pointer bg-white rounded-xl shadow-md p-4">
            <svg className="w-full h-auto" viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="100%" height="100%" rx="16" ry="16" fill="white" />

    <circle cx="320" cy="40" r="24" fill="#3478F6" />

    <path d="M323 36 L335 36 L335 48" stroke="white" strokeWidth="2" fill="none" />
    <line x1="323" y1="48" x2="335" y2="36" stroke="white" strokeWidth="2" />

    <text x="20" y="50" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#0a0a23">
      Payouts
    </text>

    <text x="20" y="80" fontFamily="Arial, sans-serif" fontSize="14" fill="#6c757d">
      Create, Copy &amp; Collect With Payment
    </text>
    <text x="20" y="100" fontFamily="Arial, sans-serif" fontSize="14" fill="#6c757d">
      Button. Collect one time or subscription
    </text>
    <text x="20" y="120" fontFamily="Arial, sans-serif" fontSize="14" fill="#6c757d">
      payments &amp; more
    </text>

    <text x="20" y="160" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#3478F6">
      See More
    </text>
    <polyline points="105,155 112,160 105,165" fill="none" stroke="#3478F6" strokeWidth="2" />
  </svg>
            </div>
          </div>
        {/* demo section */}
        <div class=" w-9/12  h-full flex flex-row gap-6 justify-evenly items-center border border-gray-500 border-opacity-30 mb-24 gap-y-6 p-8 relative rounded-md ml-46">
          <p >Check out the live demo to learn how RazorpayX works.
            <span class="font-high font-bold"> No sign-up required!</span>
          </p>
            <button class=" relative bg-blue-500 text-white flex items-center justify-start
                 py-[14px] px-[18px] md:pr-[90px] rounded-md font-medium font-bold
                 hover:bg-blue-300 transition-all duration-200">Check out the demo
                 <div class="w-12 h-[60px] bg-green-400 absolute right-6 skew-x-[20deg] flex justify-center items-center">
                      <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" class="-skew-x-[20deg]">
                 <path d="M5 12h14M13 5l7 7-7 7" /></svg>
                 </div>
               </button>
        </div>
      </section>
      {/* new features */}
      <section class="bg-white relative">
        <div class="relative w-11/12 max-w-[1080px] mx-auto pt-4">
          <img src={dotted} alt="image" class="absolute w-[170px] left-[300px] -top-[6rem] -z-[10] h-[233px]" />
          <img src={dotted} alt="image" class="absolute w-[170px] -right-[0.5rem] -top-[6rem] -z-[10] h-[233px]"/>

          <div class="w-full grid grid-cols-3 gap-y-10 gap-x-4 relative z-[10]"> 
            {/* item 1 */}
            <div class="relative flex flex-col">
             <h2 class="font-high text-blue-950 font-bold text-4xl leading-[3.375rem]">
               New in the
            </h2>
            <h2 class="font-high text-blue-500 font-bold text-4xl leading-[3.375rem]">
                Razorpay
            </h2>
            <h2 class="font-high text-blue-950 font-bold text-4xl leading-[3.375rem]">
                Product Suite
            </h2>
          </div>
          {/* card-1 */}
            <div 
            style={{backgroundImage: `url(${graylines})`}} class="h-[40px] w-full cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200" >
              <img src={xicon} alt="image" width="40px" height="40px" />
              <h3>Corporate Cards</h3>
              <p>Simplify your recurring, international and team expenses with savins on every speed. Save upto 10lacs every month.</p>
              <div>
                <a href="#">Know more</a>
                <i></i>
              </div>
            </div>
            {/* card-2 */}
            {/* card-3*/}
            {/* card-4 */}
             {/* card-5 */}
           </div>
        </div>
      </section>
    </div>
  )
}

export default App


            
