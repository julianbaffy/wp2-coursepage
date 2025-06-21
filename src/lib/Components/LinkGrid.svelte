 <script lang="ts">
  import ArrowToIcon from "$lib/images/ArrowToIcon.svelte";
   let {courseID = "1", links} : {courseID: string, links: {
    courseID: string;
    teacher: string;
    title: string;
    url: string;
    description: string;
  }[]} = $props()

  // Filtere die Links basierend auf der übergebenen CourseID
  let filteredLinks = $derived(links.filter(link => link.courseID === courseID));

  filteredLinks = filteredLinks.sort((a, b) => a.title.localeCompare(b.title));
</script>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .tile {
    background-color: rgba(255, 255, 255, 0.4); /* statt opacity */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px); /* für Safari */
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow:
    4px 4px 10px rgba(0, 0, 0, 0.1),  /* standard */
   -2px -2px 10px rgba(255, 255, 255, 0.3);

  }

  .tile:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  .tile h3 {
    margin: 6px;
  }

  .tile p {
    font-size: 0.9em;
    color: #666;
  }
</style>

<div class="grid-container">
  {#if filteredLinks.length === 0}
    <p class="text-center mt-8">Für diesen Kurs wurden noch keine Websites veröffentlicht.</p>
  {:else}
    {#each filteredLinks as link}
      <a href="{link.url}" target="_blank">
        <div class="tile">
          <h3>{link.title}</h3>
          {#if link.description}
            <p>{link.description}</p>
          {/if}
          <div class="absolute top-2 right-2 opacity-50 hover:opacity-100"><ArrowToIcon/></div>
        </div>
      </a>
    {/each}
  {/if}
</div>
