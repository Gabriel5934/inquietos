<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	import Button from './Button.svelte';

	export let open = false;

	const handleClose = (event: KeyboardEvent | MouseEvent) => {
		if (event instanceof KeyboardEvent) {
			if (event.key === 'Escape') {
				open = false;
				return;
			} else {
				return;
			}
		} else {
			open = false;
		}
	};
</script>

<svelte:window on:keydown={handleClose} />

{#if open}
	<div in:fade out:fade class="backdrop">
		<div class="container">
			<div transition:fly={{ y: 50, duration: 500 }} class="content">
				<h1>Algo deu errado</h1>
				<p>Tente novamente mais tarde</p>
				<Button on:click={handleClose}>Voltar</Button>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1;

		.container {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			.content {
				background-color: white;
				padding: 1rem 2rem;
				text-align: center;
				border-radius: 8px;
			}
		}
	}
</style>
