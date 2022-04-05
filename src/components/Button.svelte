<script lang="ts">
	import { Circle } from 'svelte-loading-spinners';

	export let text = '';
	export let type: 'submit' | 'reset' | 'button' = 'button';
	export let size: 'small' | 'medium' = 'medium';
	export let loading = false;

	const buttonSize = {
		small: 16,
		medium: 24
	};
</script>

<button {type} class={size}>
	{#if loading}
		<Circle size={buttonSize[size]} color="#ffffff" unit="px" duration="1s" />
	{:else}
		{text}
	{/if}
	<slot />
</button>

<style lang="scss">
	button {
		background-color: #00577d;

		border: 0;
		border-radius: 4px;

		font-family: 'Manrope', Sans-serif;
		color: white;

		cursor: pointer;

		transition: all 200ms ease;

		&:hover {
			filter: brightness(85%);
		}
	}

	.small {
		padding: 5.34px 10.67px;
		font-size: 16px;
	}

	.medium {
		padding: 8px 16px;
		font-size: 24px;
	}
</style>
