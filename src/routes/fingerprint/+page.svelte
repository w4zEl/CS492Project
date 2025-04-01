<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import Info from '@lucide/svelte/icons/info';
	import * as Tooltip from '$lib/components/ui/tooltip';
    import FingerprintJS from '@fingerprintjs/fingerprintjs'
	import { onMount } from 'svelte';
	const { data } = $props();
	let fingerprint = $state<string>();
    onMount(() => {
        FingerprintJS.load().then(fp => fp.get()).then(res => {
            console.log(res);
            fingerprint = res.visitorId;
        });
    });
</script>

<div class="p-4">
	<h1 class="my-[0.67em] text-2xl font-bold leading-tight">Browser Fingerprinting</h1>
	<p class="my-[1em] text-base font-normal leading-relaxed">
		When a browser makes a request to a webpage, the website can create a profile, or fingerprint,
		of who is making the request. The data used to make this profile looks harmless, such as the
		user's operating system, system language, time zone, installed fonts, screen resolution, etc.
		However, when you combine hundreds of such metrics together, it is extremely unlikely that 2
		people will have the exact same configurations. Thus, they can be used to uniquely identify a
		user online.
	</p>
	<p class="my-[1em] text-base font-normal leading-relaxed">
		For instance, due to differences in hardware (e.g. GPU) and software (e.g. installed audio
		drivers), different computers will render the exact same font differently (Font fingerprinting),
		play the same audio clip differently (AudioContext fingerprinting), render images differently
		(Canvas and WebGL fingerprinting). In addition, websites can even see what your current battery
		percentage is (battery fingerprinting) and how many microphones you are connected to (media
		fingerprinting). Websites store this data in a database for each user.
	</p>

	<p class="underline">Your device's fingerprint is:</p>

	<div class="font-mono">
        {#if fingerprint}
			{fingerprint}
		{:else}
			<svg
				aria-hidden="true"
				class="inline h-8 w-8 animate-spin fill-green-500 text-gray-200 dark:text-gray-600"
				viewBox="0 0 100 101"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
                <path
					d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
					fill="currentColor"
				/>
                <path
					d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
					fill="currentFill"
				/>
            </svg>
		{/if}
    </div>

	<h2 class="my-[0.83em] text-xl font-semibold leading-snug">Details of your Device</h2>
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head>Property</Table.Head>
				<Table.Head>Value</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			<Table.Row>
				<Table.Cell
					>HTTP Accept <Tooltip.Provider>
						<Tooltip.Root>
							<Tooltip.Trigger><Info class="size-4" /></Tooltip.Trigger>
							<Tooltip.Content>
								<p>This request header declares what content types the browser can understand.</p>
							</Tooltip.Content>
						</Tooltip.Root>
					</Tooltip.Provider></Table.Cell
				>
				<Table.Cell>{data.accept}</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell
					>HTTP Accept Encoding <Tooltip.Provider>
						<Tooltip.Root>
							<Tooltip.Trigger><Info class="size-4" /></Tooltip.Trigger>
							<Tooltip.Content>
								<p>
									This request header indicates the content encodings (e.g. compression algorithms)
									the browser can understand.
								</p>
							</Tooltip.Content>
						</Tooltip.Root>
					</Tooltip.Provider></Table.Cell
				>
				<Table.Cell>{data.acceptEncoding}</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell
					>HTTP Accept Language <Tooltip.Provider>
						<Tooltip.Root>
							<Tooltip.Trigger><Info class="size-4" /></Tooltip.Trigger>
							<Tooltip.Content>
								<p>
									This request header indicates the natural language and locale the user prefers.
								</p>
							</Tooltip.Content>
						</Tooltip.Root>
					</Tooltip.Provider></Table.Cell
				>
				<Table.Cell>{data.acceptLanguage}</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell
					>HTTP Sec-CH-UA <Tooltip.Provider>
						<Tooltip.Root>
							<Tooltip.Trigger><Info class="size-4" /></Tooltip.Trigger>
							<Tooltip.Content>
								<p>
									The user agent client hint request header provides branding and significant
									version information of the user agent (e.g. browser).
								</p>
							</Tooltip.Content>
						</Tooltip.Root>
					</Tooltip.Provider></Table.Cell
				>
				<Table.Cell>{data.secChUa}</Table.Cell>
			</Table.Row>
			{#if typeof navigator !== 'undefined'}
				<Table.Row>
					<Table.Cell
						>User Agent <Tooltip.Provider>
							<Tooltip.Root>
								<Tooltip.Trigger><Info class="size-4" /></Tooltip.Trigger>
								<Tooltip.Content>
									<p>
										A string that represents the currently browser. It is generally considered
										extremely unreliable.
									</p>
								</Tooltip.Content>
							</Tooltip.Root>
						</Tooltip.Provider></Table.Cell
					>
					<Table.Cell>{navigator.userAgent}</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell
						>Platform <Tooltip.Provider>
							<Tooltip.Root>
								<Tooltip.Trigger><Info class="size-4" /></Tooltip.Trigger>
								<Tooltip.Content>
									<p>The platform the current browser is running on.</p>
								</Tooltip.Content>
							</Tooltip.Root>
						</Tooltip.Provider></Table.Cell
					>
					<Table.Cell>{navigator.platform}</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Cookies Enabled</Table.Cell>
					<Table.Cell>{navigator.cookieEnabled}</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Timezone</Table.Cell>
					<Table.Cell
						>UTC{new Date().getTimezoneOffset() < 0 ? '+' : '-'}{new Date().getTimezoneOffset() /
							60}</Table.Cell
					>
				</Table.Row>
				<Table.Row>
					<Table.Cell
						>Hardware concurrency <Tooltip.Provider>
							<Tooltip.Root>
								<Tooltip.Trigger><Info class="size-4" /></Tooltip.Trigger>
								<Tooltip.Content>
									<p>The number of logical processors available on the user's computer.</p>
								</Tooltip.Content>
							</Tooltip.Root>
						</Tooltip.Provider></Table.Cell
					>
					<Table.Cell>{navigator.hardwareConcurrency}</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell
						>Device Memory <Tooltip.Provider>
							<Tooltip.Root>
								<Tooltip.Trigger><Info class="size-4" /></Tooltip.Trigger>
								<Tooltip.Content>
									<p>
										The approximate amount of memory the user's device has, which is imprecise to
										reduce fingerprinting.
									</p>
								</Tooltip.Content>
							</Tooltip.Root>
						</Tooltip.Provider></Table.Cell
					>
					<Table.Cell
						>{'deviceMemory' in navigator ? navigator.deviceMemory + ' GB' : 'unknown'}</Table.Cell
					>
				</Table.Row>
			{/if}
		</Table.Body>
	</Table.Root>
</div>
