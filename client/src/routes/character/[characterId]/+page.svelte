<script>
	export let data;
	const { character } = data;
</script>

<section>
	<div class="profile-section">
		<div class="row">
			<div class="col-md-6 profile-image">
				<img src={character.image} alt={character.name} class="rounded-img" />
			</div>

			<div class="col-md-6">
				<h2 class="profile-heading" data-testid="profile-heading">{character.name}</h2>
				<div class="profile-content">
					<p><b>Status: </b>{character.status}</p>
					<p><b>Species: </b>{character.species}</p>
					<p><b>Gender: </b>{character.gender}</p>
					<p><b>Origin: </b>{character.origin.name}</p>
					<p><b>Location: </b>{character.location.name}</p>
					<p><b>Created: </b>{character.created}</p>
				</div>
			</div>
		</div>
		<div class="d-grid gap-2 col-6 mx-auto">
			<a href="/" class="btn btn-dark" type="button" data-testid="back-button">BACK</a>
		</div>
	</div>
</section>

<style>
	.rounded-img {
		border-radius: 50%;
	}


	.profile-section {
        padding: 5em;
		min-height: 100vh;
		margin: 0;
		background-attachment: fixed;
		background-color: rgba(4, 34, 42, 0.958);
		background-size: 100vw 100vh;
		background-image: radial-gradient(
			50% 50% at 50% 50%,
			rgba(0, 2, 4, 0.958),
			rgba(9, 184, 237, 0) 100%
		);
	}

	.profile-heading {
		font-size: 50px;
		margin-bottom: 30px;
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}

	.profile-content {
		font-size: 18px;
		line-height: 1.8;
	}

	a {
		padding: 14px 40px;
		font-size: 20px;
		margin-top: 0.5em;
		align-items: flex-start;
		background-color: #0abbec;
        border: 0;
        cursor: pointer;
		font-weight: 900;
	}

 
</style>
