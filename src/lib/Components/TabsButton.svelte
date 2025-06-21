<script lang="ts">
    import BracketLeft from "$lib/images/bracket-left.svelte";
    let {courseID, courseTeacher, isActive, openTab } = $props()

</script>

<button
    onclick={() => openTab(courseID)}
    class="w-full text-center py-1 hover:bg-white/80 transition-all duration-200"
    >
   <BracketLeft /> IF{courseID} {courseTeacher}
</button>

<style>

</style>