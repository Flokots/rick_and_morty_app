<script lang="ts">
	import { page } from '$app/stores';

	let favorites = $page.data.props.favorites || [];
</script>

<section>
	<div class="container">
		<div>
			{#if $page.data.user}
				<h1 class="heading">Favorite Characters</h1>
			{/if}

			{#if $page.data.user.role === 'ADMIN'}
				<form action="/logout" method="POST">
					<button type="submit">Log out</button>
				</form>
			{/if}

			<div class="album py-5 album-color">
				<div class="container">
					<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
						{#each favorites as favorite}
							<div class="col">
								<div class="card shadow-sm rick-and-morty-border rick-and-morty-card">
									<img
										src={favorite.character.image}
										alt={favorite.character.name}
										width="100%"
										height="100%"
									/>
									<div class="card-body">
										<p class="card-text" data-testid="character-name">
											<b>Species: </b>{favorite.character.name}
										</p>
										<p class="card-text" data-testid="character-species">
											<b>Species: </b>{favorite.character.species}
										</p>
										<p class="card-text" data-testid="character-status">
											<b>Status: </b>{favorite.character.status}
										</p>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.heading {
		margin-top: 1em;
		text-align: center;
		background: linear-gradient(90deg, hsl(118, 95%, 45%) 30%, #0abbec 60%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.album-color {
		background-color: rgba(4, 34, 42, 0.958);
	}

	.rick-and-morty-card {
		background-color: rgba(4, 34, 42, 0.958);
		color: white;
	}
</style>
