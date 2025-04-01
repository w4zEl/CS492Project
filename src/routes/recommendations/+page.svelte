
<script lang="ts">
	import { onMount } from "svelte";
    let elonHovered = 1; 
    let catHovered = 1; 
    let startTime = 0; 

    const rows = 5;
    const cols = 8;
    
    let images: string[] = [];
    onMount(async () => {
      elonHovered = +(await cookieStore.get('elon'))?.value || 1
      catHovered = +(await cookieStore.get('cat'))?.value || 1
      images = getImages();
    });
    const getImages = () => [...Array(rows * cols)].map(() => Math.random() <  elonHovered/(elonHovered + catHovered) ? '/elon.webp' : '/cat.webp');
</script>
<button   class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
on:click={()=> {
  cookieStore.set('elon', elonHovered)
  cookieStore.set('cat', catHovered)
  images = getImages();
}
  }>Refresh</button>
  <div class="grid grid-cols-8 grid-rows-5 gap-5 p-4">
    {#each images as image
    }
    {@const scrubImage = image}
    <div class="flex justify-center items-center">  
        <img src={scrubImage} alt="recommendation"  class="w-[200px] h-[100px] object-cover" 
        data-scrub={scrubImage}
        on:mouseenter={()=>{startTime = Date.now()}}
        on:mouseleave={() => {
            (image === '/elon.webp') ? elonHovered+=(Date.now() - startTime)/1000:catHovered+=(Date.now() - startTime)/1000
          }
        } 
      />
    </div>
    {/each}
  </div>