"use strict";
function header(){
        document.getElementById("header").innerHTML =`
        <section class="max-w-[1540px] h-[80px] m-auto px-10 bg-white shadow-md flex justify-between items-center">
            <div class="w-[80px] h-[70px] flex items-center">
                <img src="../img/Libreshelf.png" alt="logo">
            </div>
            <nav>
                <ul class="">
                    <li class="inline-block p-4"><a href="#">Home</a></li>
                    <li class="inline-block p-4"><a href="#">Categories</a></li>
                    <li class="inline-block p-4"><a href="#">About us</a></li>
                    <li class="inline-block p-4"><a href="#">My book</a></li>
                </ul>
            </nav>
               <div class="flex items-center gap-4">

        <!-- Moon Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" 
             fill="none"
             viewBox="0 0 24 24"
             stroke-width="1.5"
             stroke="#0d2645"
             class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </svg>

        <!-- Heart Icon -->
        <svg xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             stroke-width="1.5"
             stroke="#0d2645"
             class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.1-4.5-4.688-4.5-1.93 0-3.543 1.144-4.312 2.812C11.231 4.894 9.619 3.75 7.688 3.75 5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>

        <!-- Sign In Button -->
        <button class="px-5 py-2 bg-[#0d2645] text-white rounded-md">
            Sign In
        </button>
    </div>
       
    `;
   

}