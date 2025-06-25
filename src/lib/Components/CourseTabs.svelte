<script lang="ts">
    
    import LinkGrid from "./LinkGrid.svelte";
    import TabsButton from "./TabsButton.svelte";
    import { onMount } from "svelte";
    import type { Link } from '$lib/types/customTypes';
    import { page } from "$app/state";
    import { goto } from "$app/navigation";

    let {courses, links, startPosition='auto', smallButtons=false } = $props();

    let currentPosition=$state(page.url.searchParams.get('course') || '1');

    function updateSearchParams(courseID: string){
        const params = new URLSearchParams(page.url.searchParams);
        params.set('course', courseID);

        const newUrl = `${page.url.pathname}?${params.toString()}`;

        goto(newUrl, { replaceState: true, keepFocus: true, noScroll: true });
    }

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
        updateSearchParams(id);
    }
    
    // Intersection-Observer for tab-controls sentinel

    let sentinel: HTMLDivElement;
	let isSticky = $state(false);

	// Intersection Observer einrichten
	onMount(() => {
        const hasCourseParam = page.url.searchParams.has('course');
        
        //set startposition on first non-empty course or on the first, if all are empty.
        if (!hasCourseParam) {
            if (startPosition === 'auto' && courses.length > 0 && links.length > 0) {
                for (let course of courses) {
                    if (links.some((link: Link) => link.courseID === course.courseID)) {
                        currentPosition = course.courseID;
                        openTab(course.courseID);
                        break;
                    }
                }
            } else {
                currentPosition = startPosition;
                openTab(startPosition);
            }
        } else {
            openTab(currentPosition);
        }

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


<div class="tab-container w-full mt-14">
    <div bind:this={sentinel} class="h-1"></div>
    <div class:stuck={isSticky} class="tab-controls sticky top-14 w-full h-auto flex relative pb-4 z-20">
		{#each courses as course}
			<div class="button-container w-full text-center py-4 border-gray-400 {currentPosition === course.courseID ? 'border-x border-t rounded-t-[8px] bg-gradient-to-b from-white to-transparent' : 'border-b-1 hover:bg-gradient-to-t hover:from-white hover:to-transparent'} transition-opacity duration-200">
                <TabsButton courseID={course.courseID} courseTeacher={course.teacher} isActive={currentPosition === course.courseID} smallButtons={smallButtons} openTab={openTab} />
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

    .tab-controls{
        overflow-x: hidden;
        overflow-y: hidden;
    }

</style>