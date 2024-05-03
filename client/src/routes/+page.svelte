<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { Character, ApiResponse } from '../types';
	import { getCharacters } from '../services/characterService';

	let characters: Character[] = [];
	let pageInfo: ApiResponse['info'] = { count: 0, pages: 0, next: null, prev: null };
	let currentPage = 1;
	let totalPages = 1;
	let errorMessage = '';

	async function loadCharacters(page: number = 1) {
		const response: ApiResponse | string = await getCharacters(page);
		if (typeof response === 'string') {
			errorMessage = response;
		} else {
			characters = response.results;
			pageInfo = response.info;
			currentPage = page;
			totalPages = pageInfo.pages;
			errorMessage = '';
		}
	}

	onMount(() => {
		loadCharacters();
	});

	let searchTerm = '';

	async function searchCharacters() {
		let allCharacters: Character[] = [];
		let allPages = pageInfo.pages;
		let foundCharacters: Character[] = [];

		currentPage = 1;

		for (let i = 1; i <= allPages; i++) {
			const response: ApiResponse | string = await getCharacters(i);
			if (typeof response === 'string') {
				errorMessage = response;
				return;
			} else {
				allCharacters = [...allCharacters, ...response.results];
			}
		}

		foundCharacters = allCharacters.filter((character: Character) =>
			character.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

		if (foundCharacters.length === 0) {
			errorMessage = 'No characters found';
			totalPages = 0;
		} else {
			characters = foundCharacters;
			totalPages = pageInfo.pages;
			errorMessage = '';
		}
	}

	async function goToPage(page: number) {
		await loadCharacters(page);
	}

	function goToCharacter(id: number) {
		goto(`/characters/${id}`);
	}
</script>

<section class="py-5 text-center container">
	<div class="row py-lg-5">
		<div class="col-lg-8 col-md-8 mx-auto">
			<h1 class="rick-and-morty-heading">
				Rick and Morty<span class="rick-morty-heading-secondary">characters</span>
			</h1>
		</div>
	</div>
	<div class="container-fluid">
		<div class="d-flex" role="search">
			<input
				class="form-control me-2 rick-and-morty-border"
				type="text"
				placeholder="Search characters..."
				bind:value={searchTerm}
				on:input={searchCharacters}
			/>
			<button class="btn btn-outline-info" type="submit" on:click={searchCharacters}>Search</button>
		</div>
	</div>
</section>

<div class="album py-5 album-color">
	<div class="container">
		{#if errorMessage}
			<p>{errorMessage}</p>
		{:else}
			<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
				{#each characters as character}
					<div class="col">
						<div class="card shadow-sm rick-and-morty-border">
							<img src={character.image} alt={character.name} width="100%" height="100%" />
							<div class="card-body">
								<p>
									<a
										href={`/character/${character.id}`}
										class="card-text link-warning link-opacity-75-hover link-decorations"
										style="text-decoration: none;"
									>
										<b>Name: </b>{character.name}
									</a>
								</p>
								<p class="card-text" data-testid="character-species">
									<b>Species: </b>{character.species}
								</p>
								<p class="card-text" data-testid="character-status">
									<b>Status: </b>{character.status}
								</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>

	{#if pageInfo.pages > 1}
		<div class="pagination justify-content-center pagination-spacing">
			<button
				disabled={!pageInfo.prev}
				on:click={() => goToPage(currentPage - 1)}
				class="btn btn-outline-info page-button">Previous</button
			>
			<span class="pagination-text" data-testid="pagination-text">
				Page {currentPage} of {totalPages}
			</span>
			<button
				disabled={!pageInfo.next}
				on:click={() => goToPage(currentPage + 1)}
				class="btn btn-outline-info page-button">Next</button
			>
		</div>
	{/if}
</div>

<style>
	.album-color {
		background-color: rgba(4, 34, 42, 0.958);
	}
	.rick-and-morty-heading {
		font-size: 84px;
		font-weight: 700;
		background: linear-gradient(90deg, hsl(118, 95%, 45%) 30%, #0abbec 70%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.rick-morty-heading-secondary {
		font-size: 1.375rem;
		font-weight: 400;
	}

	.rick-and-morty-border {
		border-color: #0abbec;
		margin: 5px;
	}

	.pagination-spacing {
		margin-top: 3em;
		margin-bottom: 2em;
	}

	.pagination-text {
		font-size: 24px;
		padding: 0.5em;
		color: #0abbec;
	}

	.page-button {
		margin: 0.5em;
	}
</style>
