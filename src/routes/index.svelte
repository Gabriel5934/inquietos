<script lang="ts">
	import { addDoc, collection } from 'firebase/firestore';
	import { name } from '../store/user';
	import { goto } from '$app/navigation';
	import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
	import { onMount } from 'svelte';

	import Form from '../components/Form.svelte';
	import Input from '../components/Input.svelte';
	import Button from '../components/Button.svelte';
	import Popup from '../components/Popup.svelte';
	import { db, app } from '../firebase';

	onMount(() => {
		initializeAppCheck(app, {
			provider: new ReCaptchaV3Provider('6Ld5NYEfAAAAAN4kuIKFcfdglr8VgoRdhmCWULJx'),
			isTokenAutoRefreshEnabled: true
		});
	});

	let formData = {
		name: '',
		email: '',
		company: '',
		phone: ''
	};

	let submitted = false;
	let loading = false;
	let popupOpen = false;

	const emailRegex = new RegExp(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);

	$: validEmail = emailRegex.test(formData.email.toLowerCase());
	$: validPhone = formData.phone.length === 17;

	const handleSubmit = async () => {
		submitted = true;

		if (validEmail && validPhone && formData.name) {
			popupOpen = false;

			try {
				loading = true;
				await addDoc(collection(db, 'users'), formData);

				name.update(() => formData.name.split(' ')[0]);
				goto('thanks');
			} catch (e) {
				loading = false;
				popupOpen = true;
			}
		}
	};
</script>

<svelte:head>
	<link rel="stylesheet" href="../../styles/fonts.css" />
</svelte:head>

<div class="root">
	<Popup open={popupOpen} />

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
		<Button type="button" size="small"><a href="#founders">Conheça os fundadores</a></Button>
	</div>

	<picture>
		<source srcset="/images/logo.svg" type="image/svg+xml" />
		<source srcset="/images/logo.webp" type="image/webp" />
		<img src="/images/logo.png" alt="logo" />
	</picture>

	<Form on:submit={handleSubmit}>
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
		<Button text="Cadastrar" type="submit" {loading} />
	</Form>

	<div class="founders" id="founders">
		<div class="claudenir">
			<picture>
				<source srcset="/images/claudenir.webp" type="image/webp" />
				<img src="/images/claudenir.jpg" alt="claudenir" />
			</picture>
			<h2>Claudenir Andrade</h2>
			<p>
				Diretor de Tecnologia e Marketing do Grupo Elgin/Bematech<br />
				Diretor de ISV na AFRAC<br />
				Formado em Analise de Sistemas em Madrid <br />
				Segunda Gradução em Marketing pela FGV <br />
				MBA em Gestão de Projetos e inovação com modulos na China e EUA<br />
				Cursou Inovação e Crowdsourcing na Innocentive - Philadelphia<br />
				Regional Director da Microsoft<br />
				Reconhecido MVP Microsoft por 21 vezes consecutivas.<br />
				Escritor de quatro livros de Automação Comercial e C#<br />
				Estuda e trabalha com tecnologia há 27 anos<br />
				Foi responsável pela especificando do protocolo SCU na automação comercial.<br />
				Passagens pela empresa Bematech (1997-2003) e Daruma (2003-2019) onde foi responsável pela criação
				das DLLs e toda a integração tecnológica e a criação dos programas Bematech Software Partner
				e Daruma Developers Community.
			</p>
		</div>
	</div>

	<video controls preload="none" poster="/images/firstframe.png">
		<source src="/videos/ad.webm" type="video/webm" />
		<source src="/videos/ad.mp4" type="video/mp4" />
	</video>
</div>

<style lang="scss">
	* {
		font-family: 'Manrope', sans-serif;
	}

	:global(html) {
		font-size: 16px;
		scroll-behavior: smooth;
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

	a {
		font-family: 'Manrope', Sans-serif;
		color: white;
		text-decoration: none;
	}

	.founders {
		display: flex;
		padding: 2rem 0;
		margin-top: 4rem;
		justify-content: space-evenly;
		width: 100%;
		gap: 2rem;

		@media (max-width: 1000px) {
			flex-direction: column;
			align-items: center;
		}

		div {
			width: 50%;
			text-align: center;

			@media (max-width: 1000px) {
				width: 100%;
				margin: 0 1rem;
			}

			h2 {
				font-size: 3rem;
				margin: 0;
			}

			p {
				font-size: 1rem;
				display: inline-block;
				max-width: 500px;

				@media (max-width: 1000px) {
					max-width: none;
				}
			}

			img {
				border-radius: 100%;
				aspect-ratio: 1 / 1;
				width: 20rem;
				height: 20rem;
				object-fit: cover;
			}
		}
	}

	video {
		width: 80%;
		border: 1px solid #00577d;
		margin-top: 2rem;
	}
</style>
