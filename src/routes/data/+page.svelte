<script lang="ts">
	import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from "$lib/components/ui/table";

	let collectedData = [
		{ name: 'John Doe', email: 'john@example.com', message: 'Hello!' },
		{ name: 'Jane Smith', email: 'jane@example.com', message: 'This is great!' }
	];
</script>

<h1 class="text-3xl font-semibold text-center mt-8">Collected Data</h1>
<p class="text-center mt-2">Here is a summary of the data collected so far.</p>

<Table class="mt-8">
	<TableHead>
		<TableRow>
			<TableHeader>Name</TableHeader>
			<TableHeader>Email</TableHeader>
			<TableHeader>Message</TableHeader>
		</TableRow>
	</TableHead>
	<TableBody>
		{#each collectedData as data}
			<TableRow>
				<TableCell>{data.name}</TableCell>
				<TableCell>{data.email}</TableCell>
				<TableCell>{data.message}</TableCell>
			</TableRow>
		{/each}
	</TableBody>
</Table>
