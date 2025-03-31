<script lang="ts">
	import { Input } from "$lib/components/ui/input";
	import { Textarea } from "$lib/components/ui/textarea";
	import { Button } from "$lib/components/ui/button";

	let name = '';
	let email = '';
	let message = '';

	function handleSubmit() {
		console.log({ name, email, message });
		alert('Your data has been collected!');
	}
</script>

<h1 class="text-3xl font-semibold text-center mt-8">Fill Out This Form</h1>
<p class="text-center mt-2">Help us understand how users interact with forms.</p>

<form on:submit|preventDefault={handleSubmit} class="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-md space-y-4">
	<div>
		<label class="block text-sm font-medium mb-1">Name:</label>
		<Input type="text" bind:value={name} required placeholder="Enter your name" />
	</div>
	<div>
		<label class="block text-sm font-medium mb-1">Email:</label>
		<Input type="email" bind:value={email} required placeholder="Enter your email" />
	</div>
	<div>
		<label class="block text-sm font-medium mb-1">Message:</label>
		<Textarea bind:value={message} required placeholder="Write your message" />
	</div>
	<Button type="submit" class="w-full">Submit</Button>
</form>
