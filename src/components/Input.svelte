<script lang="ts">
	import { imask } from '@imask/svelte';

	export let placeholder = '';
	export let mask = '';
	export let value = '';
	export let error = false;
	export let valid = true;
</script>

<div>
	<input
		type="text"
		{placeholder}
		use:imask={mask
			? {
					mask: mask
			  }
			: null}
		bind:value
		class={error && 'errorBorder'}
	/>
	{#if error}
		<span>{!value || valid ? 'Campo obrigatório' : 'Campo inválido'}</span>
	{/if}
</div>

<style lang="scss">
	div {
		margin: 15px 0;
	}

	input {
		font-size: 20px;
		font-family: 'Manrope', sans-serif;

		width: 26.25rem;
		height: 60px;

		margin-bottom: 10px;

		border-radius: 4px;
		border: solid 1px #d4d4d8;

		padding: 0 12px;

		display: inline;

		box-sizing: border-box;

		&:focus {
			outline-color: #00577d !important;
		}
	}

	span {
		color: #a30000;
		text-align: left;
		display: block;
	}

	.errorBorder {
		border: solid 1px #a30000;
	}

	@media (max-width: 26.25rem) {
		div,
		input {
			width: 100%;
		}
	}
</style>
