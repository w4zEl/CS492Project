<script lang="ts">
	let collectedData = [
		{ name: 'John Doe', email: 'john@example.com', message: 'Hello!' },
		{ name: 'Jane Smith', email: 'jane@example.com', message: 'This is great!' }
	];
</script>

<h1 class="text-3xl font-semibold text-center mt-8">Collected Data</h1>
<p class="text-center mt-2">Here is a summary of the data collected so far.</p>

<table class="table-auto border-collapse border border-gray-300 w-full mt-8">
	<thead>
		<tr class="bg-gray-100">
			<th class="border border-gray-300 px-4 py-2">Name</th>
			<th class="border border-gray-300 px-4 py-2">Email</th>
			<th class="border border-gray-300 px-4 py-2">Message</th>
		</tr>
	</thead>
	<tbody>
		{#each collectedData as data}
			<tr>
				<td class="border border-gray-300 px-4 py-2">{data.name}</td>
				<td class="border border-gray-300 px-4 py-2">{data.email}</td>
				<td class="border border-gray-300 px-4 py-2">{data.message}</td>
			</tr>
		{/each}
	</tbody>
</table>
