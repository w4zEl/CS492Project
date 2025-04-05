<script lang="ts">
	import '../app.css';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import { fly } from 'svelte/transition';
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	let { children, data } = $props();
	let cookiesConsent = $state(data.cookiesConsent);
</script>

<Sidebar.Provider>
	<AppSidebar />
	<main>
	  <Sidebar.Trigger />
	  {@render children?.()}
	</main>
  </Sidebar.Provider>

{#if !cookiesConsent}
	<div
		class="z-20 fixed bottom-4 left-4 right-4 flex items-center justify-between rounded-lg bg-white p-4 shadow-lg"
		transition:fly={{ y: 200, duration: 2000 }}
	>
		<p class="text-sm" >
			This website uses cookies to enhance your browsing experience. By continuing to use our
			website, you agree to our <a href="/privacy-policy" class="text-blue-600 hover:text-blue-800 transition-colors duration-200 underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-blue-400">Privacy Policy</a>.
		</p>
		<Button
			variant="outline"
			onclick={() =>
				fetch('/api/consent-cookies', { method: 'POST' }).then(() => (cookiesConsent = true))}
			>Accept</Button
		>
	</div>
{/if}
