<script lang="ts">
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from "$lib/components/ui/dropdown-menu";
	let { children } = $props();
</script>

<header class="bg-primary text-primary-foreground py-4 px-6 shadow-md">
	<div class="container mx-auto flex justify-between items-center">
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

<footer class="bg-secondary text-secondary-foreground py-4 text-center">
	<p>&copy; 2023 Privacy Awareness Project</p>
</footer>
