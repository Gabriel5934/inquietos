<script lang="ts">
	import Input from '../components/Input.svelte';
	import Button from '../components/Button.svelte';

	let formData = {
		name: '',
		email: '',
		company: '',
		phone: ''
	};

	let submitted = false;

	const emailRegex = new RegExp(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);

	$: validEmail = emailRegex.test(formData.email.toLowerCase());
	$: validPhone = formData.phone.length === 17;

	const handleSubmit = () => {
		submitted = true;

		console.log(formData);
	};
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

	<form on:submit|preventDefault={handleSubmit}>
		<Input placeholder="Nome" bind:value={formData.name} error={!formData.name && submitted} />
		<Input
			placeholder="Email"
			bind:value={formData.email}
			error={(!formData.email || !validEmail) && submitted}
			valid={validEmail}
		/>
		<Input placeholder="Empresa (Opcional)" bind:value={formData.company} />
		<Input
			placeholder="Telefone"
			mask="+{55}(00)00000-0000"
			bind:value={formData.phone}
			error={(!formData.phone || !validPhone) && submitted}
			valid={validPhone}
		/>
		<Button text="Cadastrar" type="submit" />
	</form>
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

	@media (max-width: 320px) {
		:global(html) {
			font-size: 10px;
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
