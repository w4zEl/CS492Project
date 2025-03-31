<script lang="ts">
	let posts = [
		{ id: 1, title: 'How do websites track users?', content: 'Let’s discuss how websites collect data.' },
		{ id: 2, title: 'Best practices for online privacy', content: 'Share your tips for staying safe online.' }
	];
</script>

<h1 class="text-3xl font-semibold text-center mt-8">Forum</h1>
<p class="text-center mt-2">Join the discussion and share your thoughts.</p>

<section class="mt-8 space-y-6">
	{#each posts as post}
		<article class="p-4 border rounded-lg shadow-md">
			<h2 class="text-xl font-bold">{post.title}</h2>
			<p class="mt-2">{post.content}</p>
			<a href="#" class="text-blue-500 mt-4 inline-block">Read more</a>
		</article>
	{/each}
</section>
