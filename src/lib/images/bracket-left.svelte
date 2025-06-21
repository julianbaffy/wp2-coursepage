<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 100 100"
                stroke-width="11"
                stroke="currentColor"
                class="w-[12px] h-[12px] leftBracket"
                stroke-linecap="round"
                stroke-linejoin="round"
            >           
                <!-- top-line -->
                <path
                class="top-line"
                d="M 0 50 L 100 0"
                />
            
                <!-- bottom-line -->
                <path
                class="bottom-line"
                d="M 0 50 L 100 100"
                />
            </svg> 

<style>
	
	@keyframes slide {
    0% { transform: translateX(0); }
    100% { transform: translateX(-20%); }
  	}

	.leftBracket {
	  animation: slide 1.5s ease-in-out 2;
	  transform-origin: center;
	  animation-fill-mode: forwards;
	}
</style>