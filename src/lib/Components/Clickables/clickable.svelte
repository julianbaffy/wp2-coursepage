<script lang="ts">
    import { onMount } from "svelte";
    import Rock from "$lib/images/rock.png";
    import Heart from "$lib/images/heart.png";
    import Explosion from "$lib/images/explosion.png"

    let {width, velocity, delay = 0, y, random=0, variant, size=100} :
    {
        width: number; // width of the window, the clickable is moving in.
        velocity: number; //if 0 it's standing
        delay: number; // Starting delay
        y: number; // y-Position in window (absolute)
        random: number; // random vriation of y
        variant: string; // "heart" or "rock"
        size: number; // width and height of clickable in pixels
    }   = $props();

    let objectState = $state("start"); //start, active, explode, respawn
    let duration = Math.floor(width / velocity);

    let image = $derived.by(() => {
            let image = Rock;
            if(objectState ==="explode"){
                image = Explosion;
            }
            else{
                switch (variant) {
                    case "heart":
                        image = Heart;
                        break;
                    case "rock":
                        image = Rock;
                }
            return image;
        }
    });
   

    function lifecycle () {
        objectState = "start";
        y = y + Math.floor(Math.random() * random);
        objectState = "active";
    }

    function explode(){
        objectState = "explode";
        setTimeout(()=>{
            objectState = "start";
        }, 1000 )
    }

    onMount (() => {
        setTimeout(lifecycle, delay);
        setInterval(lifecycle, duration + 6000);
    });
</script>

<img src={image} class="" height={size} width={size}/>