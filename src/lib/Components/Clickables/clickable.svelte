<script lang="ts">
    import { npm_lifecycle_event } from "$env/static/private";
    import { start } from "repl";
    import { onMount } from "svelte";

    let {width, velocity, delay = 0, y, random=0, variant, size} :
    {
        width: number; // width of the window, the clickable is moving in.
        velocity: number; //if 0 it's standing
        delay: number; // Starting delay
        y: number; // y-Position in window (absolute)
        random: number; // random vriation of y
        variant: string; // "heart" or "rock"
        size: number; // width and height of clickable in pixels
    }   = $props();

    let state = $state("start"); //start, active, explode, respawn

    let duration = Math.floor(width / velocity);

    function lifecycle () {
        state = "start";
        y = y + Math.floor(Math.random() * random);
        
    }

    function explode(){
        state = "explode";
        setTimeout(()=>{
            state = "start"
        }, 1000 )
    }

    onMount (() => {
        setTimeout(lifecycle, delay);
        setInterval(lifecycle, duration + 6000);
    });
</script>