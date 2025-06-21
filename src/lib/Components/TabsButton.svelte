<script lang="ts">
    let {courseID, courseTeacher, isActive, openTab } = $props()

</script>

<button
    onclick={() => openTab(courseID)}
    class="w-full flex justify-center text-center items-center py-1 hover:bg-white/80 transition-all duration-200 {isActive ? 'active' : ''}"
    >
   <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 100 100"
                stroke-width="12"
                stroke="currentColor"
                class="w-[12px] h-[12px] leftBracket {isActive ? 'slide-out' : 'slide-in'}"
                stroke-linecap="round"
                stroke-linejoin="round"
            >           
                <!-- top-line -->
                <path
                class="top-line-left"
                d="M 0 50 L 100 0"
                />
            
                <!-- bottom-line -->
                <path
                class="bottom-line-left"
                d="M 0 50 L 100 100"
                />
            </svg>
            
            <span class="mx-2">IF{courseID} {courseTeacher} </span>
<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 100 100"
                stroke-width="12"
                stroke="currentColor"
                class="w-[12px] h-[12px] rightBracket {isActive ? 'slide-out' : 'slide-in'}"
                stroke-linecap="round"
                stroke-linejoin="round"
            >           
                <!-- top-line -->
                <path
                class="top-line-right"
                d="M 0 0 L 100 50"
                />
            
                <!-- bottom-line -->
                <path
                class="bottom-line-right"
                d="M 100 50 L 0 100"
                />
            </svg>

</button>

<style>
@keyframes slideLeftOut {
	from { transform: translateX(0); }
	to   { transform: translateX(-10px); }
}
@keyframes slideLeftIn {
	from { transform: translateX(-10px); }
	to   { transform: translateX(0); }
}
@keyframes slideRightOut {
	from { transform: translateX(0); }
	to   { transform: translateX(10px); }
}
@keyframes slideRightIn {
	from { transform: translateX(10px); }
	to   { transform: translateX(0); }
}

/* ----- Immer zurücksetzen, wenn nichts aktiv ist ----- */
.leftBracket,
.rightBracket {
	transform: translateX(0);
}

/* ----- HOVER: Nur wenn NICHT aktiv ----- */
button:hover:not(.active) .leftBracket {
	animation: slideLeftOut 0.3s ease forwards;
}
button:hover:not(.active) .rightBracket {
	animation: slideRightOut 0.3s ease forwards;
}

/* ----- ACTIVE: Bleibt dauerhaft geslidet ----- */
button.active .leftBracket {
	transform: translateX(-10px);
    animation: none;
}
button.active .rightBracket {
	transform: translateX(10px);
    animation: none;
}

/* --- Zurück-Animation bei Mouseleave (wenn NICHT active) --- */
button:not(:hover):not(.active) .leftBracket {
	animation: slideLeftIn 0.2s ease forwards;
}
button:not(:hover):not(.active) .rightBracket {
	animation: slideRightIn 0.2s ease forwards;
}
</style>