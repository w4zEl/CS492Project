<script lang="ts">
	import { Button } from "$lib/components/ui/button";
</script>


<div class="p-4 max-w-3xl mx-auto">
    <h1 class="my-[0.67em] text-2xl font-bold leading-tight">Manage Your Cookies</h1>
  
    <p class="my-[1em] text-base font-normal leading-relaxed">
        If you are creeped out by how certain websites like YouTube or Amazon remember so much about you, remember that the cookies in your browser might be to blame. So here are steps to delete your cookies.    </p>
  
    <h2 class="text-xl font-semibold mt-6">Option 1: Use Incognito Mode</h2>
    <p class="my-[1em] text-base font-normal leading-relaxed">
      Open a new Incognito window in Google Chrome (Ctrl+Shift+N or Command+Shift+N on Mac). In this mode, cookies are automatically cleared at the end of your session, so no cookies are saved when you close the window.
    </p>
    <img src="incognito.png" alt="Incognito mode example" class="my-4"/>
  
    <h2 class="text-xl font-semibold mt-6">Option 2: Reset Cookies in Chrome</h2>
    <p class="my-[1em] text-base font-normal leading-relaxed">
      You can manually delete cookies from specific pages or clear all cookies in Google Chrome:
    </p>
  
    <h3 class="text-lg font-medium mt-4">Delete Cookies for a Specific Page</h3>
    <ol class="list-decimal pl-6 my-[1em] space-y-3 text-base font-normal leading-relaxed">
      <li>Go to the website for which you want to delete cookies.</li>
      <li>Click the icon to the left of the address bar.</li>
      <img src="iconUrl.png" alt="icon img" class="my-4"/>
      <li>Select "Cookies and site data"
        <li>Click "Manage on-device site data" 
        <img src="manageIcon.png" alt="Delete cookies for a specific page" class="my-4"/>
      <li>Click the delete icon to delete the desired cookies. 
        <img src="deleteIcon.png" alt="Delete all cookies" class="my-4"/>
    </ol>
  
    <h3 class="text-lg font-medium mt-4">Delete All Cookies</h3>
    <ol class="list-decimal pl-6 my-[1em] space-y-3 text-base font-normal leading-relaxed">
      <li>Click the three dots (⋮) in the top-right corner of Chrome and select "Settings".</li>
      <li>Navigate to "Privacy and security".</li>
      <li>Click "Delete browsing data".</li>
      <img src="clearAllCookies.png" alt="Delete all cookies" class="my-4"/>
      <li>Check the "Cookies and other site data" option and press "Delete data".</li>
      <img src="deleteAllStuff.png" alt="Delete all cookies" class="my-4"/>
    </ol>

  </div>
  <h2 class="ml-3 text-xl font-semibold mt-6">
    Go back to your feed after deleting cookies. See a difference?
  </h2>

<div class="ml-3">
  <Button>
		<a href="/cookies">Go back</a>
	</Button>
</div>