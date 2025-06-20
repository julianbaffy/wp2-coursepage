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


<div class="container w-full">
    <div class="tab-controls w-full flex justify-between">
        {#each courses as course}
		    <button class="" onclick={()=>openTab(course.courseID)} >IF{course.courseID} {course.teacher}</button>
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