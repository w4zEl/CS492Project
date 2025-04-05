<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<div class="size-full grid place-items-center">
	<div class="p-4">
		<h1 class="mt-8 text-center text-4xl font-bold">Welcome to the Privacy Awareness Project</h1>
		<p class="mt-4 text-center text-lg">
			This website demonstrates how much data can be collected in real time while you interact with
			it.
		</p>

		<section class="mt-8 flex flex-col items-center">
			<img src="/Detective.png" alt="Privacy Awareness" class="rounded-lg shadow-md" />
			<p class="mt-4 text-center">
				Explore how websites track your data through various interactions. Click below to get started!
			</p>
			<nav class="mt-6 flex gap-4">
				<Button href="/fingerprint">
					Start Your Journey
				</Button>
			</nav>
		</section>
	</div>
</div>
