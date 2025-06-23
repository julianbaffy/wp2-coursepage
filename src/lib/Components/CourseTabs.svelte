<script lang="ts">
    import LinkGrid from "./LinkGrid.svelte";
    import TabsButton from "./TabsButton.svelte";

    let {courses, links, startPosition="1" } = $props();

    let currentPosition=$state(startPosition);

    function openTab(id: string){
        currentPosition=id;
        var i;
        var i;
        var x = document.getElementsByClassName("tab-item") as HTMLCollectionOf<HTMLElement>;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        const el = document.getElementById(id);
        if (el) {
            el.style.display = "block";
        }
    }
</script>


<div class="tab-container w-full mt-8">
    <div class="tab-controls w-full flex relative pb-4">
		{#each courses as course}
			<div class="button-container w-full text-center py-2 border-gray-400 {currentPosition === course.courseID ? 'border-x border-t rounded-t-[8px]' : 'border-b-1'} transition-opacity duration-200">
                <TabsButton courseID={course.courseID} courseTeacher={course.teacher} isActive={currentPosition === course.courseID} openTab={openTab} />
            </div>
		{/each}
	</div>
    <div class="tab-content w-full">
        {#each courses as course, i}
            <div id={course.courseID} class="tab-item {currentPosition === course.courseID ? 'block' : 'hidden'}">
                <LinkGrid courseID={course.courseID} links={links} />
            </div>
        {/each}
    </div>
</div>