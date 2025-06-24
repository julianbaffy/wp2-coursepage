<script lang="ts">
    
    import LinkGrid from "./LinkGrid.svelte";
    import TabsButton from "./TabsButton.svelte";
    import { onMount } from "svelte";

    let {courses, links, startPosition="1" } = $props();

    let currentPosition=$state(startPosition);

    function openTab(id: string){
        const scrollY = window.scrollY;

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

        //Scrollposiotion wieder herstellen
        requestAnimationFrame(() => window.scrollTo({ top: scrollY }));
    }

    // Intersection-Observer for tab-controls sentinel

    let sentinel: HTMLDivElement;
	let isSticky = $state(false);

	// Intersection Observer einrichten
	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				isSticky = !entry.isIntersecting;
			},
			{ rootMargin: '0px 0px 0px 0px', threshold: [1] }
		);

		if (sentinel) {
			observer.observe(sentinel);
		}

		return () => observer.disconnect();
	});
</script>


<div class="tab-container relative w-full mt-8">
    <div bind:this={sentinel} class="h-1"></div>
    <div class:stuck={isSticky} class="tab-controls sticky top-14 w-full flex relative pb-4 z-20">
		{#each courses as course}
			<div class="button-container w-full text-center py-4 border-gray-400 {currentPosition === course.courseID ? 'border-x border-t rounded-t-[8px] bg-gradient-to-b from-white to-transparent' : 'border-b-1 hover:bg-gradient-to-t hover:from-white hover:to-transparent'} transition-opacity duration-200">
                <TabsButton courseID={course.courseID} courseTeacher={course.teacher} isActive={currentPosition === course.courseID} openTab={openTab} />
            </div>
		{/each}
	</div>
    <div class="tab-content w-full">
        {#each courses as course, i}
            <div id={course.courseID} class="tab-item min-h-[50vh] {currentPosition === course.courseID ? 'block' : 'hidden'}">
                <LinkGrid courseID={course.courseID} links={links} />
            </div>
        {/each}
    </div>
</div>

<style>
    .tab-controls::before {
	content: "";
	position: absolute;
	inset: 0;
    left: -4em;
    right: -4em;
    bottom: -0.6em;
	backdrop-filter: blur(30px);
	-webkit-backdrop-filter: blur(30px);
	mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
	-webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
	pointer-events: none;
	z-index: -1;
}

    .tab-controls.stuck::before{
        top: -3.5em;
    }

    .tab-content {
	overflow-anchor: none;
    }
</style>