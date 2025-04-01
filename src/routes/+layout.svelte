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
	let { children, data } = $props();
	let cookiesConsent = $state(data.cookiesConsent);
</script>

<header class="bg-primary px-6 py-4 text-primary-foreground shadow-md">
	<div class="container mx-auto flex items-center justify-between">
		<a href="/" class="text-lg font-bold">Privacy Awareness Project</a>
		<DropdownMenu>
			<DropdownMenuTrigger class="btn-secondary">Menu</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<a href="/">Home</a>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<a href="/form">Form</a>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<a href="/data">Data</a>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<a href="/forum">Forum</a>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	</div>
</header>

<main>
	{@render children()}
</main>

{#if !cookiesConsent}
	<div
		class="fixed bottom-4 left-4 right-4 flex items-center justify-between rounded-lg bg-white p-4 shadow-lg"
		transition:fly={{ y: 200, duration: 2000 }}
	>
		<p class="text-sm">
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

<footer class="bg-secondary py-4 text-center text-secondary-foreground">
	<p>&copy; 2023 Privacy Awareness Project</p>
</footer>
