<script lang="ts" context="module">
	import { name } from '../store/user';
	let nameValue: string;

	export async function load() {
		name.subscribe((value) => {
			nameValue = value;
		});

		if (nameValue == '') {
			return {
				status: 301,
				redirect: '/'
			};
		} else {
			return {
				status: 200
			};
		}
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="../../styles/fonts.css" />
</svelte:head>

<div class="root">
	<div>
		<h1>obrigado,<br />{nameValue}</h1>
		<p>fique atento ao seu email para mais informações sobre o clube</p>
	</div>
	<div>
		<picture>
			<source srcset="/images/logoAlt.svg" type="image/svg+xml" />
			<source srcset="/images/logoAlt.webp" type="image/webp" />
			<img src="/images/logoAlt.png" alt="logo" />
		</picture>
	</div>
</div>

<style lang="scss">
	* {
		box-sizing: border-box;
	}

	.root {
		display: flex;
		width: 100%;
		padding: 3rem;
		align-items: center;

		position: absolute;
		top: 50%;
		left: 50%;
		-moz-transform: translateX(-50%) translateY(-50%);
		-webkit-transform: translateX(-50%) translateY(-50%);
		transform: translateX(-50%) translateY(-50%);

		@media (max-width: 1000px) {
			flex-direction: column-reverse;
		}

		div {
			text-align: center;
			width: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}
	}

	img {
		width: 100%;
	}

	h1 {
		font-family: 'Manrope', sans-serif;
		font-size: 4rem;
		margin: 0;
	}

	p {
		font-family: 'Manrope', sans-serif;
		font-size: 2.25rem;
		max-width: 600px;
	}
</style>
