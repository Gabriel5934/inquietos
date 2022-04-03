<script lang="ts">
	import Input from '../components/Input.svelte';
	import Button from '../components/Button.svelte';
</script>

<link rel="stylesheet" href="../../styles/fonts.css" />

<div class="root">
	<div class="questions medium">
		<h1>trabalha com automação comercial?</h1>
		<h1>quer inovar na prática?</h1>
	</div>
	<div class="info">
		<p>
			Inquietos&#174; é um clube que ajuda empresas de software do varejo a entregarem inovação na
			prática
		</p>
		<p class="light">cadastre-se para receber informações do nosso lançamento</p>
		<Button text="Conheça os fundadores" type="button" size="small" />
	</div>

	<picture class="logo">
		<source srcset="../../static/images/logo.webp" type="image/webp" />
		<source srcset="../../static/images/logo.png" type="image/png" />
		<img src="../../static/images/logo.png" alt="Inquietos" />
	</picture>

	<Input placeholder="Nome" required />
	<Input placeholder="Email" required />
	<Input placeholder="Empresa (Opcional)" />
	<Input placeholder="Telefone" mask="+{55}(00)00000-0000" required />
	<Button text="Cadastrar" type="submit" />
</div>

<style lang="scss">
	* {
		font-family: 'Manrope', sans-serif;
	}

	:global(html) {
		font-size: 16px;
	}

	@media (max-width: 750px) {
		:global(html) {
			font-size: 12px;
		}
	}

	.root {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 3.15rem 16px;
	}

	.medium {
		font-weight: 500;
	}

	.light {
		font-weight: 300;
	}

	.questions,
	.info {
		text-align: center;
	}

	.questions {
		margin-bottom: 3.15rem;
	}

	.info {
		margin-bottom: 50px;

		p {
			margin-bottom: 15px;
		}
	}

	h1 {
		font-size: 2.25rem;
		margin: 0;
	}

	p {
		margin: 0;
		font-size: 1.5rem;
	}

	img {
		width: 250px;
	}

	form {
		display: inline-block;
		text-align: center;
	}
</style>
