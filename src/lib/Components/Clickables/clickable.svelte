<script lang="ts">
    import { onMount } from "svelte";
    import Rock from "$lib/images/rock.png";
    import Heart from "$lib/images/heart.png";
    import Explosion from "$lib/images/explosion.png"

    let {width, velocity, delay = 0, y, random=0, variant="auto", size=30} :
    {
        width: number; // width of the window, the clickable is moving in.
        velocity: number; //if 0 it's standing
        delay?: number; // Starting delay
        y: number; // y-Position in window (absolute)
        random?: number; // random vriation of y
        variant?: "heart" | "rock" | "auto";
        size?: number; // width and height of clickable in pixels
    }   = $props();

    let objectState = $state("start"); //start, active, explode, respawn
    let duration = velocity !== 0 ? Math.floor(width / velocity) : 0;
    let variantInternal = $state("rock");

    let image = $derived.by(() => {
        if (objectState === "explode") {
            return Explosion;
        }

        switch (variantInternal) {
            case "heart":
                return Heart;
            case "rock":
                return Rock;
            default:
                return Rock; // Fallback
        }
    });
   

    function lifecycle () {
        if (variant === "auto") {
            variantInternal = Math.floor(Math.random() * 4) === 0 ? "heart" : "rock";
        }
        objectState = "start";
        y = y + Math.floor(Math.random() * random);
        objectState = "active";
    }

    function explode(){
		objectState = "explode";
		setTimeout(() => {
			objectState = "respawn";
		}, 300);
        //respawn()
    }

    function respawn(){
        objectState = "respawn";
        setTimeout(lifecycle, 6000);
    }

    onMount (() => {
        setTimeout(lifecycle, delay);
        setInterval(lifecycle, duration + 6000);
    });
</script>

<img src={image} height={size} width={size} 
    onclick={explode}
    style={`
        top: ${y}px;
        right: -${size + 10}px;
        transform: ${objectState === "start" ? `translateX(-${width + size + 10}px)` : "none"};
        transition: ${objectState === "start" ? `transform ${duration}ms linear` : "none"};
    `}
    class={
        `absolute` +
        (objectState === "respawn" ? " hidden" : "")
    }
/>