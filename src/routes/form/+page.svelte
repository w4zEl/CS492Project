<script lang="ts">
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

<form on:submit|preventDefault={handleSubmit} class="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-md">
	<label class="block mb-4">
		<span class="text-sm font-medium">Name:</span>
		<input type="text" bind:value={name} required placeholder="Enter your name" class="input-field" />
	</label>
	<label class="block mb-4">
		<span class="text-sm font-medium">Email:</span>
		<input type="email" bind:value={email} required placeholder="Enter your email" class="input-field" />
	</label>
	<label class="block mb-4">
		<span class="text-sm font-medium">Message:</span>
		<textarea bind:value={message} required placeholder="Write your message" class="input-field"></textarea>
	</label>
	<button type="submit" class="btn-primary w-full">Submit</button>
</form>
