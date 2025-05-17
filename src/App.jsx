import { lazy, useState } from 'react'
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
import sicon from "./images/sicon.jpg"
import animationimg from "./images/animation.png"
import inverted from "./images/invertedcomma.jpg"
import lappy from "./images/manonlappy.jpg"
import suit from "./images/maninsuit.jpg"
import limg from "./images/laptopimage.gif"
import logo2 from "./images/logo2.avif"
import insta from "./images/instagram.webp"
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.webp"
import linkedin from "./images/linkedin.png"
import github from "./images/github.png"
import down1 from "./images/down1.jpg"
import down2 from "./images/down2.png"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="overflow-x-hidden relative w-full">
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
        <div class="relative w-11/12 max-w-[1080px] mx-auto  mt-30">
          <img src={dotted} alt="image" class="absolute w-[170px] left-[300px] -top-[6rem] z-[10] h-[233px]" />
          <img src={dotted} alt="image" class="absolute w-[170px] -right-[2rem] -top-[6rem] z-[10] h-[150px]"/>

          <div class="w-full grid grid-cols-3 gap-y-10 gap-x-10 relative z-[100] h-[330px] bg-white mb-60"> 
            {/* item 1 */}
            <div class="relative flex flex-col z-0">
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
              <h3 class="font-high font-bold text-lg pt-4"> Corporate Cards</h3>
              <p class="py-3 text-gray-500 leading-normal">Simplify your recurring, international and team expenses with savins on every speed. Save upto 10lacs every month.</p>
              <div class="flex items-center cursor-pointer group">
                  <a href="/" class="font-high font-bold text-blue-500 ">Know More</a>
                  {/* icons */}
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 pb-4">
                  <text x="0" y="20" fontSize="24" fill="#3182ce">{'>'}</text>
                  </svg>

                </div>
            </div>
            {/* card-2 */}
            <div 
            style={{backgroundImage: `url(${graylines})`}} class="h-[40px] w-full cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200" >
              <img src={xicon} alt="image" width="40px" height="40px" />
              <h3 class="font-high font-bold text-lg pt-4"> UPI Autopay</h3>
              <p class="py-3 text-gray-500 leading-normal">Simplify your recurring, international and team expenses with savins on every speed. Save upto 10lacs every month.</p>
              <div class="flex items-center cursor-pointer group">
                  <a href="/" class="font-high font-bold text-blue-500 ">Know More</a>
                  {/* icons */}
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 pb-4">
                  <text x="0" y="20" fontSize="24" fill="#3182ce">{'>'}</text>
                  </svg>

                </div>
            </div>
            {/* card-3*/}
            <div 
            style={{backgroundImage: `url(${graylines})`}} class="h-[40px] w-full cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200" >
              <img src={xicon} alt="image" width="40px" height="40px" />
              <h3 class="font-high font-bold text-lg pt-4"> Magic Checkout</h3>
              <p class="py-3 text-gray-500 leading-normal">Simplify your recurring, international and team expenses with savins on every speed. Save upto 10lacs every month.</p>
              <div class="flex items-center cursor-pointer group">
                  <a href="/" class="font-high font-bold text-blue-500 ">Know More</a>
                  {/* icons */}
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 pb-4">
                  <text x="0" y="20" fontSize="24" fill="#3182ce">{'>'}</text>
                  </svg>

                </div>
            </div>
            {/* card-4 */}
            <div 
            style={{backgroundImage: `url(${graylines})`}} class="h-[40px] w-full cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200" >
              <img src={xicon} alt="image" width="40px" height="40px" />
              <h3 class="font-high font-bold text-lg pt-4"> Payment Button</h3>
              <p class="py-3 text-gray-500 leading-normal">Simplify your recurring, international and team expenses with savins on every speed. Save upto 10lacs every month.</p>
              <div class="flex items-center cursor-pointer group">
                  <a href="/" class="font-high font-bold text-blue-500 ">Know More</a>
                  {/* icons */}
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 pb-4">
                  <text x="0" y="20" fontSize="24" fill="#3182ce">{'>'}</text>
                  </svg>

                </div>
            </div>
             {/* card-5 */}
             <div 
            style={{backgroundImage: `url(${graylines})`}} class="h-[40px] w-full cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200" >
              <img src={xicon} alt="image" width="40px" height="40px" />
              <h3 class="font-high font-bold text-lg pt-4"> Payment button</h3>
              <p class="py-3 text-gray-500 leading-normal">Simplify your recurring, international and team expenses with savins on every speed. Save upto 10lacs every month.</p>
              <div class="flex items-center cursor-pointer group">
                  <a href="/" class="font-high font-bold text-blue-500 ">Know More</a>
                  {/* icons */}
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 pb-4">
                  <text x="0" y="20" fontSize="24" fill="#3182ce">{'>'}</text>
                  </svg>

                </div>
            </div>
           </div>
        </div>
      </section>
      {/* core features */}
      <section class="w-full mt-14 relative bg-blue-500 text-white bg-center h-[600px] z-100">
        <div class="w-11/12 relative max-w-[1080px] mx-auto pt-4">
          <h2 class="font-high font-bold text-2xl text-center">Features</h2>
          <div class="bg-green-300 w-6 h-1 mx-auto mt-4 mb-6 "></div>
          <p class="font-medium text-center max-w-[450px] mx-auto">Empower your business with all the right tools to accept online payments and provide the best customer experience</p>
          <div class="grid grid-cols-4 grid-rows-2 gp-[2rem] mt-8 gap-y-10 gap-x-10 ">
            {/* card-1 */}
            <div>
              <img src={sicon} alt="image"  width="40px" height="40px"/>
              <h3 class="font-high font-extrabold text-lg py-2">Instant Activation</h3>
              <p class="opacity-80">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
            </div>
            {/* card-2 */}
            <div>
              <img src={sicon} alt="image"  width="40px" height="40px"/>
              <h3 class="font-high font-extrabold text-lg py-2">Easy Integration</h3>
              <p class="opacity-80">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
            </div>
            {/* card-3 */}
            <div>
              <img src={sicon} alt="image"  width="40px" height="40px"/>
              <h3 class="font-high font-extrabold text-lg py-2">API Driven</h3>
              <p class="opacity-80">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
            </div>
            {/* card-4 */}
            <div>
              <img src={sicon} alt="image"  width="40px" height="40px"/>
              <h3 class="font-high font-extrabold text-lg py-2">100+ Payment Modes</h3>
              <p class="opacity-80">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
            </div>
            {/* card-5 */}
            <div>
              <img src={sicon} alt="image"  width="40px" height="40px"/>
              <h3 class="font-high font-extrabold text-lg py-2">Simple Pricing</h3>
              <p class="opacity-80">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
            </div>
            {/* card-6 */}
            <div>
              <img src={sicon} alt="image"  width="40px" height="40px"/>
              <h3 class="font-high font-extrabold text-lg py-2">Best in Industry Support</h3>
              <p class="opacity-80">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
            </div>
            {/* card-7 */}
            <div>
              <img src={sicon} alt="image"  width="40px" height="40px"/>
              <h3 class="font-high font-extrabold text-lg py-2">Dashboard Reporting</h3>
              <p class="opacity-80">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
            </div>
            {/* card-8 */}
            <div>
              <img src={sicon} alt="image"  width="40px" height="40px"/>
              <h3 class="font-high font-extrabold text-lg py-2">Secure</h3>
              <p class="opacity-80">Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.</p>
            </div>
          </div>
        </div>
      </section>
      {/* join razorpay section */}
      <section class="bg-gray-100 relative pt-20 pb-12 ">
      <div class="w-11/12 max-w-[1080px] relative mx-auto flex flex-row gap-x-5">
        {/* left */}
        <div class="flex flex-col justify-center max-w-[calc(100%-500px)] pl-15">
          <h3 class="font-high font-extrabold text-xl text-blue-900">Join the 50,00,000+ businesses using Razorpay</h3>
          <div class="bg-green-500 w-6 h-1 my-4 mb-10 "></div>
          <p class="font-medium opacity-75">We make it easier for you to focus on building great products while we work on 
            simplifying your payments. Become one of us by joining thousands of our happy users
            and simplify the online payment experience for your customers.</p>
          <p class="font-medium mt-5 opacity-75">Focus on your business while we handle the complexities of payments for you.</p>
        </div>
        {/* right */}
        <div class="relative w-[300px] h-[350px] overflow-hidden ">
        <div className="relative h-[3500px] w-[300px] overflow-hidden bg-white">
      {/* Animated Container */}
      <div className="absolute w-full aniclass">
        <div className="flex flex-col gap-4">
          <img src={animationimg} alt="logo1" className="w-[300px] mx-auto" />
          <img src={animationimg} alt="logo2" className="w-[300px] mx-auto" />
          {/* Duplicate logos below to create the illusion of infinite scroll */}
          <img src={animationimg} alt="logo1-duplicate" className="w-[300px] mx-auto" />
          <img src={animationimg} alt="logo2-duplicate" className="w-[300px] mx-auto" />
        </div>
      </div>
    </div>
    
    
  {/* Top Gradient Overlay */}
  <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white to-transparent z-10" />

  {/* Bottom Gradient Overlay */}
  <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent z-10" />
    </div>
      </div>
      </section>
      {/* testimonial section */}
      <section class="relative">
        <div class="w-11/12 max-w-[1300px] mx-auto py-20 relative">
          <img src={dotted} alt="images" class="absolute w-[270px] top-[8rem] left-[2rem] -z-[10]" />
          <h2 class="font-high font-bold text-2xl text-blue-900 text-center">An Experience <br /> People Love to Talk About</h2>
          <div class="w-6 h-1 mx-auto bg-green-300 mt-4 my-4 "></div>
          {/* left button */}
          <button class="absolute w-[80px] h-[80px] bg-gray-200 rounded-full left-0 top-1/2 flex justify-center items-center">
            <div class="w-[65%] h-[65%] bg-gray-300 rounded-full flex justify-center items-center mix-blend-multiply">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="w-15 h-15 group-hover:text-gray-500 text-extrabold">
                  <text x="37" y="17" fontSize="45" fill="gray" rotate="180deg" class="w-15 h-15 text-extrabold z-100">{'>'}</text>
                  </svg>
            </div>
          </button>

          {/* right button */}
          <button class="absolute w-[80px] h-[80px] bg-gray-200 rounded-full right-0 top-1/2 flex justify-center items-center">
            <div class="w-[65%] h-[65%] bg-gray-300 rounded-full flex justify-center items-center mix-blend-multiply">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="w-15 h-15 group-hover:text-gray-500 text-extrabold">
                  <text x="15" y="43" fontSize="45" fill="gray" class="w-15 h-15 text-extrabold z-100">{'>'}</text>
                  </svg>
            </div>
          </button>
          {/* main content */}
          <div class="flex flex-row max-w-[950px] items-center mx-auto my-25 space-x-[10rem]">
            {/* left image */}
            <img src={suit} alt="image" loading='lazy'  height="320px" width="320px" class="rounded-xl"/>
            {/* right part */}
            <div class="max-w-[400px]">
              <img src={inverted} alt="image" class="" width="35px" height="35px"/>
              <p class="text-3xl font-extralight opacity-70">Readymade Closed Wallet Solutions For Quick Refunds</p>
              <a href="#" class="text-gray-400 italic underline">Learn More</a>
              <h3 class="font-high font-extrabold text-2xl">Lorem Ipsum</h3>
              <p>CEO, XYZ Engineering Company</p>
              <img src={lappy} alt="image" width="75px" height="75px"/>
            </div>
          </div>
          {/* 6 dotted div */}
          <div class="flex flex-row mx-auto space-x-2 justify-center">
              {/* 1st dot */}
              <div class="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
              <div class="h-[10px] w-[10px] bg-blue-300 rounded-full"></div>
              <div class="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
              <div class="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
              <div class="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
              <div class="h-[10px] w-[10px] bg-gray-300 rounded-full"></div>
          </div>

        </div>
      </section>
      {/* CTA */}
      <section class="bg-blue-400 w-full h-full relative ">
        <div class="w-11/12 max-w-[1080px] mx-auto flex flex-row relative justify-between items-center space-x-20 pb-10">
              {/* left part */}
              <div class="pt-8">
                <h2 class="font-extrabold text-white text-3xl font-high">Supercharge your business with Razorpay</h2>
                <div class="w-6 h-1 bg-green-300 mt-4 mb-4"></div>
                <p class="text-white">Sign up now to experience the future of payments and offer <br /> your customers the best checkout experience.</p>
                <ul class="text-white flex flex-row gap-3 space-y-2 flex-wrap pt-8 max-w-[600px]">
                  <li class="font-medium flex flex-row items-center space-x-2">
                   <i class="fas fa-check" style={{color:"lightgreen", fontSize:"24px"}}></i>
                  <span>Quick Onboarding </span>
                </li>
                  <li class="font-medium flex flex-row items-center space-x-2">
                   <i class="fas fa-check" style={{color:"lightgreen", fontSize:"24px"}}></i>
                  <span>Access to entire product suite </span>
                </li>
                <li class="font-medium flex flex-row items-center space-x-2">
                   <i class="fas fa-check" style={{color:"lightgreen", fontSize:"24px"}}></i>
                  <span>API access </span>
                </li>
                <li class="font-medium flex flex-row items-center space-x-2">
                   <i class="fas fa-check" style={{color:"lightgreen", fontSize:"24px"}}></i>
                  <span>24*7 support </span>
                </li>
                </ul>
                <button class="min-w-[32px] flex flex-row items-center bg-white text-blue-400 w-fit rounded-md py-[14px] px-[18px] font-medium font-bold
                 hover:bg-blue-500 transition-all duration-200 mt-8">Sign Up<svg width="24" height="24" fill="none" stroke="#63b3ed" strokeWidth="2" viewBox="0 0 24 24">
                 <path d="M5 12h14M13 5l7 7-7 7" />
               </svg>
               </button>

              </div>
              {/* right part */}
              <img src={limg} alt="image" class="absolute right-0 " width="300px" height="360px"/>
        </div>
      </section>

      {/* footer section */}
      <footer class="mt-10 flex flex-row justify-center items-start">
        <div class="flex flex-row justigy-center space-x-25 items-start">
        {/* div-1 */}
        <div class="max-w-[300px] pl-15 space-y-5">
          <img src={logo2} alt="image" width="150px" />
          <p class="font-light text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consequatur facilis, 
            beatae deleniti dolorum cumque iure blanditiis dolores nobis. Vitae ipsum error quo ut numquam 
            labore tenetur officiis, ipsam voluptatibus cum. Vel autem nihil et eveniet! Nemo dolor tempore cum, 
            neque dicta at veritatis enim voluptate unde et ad soluta odit ab ut, possimus, necessitatibus 
            explicabo. Ea iure quasi architecto.</p>

          <p class="font-light text-[13px]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt atque ut eligendi dolorum 
            illum libero dicta placeat, nobis ipsa ex eum commodi? Minus alias commodi aliquid. Temporibus, 
            eveniet, molestiae id sunt vel, minus quasi eius ipsam distinctio facere saepe facilis?</p>

          <p class="font-light text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quibusdam enim 
            exercitationem maiores quae quam error esse est unde magni dignissimos velit assumenda, aut vitae 
            nulla! Nobis?</p>

          <p class="font-light text-[10px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius earum mollitia quaerat voluptatibus 
            ea, id error dolores a sapiente reiciendis quam vel quidem possimus vero doloremque voluptatum odit 
            tempore aut. Doloremque enim quaerat aliquid voluptatem voluptates?</p>

          <h3 class="font-bold">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <form className="box-content  max-w-[300px] flex items-center border border-gray-300 rounded-md shadow-sm overflow-hidden w-fit bg-white">
  {/* Email Input */}
  <input
    type="email"
    placeholder="Your email address"
    className=" py-2 text-gray-600 placeholder-gray-400 focus:outline-none"
    required
  />

  {/* Subscribe Button */}
  <button
    type="submit"
    className="flex items-center py-2 text-blue-600 font-semibold hover:text-blue-800"
  >
    Subscribe
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4 ml-1"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </button>
</form>


          <div class="flex flex-row gap-5">
            <img src={down1} alt="image" width="50px" height="30px"/>
            <img src={down2} alt="image" width="50px" height="30px"/>
          </div>
        </div>
         {/* div-2 */}
        <div class="max-w-[300px] space-y-5">
          <ul class="space-y-2">
            <h3  class="text-gray-500 font-bold">BANKING PLUS</h3>
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a>
            <div class="flex flex-row space-x-2">
              <a href="#" class="text-blue-500">View Live Demo</a>
              <button class="bg-green-400 text-white p-1 rounded">NEW</button>
            </div>
          </ul>

          <ul class="space-y-2">
            <h3 class="text-gray-500 font-bold">LENDING</h3>
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a>
          </ul>

          <ul class="space-y-2">
            <h3 class="text-gray-500 font-bold">RISK & FRAUD</h3>
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <div class="flex flex-row space-x-2">
              <a href="#" class="text-blue-500">PrePay CoD</a>
              <button class="bg-green-400 text-white p-1 rounded">NEW</button>
            </div>
          </ul>

          <ul class="space-y-2">
            <h3 class="text-gray-500 font-bold">BECOME A PARTNER</h3>
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a>
          </ul>
          <ul class="space-y-2">
            <h3 class="text-gray-500 font-bold">MORE</h3>
            <a href="#" class="text-blue-500" >RazorpayX</a><br />
            <a href="#" class="text-blue-500" >RazorpayX</a><br />
            <a href="#" class="text-blue-500" >RazorpayX</a><br />
            <a href="#" class="text-blue-500" >RazorpayX</a><br />
            <a href="#" class="text-blue-500" >RazorpayX</a><br />
            <a href="#" class="text-blue-500" >RazorpayX</a><br />
            <a href="#" class="text-blue-500" >RazorpayX</a><br />
            <a href="#" class="text-blue-500" >RazorpayX</a><br />
            <a href="#" class="text-blue-500" >RazorpayX</a>
          </ul>
        </div>

         {/* div-3 */}
        <div class="max-w-[300px] space-y-5">
          <ul class="space-y-2">
            <h3 class="text-gray-500 font-bold">ACCEPT PAYMENTS</h3>
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a>
          </ul>
          <ul class="space-y-2">
            <h3 class="text-gray-500 font-bold">DEVELOPERS</h3>
             <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a>
          </ul>
          <ul class="space-y-2">
            <h3 class="text-gray-500 font-bold">RESOURCES</h3>
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a>
          </ul>
          <ul class="space-y-2">
            <h3 class="text-gray-500 font-bold">SOLUTIONS</h3>
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a>
          </ul>
          <ul class="space-y-2">
            <h3 class="text-gray-500 font-bold">FIRE TOOLS</h3>
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
           <div class="flex flex-row space-x-2">
              <a href="#" class="text-blue-500">GSE Number Search</a>
              <button class="bg-green-400 text-white p-1 rounded">NEW</button>
            </div>
          </ul>
        </div>
         {/* div-4 */}
        <div class="max-w-[300px] space-y-5">
          <ul class="space-y-2">
            <h3 class="text-gray-500 font-bold">COMPANY</h3>
             <a href="#" class="text-blue-500">RazorpayX</a><br />
             <div class="flex flex-row space-x-2">
              <a href="#" class="text-blue-500">Careers</a>
              <button class="bg-green-400 text-white p-1 rounded">NEW</button>
            </div>
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
          </ul>
          <ul>
            <h3 class="text-gray-500 font-bold">HELP & SUPPORT</h3>
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            <a href="#" class="text-blue-500">RazorpayX</a><br />
            
          </ul>
          <ul class="space-y-2">
            <h3 class="text-gray-500 font-bold">FIND US ONLINE</h3>
            <div class="flex flex-row mx-auto space-x-4">
              <img src={facebook} alt="image" width="24px" height="24px" />
              <img src={twitter} alt="image"  width="24px" height="24px" />
              <img src={insta} alt="image"  width="24px" height="24px" />
              <img src={github} alt="image"  width="24px" height="24px" />
              <img src={linkedin} alt="image"  width="24px" height="24px" />
            </div>
          </ul>
          <h3 class="text-gray-500 font-bold">REGD. OFFICE ADDRESS</h3>
          <ul>
            <li>Razorpay Software Private limited</li>
            <li>1st floor, SJR Cyber,</li>
            <li>22 Laksar Hosur Road, Adugodi</li>
            <li>Bengaluru,5660030,</li>
            <li>Karnataka,India</li>
            <li>CIN: U72200KA2013P99908865GT675</li>
          </ul>
          <ul>
            <li>&#169;Razorpay 2022</li>
            <li>All Rights Reserved</li>
          </ul>
        </div>
      </div>
      </footer>
    </div>
  )
}

export default App


            
