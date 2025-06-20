<script lang="ts">
    import LinkGrid from "./LinkGrid.svelte";
    import { onMount } from "svelte";

    let {courses, links, startPosition="1" } = $props();

    let currentPosition=$state(startPosition);

    function openTab(id){
        currentPosition=id;
        var i;
        var i;
        var x = document.getElementsByClassName("tab-item");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(id).style.display = "block"; 
    }
</script>


<div class="tab-container w-full mt-8">
    <div class="tab-controls w-full flex border-gray-300 relative pb-4">
		{#each courses as course}
			<div class="button-container w-full text-center py-2 border-b-1 {currentPosition === course.courseID ? 'border-black opacity-100' : 'border-gray-300 opacity-50 hover:opacity-100'} transition-all duration-200">
                <button
                    onclick={() => openTab(course.courseID)}
                    class="w-full text-center py-1 hover:bg-white/80 transition-all duration-200"
                >
                    IF{course.courseID} {course.teacher}
                </button>
            </div>
		{/each}
	</div>
    <div class="tab-content w-full">
        {#each courses as course, i}
            <div id="{course.courseID}" class="tab-item {currentPosition === course.courseID ? 'block' : 'hidden'}">
                <LinkGrid courseID="{course.courseID}" links={links} />
            </div>
        {/each}
    </div>
</div>