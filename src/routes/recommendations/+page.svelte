
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

<div class="p-4">
	<h1 class="my-[0.67em] text-2xl font-bold leading-tight">Cookies</h1>
	<p class="my-[1em] text-base font-normal leading-relaxed">
		Cookies are small files stored on your browser by a website, which often includes data such as
    user preferences and settings. Anytime your computer visits the website, these cookies will be 
    automatically sent to them every time. This way, they can know who is visiting their site, as 
    well as record all sorts of details about you!
	</p>
	<p class="my-[1em] text-base font-normal leading-relaxed">
		See below for an example of how an online video platform such as YouTube might use cookies to track 
    your preferences. Hover your mouse over either videos of Elon Musk or cute cats, then click refresh 
    to see how your feed changes. Close your browser and try again. Is it still the same? How did the 
    website remember?
	</p>

</div>

<button   class="ml-3 relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
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

  
  <a href="/deleteCookies" class="inline-block mt-6">
    <button
    class="ml-3 relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white bg-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:bg-indigo-700"    >
      Learn How to Delete Cookies
    </button>
  </a>