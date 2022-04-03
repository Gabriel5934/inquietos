<script lang="ts">
	import { imask } from '@imask/svelte';

	export let placeholder = '';
	export let mask = '';
	export let required = false;

	const options = {
		mask: mask,
		lazy: true
	};
</script>

<input type="text" {placeholder} use:imask={mask ? options : null} {required} />

<style lang="scss">
	input {
		font-size: 20px;
		font-family: 'Manrope', sans-serif;

		width: 26.25rem;
		height: 60px;

		margin: 15px 0;

		border-radius: 4px;
		border: solid 1px #d4d4d8;

		padding: 0 12px;

		display: block;

		&:focus {
			outline-color: #00577d !important;
		}
	}
</style>
